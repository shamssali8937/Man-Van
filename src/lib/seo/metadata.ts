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
 */
export function formatSeoTitle(
  title: string,
  brand: string = siteConfig.shortName,
): string {
  let clean = title.trim();
  if (clean.length > 59 && clean.includes(" and ")) {
    clean = clean.replace(/ and /g, " & ");
  }
  if (!brand || clean.includes(brand) || clean.includes(siteConfig.name)) {
    return clean.length <= 59 ? clean : `${clean.slice(0, 56).trim()}...`;
  }

  const withBrand = `${clean} | ${brand}`;
  if (withBrand.length <= 59) {
    return withBrand;
  }

  if (clean.length <= 59) {
    return clean;
  }

  return `${clean.slice(0, 56).trim()}...`;
}

/**
 * Format an SEO description strictly under 160 characters.
 */
export function formatSeoDescription(desc: string, maxLen = 155): string {
  const clean = desc.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLen) {
    return clean;
  }
  const truncated = clean.slice(0, maxLen - 1);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > 70) {
    return `${truncated.slice(0, lastSpace)}...`;
  }
  return `${truncated}...`;
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
      ? formatSeoTitle(title, "")
      : formatSeoTitle(title)
    : formatSeoTitle("Reliable Moving & Man and Van");

  const finalDescription = formatSeoDescription(description);
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: exactTitle
      ? { absolute: pageTitle }
      : {
          default: pageTitle,
          template: `%s | ${siteConfig.shortName}`,
        },
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
