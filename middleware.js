import { NextResponse } from 'next/server'

export function middleware(request) {
   const isLoggedIn = true;

   if (request.nextUrl.pathname === '/') {
      return NextResponse.redirect(
         isLoggedIn ? new URL('/dashboard', request.url) : new URL('/login', request.url)
      )
   }

   return NextResponse.next();
}

export const config = {
   matchers: ['/'],
}