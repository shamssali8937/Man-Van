import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { constructMetadata } from "@/lib/seo/metadata";
import { fontDisplay, fontSans } from "@/styles/fonts";

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#03234C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`h-full scroll-smooth ${fontDisplay.variable} ${fontSans.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased text-brand-navy bg-brand-paper selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
