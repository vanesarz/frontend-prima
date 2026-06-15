"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Beranda", path: "/home" },
  { name: "Cari Dokter", path: "/directory" },
  { name: "Rekam Medis", path: "/records" },
  { name: "AI Asisten", path: "/ai-asisten" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
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

            {active && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FF6B6B] rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}