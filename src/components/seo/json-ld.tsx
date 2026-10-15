import { safeJsonLd } from "@/lib/seo/schema";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Renders a script tag with application/ld+json structured data.
 * All data is sanitized through safeJsonLd to prevent script injection (XSS).
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: safeJsonLd escapes '<' characters
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
