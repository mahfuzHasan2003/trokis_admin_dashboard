import { NextResponse } from 'next/server'

export function middleware(request) {
   const isLoggedIn = false;
   const { pathname } = request.nextUrl;
   if (!isLoggedIn && pathname !== '/signin') {
      return NextResponse.redirect(new URL('/signin', request.url));
   }
   if (isLoggedIn && (pathname === '/signin' || pathname === '/')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
   }
   return NextResponse.next();
}

export const config = {
   matcher: '/((?!_next/static|_next/image|favicon.ico|api).*)',
};
