"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components";
import { useEffect } from "react";
import { Search } from "lucide-react";

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
  }, []);

  return (
    <div className="bg-[#FFFBF5] text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="px-8 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT */}
        <div className="flex-1 space-y-6 fade-up opacity-0 translate-y-6 transition">
          <div className="inline-block bg-[#FFE4E1] text-[#FF6B6B] text-sm px-4 py-1 rounded-full">
            ✨ Kesehatan digital #1 buat anak muda
          </div>

          <h1 className="text-5xl font-extrabold leading-tight">
            Jaga{" "}
            <span className="text-[#FF6B6B]">kesehatanmu</span>, <br />
            mulai dari{" "}
            <span className="text-[#4ECDC4]">sini</span> 🌱
          </h1>

          <p className="text-gray-600 max-w-md">
            Chat dokter, tebus resep, sampai booking janji temu— semua beres dalam satu aplikasi.
          </p>

          <div className="flex gap-4">
            <Link
              href="/directory"
              className="bg-[#FF6B6B] text-white px-6 py-3 rounded-full flex items-center gap-2"
            >
              <Search size={18} />
              Cari Dokter
            </Link>

            <Link
              href="/consultation"
              className="border-2 border-[#FF6B6B] text-[#FF6B6B] px-6 py-3 rounded-full"
            >
              ✨ Tanya AI
            </Link>
          </div>

          {/* SOCIAL PROOF */}
          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-3">
              <Image
                src="https://i.pravatar.cc/40?img=1"
                alt="user1"
                width={32}
                height={32}
                unoptimized
                className="rounded-full border"
              />
              <Image
                src="https://i.pravatar.cc/40?img=2"
                alt="user2"
                width={32}
                height={32}
                unoptimized
                className="rounded-full border"
              />
              <Image
                src="https://i.pravatar.cc/40?img=3"
                alt="user3"
                width={32}
                height={32}
                unoptimized
                className="rounded-full border"
              />
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
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
        <div className="flex-1 relative fade-up opacity-0 translate-y-6 transition">
          {/* GLOW */}
          <div className="absolute inset-0 bg-linear-to-br from-[#FF6B6B] to-[#4ECDC4] opacity-20 blur-3xl rounded-full animate-pulse"></div>

          {/* MAIN IMAGE */}
          <div className="relative z-10 animate-float">
            <Image
              src="https://images.unsplash.com/photo-1581090700227-1e8b63f8c5b3"
              alt="Healthcare illustration"
              width={450}
              height={450}
              unoptimized
              className="rounded-3xl shadow-xl"
            />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute bottom-5 left-0 bg-white p-4 rounded-xl shadow-xl w-56 animate-bounceSlow">
            <p className="text-xs text-gray-500 mb-1">
              Medi AI • Online
            </p>
            <p className="text-sm text-gray-700">
              Halo! Ada keluhan apa hari ini?
            </p>
            <div className="mt-2 bg-[#FF6B6B] text-white text-xs px-2 py-1 rounded-full inline-block">
              Kepala agak pusing nih...
            </div>
          </div>

          {/* BADGES */}
          <div className="absolute top-4 right-0 bg-white px-3 py-1 rounded-full shadow text-xs animate-pulse">
            ⚡ Respons {"<"} 5 menit
          </div>

          <div className="absolute bottom-10 right-0 bg-white px-3 py-1 rounded-full shadow text-xs">
            💚 4.9/5 Rating
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="text-center py-20 max-w-4xl mx-auto fade-up opacity-0 translate-y-6 transition">
        <h2 className="text-3xl font-bold mb-10">
          Pernah ngerasa gini?
        </h2>

        <div className="space-y-6 text-left">
          <p>&quot;Males antre lama di rumah sakit...&quot;</p>
          <p>&quot;Resep dokter susah dibaca...&quot;</p>
          <p>&quot;Cari info kesehatan malah overthinking...&quot;</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-8 max-w-7xl mx-auto space-y-20">
        <Feature
          title="Cari Dokter"
          desc="Filter berdasarkan rating, harga, dan lokasi."
          color="bg-[#FF6B6B]"
        />
        <Feature
          title="AI Assistant"
          desc="Tanya dulu sebelum ke dokter."
          color="bg-[#4ECDC4]"
        />
        <Feature
          title="Konsultasi Online"
          desc="Chat, call, atau video dengan dokter."
          color="bg-orange-400"
        />
      </section>

      {/* CTA */}
      <section className="px-8 py-20">
        <div className="bg-[#FF6B6B] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mulai Sehat Bareng Kami
          </h2>
          <p className="mb-6">
            Join ribuan user sekarang
          </p>
          <button className="bg-white text-[#FF6B6B] px-6 py-3 rounded-full">
            Daftar
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white px-8 py-10 border-t">
        <div className="flex justify-between">
          <h3 className="font-bold text-[#FF6B6B]">
            MediCare+
          </h3>
          <p className="text-gray-400 text-sm">
            © 2026 MediCare+
          </p>
        </div>
      </footer>
    </div>
  );
}

/* COMPONENT */

function Feature({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 fade-up opacity-0 translate-y-6 transition">
      <div className={`w-32 h-32 rounded-3xl ${color}`} />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{desc}</p>
      </div>
    </div>
  );
}