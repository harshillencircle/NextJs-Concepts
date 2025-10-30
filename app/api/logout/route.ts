import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const redirecturl = new URL('/login', request.url);
  
  const response = NextResponse.redirect(redirecturl);
  response.cookies.set("user", "", { expires: new Date(0), path: "/" });
  return response;
}
