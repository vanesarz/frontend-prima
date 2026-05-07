"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  { name: "Beranda", path: "/dashboard" },
  { name: "Cari Dokter", path: "/directory" },
  { name: "Rekam Medis", path: "/records" },
  { name: "AI Asisten", path: "/consultation" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFBF5] border-b px-6 md:px-10 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LOGO */}
        <h1 className="text-2xl font-black text-[#FF6B6B]">
          MediCare+
        </h1>

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
        <div className="hidden md:block">
          <Link
            href="/register"
            className="border px-4 py-2 rounded-full text-[#FF6B6B] hover:bg-[#FFE4E1] transition"
          >
            Masuk / Daftar
          </Link>
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