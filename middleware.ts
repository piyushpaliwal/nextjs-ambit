import { type NextRequest, NextResponse } from 'next/server'
import type { LocaleEnum } from 'types/locale'
import { isPageAllowedInLocale } from 'utils/helpers'

export function middleware(req: NextRequest) {
  const { pathname, locale } = req.nextUrl
  const isAllowed = isPageAllowedInLocale(pathname, locale as LocaleEnum)
  if (!isAllowed) {
    const url = req.nextUrl.clone()
    url.pathname = `/${locale}`
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
