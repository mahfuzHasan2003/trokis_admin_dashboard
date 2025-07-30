import { NextResponse } from 'next/server'

export function middleware(request) {
   const isLoggedIn = true;
   const { pathname } = request.nextUrl;

   // Routes that should be accessible without login
   const publicRoutes = ['/signin', '/reset-password'];
   // Allow public routes
   if (!isLoggedIn && !publicRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL('/signin', request.url));
   }
   // Redirect logged-in users away from signin or root
   if (isLoggedIn && (pathname === '/signin' || pathname === '/')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
   }
   return NextResponse.next();
}

export const config = {
   matcher: '/((?!_next/static|_next/image|favicon.ico|api).*)',
};
