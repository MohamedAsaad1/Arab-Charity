
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname
  const isPublicPath = path == '/signin' || path == '/signup' || path == '/' || path == '/login' || path.startsWith('/user');
  const token = request.cookies.get('token')?.value || '';
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  //  #TODO check if token is valid then dircet the user to the user page
  // #TODO chek if it is an org or user then redirect to the right page
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/user", request.nextUrl));
  }

  // check the user type 

  // if (path === 'verifyemail' && !token) {
  //   return NextResponse.redirect(new URL('/', request.nextUrl))
  // }

  // if (isPublicPath && token) {
  //   return NextResponse.redirect(new URL('/', request.nextUrl))
  // }

  // if (!isPublicPath && !token) {
  //   return NextResponse.redirect(new URL('/login', request.nextUrl))
  // }


}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/user/:path*',
    '/login',
    '/signup',
    '/signin',

  ]
}
