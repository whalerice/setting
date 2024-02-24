import { NextResponse, NextRequest } from 'next/server';
import { getAuth, getTheme } from '@/lib/actions';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const theme = await getTheme();
  let response = NextResponse.redirect(request.url);

  if (!theme) {
    response.cookies.set('theme-mode', 'light');
    return response;
  }

  const path = request.nextUrl.pathname;
  const { role } = await getAuth();
  console.log('role', role);

  if (!role) {
    // 로그인 아닐 때
    if (path !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } else {
    // 로그인 일 때
    if (path === '/login' || path === '/') {
      return NextResponse.redirect(new URL(`/${role}`, request.url));
    }
    // if (
    //   (path === '/login' || path === '/') &&
    //   (role === 'super' || role === 'admin')
    // ) {
    //   return NextResponse.redirect(new URL('/admin', request.url));
    // } else if ((path === '/login' || path === '/') && role === 'agent') {
    //   return NextResponse.redirect(new URL('/agent', request.url));
    // }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
