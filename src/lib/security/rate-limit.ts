import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { env } from "@/lib/env";

// In-memory fallback if Upstash Redis credentials are not provided
const memoryStore = new Map<string, { count: number; expiresAt: number }>();

function memoryRateLimit(
  identifier: string,
  limit = 5,
  windowMs = 60000,
): { success: boolean } {
  const now = Date.now();
  const record = memoryStore.get(identifier);

  if (!record || now > record.expiresAt) {
    memoryStore.set(identifier, { count: 1, expiresAt: now + windowMs });
    return { success: true };
  }

  if (record.count >= limit) {
    return { success: false };
  }

  record.count += 1;
  return { success: true };
}

let ratelimitInstance: Ratelimit | null = null;

if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: env.UPSTASH_REDIS_REST_URL,
    token: env.UPSTASH_REDIS_REST_TOKEN,
  });

  ratelimitInstance = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    analytics: true,
    prefix: "ab_removals_rate_limit",
  });
}

export async function checkRateLimit(
  identifier: string,
): Promise<{ success: boolean }> {
  if (ratelimitInstance) {
    const result = await ratelimitInstance.limit(identifier);
    return { success: result.success };
  }

  return memoryRateLimit(identifier);
}
