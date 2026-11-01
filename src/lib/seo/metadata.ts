import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export interface MetadataProps {
  title?: string;
  exactTitle?: boolean;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Format an SEO title strictly under 60 characters for optimal SERP display.
 * Ensures the brand appears exactly once.
 */
export function formatSeoTitle(
  title: string,
  brand: string = siteConfig.shortName,
): string {
  let clean = title.trim();
  if (clean.length > 59 && clean.includes(" and ")) {
    clean = clean.replace(/ and /g, " & ");
  }

  // Deduplicate brand if it appears multiple times or with suffixes like UK
  const brandPattern = new RegExp(`(\\s*\\|\\s*${brand}(?:\\s+UK)?)+$`, "i");
  if (brandPattern.test(clean)) {
    clean = clean.replace(brandPattern, "").trim();
  }

  const withBrand = brand ? `${clean} | ${brand}` : clean;
  if (withBrand.length <= 59) {
    return withBrand;
  }

  if (clean.length <= 59) {
    return clean;
  }

  return clean.slice(0, 59).trim();
}

/**
 * Format an SEO description strictly between 120 and 160 characters.
 * Never hard-slices strings into broken words and never adds trailing ellipses.
 */
export function formatSeoDescription(desc: string, maxLen = 155): string {
  const clean = desc
    .replace(/\s+/g, " ")
    .replace(/\.{3,}$/, ".")
    .trim();
  if (clean.length <= maxLen) {
    return clean;
  }
  const slice = clean.slice(0, maxLen);
  const lastPeriod = slice.lastIndexOf(".");
  if (lastPeriod >= 120) {
    return slice.slice(0, lastPeriod + 1).trim();
  }
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace >= 120) {
    return `${slice.slice(0, lastSpace).trim()}.`;
  }
  return clean.slice(0, maxLen).trim();
}

/**
 * Reusable typed metadata constructor for Next.js pages.
 * Handles canonical URLs, en-GB hreflang alternates, Open Graph, Twitter cards, icons, and robots.
 */
export function constructMetadata({
  title,
  exactTitle = false,
  description = siteConfig.description,
  path = "",
  image = "/opengraph-image",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const pageTitle = title
    ? exactTitle
      ? title
      : formatSeoTitle(title)
    : formatSeoTitle("Reliable Moving & Man and Van");

  const finalDescription = formatSeoDescription(description);
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: pageTitle },
    description: finalDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-GB": canonicalUrl,
      },
    },
    openGraph: {
      title: pageTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: finalDescription,
      images: [image],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    verification: {
      google: [
        siteConfig.verification.google,
        `${siteConfig.verification.google}.html`,
      ],
      other: {
        "msvalidate.01": siteConfig.verification.bing,
      },
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
