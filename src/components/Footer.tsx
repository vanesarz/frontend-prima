import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-[#FFFBF5] px-8 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-bold text-[#4ECDC4]">
            PRIMA
          </h3>

          <p className="text-sm text-gray-400">
            © 2026 PRIMA
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="#">
            Tentang
          </Link>

          <Link href="#">
            Privasi
          </Link>

          <Link href="#">
            Bantuan
          </Link>

          <Link href="#">
            Kontak
          </Link>
        </div>
      </div>
    </footer>
  );
}