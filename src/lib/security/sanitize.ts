/**
 * Sanitizes an input string by removing potential HTML tags and trimming excess whitespace.
 */
export function sanitizeString(input: string): string {
  return input.replace(/<[^>]*>?/gm, "").trim();
}

export const sanitizeText = sanitizeString;

/**
 * HTML escaping utility to prevent XSS / HTML injection in templates.
 */
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strips Carriage Return and Line Feed to prevent SMTP / Header Injection.
 */
export function sanitizeHeader(input: string): string {
  if (!input) return "";
  return input.replace(/[\r\n]/g, "").trim();
}

/**
 * Sanitizes all string fields within an object recursively.
 */
export function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      result[key] = sanitizeString(value);
    } else if (value && typeof value === "object" && !Array.isArray(value)) {
      result[key] = sanitizeObject(value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}
