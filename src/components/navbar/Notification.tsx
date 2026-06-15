"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  useState,
  useEffect,
  useRef,
} from "react";

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function Notification() {
  const router = useRouter();

  const [openNotification, setOpenNotification] =
    useState(false);

  const [notifications, setNotifications] =
    useState<NotificationItem[]>([]);

  const [unreadCount, setUnreadCount] =
    useState(0);

  const [loadingNotif, setLoadingNotif] =
    useState(false);

  const notificationRef =
    useRef<HTMLDivElement>(null);

  const fetchNotifications = async () => {
    try {
      setLoadingNotif(true);

      const userId =
        localStorage.getItem("user_id");

      if (!userId) return;

      const response = await fetch(
        `https://backend-prima.vercel.app/notifications/${userId}?limit=10&offset=0`
      );

      const result = await response.json();

      setNotifications(
        result.notifications || []
      );

      setUnreadCount(
        result.unread_count || 0
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingNotif(false);
    }
  };

  const markAsRead = async (
    notificationId: number
  ) => {
    try {
      await fetch(
        `https://backend-prima.vercel.app/notifications/${notificationId}/read`,
        {
          method: "PATCH",
        }
      );

      fetchNotifications();
    } catch (error) {
      console.error(error);
    }
  };

  const markAllAsRead = async () => {
    try {
      const userId =
        localStorage.getItem("user_id");

      if (!userId) return;

      await fetch(
        `https://backend-prima.vercel.app/notifications/${userId}/read-all`,
        {
          method: "PATCH",
        }
      );

      fetchNotifications();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNotificationClick =
    async (
      notification: NotificationItem
    ) => {
      await markAsRead(notification.id);

      router.push(
        `/notifications/${notification.id}`
      );
    };

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(
          event.target as Node
        )
      ) {
        setOpenNotification(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  useEffect(() => {
    if (!openNotification) return;

    const loadNotifications = async () => {
      await fetchNotifications();
    };

    void loadNotifications();
  }, [openNotification]);

  return (
    <div
      ref={notificationRef}
      className="relative"
    >
      <button
        onClick={() =>
          setOpenNotification(
            !openNotification
          )
        }
        className="
          relative
          w-11
          h-11
          rounded-full
          hover:bg-[#FFF0EF]
          transition
          flex
          items-center
          justify-center
        "
      >
        <Bell
          size={22}
          className="text-[#584140]"
        />

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              min-w-5
              h-5
              px-1
              rounded-full
              bg-[#FF6B6B]
              text-white
              text-[10px]
              font-bold
              flex
              items-center
              justify-center
            "
          >
            {unreadCount}
          </span>
        )}
      </button>

      {openNotification && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-95
            bg-white
            border
            border-[#F0EAE0]
            rounded-4xl
            shadow-2xl
            overflow-hidden
            z-50
          "
        >
          <div
            className="
              px-6
              py-5
              border-b
              border-[#F5E6E4]
              flex
              items-center
              justify-between
            "
          >
            <div>
              <h3 className="font-black text-lg text-[#584140]">
                Notifikasi
              </h3>

              <p className="text-sm text-gray-500">
                {unreadCount} belum dibaca
              </p>
            </div>

            <button
              onClick={markAllAsRead}
              className="
                text-sm
                font-semibold
                text-[#4ECDC4]
                hover:underline
              "
            >
              Tandai semua
            </button>
          </div>

          <div className="max-h-105 overflow-y-auto">
            {loadingNotif ? (
              <div className="p-6 text-center text-gray-500">
                Memuat notifikasi...
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                Belum ada notifikasi
              </div>
            ) : (
              notifications.map(
                (notification) => (
                  <button
                    key={notification.id}
                    onClick={() =>
                      handleNotificationClick(
                        notification
                      )
                    }
                    className="
                      w-full
                      text-left
                      px-6
                      py-5
                      border-b
                      border-[#F7F1EF]
                      hover:bg-[#FFF8F6]
                    "
                  >
                    <h4 className="font-bold">
                      {notification.title}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      {notification.message}
                    </p>
                  </button>
                )
              )
            )}
          </div>

          <div className="p-4 bg-[#FFFBF8]">
            <Link
              href="/notifications"
              className="
                block
                text-center
                text-[#FF6B6B]
                font-bold
              "
            >
              Lihat Semua Notifikasi
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}