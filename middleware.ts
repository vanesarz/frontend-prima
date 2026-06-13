import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;

  // Belum login
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  // Hanya ADMIN dan DOCTOR yang boleh masuk dashboard
  if (
    pathname.startsWith("/dashboard") &&
    role !== "ADMIN" &&
    role !== "DOCTOR"
  ) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};