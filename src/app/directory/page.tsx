"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Navbar,
  Footer,
} from "@/components";

import {
  useEffect,
  useState,
} from "react";

/* =========================
   TYPES
========================= */

type Doctor = {
  id: string | number;

  name: string;

  spesialisasi: string;

  deskripsi_profil: string;

  rating?: string;

  reviews?: string;

  availability?: string;

  foto_profil_url?: string;
};

/* =========================
   DUMMY DATA
========================= */

const dummyDoctors: Doctor[] = [
  {
    id: 1,

    name: "Dr. Sarah Larasati",

    spesialisasi:
      "Spesialis Anak",

    deskripsi_profil:
      "Dokter anak yang sangat ramah dan sabar, memiliki pengalaman lebih dari 8 tahun di RS Bunda.",

    rating: "4.9",

    reviews: "120 Ulasan",

    availability:
      "Tersedia Hari Ini",

    foto_profil_url:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,

    name: "Dr. Budi Santoso",

    spesialisasi:
      "Dokter Umum",

    deskripsi_profil:
      "Berpengalaman menangani konsultasi kesehatan harian dan pemeriksaan medis umum.",

    rating: "4.8",

    reviews: "85 Ulasan",

    availability:
      "Tersedia Besok",

    foto_profil_url:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,

    name: "Dr. Maya Pradipta",

    spesialisasi:
      "Psikolog Klinis",

    deskripsi_profil:
      "Fokus pada manajemen stres, kecemasan, dan kesehatan mental dewasa muda.",

    rating: "5.0",

    reviews: "200+ Ulasan",

    availability:
      "Konsultasi Online",

    foto_profil_url:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================
   FILTERS
========================= */

const filters = [
  "Semua",

  "Umum",

  "Spesialis",

  "Tersedia Hari Ini",

  "Dekat Saya",

  "Konsultasi Online",
];

/* =========================
   PAGE
========================= */

export default function DirectoryPage() {
  const [activeFilter, setActiveFilter] =
    useState("Semua");

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  /* =========================
     DATA
  ========================= */

  const [apiDoctors, setApiDoctors] =
    useState<Doctor[]>([]);

  const [doctors, setDoctors] =
    useState<Doctor[]>(dummyDoctors);

  /* =========================
     FETCH API
  ========================= */

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);

        setError("");

        const response = await fetch(
          "https://backend-prima.vercel.app/doctors"
        );

        const result =
          await response.json();

        console.log(
          "API Doctors:",
          result
        );

        if (
          Array.isArray(result) &&
          result.length > 0
        ) {
          const mappedDoctors =
            result.map(
              (
                doctor: Record<
                  string,
                  unknown
                >
              ): Doctor => ({
                id:
                  doctor.id?.toString() ||
                  Math.random().toString(),

                name: String(
                  doctor.name ??
                    "Nama dokter"
                ),

                spesialisasi:
                  String(
                    doctor.spesialisasi ??
                      "Dokter"
                  ),

                deskripsi_profil:
                  String(
                    doctor.deskripsi_profil ??
                      "Belum ada deskripsi."
                  ),

                rating: String(
                  doctor.rating ??
                    "4.9"
                ),

                reviews: String(
                  doctor.reviews ??
                    "100 Ulasan"
                ),

                availability:
                  String(
                    doctor.availability ??
                      "Tersedia"
                  ),

                foto_profil_url:
                  String(
                    doctor.foto_profil_url ??
                      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
                  ),
              })
            );

          setApiDoctors(
            mappedDoctors
          );

          setDoctors(
            mappedDoctors
          );
        } else {
          setDoctors(
            dummyDoctors
          );
        }
      } catch (err) {
        console.error(err);

        setError(
          "Gagal mengambil data dokter"
        );

        setDoctors(
          dummyDoctors
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  /* =========================
     SEARCH FILTER
  ========================= */

  const filteredDoctors =
    doctors.filter((doctor) => {
      const keyword =
        search.toLowerCase();

      return (
        doctor.name
          .toLowerCase()
          .includes(keyword) ||

        doctor.spesialisasi
          .toLowerCase()
          .includes(keyword) ||

        doctor.deskripsi_profil
          .toLowerCase()
          .includes(keyword)
      );
    });

  return (
    <main className="min-h-screen bg-[#FDF8F8] flex flex-col">
      <Navbar />

      {/* CONTENT */}
      <section className="flex-1 px-8 py-14">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <div className="mb-6">
            <h1
              className="
                text-4xl
                font-black
                text-[#2A1717]
                leading-tight
              "
            >
              Dokter terbaik buat kamu
              🧑‍⚕️
            </h1>

            <p className="mt-4 text-gray-500 text-base">
              {apiDoctors.length > 0
                ? "Menggunakan data dari API"
                : "Menggunakan dummy data"}
            </p>
          </div>

          {/* SEARCH */}
          <div
            className="
              w-full
              max-w-4xl
              flex
              items-center
              bg-white
              border-2
              border-[#E9C9C9]
              rounded-full
              overflow-hidden
              shadow-sm
            "
          >
            <div className="px-6 text-[#D0A7A7] text-lg">
              🔍
            </div>

            <input
              type="text"
              placeholder="Ketik nama dokter, spesialisasi, atau gejala..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                flex-1
                py-5
                bg-transparent
                outline-none
                text-base
                text-[#4B3434]
                placeholder:text-[#B69494]
              "
            />

            <button
              className="
                bg-[#FF6B6B]
                hover:bg-[#ff5a5a]
                text-white
                font-semibold
                px-6
                py-3
                rounded-full
                mr-2
                transition-all
              "
            >
              Cari
            </button>
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap gap-3 mt-6 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() =>
                  setActiveFilter(
                    filter
                  )
                }
                className={`
                  px-6
                  py-3
                  rounded-full
                  border
                  font-semibold
                  transition-all
                  text-sm
                  ${
                    activeFilter ===
                    filter
                      ? "bg-[#FF6B6B] text-white border-[#FF6B6B]"
                      : "bg-white text-[#5B4444] border-[#DDBBBB]"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* LOADING */}
          {loading && (
            <div className="text-center py-20 text-lg text-gray-500">
              Loading doctors...
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div
              className="
                bg-red-50
                border
                border-red-200
                text-red-500
                px-5
                py-4
                rounded-2xl
                mb-8
              "
            >
              {error}
            </div>
          )}

          {/* DOCTOR LIST */}
          <div className="space-y-6">
            {filteredDoctors.map(
              (doctor) => (
                <div
                  key={doctor.id}
                  className="
                    bg-white/90
                    border
                    border-[#E6CACA]
                    rounded-2xl
                    px-8
                    py-8
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    gap-8
                  "
                >
                  {/* LEFT */}
                  <div className="flex gap-6 flex-1">
                    {/* IMAGE */}
                    <div
                      className="
                        relative
                        w-24
                        h-24
                        rounded-full
                        overflow-hidden
                        border-4
                        border-[#F5DFDF]
                        shrink-0
                      "
                    >
                      <Image
                        src={
                          doctor.foto_profil_url ||
                          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
                        }
                        alt={doctor.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h2
                          className="
                            text-2xl
                            font-black
                            text-[#2B1717]
                          "
                        >
                          {doctor.name}
                        </h2>

                        <span
                          className="
                            px-4
                            py-1.5
                            rounded-full
                            text-xs
                            font-bold
                            bg-[#7FE7DE]
                            text-[#136F63]
                          "
                        >
                          {
                            doctor.spesialisasi
                          }
                        </span>
                      </div>

                      <p
                        className="
                          text-[#5E4A4A]
                          leading-relaxed
                          text-base
                        "
                      >
                        {
                          doctor.deskripsi_profil
                        }
                      </p>

                      {/* META */}
                      <div className="flex flex-wrap items-center gap-8 mt-5">
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-[#5B4444]
                            font-semibold
                          "
                        >
                          ⭐{" "}
                          {doctor.rating ||
                            "4.9"}{" "}
                          (
                          {doctor.reviews ||
                            "100 Ulasan"}
                          )
                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-[#0D7B54]
                            font-semibold
                          "
                        >
                          📅{" "}
                          {doctor.availability ||
                            "Tersedia"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <div className="flex justify-end">
                    <Link
                      href={`/appointment/${doctor.id}`}
                      className="
                        bg-[#FF6B6B]
                        hover:bg-[#f65c5c]
                        text-white
                        font-bold
                        px-6
                        py-3
                        rounded-full
                        shadow-lg
                        transition-all
                        whitespace-nowrap
                        inline-flex
                        items-center
                        justify-center
                      "
                    >
                      Jadwalkan →
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}