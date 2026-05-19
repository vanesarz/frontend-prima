"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { Stethoscope, Tablet, ShieldCheck, FlaskRound, ArrowRight } from "lucide-react";

export default function RecordsPage() {
  const cards = [
    {
      date: "24 Okt 2023",
      title: "Pemeriksaan Umum",
      icon: <Stethoscope />,
      tag: "Diagnosis",
      body:
        "Dokter: Dr. Sarah Wijaya (Umum)\nDiagnosis: Gejala flu ringan, disarankan istirahat dan banyak minum air putih.",
      color: "#ff6b6b",
    },
    {
      date: "24 Okt 2023",
      title: "Resep Obat Flu",
      icon: <Tablet />,
      tag: "Resep",
      body: "Dokter: Dr. Sarah Wijaya (Umum)\nDetail: Paracetamol 500mg, Vitamin C 1000mg.",
      color: "#4ecdc4",
    },
    {
      date: "15 Sep 2023",
      title: "Vaksin Influenza",
      icon: <ShieldCheck />,
      tag: "Vaksin",
      body: "Klinik: MediCare+ Center Kebayoran\nDetail: Vaksinasi tahunan untuk mencegah virus influenza.",
      color: "#00b179",
    },
    {
      date: "02 Agu 2023",
      title: "Cek Darah Lengkap",
      icon: <FlaskRound />,
      tag: "Lab",
      body: "Laboratorium: ProLab Jakarta\nHasil: Kolesterol sedikit tinggi, fungsi hati normal.",
      color: "#ffb3b0",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff8f7] text-[#251818] antialiased">
      <Navbar />

      <main className="mx-auto max-w-7xl px-8 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold">Rekam medismu 📋</h1>
          <p className="text-[#584140] mt-2">Akses riwayat kesehatanmu dengan mudah dan aman.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button className="px-4 py-2 rounded-full bg-[#ff6b6b] text-white shadow-sm">Semua</button>
          <button className="px-4 py-2 rounded-full bg-white border border-[#e0bfbd] text-[#584140]">Diagnosis</button>
          <button className="px-4 py-2 rounded-full bg-white border border-[#e0bfbd] text-[#584140]">Resep</button>
          <button className="px-4 py-2 rounded-full bg-white border border-[#e0bfbd] text-[#584140]">Vaksin</button>
          <button className="px-4 py-2 rounded-full bg-white border border-[#e0bfbd] text-[#584140]">Lab</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="bg-white rounded-xl border border-[#e0bfbd] p-6 flex flex-col group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div style={{ background: c.color }} className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[#584140">{c.date}</p>
                    <h3 className="text-lg font-semibold mt-1">{c.title}</h3>
                  </div>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-[#f5f5f5] text-[#584140]">{c.tag}</div>
              </div>

              <div className="flex-1 text-sm text-[#584140] whitespace-pre-line">{c.body}</div>

              <div className="mt-6">
                <Link href="#" className="inline-flex items-center gap-2 text-sm text-[#ae2f34] group-hover:translate-x-1 transition-transform">
                  Lihat Detail <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
