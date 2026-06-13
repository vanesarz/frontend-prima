"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Bell } from "lucide-react";

const menu = [
  { name: "Beranda", path: "/home" },
  { name: "Cari Dokter", path: "/directory" },
  { name: "Rekam Medis", path: "/records" },
  { name: "AI Asisten", path: "/ai-asisten" },
];

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const [openNotification, setOpenNotification] =
    useState(false);

  const [notifications, setNotifications] =
    useState<NotificationItem[]>([]);

  const [unreadCount, setUnreadCount] =
    useState(0);

  const [loadingNotif, setLoadingNotif] =
    useState(false);

  const fetchNotifications = async () => {
    try {
      setLoadingNotif(true);

      const userId = localStorage.getItem("user_id");

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

  const markAllAsRead =
  async () => {
    try {
      const userId =
        localStorage.getItem(
          "user_id"
        );

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

  const handleNotificationClick = async (
    notification: NotificationItem
  ) => {
    await markAsRead(notification.id);

    router.push(
      `/notifications/${notification.id}`
    );
  };

  const notificationRef =
  useRef<HTMLDivElement>(null);

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

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    if (!openNotification) return;

    const loadNotifications = async () => {
      await fetchNotifications();
    };

    void loadNotifications();
  }, [openNotification]);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFBF5] border-b px-6 md:px-10 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LOGO */}
        <Link href="/">
          <div className="relative w-30 h-12 overflow-hidden">
            <Image
              src="/logo-prima.svg"
              alt="PRIMA Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-semibold">
          {menu.map((item) => {
            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative pb-1 transition ${
                  active
                    ? "text-[#FF6B6B]"
                    : "text-gray-600 hover:text-[#FF6B6B]"
                }`}
              >
                {item.name}

                {/* underline */}
                {active && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF6B6B] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* NOTIFICATION */}
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

            {/* PANEL */}
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
                {/* HEADER */}
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

                {/* LIST */}
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
                            transition
                          "
                        >
                          <div className="flex gap-3">
                            {!notification.is_read && (
                              <div
                                className="
                                  mt-2
                                  w-2
                                  h-2
                                  rounded-full
                                  bg-[#FF6B6B]
                                  shrink-0
                                "
                              />
                            )}

                            <div className="flex-1">
                              <h4
                                className={`
                                  font-bold
                                  ${
                                    notification.is_read
                                      ? "text-gray-700"
                                      : "text-[#584140]"
                                  }
                                `}
                              >
                                {notification.title}
                              </h4>

                              <p className="text-sm text-gray-500 mt-1">
                                {notification.message}
                              </p>

                              <p className="text-xs text-gray-400 mt-2">
                                {notification.created_at
                                  ? new Date(
                                      notification.created_at
                                    ).toLocaleString("id-ID")
                                  : "-"}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))
                    )}
                </div>

                {/* FOOTER */}
                <div
                  className="
                    p-4
                    bg-[#FFFBF8]
                  "
                >
                  <Link
                    href="/notifications"
                    className="
                      block
                      text-center
                      text-[#FF6B6B]
                      font-bold
                      hover:underline
                    "
                  >
                    Lihat Semua Notifikasi
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:block">
            <Link
              href="/register"
              className="border px-4 py-2 rounded-full text-[#FF6B6B] hover:bg-[#FFE4E1] transition"
            >
              Masuk / Daftar
            </Link>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700"
            >
              {item.name}
            </Link>
          ))}

          <button className="w-full mt-2 border py-2 rounded-full text-[#FF6B6B]">
            Masuk / Daftar
          </button>
        </div>
      )}
    </header>
  );
}