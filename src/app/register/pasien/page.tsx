"use client";

import { Navbar} from '@/components';
import { useState } from "react";

export default function RegisterPasienPage() {
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showErrorModal, setShowErrorModal] =
  useState(false);

  const [formData, setFormData] = useState({
    // required
    name: "",
    email: "",
    password: "",

    // optional
    nama_panggilan: "",
    foto_profil_url: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    no_telepon: "",
    alamat: "",
    kota: "",
    provinsi: "",
    kode_pos: "",
    nik: "",
    golongan_darah: "",
    rhesus: "",
    tinggi_badan_cm: "",
    berat_badan_kg: "",
    riwayat_alergi: "",
    riwayat_penyakit: "",
    no_bpjs: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const payload = {
        ...formData,

        tinggi_badan_cm: formData.tinggi_badan_cm
          ? Number(formData.tinggi_badan_cm)
          : undefined,

        berat_badan_kg: formData.berat_badan_kg
          ? Number(formData.berat_badan_kg)
          : undefined,
      };

      // hapus field kosong
      const cleanedPayload = Object.fromEntries(
        Object.entries(payload).filter(
          ([, value]) =>
            value !== "" &&
            value !== null &&
            value !== undefined
        )
      );

      const response = await fetch(
        "https://backend-prima.vercel.app/auth/register/pasien",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cleanedPayload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registrasi gagal");
      }

      setSuccess("Registrasi berhasil 🎉");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan");
      }

      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFBF5] flex flex-col">
      <Navbar />

      {/* CONTENT */}
      <div className="grow flex items-center justify-center p-8">
        <div className="w-full max-w-3xl bg-white border border-[#F0EAE0] rounded-xl p-8 shadow-sm">
          {/* SUCCESS SCREEN */}
          {success ? (
            <div className="text-center py-16">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-[#E8FFF5] flex items-center justify-center text-5xl">
                🎉
              </div>

              <h1 className="text-4xl font-black text-gray-800 mb-4">
                Registrasi Berhasil!
              </h1>

              <p className="text-gray-500 max-w-md mx-auto leading-relaxed mb-10">
                Akun kamu sudah berhasil dibuat. Sekarang kamu bisa mulai
                konsultasi, cari dokter, dan akses layanan kesehatan di PRIMA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="
                    bg-[#ff6b6b]
                    text-white
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                    hover:opacity-90
                    transition
                  "
                >
                  Masuk Sekarang
                </button>

                <button
                  className="
                    border
                    border-[#F0EAE0]
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                    hover:bg-[#FFF7F3]
                    transition
                  "
                >
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* PROGRESS */}
              <div className="mb-10">
                <div className="flex justify-between text-sm mb-2">
                  <span
                    className={
                      step >= 1
                        ? "text-rose-500 font-semibold"
                        : "text-gray-400"
                    }
                  >
                    Langkah 1: Akun
                  </span>

                  <span
                    className={
                      step >= 2
                        ? "text-rose-500 font-semibold"
                        : "text-gray-400"
                    }
                  >
                    Langkah 2: Profil Dasar
                  </span>

                  <span
                    className={
                      step >= 3
                        ? "text-rose-500 font-semibold"
                        : "text-gray-400"
                    }
                  >
                    Langkah 3: Data Tambahan
                  </span>
                </div>

                <div className="w-full bg-[#F0EAE0] h-3 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#ff6b6b] transition-all duration-500 ${
                      step === 1
                        ? "w-1/3"
                        : step === 2
                        ? "w-2/3"
                        : "w-full"
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

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <FloatingInput
                    label="Nama Lengkap"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <FloatingInput
                    label="Alamat Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <FloatingInput
                    label="Kata Sandi"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={
                        !formData.name ||
                        !formData.email ||
                        !formData.password
                      }
                      className="
                        bg-[#ff6b6b]
                        text-white
                        px-10
                        py-3
                        rounded-full
                        font-semibold
                        transition
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                        hover:opacity-90
                      "
                    >
                      Lanjut →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FloatingInput
                      label="Nama Panggilan"
                      type="text"
                      name="nama_panggilan"
                      value={formData.nama_panggilan}
                      onChange={handleChange}
                    />

                    <FloatingInput
                      label="No Telepon"
                      type="tel"
                      name="no_telepon"
                      value={formData.no_telepon}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FloatingInput
                      label="Tanggal Lahir"
                      type="date"
                      name="tanggal_lahir"
                      value={formData.tanggal_lahir}
                      onChange={handleChange}
                    />

                    <div>
                      <select
                        name="jenis_kelamin"
                        value={formData.jenis_kelamin}
                        onChange={handleChange}
                        className="
                          w-full
                          h-13
                          px-4
                          border-2
                          border-[#F0EAE0]
                          rounded-md
                          focus:border-teal-400
                          outline-none
                        "
                      >
                        <option value="">
                          Pilih Jenis Kelamin
                        </option>

                        <option value="laki_laki">
                          Laki-laki
                        </option>

                        <option value="perempuan">
                          Perempuan
                        </option>
                      </select>
                    </div>
                  </div>

                  <FloatingTextarea
                    label="Alamat Lengkap"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                  />

                  <div className="grid md:grid-cols-3 gap-6">
                    <FloatingInput
                      label="Kota"
                      type="text"
                      name="kota"
                      value={formData.kota}
                      onChange={handleChange}
                    />

                    <FloatingInput
                      label="Provinsi"
                      type="text"
                      name="provinsi"
                      value={formData.provinsi}
                      onChange={handleChange}
                    />

                    <FloatingInput
                      label="Kode Pos"
                      type="text"
                      name="kode_pos"
                      value={formData.kode_pos}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border px-8 py-3 rounded-full"
                    >
                      ← Kembali
                    </button>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="border border-teal-500 text-teal-500 px-6 py-3 rounded-full"
                      >
                        Skip & Submit
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="bg-[#ff6b6b] text-white px-8 py-3 rounded-full"
                      >
                        Lanjut →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FloatingInput
                      label="NIK"
                      type="text"
                      name="nik"
                      value={formData.nik}
                      onChange={handleChange}
                    />

                    <FloatingInput
                      label="No BPJS"
                      type="text"
                      name="no_bpjs"
                      value={formData.no_bpjs}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FloatingInput
                      label="Golongan Darah"
                      type="text"
                      name="golongan_darah"
                      value={formData.golongan_darah}
                      onChange={handleChange}
                    />

                    <FloatingInput
                      label="Rhesus"
                      type="text"
                      name="rhesus"
                      value={formData.rhesus}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FloatingInput
                      label="Tinggi Badan (cm)"
                      type="number"
                      name="tinggi_badan_cm"
                      value={formData.tinggi_badan_cm}
                      onChange={handleChange}
                    />

                    <FloatingInput
                      label="Berat Badan (kg)"
                      type="number"
                      name="berat_badan_kg"
                      value={formData.berat_badan_kg}
                      onChange={handleChange}
                    />
                  </div>

                  <FloatingTextarea
                    label="Riwayat Alergi"
                    name="riwayat_alergi"
                    value={formData.riwayat_alergi}
                    onChange={handleChange}
                  />

                  <FloatingTextarea
                    label="Riwayat Penyakit"
                    name="riwayat_penyakit"
                    value={formData.riwayat_penyakit}
                    onChange={handleChange}
                  />

                  <FloatingInput
                    label="Foto Profil URL"
                    type="text"
                    name="foto_profil_url"
                    value={formData.foto_profil_url}
                    onChange={handleChange}
                  />

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border px-8 py-3 rounded-full"
                    >
                      ← Kembali
                    </button>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="bg-teal-500 text-white px-8 py-3 rounded-full disabled:opacity-50"
                    >
                      {loading
                        ? "Loading..."
                        : "Selesaikan"}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#F0EAE0] py-8 text-center text-sm text-gray-500">
        © 2026 MediCare+. Playful Healthcare.
      </footer>

      {/* ERROR MODAL */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6">
          <div className="w-full max-w-md bg-white rounded-4xl p-8 shadow-2xl text-center animate-in fade-in zoom-in duration-200">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center text-4xl">
              😵
            </div>

            <h2 className="text-2xl font-black text-gray-800 mb-3">
              Registrasi Gagal
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8">
              {error}
            </p>

            <button
              onClick={() => setShowErrorModal(false)}
              className="
                w-full
                bg-[#ff6b6b]
                text-white
                py-4
                rounded-full
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Coba Lagi
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* =========================
   COMPONENTS
========================= */

function FloatingInput({
  label,
  type,
  name,
  value,
  onChange,
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          peer
          w-full
          h-13
          px-4
          border-2
          border-[#F0EAE0]
          rounded-md
          focus:border-teal-400
          outline-none
        "
      />

      <label
        className="
          absolute
          left-4
          top-4
          text-gray-400
          text-sm
          transition-all
          pointer-events-none
          peer-focus:opacity-0
          peer-not-placeholder-shown:opacity-0
        "
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}) {
  const handleInput = (
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    const el = e.currentTarget;

    el.style.height = "auto";

    const maxHeight = 24 * 5;

    el.style.height =
      Math.min(el.scrollHeight, maxHeight) + "px";

    el.style.overflowY =
      el.scrollHeight > maxHeight ? "auto" : "hidden";
  };

  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onInput={handleInput}
        placeholder=" "
        rows={1}
        className="
          peer
          w-full
          p-4
          border-2
          border-[#F0EAE0]
          rounded-md
          focus:border-teal-400
          outline-none
          resize-none
          overflow-hidden
        "
      />

      <label
        className="
          absolute
          left-4
          top-4
          text-gray-400
          text-sm
          transition-all
          pointer-events-none
          peer-focus:opacity-0
          peer-not-placeholder-shown:opacity-0
        "
      >
        {label}
      </label>
    </div>
  );
}