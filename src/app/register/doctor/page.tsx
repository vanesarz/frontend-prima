"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterDoctorPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#FFFBF5] min-h-screen text-gray-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FFFBF5] border-b px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black text-[#FF6B6B]">
          MediCare+
        </h1>

        <nav className="hidden md:flex gap-8 font-semibold">
          <Link href="/">Beranda</Link>
          <Link href="/directory">Cari Dokter</Link>
          <Link href="/consultation">AI Asisten</Link>
        </nav>

        <Link
          href="/login"
          className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full text-sm"
        >
          Masuk
        </Link>
      </header>

      {/* MAIN */}
      <main className="py-20 px-8 max-w-7xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-2">
            Bergabung sebagai Dokter Partner 🧑‍⚕️
          </h1>
          <p className="text-gray-500">
            Bantu kami mewujudkan kesehatan yang lebih baik
          </p>
        </div>

        {/* CONTAINER */}
        <div className="max-w-4xl mx-auto bg-white border rounded-2xl p-8 shadow-sm">
          {/* PROGRESS */}
          <div className="mb-10">
            <div className="flex justify-between text-xs mb-2 px-1">
              <span className="font-bold text-[#4ECDC4]">
                Account
              </span>
              <span className="text-gray-400">Credentials</span>
              <span className="text-gray-400">Practice</span>
            </div>

            <div className="h-2 w-full bg-gray-100 rounded-full">
              <div className="h-full w-1/3 bg-[#4ECDC4] rounded-full" />
            </div>
          </div>

          {/* FORM */}
          <form className="grid md:grid-cols-12 gap-8">
            {/* LEFT */}
            <div className="md:col-span-4 space-y-6">
              <div className="p-4 bg-[#4ECDC4]/10 rounded-xl">
                <h3 className="font-bold text-[#4ECDC4] mb-1">
                  Step 1
                </h3>
                <p className="text-sm text-gray-600">
                  Buat identitas digital kamu di MediCare+
                </p>
              </div>

              <div className="rounded-xl overflow-hidden h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop"
                  alt="Dokter profesional"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-8 space-y-6">
              {/* NAME */}
              <div>
                <label className="text-sm font-semibold">
                  Nama Lengkap & Gelar
                </label>
                <input
                  type="text"
                  placeholder="dr. Jaka Perkasa, Sp.A"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:border-[#4ECDC4]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-semibold">
                  Email Profesional
                </label>
                <input
                  type="email"
                  placeholder="jaka.perkasa@hospital.com"
                  className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:border-[#4ECDC4]"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm font-semibold">
                  Kata Sandi
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:border-[#4ECDC4]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* ACTION */}
              <div className="flex justify-end gap-4 pt-4">
                <Link
                  href="/register"
                  className="text-gray-400 font-semibold"
                >
                  Batal
                </Link>

                <button
                  type="submit"
                  className="bg-[#4ECDC4] text-white px-6 py-3 rounded-full font-semibold"
                >
                  Selanjutnya →
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* TRUST */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>✔ Terverifikasi</span>
          <span>🔒 Aman</span>
          <span>👨‍⚕️ Komunitas Dokter</span>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t mt-20 px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-bold text-[#4ECDC4]">
              MediCare+
            </h3>
            <p className="text-sm text-gray-400">
              © 2026 MediCare+
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#">Tentang</Link>
            <Link href="#">Privasi</Link>
            <Link href="#">Bantuan</Link>
            <Link href="#">Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}