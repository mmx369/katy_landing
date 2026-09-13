import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, stripLocale } from "@/lib/i18n";

/**
 * Russian is served without a URL prefix to keep the already indexed addresses working, while the
 * app tree lives under `app/[lang]`. So an unprefixed request is rewritten to the default locale,
 * and the explicit `/ru` prefix is redirected away to avoid two URLs for the same page.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, firstSegment] = pathname.split("/");

  if (firstSegment === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = stripLocale(pathname);
    return NextResponse.redirect(url, 308);
  }

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except API routes, Next internals and files (they always carry an extension).
  matcher: ["/((?!api(?:/|$)|_next/|.*\\.).*)"],
};
