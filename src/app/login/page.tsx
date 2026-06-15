"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GuestOnly from "@/components/auth/GuestOnly";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://backend-prima.vercel.app/auth/login",
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

      const token =
        result.data.token;

      const user =
        result.data.user;

      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "user_id",
        user.id
      );

      localStorage.setItem(
        "role",
        user.role
      );

      localStorage.setItem(
        "user_name",
        user.name
      );

      document.cookie = `token=${token}; path=/`;
      document.cookie = `role=${user.role}; path=/`;

      console.log(
        "LOGIN SUCCESS:",
        result
      );

      // redirect sesuai role
      if (
        user.role === "doctor"
      ) {
        router.push("/dashboard");
      } else if (
        user.role === "admin"
      ) {
        router.push("/dashboard");
      } else {
        router.push("/home");
      }
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
    <GuestOnly>
      <main className="min-h-screen bg-[#FFFBF5] flex flex-col overflow-hidden">
        <Navbar />

        {/* BG BLUR */}
        <div className="fixed top-[-10%] left-[-5%] w-100 h-100 bg-[#FF6B6B]/10 rounded-full blur-[100px] -z-10" />

        <div className="fixed bottom-[-10%] right-[-5%] w-100 h-100 bg-[#4ECDC4]/10 rounded-full blur-[100px] -z-10" />

        {/* ERROR MODAL */}
        {error && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-6">
            <div
              className="
                w-full
                max-w-md
                bg-white
                rounded-4xl
                p-8
                shadow-2xl
                border
                border-[#F0EAE0]
                animate-in
                fade-in
                zoom-in-95
              "
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-red-100
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  ⚠️
                </div>

                <div>
                  <h3 className="text-xl font-black text-gray-800">
                    Login gagal
                  </h3>

                  <p className="text-sm text-gray-500">
                    Coba cek lagi email atau
                    password kamu
                  </p>
                </div>
              </div>

              <div
                className="
                  bg-[#FFF5F5]
                  border
                  border-red-100
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  text-red-500
                "
              >
                {error}
              </div>

              <button
                onClick={() =>
                  setError("")
                }
                className="
                  mt-6
                  w-full
                  bg-[#FF6B6B]
                  text-white
                  py-3
                  rounded-full
                  font-bold
                  hover:opacity-90
                  transition
                "
              >
                Oke
              </button>
            </div>
          </div>
        )}

        {/* CONTENT */}
        <div className="grow flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="hidden lg:flex flex-col">
              <h1 className="text-5xl font-black leading-tight text-gray-800 mb-6">
                Halo lagi 👋 <br />
                siap lanjut hidup sehat?
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Akses konsultasi dokter,
                rekam medis, jadwal
                kesehatan, dan asisten AI
                kamu dalam satu tempat yang
                nyaman.
              </p>

              {/* IMAGE */}
              <div className="relative mt-12 w-full max-w-xl">
                <div className="absolute inset-0 bg-[#4ECDC4]/15 rounded-[3rem] rotate-3" />

                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
                  alt="Patient"
                  width={600}
                  height={600}
                  unoptimized
                  className="
                    relative
                    z-10
                    rounded-[3rem]
                    object-cover
                    shadow-2xl
                  "
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="
                  w-full
                  max-w-125
                  bg-white/90
                  backdrop-blur-md
                  border
                  border-[#F0EAE0]
                  rounded-4xl
                  p-8
                  shadow-sm
                "
              >
                {/* MOBILE LOGO */}
                <div className="lg:hidden text-center mb-8">
                  <span className="text-4xl font-black text-[#FF6B6B] tracking-tight">
                    PRIMA
                  </span>
                </div>

                {/* HEADER */}
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-gray-800 mb-2">
                    Masuk ke PRIMA
                  </h2>

                  <p className="text-gray-500">
                    Masuk sebagai pasien, dokter, atau admin
                  </p>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleLogin}
                  className="space-y-6"
                >
                  {/* EMAIL */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-500 ml-1">
                      EMAIL
                    </label>

                    <div className="relative group">
                      <div
                        className="
                          absolute
                          left-5
                          top-1/2
                          -translate-y-1/2
                          text-gray-400
                        "
                      >
                        ✉️
                      </div>

                      <input
                        type="email"
                        placeholder="nama@email.com"
                        value={email}
                        onChange={(e) =>
                          setEmail(
                            e.target.value
                          )
                        }
                        required
                        className="
                          w-full
                          pl-14
                          pr-5
                          py-4
                          rounded-2xl
                          border-2
                          border-[#F0EAE0]
                          bg-[#FFFBF8]
                          focus:outline-none
                          focus:border-[#4ECDC4]
                          focus:ring-4
                          focus:ring-[#4ECDC4]/10
                          transition-all
                        "
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-1">
                      <label className="text-sm font-semibold text-gray-500">
                        KATA SANDI
                      </label>
                    </div>

                    <div className="relative">
                      <div
                        className="
                          absolute
                          left-5
                          top-1/2
                          -translate-y-1/2
                          text-gray-400
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
                        required
                        className="
                          w-full
                          pl-14
                          pr-5
                          py-4
                          rounded-2xl
                          border-2
                          border-[#F0EAE0]
                          bg-[#FFFBF8]
                          focus:outline-none
                          focus:border-[#4ECDC4]
                          focus:ring-4
                          focus:ring-[#4ECDC4]/10
                          transition-all
                        "
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      py-4
                      rounded-full
                      bg-[#FF6B6B]
                      text-white
                      font-bold
                      text-lg
                      hover:scale-[1.01]
                      active:scale-[0.99]
                      hover:shadow-lg
                      transition-all
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                    "
                  >
                    {loading
                      ? "Masuk..."
                      : "Masuk"}
                  </button>
                </form>

                {/* REGISTER */}
                <p className="mt-10 text-center text-sm text-gray-500">
                  Belum punya akun?
                  <Link
                    href="/register"
                    className="
                      ml-2
                      text-[#FF6B6B]
                      font-bold
                      hover:underline
                    "
                  >
                    Daftar sekarang
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="pb-8 text-center text-sm text-gray-400">
          © 2026 PRIMA. Playful Health
          for Everyone.
        </footer>
      </main>
    </GuestOnly>
  );
}