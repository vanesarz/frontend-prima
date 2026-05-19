"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Flame,
  Heart,
  MessageCircle,
  Search,
  ShieldAlert,
  Sparkles,
  FileText,
} from "lucide-react";

const timeline = [
  {
    time: "Kemarin, 09:00",
    title: "Cek Tekanan Darah",
    desc: "Hasil: 120/80 mmHg (Normal)",
    icon: ShieldAlert,
    accent: "border-[#ff6b6b] text-[#ff6b6b]",
  },
  {
    time: "3 Hari yang lalu",
    title: "Konsultasi Chat",
    desc: "Dengan Dr. Andi (Umum) mengenai gejala flu ringan.",
    icon: MessageCircle,
    accent: "border-[#4ecdc4] text-[#00938a]",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fff8f7] text-[#251818] flex flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
        <section className="mt-2 space-y-1">
          <h1 className="font-heading text-[clamp(2rem,4vw,2.6rem)] font-black leading-tight text-[#251818]">
            Selamat pagi, Budi! ☀️
          </h1>
          <p className="text-sm text-[#584140] md:text-base">
            Semoga harimu menyenangkan dan sehat selalu.
          </p>
        </section>

        <section className="rounded-[1.25rem] border border-[#f0cfd0] bg-white p-5 shadow-[0_4px_20px_-4px_rgba(255,107,107,0.08)]">
          <h2 className="font-heading mb-5 text-center text-2xl font-black text-[#251818] md:text-[1.8rem]">
            Bagaimana perasaanmu hari ini?
          </h2>
          <div className="mx-auto flex max-w-sm items-center justify-between gap-2">
            {[
              { emoji: "😢", label: "Sangat sedih" },
              { emoji: "😕", label: "Sedih" },
              { emoji: "😐", label: "Biasa saja" },
              { emoji: "🙂", label: "Senang", active: true },
              { emoji: "😄", label: "Sangat senang" },
            ].map((mood) => (
              <button
                key={mood.label}
                type="button"
                aria-label={mood.label}
                className={`rounded-full p-1 text-4xl transition-transform hover:scale-110 ${
                  mood.active
                    ? "border-2 border-[#ff6b6b] bg-[#fff0ef] shadow-[0_0_15px_rgba(255,107,107,0.18)]"
                    : "grayscale hover:grayscale-0"
                }`}
              >
                {mood.emoji}
              </button>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Link
            href="/directory"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff6b6b] px-5 py-3 text-sm font-bold text-white shadow-[0_4px_12px_rgba(255,107,107,0.15)] transition hover:opacity-90 active:scale-95"
          >
            <Search className="h-4 w-4" /> Cari Dokter
          </Link>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 rounded-full bg-[#79f3ea] px-5 py-3 text-sm font-bold text-[#00504c] shadow-sm transition hover:opacity-90 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" /> Chat Dokter
          </Link>
          <Link
            href="/records"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#e0bfbd] bg-white px-5 py-3 text-sm font-bold text-[#251818] transition hover:bg-[#f8efef] active:scale-95"
          >
            <FileText className="h-4 w-4" /> Rekam Medis
          </Link>
        </section>

        <section className="relative overflow-hidden rounded-[1.25rem] border border-[#f0cfd0] bg-white p-5 shadow-sm">
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ff6b6b]" />
          <div className="flex flex-col gap-4 pl-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e0bfbd] bg-[#ffe9e7] text-lg font-black text-[#6d0010]">
                SW
              </div>
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b6b]">
                  Jadwal Mendatang
                </p>
                <p className="mt-1 text-lg font-bold text-[#251818]">Dr. Sarah Wijaya</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-[#584140]">
                  <Clock3 className="h-4 w-4" /> Hari ini, 14:30 WIB
                </p>
              </div>
            </div>

            <Link
              href="/appointments"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#ff6b6b] transition hover:underline"
            >
              Lihat Detail <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[1.25rem] bg-[#f5dddb] p-5 shadow-sm">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#ff6b6b] shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#584140]">
                Tips AI Asisten
              </p>
              <p className="text-sm leading-6 text-[#251818] md:text-base">
                Cuaca hari ini cukup panas! Jangan lupa minum air putih setidaknya 2 liter untuk menjaga tubuhmu tetap terhidrasi dengan baik, Budi.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[1.25rem] border border-[#e0bfbd] bg-white p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#251818]">
            <Flame className="h-5 w-5 text-[#ff6b6b]" /> Kamu sudah check-in 5 hari berturut-turut!
          </h3>

          <div className="flex items-center px-1">
            {Array.from({ length: 7 }).map((_, index) => {
              const done = index < 5;

              return (
                <div key={index} className="flex flex-1 items-center last:flex-none">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                      done
                        ? "bg-[#ff6b6b] text-white shadow-[0_0_10px_rgba(255,107,107,0.25)]"
                        : "bg-[#ecd5d3] text-[#584140]"
                    }`}
                  >
                    {done ? "✓" : index + 1}
                  </div>
                  {index < 6 && (
                    <div
                      className={`mx-2 h-1 flex-1 rounded-full ${
                        done ? "bg-[#ff6b6b]/50" : "bg-[#ecd5d3]"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-4">
          <h2 className="font-heading mb-4 text-2xl font-black text-[#251818]">
            Aktivitas Terakhir
          </h2>

          <div className="relative pl-2">
            <div className="absolute left-3.75 top-2 bottom-0 w-0.5 bg-[#e0bfbd]" />

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative mb-4 pl-10">
                  <div
                    className={`absolute left-0 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white shadow-sm ${item.accent}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <article className="rounded-[1.1rem] border border-[#e0bfbd] bg-white p-4 shadow-sm">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#584140]">
                      {item.time}
                    </p>
                    <p className="text-base font-bold text-[#251818]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#584140]">{item.desc}</p>
                    {index === 0 && (
                      <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#fff0ef] px-3 py-1 text-xs font-bold text-[#ff6b6b]">
                        <Heart className="h-3.5 w-3.5 fill-current" /> Hasil baik
                      </div>
                    )}
                  </article>
                </div>
              );
            })}
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/records"
              className="inline-flex items-center gap-1 rounded-full border-2 border-[#ff6b6b] px-5 py-2.5 text-sm font-bold text-[#ff6b6b] transition hover:bg-[#fff0ef]"
            >
              Lihat semua rekam medis <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}