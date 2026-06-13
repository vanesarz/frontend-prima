"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginDoctorPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://backend-prima.vercel.app/auth/login/doctor",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Login gagal"
        );
      }

      console.log(result);

      document.cookie = `token=${result.token}; path=/`;
      document.cookie = `role=DOCTOR; path=/`;

      router.push("/dashboard");
      
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Terjadi kesalahan"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F3EE] flex flex-col overflow-hidden">
      <Navbar />

      {/* MAIN */}
      <section className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="relative hidden lg:flex justify-center">
            <div
              className="
                absolute
                -bottom-6.25
                right-7.5
                w-55
                h-30
                bg-white/70
                rounded-4xl
                blur-[1px]
                shadow-xl
              "
            />

            <div
              className="
                relative
                w-full
                max-w-130
                h-130
                rounded-[2.5rem]
                overflow-hidden
                border
                border-[#D8B7B2]
                shadow-lg
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
                alt="Doctor"
                fill
                unoptimized
                className="object-cover"
              />

              {/* STATUS */}
              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  bg-[#0E766E]
                  text-white
                  px-5
                  py-3
                  rounded-2xl
                  flex
                  items-center
                  gap-3
                  shadow-xl
                "
              >
                <div className="text-2xl">
                  🩺
                </div>

                <div>
                  <p className="text-xs opacity-80">
                    Status Aktif
                  </p>

                  <h4 className="font-bold text-lg leading-none">
                    Dashboard Siap
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              {/* HEADER */}
              <div className="mb-10">
                <h1
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-[#2B1717]
                    leading-tight
                  "
                >
                  Selamat bertugas,
                  Dok! 👋
                </h1>

                <p className="mt-4 text-xl text-[#3A2B2B]">
                  Akses dashboard dokter
                  PRIMA Anda
                </p>
              </div>

              {/* CARD */}
              <div
                className="
                  bg-[#FCFAF8]
                  border
                  border-[#DDBFBA]
                  rounded-[2.5rem]
                  p-10
                  shadow-sm
                "
              >
                <form
                  onSubmit={handleLogin}
                  className="space-y-8"
                >
                  {/* EMAIL */}
                  <div>
                    <label
                      className="
                        block
                        text-sm
                        font-semibold
                        text-[#2B1717]
                        mb-3
                      "
                    >
                      Alamat Email
                    </label>

                    <div className="relative">
                      <div
                        className="
                          absolute
                          left-5
                          top-1/2
                          -translate-y-1/2
                          text-[#9D7A75]
                          text-lg
                        "
                      >
                        ✉️
                      </div>

                      <input
                        type="email"
                        placeholder="nama@rs-prima.id"
                        value={email}
                        onChange={(e) =>
                          setEmail(
                            e.target.value
                          )
                        }
                        className="
                          w-full
                          pl-14
                          pr-5
                          py-4
                          rounded-2xl
                          border-2
                          border-[#DDBFBA]
                          bg-transparent
                          focus:outline-none
                          focus:border-[#0E766E]
                          transition-all
                          text-lg
                        "
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label
                      className="
                        block
                        text-sm
                        font-semibold
                        text-[#2B1717]
                        mb-3
                      "
                    >
                      Kata Sandi
                    </label>

                    <div className="relative">
                      <div
                        className="
                          absolute
                          left-5
                          top-1/2
                          -translate-y-1/2
                          text-[#9D7A75]
                          text-lg
                        "
                      >
                        🔒
                      </div>

                      <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) =>
                          setPassword(
                            e.target.value
                          )
                        }
                        className="
                          w-full
                          pl-14
                          pr-5
                          py-4
                          rounded-2xl
                          border-2
                          border-[#DDBFBA]
                          bg-transparent
                          focus:outline-none
                          focus:border-[#0E766E]
                          transition-all
                          text-lg
                        "
                      />
                    </div>

                    <div className="flex justify-end mt-3">
                      <Link
                        href="#"
                        className="
                          text-sm
                          font-semibold
                          text-[#0E766E]
                          hover:underline
                        "
                      >
                        Lupa Kata Sandi?
                      </Link>
                    </div>
                  </div>

                  {/* ERROR */}
                  {error && (
                    <div
                      className="
                        bg-red-50
                        border
                        border-red-200
                        text-red-500
                        px-4
                        py-3
                        rounded-2xl
                        text-sm
                      "
                    >
                      {error}
                    </div>
                  )}

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      py-4
                      rounded-full
                      bg-[#0E766E]
                      text-white
                      font-bold
                      text-xl
                      hover:scale-[1.01]
                      active:scale-[0.99]
                      hover:shadow-xl
                      transition-all
                      disabled:opacity-50
                    "
                  >
                    {loading
                      ? "Loading..."
                      : "Masuk"}
                  </button>
                </form>

                {/* DIVIDER */}
                <div className="my-10 border-t border-[#E7D8D5]" />

                {/* LINK */}
                <p className="text-center text-[#3A2B2B]">
                  Bukan dokter?
                  <Link
                    href="/login"
                    className="
                      ml-1
                      text-[#C13D3D]
                      font-bold
                      hover:underline
                    "
                  >
                    Masuk di sini
                  </Link>
                </p>
              </div>

              {/* TRUST */}
              <div className="flex flex-wrap gap-4 mt-10">
                <div
                  className="
                    px-5
                    py-3
                    rounded-full
                    bg-[#F6E5E2]
                    text-sm
                    font-semibold
                    text-[#3A2B2B]
                    flex
                    items-center
                    gap-2
                  "
                >
                  🛡️ Data Terenkripsi
                </div>

                <div
                  className="
                    px-5
                    py-3
                    rounded-full
                    bg-[#F6E5E2]
                    text-sm
                    font-semibold
                    text-[#3A2B2B]
                    flex
                    items-center
                    gap-2
                  "
                >
                  ✳️ Akses 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
          border-t
          border-[#DDBFBA]
          px-8
          py-8
          bg-white/40
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-5
          "
        >
          <div>
            <h3
              className="
                text-4xl
                font-black
                text-[#B63131]
              "
            >
              PRIMA
            </h3>
          </div>

          <p className="text-[#3A2B2B] text-sm">
            © 2024 PRIMA. Playful
            Health for Everyone.
          </p>

          <div className="flex gap-8 text-sm text-[#2B1717]">
            <Link href="#">
              Tentang Kami
            </Link>

            <Link href="#">
              Kebijakan Privasi
            </Link>

            <Link href="#">
              Kontak
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}