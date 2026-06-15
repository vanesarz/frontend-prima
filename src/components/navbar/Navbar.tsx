"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Navigation from "./Navigation";
import Notification from "./Notification";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

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

        <Navigation />

        <div className="flex items-center gap-5">
          <Notification />

          <div className="hidden md:block">
            <UserMenu />
          </div>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          <Link
            href="/home"
            className="block py-2"
          >
            Beranda
          </Link>

          <Link
            href="/directory"
            className="block py-2"
          >
            Cari Dokter
          </Link>

          <Link
            href="/records"
            className="block py-2"
          >
            Rekam Medis
          </Link>

          <Link
            href="/ai-asisten"
            className="block py-2"
          >
            AI Asisten
          </Link>

          <UserMenu />
        </div>
      )}
    </header>
  );
}