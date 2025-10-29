import { NextResponse, NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const user = request.cookies.get('user')?.value;
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
}
