"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GuestOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (token) {
      router.replace("/home");
    }
  }, [router]);

  return <>{children}</>;
}