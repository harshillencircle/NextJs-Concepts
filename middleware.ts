import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const user = request.cookies.get('user')?.value;
  if (!user) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
}
