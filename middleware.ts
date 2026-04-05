import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const profile = req.cookies.get('mouaad_profile')?.value
  const { pathname } = req.nextUrl

  if (pathname === '/' && profile) {
    return NextResponse.redirect(new URL(`/${profile}`, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
