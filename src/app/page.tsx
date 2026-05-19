"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { useEffect } from "react";
import { Search } from "lucide-react";
import {
  Bot,
  Video,
  Pill,
} from "lucide-react";

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#FFFBF5] text-gray-800 overflow-x-hidden">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="px-8 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT */}
          <div className="flex-1 space-y-6 fade-up opacity-0 translate-y-6 transition duration-700">
            <div className="inline-block bg-[#FFE4E1] text-[#FF6B6B] text-sm px-4 py-1 rounded-full font-medium">
              ✨ Kesehatan digital #1 buat anak muda
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Jaga{" "}
              <span className="text-[#FF6B6B]">kesehatanmu</span>, <br />
              mulai dari{" "}
              <span className="text-[#4ECDC4]">sini</span> 🌱
            </h1>

            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Chat dokter, tebus resep, booking janji temu, sampai konsultasi
              AI— semua beres dalam satu aplikasi.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/directory"
                className="bg-[#FF6B6B] hover:opacity-90 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
              >
                <Search size={18} />
                Cari Dokter
              </Link>

              <Link
                href="/consultation"
                className="border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FFF0EE] px-6 py-3 rounded-full transition"
              >
                ✨ Tanya AI
              </Link>
            </div>

            {/* SOCIAL PROOF */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <Image
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user1"
                  width={36}
                  height={36}
                  unoptimized
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://i.pravatar.cc/40?img=2"
                  alt="user2"
                  width={36}
                  height={36}
                  unoptimized
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://i.pravatar.cc/40?img=3"
                  alt="user3"
                  width={36}
                  height={36}
                  unoptimized
                  className="rounded-full border-2 border-white"
                />

                <div className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold">
                  +2k
                </div>
              </div>

              <p className="text-sm text-gray-500">
                Bergabung dengan 24.500+ Gen-Z hari ini
              </p>
            </div>

            <p className="text-sm italic text-gray-400">
              &quot;Aplikasi ini beneran life-saver banget!&quot;
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex-1 relative fade-up opacity-0 translate-y-6 transition duration-700">
            {/* GLOW */}
            <div className="absolute inset-0 bg-linear-to-br from-[#FF6B6B] to-[#4ECDC4] opacity-20 blur-3xl rounded-full animate-pulse" />

            {/* IMAGE */}
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1581090700227-1e8b63f8c5b3"
                alt="Healthcare"
                width={500}
                height={500}
                unoptimized
                className="rounded-4xl shadow-2xl object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 ml bg-white p-4 rounded-2xl shadow-xl w-56 animate-bounceSlow">
              <p className="text-xs text-gray-500 mb-1">
                PIRMA AI • Online
              </p>

              <p className="text-sm text-gray-700">
                Halo! Ada keluhan apa hari ini?
              </p>

              <div className="mt-2 bg-[#FF6B6B] text-white text-xs px-3 py-1 rounded-full inline-block">
                Kepala agak pusing nih...
              </div>
            </div>

            {/* BADGES */}
            <div className="absolute top-4 right-0 bg-white px-4 py-2 rounded-full shadow text-xs">
              ⚡ Respons {"<"} 5 menit
            </div>

            <div className="absolute bottom-10 right-0 bg-white px-4 py-2 rounded-full shadow text-xs">
              💚 4.9/5 Rating
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24 px-8 bg-[linear-gradient(to_bottom,rgba(255,251,245,0)_0%,#FFFBF5_18%,#FFFBF5_100%),linear-gradient(to_right,#FFB3B3,#BFEFEB,#FFD6A5)]">
          <div className="max-w-5xl mx-auto fade-up opacity-0 transition duration-700">
            <h2 className="text-4xl font-black text-center mb-16">
              Pernah ngerasa gini? 🤔
            </h2>

            <div className="space-y-12 text-lg text-gray-600">
              <div className="flex gap-6">
                <span className="text-[#FF6B6B] text-5xl leading-none">
                  “
                </span>

                <p>
                  Mau ke dokter tapi males banget antre berjam-jam di ruang
                  tunggu yang dingin.
                </p>
              </div>

              <div className="flex gap-6">
                <span className="text-[#4ECDC4] text-5xl leading-none">
                  “
                </span>

                <p>
                  Bingung baca resep dokter yang tulisannya kayak sandi rumput,
                  dan lupa kapan aja harus minum obat.
                </p>
              </div>

              <div className="flex gap-6">
                <span className="text-pink-300 text-5xl leading-none">
                  “
                </span>

                <p>
                  Cari info kesehatan di internet malah bikin overthinking
                  karena diagnosisnya selalu serem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-8 bg-linear-to-b from-transparent to-[#f7fcfc]">
          <div className="max-w-6xl mx-auto text-center fade-up opacity-0 translate-y-6 transition duration-700">
            <h2 className="text-5xl font-black mb-4">
              Gampang Banget Pakainya ✨
            </h2>

            <p className="text-gray-500 text-lg mb-24">
              Tiga langkah simpel untuk sehat maksimal tanpa drama.
            </p>

            <div className="grid md:grid-cols-3 gap-10 relative">
              {/* LINE */}
              <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-linear-to-r from-[#FFB3B3] via-[#BFEFEB] to-[#FFD6A5]" />

              {/* STEP 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#FFECEC] flex items-center justify-center text-3xl mb-8 z-10">
                  <Bot size={34} className="text-[#FF6B6B]" strokeWidth={2.2} />
                </div>

                <h3 className="text-2xl font-extrabold mb-4">
                  1. Tanya AI Dulu
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Ceritain keluhanmu ke asisten AI kami untuk dapat perkiraan
                  awal dan rekomendasi dokter yang tepat.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#EAF9F7] flex items-center justify-center text-3xl mb-8 z-10">
                  <Video size={34} className="text-[#4ECDC4]" strokeWidth={2.2} />
                </div>

                <h3 className="text-2xl font-extrabold mb-4">
                  2. Konsultasi Santai
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Pilih chat, voice, atau video call dengan dokter ahli. Gak
                  perlu canggung, dokter kami ramah semua.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#FFF4E8] flex items-center justify-center text-3xl mb-8 z-10">
                  <Pill size={34} className="text-[#FFD6A5]" strokeWidth={2.2} />
                </div>

                <h3 className="text-2xl font-extrabold mb-4">
                  3. Obat Diantar
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Tebus resep digital langsung dari aplikasi, bayar, dan tunggu
                  obat diantar ke depan pintumu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SHOWCASE */}
        <section className="py-28 px-8 bg-[#FFFBF5]">
          <div className="max-w-7xl mx-auto space-y-32">
            {/* FEATURE 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center fade-up opacity-0 translate-y-6 transition duration-700">
              {/* IMAGE */}
              <div className="bg-[#FFF1F1] p-6 rounded-4xl">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                  alt="Doctor"
                  width={500}
                  height={500}
                  unoptimized
                  className="rounded-3xl object-cover w-full h-105"
                />
              </div>

              {/* TEXT */}
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#FF6B6B] text-white text-xs font-semibold tracking-wide mb-6">
                  CARI DOKTER
                </span>

                <h2 className="text-4xl font-black leading-tight mb-6">
                  Pilih Dokter Sesuai Vibe Kamu
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
                  Kami kurasi dokter-dokter muda, ramah, dan up-to-date. Kamu
                  bisa lihat profil, pengalaman, sampai rating dari pasien lain
                  sebelum memutuskan.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-[#4ECDC4]">✓</span>
                    Ribuan dokter terverifikasi
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-[#4ECDC4]">✓</span>
                    Filter harga & rating
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-[#4ECDC4]">✓</span>
                    Jadwal real-time
                  </div>
                </div>

                <Link
                  href="/directory"
                  className="inline-block bg-[#FF6B6B] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Mulai Cari
                </Link>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center fade-up opacity-0 translate-y-6 transition duration-700">
              {/* TEXT */}
              <div className="order-2 lg:order-1">
                <span className="inline-block px-4 py-1 rounded-full bg-[#4ECDC4] text-white text-xs font-semibold tracking-wide mb-6">
                  AI ASISTEN
                </span>

                <h2 className="text-4xl font-black leading-tight mb-6">
                  Teman Ngobrol Sebelum Konsultasi
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
                  Malu tanya dokter langsung? Chat AI kami dulu buat dapetin
                  gambaran awal tentang gejala yang kamu alami. Data dijamin aman
                  dan private.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-[#FF6B6B]">✓</span>
                    Tersedia 24/7
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-[#FF6B6B]">✓</span>
                    Analisa gejala instan
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-[#FF6B6B]">✓</span>
                    Rekomendasi spesialis
                  </div>
                </div>

                <Link
                  href="/consultation"
                  className="inline-block bg-[#4ECDC4] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Coba Sekarang
                </Link>
              </div>

              {/* IMAGE */}
              <div className="order-1 lg:order-2 bg-[#EEF9F8] p-6 rounded-4xl">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                  alt="AI Assistant"
                  width={500}
                  height={500}
                  unoptimized
                  className="rounded-3xl object-cover w-full h-105"
                />
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center fade-up opacity-0 translate-y-6 transition duration-700">
              {/* IMAGE */}
              <div className="bg-[#FFF6EC] p-6 rounded-4xl">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                  alt="Consultation"
                  width={500}
                  height={500}
                  unoptimized
                  className="rounded-3xl object-cover w-full h-105"
                />
              </div>

              {/* TEXT */}
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-orange-400 text-white text-xs font-semibold tracking-wide mb-6">
                  KONSULTASI ONLINE
                </span>

                <h2 className="text-4xl font-black leading-tight mb-6">
                  Klinik dalam Genggaman
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
                  Gak perlu keluar kamar kos. Konsultasi bisa via chat,
                  telepon, atau video call kapan aja. Durasinya pas, gak
                  buru-buru.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-orange-400">✓</span>
                    Chat, voice, & video call
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-orange-400">✓</span>
                    Dokter responsif
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-orange-400">✓</span>
                    Bisa dari mana aja
                  </div>
                </div>

                <Link
                  href="/consultation"
                  className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Konsultasi Sekarang
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 py-20">
          <div className="max-w-6xl mx-auto bg-[#FF6B6B] text-white rounded-4xl p-12 text-center shadow-xl">
            <h2 className="text-4xl font-black mb-4">
              Mulai Sehat Bareng Kami
            </h2>

            <p className="mb-8 text-white/80 text-lg">
              Join ribuan user sekarang dan rasakan pengalaman kesehatan yang
              lebih nyaman ✨
            </p>

            <Link
              href="/register"
              className="bg-white text-[#FF6B6B] px-8 py-4 rounded-full font-bold hover:scale-105 transition inline-block"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}