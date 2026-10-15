import type { Metadata, Viewport } from "next";
import { type ReactNode, Suspense } from "react";
import "@/styles/globals.css";
import { CookieConsentBanner } from "@/components/common/cookie-consent";
import { FloatingWhatsApp } from "@/components/common/floating-whatsapp";
import { Footer, Header, MobileActionBar } from "@/components/layout";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  generateMovingCompanySchema,
  generateWebSiteSchema,
} from "@/lib/seo/schema";
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
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static inline script intercepting extension DOM mutations
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;

                // 1. Filter out known harmless browser extension hydration mismatch errors
                try {
                  var origError = console.error;
                  console.error = function() {
                    var fullText = '';
                    for (var i = 0; i < arguments.length; i++) {
                      var arg = arguments[i];
                      if (typeof arg === 'string') {
                        fullText += arg + ' ';
                      } else if (arg && arg.message) {
                        fullText += arg.message + ' ';
                      }
                    }
                    if (fullText.indexOf('bis_skin_checked') !== -1 || fullText.indexOf('bis_register') !== -1) {
                      return;
                    }
                    return origError.apply(console, arguments);
                  };
                } catch(e) {}

                // 2. Observe and immediately strip extension attributes injected into the DOM
                try {
                  var stripAttrs = function(node) {
                    if (node && node.nodeType === 1) {
                      if (node.hasAttribute && node.hasAttribute('bis_skin_checked')) {
                        node.removeAttribute('bis_skin_checked');
                      }
                      if (node.hasAttribute && node.hasAttribute('bis_register')) {
                        node.removeAttribute('bis_register');
                      }
                    }
                  };
                  var observer = new MutationObserver(function(mutations) {
                    for (var j = 0; j < mutations.length; j++) {
                      var m = mutations[j];
                      if (m.type === 'attributes') {
                        stripAttrs(m.target);
                      } else if (m.type === 'childList') {
                        for (var k = 0; k < m.addedNodes.length; k++) {
                          stripAttrs(m.addedNodes[k]);
                        }
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                    attributeFilter: ['bis_skin_checked', 'bis_register']
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans antialiased text-brand-navy bg-brand-paper selection:bg-brand-red selection:text-white pb-16 md:pb-0"
      >
        <JsonLd
          data={[generateMovingCompanySchema(), generateWebSiteSchema()]}
        />
        <Suspense>
          <Header />
        </Suspense>
        <div
          id="main-content"
          tabIndex={-1}
          suppressHydrationWarning
          className="flex-1 flex flex-col focus:outline-none"
        >
          {children}
        </div>
        <Footer />
        <MobileActionBar />
        <FloatingWhatsApp />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
