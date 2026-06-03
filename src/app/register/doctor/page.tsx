"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar} from '@/components';
import { useState } from "react";

export default function RegisterDoctorPage() {
  const [step, setStep] = useState(1);

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    // required
    name: "",
    email: "",
    password: "",
    nomor_str: "",
    nomor_sip: "",
    spesialisasi: "",

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
    sub_spesialisasi: "",
    pengalaman_tahun: "",
    deskripsi_profil: "",
    biaya_konsultasi: "",
    nama_klinik: "",
    alamat_klinik: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
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

        pengalaman_tahun:
          formData.pengalaman_tahun
            ? Number(formData.pengalaman_tahun)
            : undefined,

        biaya_konsultasi:
          formData.biaya_konsultasi
            ? Number(formData.biaya_konsultasi)
            : undefined,
      };

      // hapus value kosong
      const cleanedPayload = Object.fromEntries(
        Object.entries(payload).filter(
          ([, value]) =>
            value !== "" &&
            value !== null &&
            value !== undefined
        )
      );

      const response = await fetch(
        // "https://backend-prima.vercel.app/auth/register/doctor",
        "http://localhost:8080/auth/register/doctor",
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
        throw new Error(
          result.message || "Registrasi gagal"
        );
      }

      setSuccess("Registrasi dokter berhasil 🎉");

      console.log(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FFFBF5] min-h-screen text-gray-800">
      <Navbar />

      {/* MAIN */}
      <main className="py-20 px-8 max-w-7xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-2">
            Bergabung sebagai Dokter Partner 🧑‍⚕️
          </h1>

          <p className="text-gray-500">
            Bantu kami mewujudkan kesehatan yang
            lebih baik
          </p>
        </div>

        {/* CONTAINER */}
        <div className="max-w-5xl mx-auto bg-white border rounded-2xl p-8 shadow-sm">
          {/* PROGRESS */}
          <div className="mb-10">
            <div className="flex justify-between text-xs mb-2 px-1">
              <span
                className={
                  step >= 1
                    ? "font-bold text-[#4ECDC4]"
                    : "text-gray-400"
                }
              >
                Account
              </span>

              <span
                className={
                  step >= 2
                    ? "font-bold text-[#4ECDC4]"
                    : "text-gray-400"
                }
              >
                Credentials
              </span>

              <span
                className={
                  step >= 3
                    ? "font-bold text-[#4ECDC4]"
                    : "text-gray-400"
                }
              >
                Practice
              </span>
            </div>

            <div className="h-2 w-full bg-gray-100 rounded-full">
              <div
                className={`h-full bg-[#4ECDC4] rounded-full transition-all duration-500 ${
                  step === 1
                    ? "w-1/3"
                    : step === 2
                    ? "w-2/3"
                    : "w-full"
                }`}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-12 gap-8">
            {/* LEFT */}
            <div className="md:col-span-4 space-y-6">
              <div className="p-4 bg-[#4ECDC4]/10 rounded-xl">
                <h3 className="font-bold text-[#4ECDC4] mb-1">
                  {step === 1 && "Step 1"}
                  {step === 2 && "Step 2"}
                  {step === 3 && "Step 3"}
                </h3>

                <p className="text-sm text-gray-600">
                  {step === 1 &&
                    "Buat identitas akun dokter"}

                  {step === 2 &&
                    "Lengkapi data profesi dan kredensial"}

                  {step === 3 &&
                    "Tambahkan informasi praktik dan profil"}
                </p>
              </div>

              <div className="rounded-xl overflow-hidden h-60 relative">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop"
                  alt="Dokter profesional"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-8">
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <InputField
                    label="Nama Lengkap & Gelar"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="dr. Jaka Perkasa, Sp.A"
                  />

                  <InputField
                    label="Email Profesional"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jaka@hospital.com"
                  />

                  <div>
                    <label className="text-sm font-semibold">
                      Kata Sandi
                    </label>

                    <div className="relative">
                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="
                          w-full
                          mt-1
                          px-4
                          py-3
                          border
                          rounded-xl
                          focus:outline-none
                          focus:border-[#4ECDC4]
                        "
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            !showPassword
                          )
                        }
                        className="
                          absolute
                          right-3
                          top-1/2
                          -translate-y-1/2
                          text-sm
                          text-gray-500
                        "
                      >
                        {showPassword
                          ? "Hide"
                          : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      disabled={
                        !formData.name ||
                        !formData.email ||
                        !formData.password
                      }
                      onClick={() => setStep(2)}
                      className="
                        bg-[#4ECDC4]
                        text-white
                        px-6
                        py-3
                        rounded-full
                        font-semibold
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                      "
                    >
                      Selanjutnya →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* REQUIRED */}
                  <InputField
                    label="Nomor STR"
                    name="nomor_str"
                    value={formData.nomor_str}
                    onChange={handleChange}
                    placeholder="STR123456789"
                  />

                  <InputField
                    label="Nomor SIP"
                    name="nomor_sip"
                    value={formData.nomor_sip}
                    onChange={handleChange}
                    placeholder="SIP987654321"
                  />

                  <InputField
                    label="Spesialisasi"
                    name="spesialisasi"
                    value={formData.spesialisasi}
                    onChange={handleChange}
                    placeholder="Dokter Umum"
                  />

                  {/* OPTIONAL */}
                  <InputField
                    label="Sub Spesialisasi"
                    name="sub_spesialisasi"
                    value={
                      formData.sub_spesialisasi
                    }
                    onChange={handleChange}
                    placeholder="Kardiologi Anak"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="No Telepon"
                      name="no_telepon"
                      value={formData.no_telepon}
                      onChange={handleChange}
                    />

                    <InputField
                      label="Pengalaman (tahun)"
                      type="number"
                      name="pengalaman_tahun"
                      value={
                        formData.pengalaman_tahun
                      }
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="
                        border
                        px-6
                        py-3
                        rounded-full
                      "
                    >
                      ← Kembali
                    </button>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={
                          loading ||
                          !formData.nomor_str ||
                          !formData.nomor_sip ||
                          !formData.spesialisasi
                        }
                        className="
                          border
                          border-[#4ECDC4]
                          text-[#4ECDC4]
                          px-6
                          py-3
                          rounded-full
                          disabled:opacity-50
                        "
                      >
                        Submit
                      </button>

                      <button
                        type="button"
                        disabled={
                          !formData.nomor_str ||
                          !formData.nomor_sip ||
                          !formData.spesialisasi
                        }
                        onClick={() => setStep(3)}
                        className="
                          bg-[#4ECDC4]
                          text-white
                          px-6
                          py-3
                          rounded-full
                          disabled:opacity-50
                        "
                      >
                        Selanjutnya →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Nama Panggilan"
                      name="nama_panggilan"
                      value={
                        formData.nama_panggilan
                      }
                      onChange={handleChange}
                    />

                    <InputField
                      label="Tanggal Lahir"
                      type="date"
                      name="tanggal_lahir"
                      value={
                        formData.tanggal_lahir
                      }
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">
                      Jenis Kelamin
                    </label>

                    <select
                      name="jenis_kelamin"
                      value={formData.jenis_kelamin}
                      onChange={handleChange}
                      className="
                        w-full
                        mt-1
                        px-4
                        py-3
                        border
                        rounded-xl
                        focus:outline-none
                        focus:border-[#4ECDC4]
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

                  <TextareaField
                    label="Alamat"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                  />

                  <div className="grid md:grid-cols-3 gap-6">
                    <InputField
                      label="Kota"
                      name="kota"
                      value={formData.kota}
                      onChange={handleChange}
                    />

                    <InputField
                      label="Provinsi"
                      name="provinsi"
                      value={formData.provinsi}
                      onChange={handleChange}
                    />

                    <InputField
                      label="Kode Pos"
                      name="kode_pos"
                      value={formData.kode_pos}
                      onChange={handleChange}
                    />
                  </div>

                  <TextareaField
                    label="Deskripsi Profil"
                    name="deskripsi_profil"
                    value={
                      formData.deskripsi_profil
                    }
                    onChange={handleChange}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                      label="Biaya Konsultasi"
                      type="number"
                      name="biaya_konsultasi"
                      value={
                        formData.biaya_konsultasi
                      }
                      onChange={handleChange}
                    />

                    <InputField
                      label="Nama Klinik"
                      name="nama_klinik"
                      value={formData.nama_klinik}
                      onChange={handleChange}
                    />
                  </div>

                  <TextareaField
                    label="Alamat Klinik"
                    name="alamat_klinik"
                    value={formData.alamat_klinik}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Foto Profil URL"
                    name="foto_profil_url"
                    value={
                      formData.foto_profil_url
                    }
                    onChange={handleChange}
                  />

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="
                        border
                        px-6
                        py-3
                        rounded-full
                      "
                    >
                      ← Kembali
                    </button>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="
                        bg-[#4ECDC4]
                        text-white
                        px-6
                        py-3
                        rounded-full
                        disabled:opacity-50
                      "
                    >
                      {loading
                        ? "Loading..."
                        : "Selesaikan"}
                    </button>
                  </div>
                </div>
              )}

              {/* ERROR */}
              {error && (
                <p className="text-red-500 text-sm mt-6">
                  {error}
                </p>
              )}

              {/* SUCCESS */}
              {success && (
                <p className="text-green-600 text-sm mt-6">
                  {success}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* TRUST */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>✔ Terverifikasi</span>
          <span>🔒 Aman</span>
          <span>👨‍⚕️ Komunitas Dokter</span>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t mt-20 px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-bold text-[#4ECDC4]">
              PRIMA
            </h3>

            <p className="text-sm text-gray-400">
              © 2026 PRIMA
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#">Tentang</Link>
            <Link href="#">Privasi</Link>
            <Link href="#">Bantuan</Link>
            <Link href="#">Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* =========================
   COMPONENTS
========================= */

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          mt-1
          px-4
          py-3
          border
          rounded-xl
          focus:outline-none
          focus:border-[#4ECDC4]
        "
      />
    </div>
  );
}

function TextareaField({
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
  return (
    <div>
      <label className="text-sm font-semibold">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="
          w-full
          mt-1
          px-4
          py-3
          border
          rounded-xl
          focus:outline-none
          focus:border-[#4ECDC4]
          resize-none
        "
      />
    </div>
  );
}