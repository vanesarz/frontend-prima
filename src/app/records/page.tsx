"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { Stethoscope, Tablet, ShieldCheck, FlaskRound, ArrowRight } from "lucide-react";

type MedicalRecord = {
  id: string;
  pasien_id: string;
  doctor_id: string;
  booking_id?: string;
  type: string;
  judul: string;
  deskripsi?: string;
  catatan_dokter?: string;
  attachment_url?: string;
  created_at: string;
  updated_at?: string;
};

export default function RecordsPage() {
  const [records, setRecords] =
    useState<MedicalRecord[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getIcon = (type: string) => {
    switch (type) {
      case "konsultasi":
        return <Stethoscope />;

      case "resep":
        return <Tablet />;

      case "rujukan":
        return <ShieldCheck />;

      case "pemeriksaan":
        return <FlaskRound />;

      default:
        return <Stethoscope />;
    }
  };

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setLoading(true);

        const pasienId =
          localStorage.getItem("user_id");

        let url =
          `https://backend-prima.vercel.app/medical/pasien/${pasienId}`;

        if (filter) {
          url += `?type=${filter}`;
        }

        const response =
          await fetch(url);

        const result =
          await response.json();

        setRecords(result.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#fff8f7] text-[#251818] antialiased">
      <Navbar />

      <main className="mx-auto max-w-7xl px-8 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold">Rekam medismu 📋</h1>
          <p className="text-[#584140] mt-2">Akses riwayat kesehatanmu dengan mudah dan aman.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setFilter("")}
            className={`
              px-4 py-2 rounded-full
              ${
                filter === ""
                  ? "bg-[#ff6b6b] text-white"
                  : "bg-white border border-[#e0bfbd]"
              }
            `}
          >
            Semua
          </button>

          <button
            onClick={() =>
              setFilter("konsultasi")
            }
            className={`
              px-4 py-2 rounded-full
              ${
                filter === "konsultasi"
                  ? "bg-[#ff6b6b] text-white"
                  : "bg-white border border-[#e0bfbd]"
              }
            `}
          >
            Konsultasi
          </button>

          <button
            onClick={() =>
              setFilter("resep")
            }
            className={`
              px-4 py-2 rounded-full
              ${
                filter === "resep"
                  ? "bg-[#ff6b6b] text-white"
                  : "bg-white border border-[#e0bfbd]"
              }
            `}
          >
            Resep
          </button>

          <button
            onClick={() =>
              setFilter("pemeriksaan")
            }
            className={`
              px-4 py-2 rounded-full
              ${
                filter === "pemeriksaan"
                  ? "bg-[#ff6b6b] text-white"
                  : "bg-white border border-[#e0bfbd]"
              }
            `}
          >
            Pemeriksaan
          </button>

          <button
            onClick={() =>
              setFilter("rujukan")
            }
            className={`
              px-4 py-2 rounded-full
              ${
                filter === "rujukan"
                  ? "bg-[#ff6b6b] text-white"
                  : "bg-white border border-[#e0bfbd]"
              }
            `}
          >
            Rujukan
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-20">
              Memuat rekam medis...
            </div>
          ) : records.length === 0 ? (
            <div className="col-span-full text-center py-20">
              Belum ada rekam medis
            </div>
          ) : (
            records.map((record: MedicalRecord) => (
              <article
                key={record.id}
                className="
                  bg-white
                  rounded-xl
                  border
                  border-[#e0bfbd]
                  p-6
                  flex
                  flex-col
                  group
                "
              >
                <div className="flex justify-between items-start mb-4">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#ff6b6b]
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {getIcon(record.type)}
                    </div>

                    <div>
                      <p className="text-sm text-[#584140]">
                        {new Date(
                          record.created_at
                        ).toLocaleDateString(
                          "id-ID"
                        )}
                      </p>

                      <h3 className="text-lg font-semibold mt-1">
                        {record.judul}
                      </h3>
                    </div>
                  </div>

                  <div
                    className="
                      text-xs
                      px-2
                      py-1
                      rounded-full
                      bg-[#f5f5f5]
                      text-[#584140]
                    "
                  >
                    {record.type}
                  </div>
                </div>

                <div className="flex-1">

                  <p className="text-sm text-[#584140]">
                    {record.deskripsi ||
                      "Tidak ada deskripsi"}
                  </p>

                  {record.catatan_dokter && (
                    <p className="mt-3 text-sm text-gray-500">
                      <strong>
                        Catatan Dokter:
                      </strong>{" "}
                      {record.catatan_dokter}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/records/${record.id}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-[#ae2f34]
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    Lihat Detail

                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
