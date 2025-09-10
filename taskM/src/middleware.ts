import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  
  // Protect /dashboard
  const token = req.cookies.get('sb-access-token')?.value
  if (!token) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('redirect', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Configure the middleware to only run on the dashboard path
export const config = {
  matcher: ['/dashboard/:path*']
}
