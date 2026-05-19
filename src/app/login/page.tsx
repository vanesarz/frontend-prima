"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5] overflow-hidden relative">
      <Navbar />

      {/* BG BLUR */}
      <div className="fixed top-[-10%] left-[-5%] w-100 h-100[#FF6B6B]/10 rounded-full blur-[100px] -z-10" />

      <div className="fixed bottom-[-10%] right-[-5%] w-100 h-100 bg-[#4ECDC4]/10 rounded-full blur-[100px] -z-10" />

      {/* CONTENT */}
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-8 py-16">
        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            Pilih peranmu untuk memulai perjalanan kesehatan digital yang lebih
            nyaman ✨
          </p>
        </div>

        {/* CARD CONTAINER */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PASIEN */}
          <Link
            href="/login/pasien"
            className="
              group
              relative
              overflow-hidden
              rounded-4xl
              border
              border-[#F0EAE0]
              bg-white/80
              backdrop-blur-md
              p-10
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            {/* TOP BAR */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF6B6B]" />

            {/* IMAGE */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-[#FFE4E1] flex items-center justify-center">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI2xFvTK554zln5kQ92qNBxUflbSFMnWcV36kBJsF5_rmC5McM6A8j2LOoQE3MPN8_r9QAV-5apq0H-VuQulWS_5rbzIS6akBMIqVg9S0-vgLDoTQoY8p0UdZNNDPcwtDYHUdactZMLxAHDIzI7dPWdFKZZrsOlCrSQ3GbfE9B1HNucTlpJXfPghuUculwa7dNcDJDqMqqrvEbijWjdDj5yY1WL3nCz37IDYP5PjyoyfVGOv5kUqaW0PX61ShtSahKonkd35aqiZ7s"
                alt="Pasien"
                width={100}
                height={100}
                unoptimized
                className="object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="text-center">
              <h2 className="text-3xl font-black text-gray-800 mb-4">
                Masuk sebagai Pasien
              </h2>

              <p className="text-gray-500 leading-relaxed mb-8">
                Konsultasi dengan dokter ahli, pantau rekam medis, dan akses AI
                kesehatan yang siap bantu kapan aja.
              </p>

              <div
                className="
                  w-full
                  py-4
                  rounded-full
                  bg-[#FF6B6B]
                  text-white
                  font-bold
                  transition
                  group-hover:scale-[1.02]
                "
              >
                LANJUT SEBAGAI PASIEN
              </div>
            </div>
          </Link>

          {/* DOKTER */}
          <Link
            href="/login/doctor"
            className="
              group
              relative
              overflow-hidden
              rounded-4xl
              border
              border-[#F0EAE0]
              bg-white/80
              backdrop-blur-md
              p-10
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            {/* TOP BAR */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#4ECDC4]" />

            {/* IMAGE */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-[#DDF5F3] flex items-center justify-center">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBvDq1IWDyCHHIWBMt-3UNg_7Ykk2EXvcJlIdhPYqYeRUzQ5JW_MhUwE1vGInBYLvY_iFzfcHJQcTddr1nFT8EXFX-3ONoodPTGaWIKu7O6IiZLdymb2QQM-0mb0GoWliXI9iSNK_-FoDxCIyXIrQleSAWxRnRDjhlMHkoqcgllU_YE03RoTXxp9EuvITTL5B7RJQ9EbHE5nv-Y1ji2i3Xs7dA3p5PRovru8TAHu6dQ84z8MsnhfiMzNdLVCNu6yaWP0bA-gm_zw5s"
                alt="Dokter"
                width={100}
                height={100}
                unoptimized
                className="object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="text-center">
              <h2 className="text-3xl font-black text-gray-800 mb-4">
                Masuk sebagai Dokter
              </h2>

              <p className="text-gray-500 leading-relaxed mb-8">
                Kelola konsultasi pasien, jadwal praktik, dan berikan pelayanan
                kesehatan modern bersama PRIMA.
              </p>

              <div
                className="
                  w-full
                  py-4
                  rounded-full
                  bg-[#4ECDC4]
                  text-white
                  font-bold
                  transition
                  group-hover:scale-[1.02]
                "
              >
                LANJUT SEBAGAI DOKTER
              </div>
            </div>
          </Link>
        </div>

        {/* FOOTER */}
        <div className="mt-14 text-center">
          <Link
            href="/register"
            className="font-bold text-[#FF6B6B] hover:underline"
          >
            Belum punya akun? Daftar di sini
          </Link>

          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400">
            <Link href="#">Bantuan</Link>
            <Link href="#">Privasi</Link>
            <Link href="#">Kontak</Link>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            © 2026 PRIMA. Playful Healthcare.
          </p>
        </div>
      </div>
    </main>
  );
}