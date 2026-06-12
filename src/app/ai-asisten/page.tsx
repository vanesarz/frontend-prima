"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { useState } from "react";
import {
  ArrowRight,
  Stethoscope,
  FileText,
} from "lucide-react";

export default function AiAsistenPage() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Halo! Ada yang bisa aku bantu hari ini? Jangan ragu untuk menceritakan apa yang kamu rasakan." }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // LOGIKA INTEGRASI API CHATBOT ASLI
  const handleSendChat = async () => {
    if (!text.trim()) return;

    // 1. Tampilkan chat dari user ke layar
    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = text;
    setText(""); // Kosongkan input field
    setIsLoading(true);

    try {
      // 2. TEMBAK API ASLINYA (INTEGRASI)
      const response = await fetch('/api/chatbot', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }), 
      });

      const data = await response.json(); // Menangkap balasan JSON dari API
      
      // 3. Tampilkan balasan asli dari API ke layar
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Gagal koneksi ke API Chatbot:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f7] text-[#251818] antialiased flex flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-8 py-8 md:flex-row flex-col">
        <div className="grow rounded-4xl border-2 border-[#f5dddb] bg-white shadow-[0_8px_32px_-8px_rgba(255,107,107,0.1)] overflow-hidden flex flex-col min-h-150">
          <div className="p-6 border-b border-[#f5dddb] text-center bg-[#fff8f7]">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#00b179] flex items-center justify-center text-white">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h1 className="font-heading text-[#ae2f34] text-2xl font-extrabold mb-1">Halo! Aku asisten kesehatanmu ✨</h1>
            <p className="text-sm text-[#584140] max-w-2xl mx-auto">Ceritakan keluhanmu, dan aku akan bantu memberikan panduan awal. Pilih topik di bawah atau ketik langsung.</p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button className="px-4 py-2 rounded-full border-2 border-[#e0bfbd] bg-white text-[#251818] hover:border-[#ff6b6b]">Aku demam</button>
              <button className="px-4 py-2 rounded-full border-2 border-[#e0bfbd] bg-white text-[#251818] hover:border-[#ff6b6b]">Kepala pusing</button>
              <button className="px-4 py-2 rounded-full border-2 border-[#e0bfbd] bg-white text-[#251818] hover:border-[#ff6b6b]">Cek BMI</button>
            </div>
          </div>

          <div className="grow p-6 overflow-y-auto bg-[#fff8f7] flex flex-col gap-6">
            <div className="flex gap-4 items-start max-w-[80%]">
              <div className="w-10 h-10 rounded-full bg-[#00b179] flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="rounded-t-lg rounded-br-lg rounded-bl-sm bg-white border border-[#e0bfbd] p-4 shadow-sm text-[#251818]">
                Halo! Ada yang bisa aku bantu hari ini? Jangan ragu untuk menceritakan apa yang kamu rasakan.
              </div>
            </div>

            <div className="self-end max-w-[80%] flex gap-4 items-end">
              <div className="rounded-t-lg rounded-bl-lg rounded-br-sm bg-[#ff6b6b] text-white p-4 shadow-[0_4px_12px_rgba(255,107,107,0.2)]">
                Aku merasa agak pusing sejak pagi, dan suhu badan sedikit hangat.
              </div>
              <div className="w-10 h-10 rounded-full bg-[#f5dddb] text-[#584140] flex items-center justify-center">U</div>
            </div>

            <div className="flex gap-4 items-start max-w-[80%]">
              <div className="w-10 h-10 rounded-full bg-[#00b179] flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="rounded-t-lg rounded-br-lg rounded-bl-sm bg-white border border-[#e0bfbd] p-4 shadow-sm text-[#251818]">
                <p className="mb-2">Maaf mendengar kamu kurang sehat. Pusing dan demam ringan bisa disebabkan oleh beberapa hal seperti kelelahan, kurang cairan, atau awal infeksi ringan.</p>
                <p className="font-bold mb-1">Saran awal:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Istirahat yang cukup.</li>
                  <li>Minum banyak air putih.</li>
                  <li>Jika demam berlanjut lebih dari 3 hari, konsultasi ke dokter.</li>
                </ul>
              </div>
            </div>

            {/* typing indicator */}
            <div className="flex gap-4 items-start max-w-[80%] opacity-70">
              <div className="w-10 h-10 rounded-full bg-[#00b179] flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="rounded-t-lg rounded-br-lg rounded-bl-sm bg-white border border-[#e0bfbd] px-4 py-2 flex items-center gap-2 h-12">
                <div className="w-2 h-2 rounded-full bg-[#00b179] animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-[#00b179] animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-[#00b179] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-[#f5dddb] bg-[#fff8f7]">
            <div className="relative">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ketik keluhanmu di sini..."
                className="w-full bg-white border-2 border-[#e0bfbd] rounded-full py-3 pl-4 pr-20 focus:ring-0 focus:border-[#00b179]"
              />
              <button onClick={handleSendChat} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#ff6b6b] text-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(255,107,107,0.3)]">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <aside className="w-full md:w-[320px] flex flex-col gap-6">
          <div className="rounded-3xl border border-[#e0bfbd] p-4 bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#00b179] flex items-center justify-center mb-3">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading text-[#006c48] text-2xl font-extrabold mb-2">Butuh konsultasi lebih lanjut?</h3>
            <p className="text-sm text-[#584140] mb-3">Temukan dokter yang tepat untuk keluhanmu sekarang.</p>
            <Link href="/directory" className="block w-full rounded-full bg-[#00b179] text-white py-2 text-center">Cari Dokter</Link>
          </div>

          <div className="rounded-3xl border border-[#e0bfbd] p-4 bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ff6b6b] flex items-center justify-center mb-3">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading text-[#ae2f34] text-2xl font-extrabold mb-2">Riwayat Kesehatan</h3>
            <p className="text-sm text-[#584140] mb-3">Akses catatan medismu untuk referensi konsultasi.</p>
            <Link href="/records" className="block w-full rounded-full border-2 border-[#e0bfbd] py-2 text-center text-[#251818] hover:bg-[#fff0ef]">Lihat Rekam Medis</Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
