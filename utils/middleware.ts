import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export function middleware(req: NextRequest) {
  const country = req.geo.country?.toLowerCase() || "us";

  req.nextUrl.pathname = `/${country}`;

  return NextResponse.rewrite(req.nextUrl);
}
