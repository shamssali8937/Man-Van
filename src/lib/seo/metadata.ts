import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface MetadataProps {
  title?: string;
  exactTitle?: boolean;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Format an SEO title strictly under 60 characters.
 */
export function formatSeoTitle(
  title: string,
  brand: string = siteConfig.shortName,
): string {
  const clean = title.trim();
  if (!brand || clean.includes(brand) || clean.includes(siteConfig.name)) {
    return clean.length <= 58 ? clean : `${clean.slice(0, 55).trim()}...`;
  }

  const withBrand = `${clean} | ${brand}`;
  if (withBrand.length <= 58) {
    return withBrand;
  }

  const maxBase = 58 - (brand.length + 3);
  return `${clean.slice(0, Math.max(10, maxBase - 1)).trim()}… | ${brand}`;
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

export function constructMetadata({
  title,
  exactTitle = false,
  description = siteConfig.description,
  path = "",
  image = "/opengraph-image",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const fullTitle = title
    ? exactTitle
      ? formatSeoTitle(title, "")
      : formatSeoTitle(title)
    : formatSeoTitle("Reliable Moving & Man and Van");

  const finalDescription = formatSeoDescription(description);
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: finalDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
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
      title: fullTitle,
      description: finalDescription,
      images: [image],
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
