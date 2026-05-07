import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "PRIMA APP",
  description: "Platform Rekam Informasi Medis & Akses Kesehatan",
  // iconnya ntar ambil langsung dari public folder, biar bisa dipake di favicon
  // icons: {
  //   icon: [
  //     { rel: "icon", url: "#", type: "image/png" }
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gray-50">
          <main className="space-y-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}