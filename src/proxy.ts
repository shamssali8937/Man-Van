import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // Generate cryptographically secure per-request nonce
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const isDev = process.env.NODE_ENV !== "production";
  const scriptSrcDirective = isDev
    ? `script-src 'self' 'unsafe-eval' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com https://www.googletagmanager.com;`
    : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com https://www.googletagmanager.com;`;

  // Strict Content-Security-Policy:
  // Allows only self, per-request nonce, Cloudflare Turnstile, and Google Tag Manager
  // Frame-ancestors none, object-src none, base-uri self
  // In development mode, 'unsafe-eval' is permitted for React devtools / fast-refresh callstacks
  const cspHeader = `
    default-src 'self';
    ${scriptSrcDirective}
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://www.googletagmanager.com https://challenges.cloudflare.com;
    font-src 'self' data:;
    connect-src 'self' https://challenges.cloudflare.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com;
    frame-src 'self' https://challenges.cloudflare.com;
    frame-ancestors 'none';
    form-action 'self';
    base-uri 'self';
    object-src 'none';
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  // Forward nonce and CSP in request headers for Server Components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set strict security headers
  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static assets)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
