import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/login"));
  response.cookies.set("user", "", { expires: new Date(0), path: "/" });
  return response;
}
