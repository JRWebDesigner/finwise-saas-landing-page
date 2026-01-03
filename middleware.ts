import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";

  // Bloquear bots conocidos
  if (
    ua.includes("Googlebot") ||
    ua.includes("bingbot") ||
    ua.includes("BingPreview") ||
    ua.includes("DuckDuckBot") ||
    ua.includes("YandexBot")
  ) {
    return new NextResponse("Bots blocked", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
