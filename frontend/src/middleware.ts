import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 인증이 필요하지 않은 페이지 목록
const publicPaths = ['/login', '/signup'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // 공개 페이지는 토큰 체크하지 않음
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // 토큰이 없으면 로그인 페이지로 리다이렉션
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 