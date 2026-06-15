"use client";

import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Stethoscope,
  FileText,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AiAsistenPage() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Halo! Ada yang bisa aku bantu hari ini? Jangan ragu untuk menceritakan apa yang kamu rasakan.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll ke pesan terbaru
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // LOGIKA INTEGRASI API CHATBOT GEMINI
  const handleSendChat = async (overrideText?: string) => {
    const textToSend =
      typeof overrideText === "string" ? overrideText : text;
    if (!textToSend.trim()) return;

    // 1. Tampilkan chat dari user ke layar
    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);

    if (typeof overrideText !== "string") {
      setText(""); // Kosongkan input field jika mengetik manual
    }
    setIsLoading(true);

    try {
      // 2. Kirim ke API Gemini melalui route /api/chatbot
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Gagal membaca balasan dari server.");
      }

      if (!response.ok) {
        throw new Error(data.reply || "Gagal menghubungi AI.");
      }

      // 3. Tampilkan balasan dari Gemini ke layar
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Gagal koneksi ke API Chatbot:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Maaf, gagal menghubungkan ke layanan AI. Silakan coba sesaat lagi.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f7] text-[#251818] antialiased flex flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-8 py-8 md:flex-row flex-col">
        <div className="grow rounded-4xl border-2 border-[#f5dddb] bg-white shadow-[0_8px_32px_-8px_rgba(255,107,107,0.1)] overflow-hidden flex flex-col min-h-150">
          {/* Header */}
          <div className="p-6 border-b border-[#f5dddb] text-center bg-[#fff8f7]">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#00b179] flex items-center justify-center text-white">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h1 className="font-heading text-[#ae2f34] text-2xl font-extrabold mb-1">
              Halo! Aku asisten kesehatanmu ✨
            </h1>
            <p className="text-sm text-[#584140] max-w-2xl mx-auto">
              Ceritakan keluhanmu, dan aku akan bantu memberikan panduan awal.
              Pilih topik di bawah atau ketik langsung.
            </p>

            {/* Quick reply buttons */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {["Aku demam", "Kepala pusing", "Cek BMI", "Aku batuk"].map(
                (topic) => (
                  <button
                    key={topic}
                    onClick={() => handleSendChat(topic)}
                    disabled={isLoading}
                    className="px-4 py-2 rounded-full border-2 border-[#e0bfbd] bg-white text-[#251818] hover:border-[#ff6b6b] hover:bg-[#fff0ef] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {topic}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Chat area */}
          <div className="grow p-6 overflow-y-auto bg-[#fff8f7] flex flex-col gap-4 max-h-[500px]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-4 items-start max-w-[85%] ${
                  msg.role === "user"
                    ? "self-end flex-row-reverse"
                    : "self-start"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "user"
                      ? "bg-[#f5dddb] text-[#584140]"
                      : "bg-[#00b179] text-white"
                  }`}
                >
                  {msg.role === "user" ? (
                    "U"
                  ) : (
                    <Stethoscope className="w-5 h-5" />
                  )}
                </div>
                <div
                  className={`p-4 shadow-sm text-sm whitespace-pre-wrap leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-2xl rounded-tr-sm bg-[#ff6b6b] text-white"
                      : "rounded-2xl rounded-tl-sm bg-white border border-[#e0bfbd] text-[#251818]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex gap-4 items-start max-w-[80%] opacity-70">
                <div className="w-10 h-10 rounded-full bg-[#00b179] flex items-center justify-center text-white">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div className="rounded-t-lg rounded-br-lg rounded-bl-sm bg-white border border-[#e0bfbd] px-4 py-2 flex items-center gap-2 h-12">
                  <div
                    className="w-2 h-2 rounded-full bg-[#00b179] animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-[#00b179] animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-[#00b179] animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}

            {/* Anchor untuk auto scroll */}
            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div className="p-6 border-t border-[#f5dddb] bg-[#fff8f7]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendChat();
              }}
              className="relative"
            >
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isLoading}
                placeholder="Ketik keluhanmu di sini..."
                className="w-full bg-white border-2 border-[#e0bfbd] rounded-full py-3 pl-4 pr-20 focus:ring-0 focus:border-[#00b179] disabled:opacity-50 disabled:cursor-not-allowed outline-none"
              />
              <button
                type="submit"
                disabled={isLoading || !text.trim()}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#ff6b6b] text-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(255,107,107,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-[320px] flex flex-col gap-6">
          <div className="rounded-3xl border border-[#e0bfbd] p-4 bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#00b179] flex items-center justify-center mb-3">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading text-[#006c48] text-2xl font-extrabold mb-2">
              Butuh konsultasi lebih lanjut?
            </h3>
            <p className="text-sm text-[#584140] mb-3">
              Temukan dokter yang tepat untuk keluhanmu sekarang.
            </p>
            <Link
              href="/directory"
              className="block w-full rounded-full bg-[#00b179] text-white py-2 text-center"
            >
              Cari Dokter
            </Link>
          </div>

          <div className="rounded-3xl border border-[#e0bfbd] p-4 bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ff6b6b] flex items-center justify-center mb-3">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading text-[#ae2f34] text-2xl font-extrabold mb-2">
              Riwayat Kesehatan
            </h3>
            <p className="text-sm text-[#584140] mb-3">
              Akses catatan medismu untuk referensi konsultasi.
            </p>
            <Link
              href="/records"
              className="block w-full rounded-full border-2 border-[#e0bfbd] py-2 text-center text-[#251818] hover:bg-[#fff0ef]"
            >
              Lihat Rekam Medis
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
