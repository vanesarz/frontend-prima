"use client";

import Link from "next/link";
import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] =
    useState(false);

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const name =
    typeof window !== "undefined"
      ? localStorage.getItem(
          "user_name"
        )
      : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem(
      "user_id"
    );
    localStorage.removeItem(
      "user_name"
    );
    localStorage.removeItem("role");

    document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    document.cookie =
      "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href =
      "/login";
  };

  if (!token) {
    return (
      <Link
        href="/login"
        className="
          border
          px-4
          py-2
          rounded-full
          text-[#FF6B6B]
          hover:bg-[#FFE4E1]
          transition
        "
      >
        Masuk / Daftar
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-3
          px-3
          py-2
          rounded-full
          bg-[#FFF0EF]
          hover:bg-[#fddbd9]
          transition
        "
      >
        {/* Avatar */}
        <div
          className="
            w-9
            h-9
            rounded-full
            bg-[#FF6B6B]
            text-white
            flex
            items-center
            justify-center
            font-bold
            text-sm
            shrink-0
          "
        >
          {name?.charAt(0).toUpperCase()}
        </div>

        {/* Username */}
        <span
          className="
            max-w-32
            truncate
            font-semibold
            text-[#584140]
          "
        >
          {name}
        </span>

        {/* Arrow */}
        <svg
          className={`
            w-4
            h-4
            text-gray-500
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-48
            bg-white
            border
            border-[#F0EAE0]
            rounded-2xl
            shadow-lg
            overflow-hidden
            z-50
          "
        >
          <Link
            href="/profile"
            className="
              block
              px-4
              py-3
              hover:bg-gray-50
            "
          >
            Profil Saya
          </Link>

          <Link
            href="/settings"
            className="
              block
              px-4
              py-3
              hover:bg-gray-50
            "
          >
            Pengaturan
          </Link>

          <button
            onClick={handleLogout}
            className="
              w-full
              text-left
              px-4
              py-3
              text-red-500
              hover:bg-red-50
            "
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}