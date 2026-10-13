import type { Metadata, Viewport } from "next";
import { type ReactNode, Suspense } from "react";
import "@/styles/globals.css";
import { CookieConsentBanner } from "@/components/common/cookie-consent";
import { Footer, Header, MobileActionBar } from "@/components/layout";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";
import { fontDisplay, fontSans } from "@/styles/fonts";

export const metadata: Metadata = constructMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
});

export const viewport: Viewport = {
  themeColor: "#03234C",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`h-full scroll-smooth ${fontDisplay.variable} ${fontSans.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans antialiased text-brand-navy bg-brand-paper selection:bg-brand-red selection:text-white pb-16 md:pb-0"
      >
        <Suspense>
          <Header />
        </Suspense>
        <div
          id="main-content"
          tabIndex={-1}
          className="flex-1 flex flex-col focus:outline-none"
        >
          {children}
        </div>
        <Footer />
        <MobileActionBar />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
