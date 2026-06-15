"use client";

import { Navbar} from '@/components';
import Image from "next/image";
import Link from "next/link";
import GuestOnly from "@/components/auth/GuestOnly";

export default function RegisterPage() {  
  return (
    <GuestOnly>
      <div className="bg-[#FFFBF5] min-h-screen text-gray-800">
        <Navbar />

        {/* MAIN */}
        <main className="max-w-7xl mx-auto px-8 py-20 flex flex-col items-center text-center">
          {/* HEADER */}
          <div className="mb-16 space-y-4 max-w-xl">
            <h1 className="text-4xl font-extrabold">
              Mulai perjalanan sehatmu! ✨
            </h1>
            <p className="text-gray-500">
              Pilih cara kamu bergabung dengan PRIMA
            </p>
          </div>

          {/* CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* PASIEN */}
            <Link
              href="/register/pasien"
              className="group relative flex flex-col items-center text-center p-10 bg-white border-2 border-gray-200 rounded-2xl transition hover:border-[#FF6B6B] hover:shadow-lg"
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center bg-[#FF6B6B]/10 rounded-full group-hover:scale-110 transition">
                <span className="text-5xl">🙋‍♂️</span>
              </div>

              <h3 className="text-xl font-bold mb-2">
                Daftar sebagai Pasien
              </h3>

              <p className="text-gray-500">
                Cari dokter, tanya AI, dan kelola rekam medismu dengan mudah.
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B6B] scale-x-0 group-hover:scale-x-100 transition origin-left rounded-b-2xl" />
            </Link>

            {/* DOCTOR */}
            <Link
              href="/register/doctor"
              className="group relative flex flex-col items-center text-center p-10 bg-white border-2 border-gray-200 rounded-2xl transition hover:border-[#4ECDC4] hover:shadow-lg"
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center bg-[#4ECDC4]/20 rounded-full group-hover:scale-110 transition">
                <span className="text-5xl">🩺</span>
              </div>

              <h3 className="text-xl font-bold mb-2">
                Daftar sebagai Dokter
              </h3>

              <p className="text-gray-500">
                Bantu pasien, kelola jadwal konsultasi, dan resep digital.
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4ECDC4] scale-x-0 group-hover:scale-x-100 transition origin-left rounded-b-2xl" />
            </Link>
          </div>

          {/* LOGIN */}
          <div className="mt-16">
            <p className="text-gray-500">
              Sudah punya akun?
              <Link
                href="/login"
                className="ml-1 font-bold text-[#FF6B6B] hover:underline"
              >
                Masuk di sini
              </Link>
            </p>
          </div>

          {/* IMAGE */}
          <div className="mt-12 opacity-50">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
              alt="Ilustrasi kesehatan digital"
              width={400}
              height={300}
              className="rounded-xl grayscale contrast-125"
            />
          </div>
        </main>

        {/* FOOTER */}
        <footer className="border-t bg-[#FFFBF5] px-8 py-10 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-bold text-[#4ECDC4]">
                PRIMA
              </h3>
              <p className="text-sm text-gray-400">
                © 2026 PRIMA
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
    </GuestOnly>
  );
}