import { safeJsonLd } from "@/lib/seo/schema";

interface JsonLdProps {
  data:
    | Record<string, unknown>
    | Array<Record<string, unknown> | null | undefined>
    | null
    | undefined;
}

/**
 * Renders a script tag with application/ld+json structured data.
 * All data is sanitized through safeJsonLd to prevent script injection (XSS).
 */
export function JsonLd({ data }: JsonLdProps) {
  if (!data) return null;
  const filteredData = Array.isArray(data)
    ? data.filter((item): item is Record<string, unknown> => item != null)
    : data;

  if (Array.isArray(filteredData) && filteredData.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: safeJsonLd escapes '<' characters
      dangerouslySetInnerHTML={{ __html: safeJsonLd(filteredData) }}
    />
  );
}
