import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  //   if (url.pathname == "/news") {
  //     return NextResponse.redirect(new URL("/archive", request.url));
  //   }
  console.log(url);
  return NextResponse.next();
}

export const config = {
  matcher: ["/news"],
};
