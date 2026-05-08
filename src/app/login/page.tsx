"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FFFBF5] border-b px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black text-[#FF6B6B]">
          PRIMA
        </h1>

        <nav className="hidden md:flex gap-8 font-semibold">
          <Link href="#" className="text-[#FF6B6B] border-b-2 pb-1">
            Beranda
          </Link>
          <Link href="#">Cari Dokter</Link>
          <Link href="#">Beranda Saya</Link>
          <Link href="#">Rekam Medis</Link>
          <Link href="#">AI Asisten</Link>
        </nav>

        <button className="hidden md:block border px-4 py-2 rounded-full text-[#FF6B6B]">
          Masuk
        </button>
      </header>

      {/* HERO */}
      <section className="px-8 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT */}
        <div className="flex-1 space-y-6 fade-up opacity-0 translate-y-6 transition">
          <h1 className="text-5xl font-extrabold leading-tight">
            Jaga{" "}
            <span className="text-[#FF6B6B]">kesehatanmu</span>, mulai dari{" "}
            <span className="text-[#4ECDC4]">sini</span>
          </h1>

          <p className="text-gray-600 max-w-md">
            Chat dokter, tebus resep, sampai booking janji temu—
            semua dalam satu platform.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#FF6B6B] text-white px-6 py-3 rounded-full">
              Cari Dokter
            </button>
            <button className="border-2 border-[#FF6B6B] text-[#FF6B6B] px-6 py-3 rounded-full">
              Tanya AI
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative fade-up opacity-0 translate-y-6 transition">
          <div className="absolute inset-0 bg-linear-to-br from-[#FF6B6B] to-[#4ECDC4] opacity-20 blur-3xl rounded-full"></div>

          <Image
            src="https://via.placeholder.com/400"
            alt="hero"
            width={400}
            height={400}
            className="relative z-10 rounded-3xl"
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="text-center py-20 max-w-4xl mx-auto fade-up opacity-0 translate-y-6 transition">
        <h2 className="text-3xl font-bold mb-10">
          Pernah ngerasa gini?
        </h2>

        <div className="space-y-6 text-left">
          <p>
            “Males antre lama di rumah sakit...”
          </p>
          <p>
            “Resep dokter susah dibaca...”
          </p>
          <p>
            “Cari info kesehatan malah overthinking...”
          </p>
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
            PRIMA
          </h3>

          <p className="text-gray-400 text-sm">
            © 2026 PRIMA
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