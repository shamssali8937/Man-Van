/**
 * Sanitizes an input string by removing potential HTML tags and trimming excess whitespace.
 */
export function sanitizeString(input: string): string {
  return input.replace(/<[^>]*>?/gm, "").trim();
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
