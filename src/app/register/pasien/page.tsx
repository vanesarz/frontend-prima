"use client";

import Image from "next/image";
import { useState } from "react";

export default function RegisterPasienPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-[#FFFBF5] flex flex-col">
      {/* NAVBAR */}
      <header className="border-b border-[#F0EAE0] sticky top-0 bg-[#FFFBF5] z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-rose-500">
            MediCare+
          </div>

          <nav className="hidden md:flex gap-8">
            <a className="text-slate-600 hover:text-rose-400">Beranda</a>
            <a className="text-slate-600 hover:text-rose-400">Cari Dokter</a>
            <a className="text-slate-600 hover:text-rose-400">Beranda Saya</a>
            <a className="text-slate-600 hover:text-rose-400">Rekam Medis</a>
            <a className="text-slate-600 hover:text-rose-400">AI Asisten</a>
          </nav>

          <button className="bg-[#ff6b6b] text-white px-6 py-2 rounded-full font-semibold">
            Masuk / Daftar
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <div className="grow flex items-center justify-center p-8">
        <div className="w-full max-w-2xl bg-white border border-[#F0EAE0] rounded-xl p-8 shadow-sm">

          {/* PROGRESS */}
          <div className="mb-10">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-rose-500 font-semibold">
                Langkah 1: Akun
              </span>
              <span className="text-gray-400">
                Langkah 2: Profil
              </span>
            </div>

            <div className="w-full bg-[#F0EAE0] h-3 rounded-full overflow-hidden">
              <div
                className={`h-full bg-[#ff6b6b] transition-all duration-500 ${
                  step === 1 ? "w-1/2" : "w-full"
                }`}
              />
            </div>
          </div>

          {/* HEADER */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              Halo, Calon Pasien Hebat 👋
            </h1>
            <p className="text-gray-500">
              Satu langkah lagi buat akses kesehatan tanpa ribet
            </p>
          </div>

          {/* FORM */}
          {step === 1 && (
            <div className="space-y-6">
              <FloatingInput label="Nama Lengkap" type="text" />
              <FloatingInput label="Alamat Email" type="email" />
              <FloatingInput label="Kata Sandi" type="password" />

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#ff6b6b] text-white px-10 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90"
                >
                  Lanjut →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FloatingInput label="Tanggal Lahir" type="date" />
                <FloatingInput label="No Telepon" type="tel" />
              </div>

              <FloatingTextarea label="Alamat Lengkap" />

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="border px-8 py-3 rounded-full"
                >
                  ← Kembali
                </button>

                <button className="bg-teal-500 text-white px-8 py-3 rounded-full">
                  Selesaikan
                </button>
              </div>
            </div>
          )}

          {/* IMAGE */}
          <div className="mt-10 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800"
              alt="health illustration"
              width={400}
              height={300}
              className="rounded-lg max-w-sm w-full opacity-80"
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#F0EAE0] py-8 text-center text-sm text-gray-500">
        © 2026 MediCare+. Playful Healthcare.
      </footer>
    </main>
  );
}

/* =========================
   COMPONENTS
========================= */

function FloatingInput({
  label,
  type,
}: {
  label: string;
  type: string;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder=" "
        className="peer w-full h-13 px-4 border-2 border-[#F0EAE0] rounded-md focus:border-teal-400 outline-none"
      />

      <label
        className="
          absolute left-4 top-4 text-gray-400 text-sm transition-all pointer-events-none
          
          peer-focus:opacity-0
          peer-not-placeholder-shown:opacity-0
        "
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label }: { label: string }) {
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const el = e.currentTarget;

    el.style.height = "auto"; // reset dulu
    el.style.height = el.scrollHeight + "px";

    // batas max 5 baris
    const lineHeight = 24; // kira2 (sesuai text size kamu)
    const maxHeight = lineHeight * 5;

    if (el.scrollHeight > maxHeight) {
      el.style.height = maxHeight + "px";
      el.style.overflowY = "auto";
    } else {
      el.style.overflowY = "hidden";
    }
  };

  return (
    <div className="relative">
      <textarea
        placeholder=" "
        rows={1}
        onInput={handleInput}
        className="peer w-full p-4 border-2 border-[#F0EAE0] rounded-md focus:border-teal-400 outline-none resize-none overflow-hidden"
      />

      <label
        className="
          absolute left-4 top-4 text-gray-400 text-sm transition-all pointer-events-none
          peer-focus:opacity-0
          peer-not-placeholder-shown:opacity-0
        "
      >
        {label}
      </label>
    </div>
  );
}