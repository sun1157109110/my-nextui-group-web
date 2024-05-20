import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { type NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./dictionaries";

const publicFile = /\.(.*)$/
// Get the preferred locale, similar to the above or using a library
function getLocale() {
  const headers = { "accept-language": defaultLocale };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale); // -> 'en-US'
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // if public file ,no redirect
  if (publicFile.test(pathname)) return

  // Redirect if there is no locale 
  const locale = getLocale();
  
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`

  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],

  // matcher: [
  //   "/author/:paht*",
  //   "/ci-pai-ming/:paht*",
  //   "/feedback/:paht*",
  //   "/list/:paht*",
  //   "/poem/:paht*",
  //   "/tag/:paht*",
  //   "/",
  // ],
};
