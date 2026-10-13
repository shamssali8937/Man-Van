import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { env } from "@/lib/env";

// In-memory sliding window rate limiter
// 5 requests per 10 minutes (600,000 ms)
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

interface RateLimitRecord {
  timestamps: number[];
  expiresAt: number;
}

const memoryStore = new Map<string, RateLimitRecord>();

/**
 * In-memory sliding-window rate limiter per identifier (e.g. client IP).
 * Enforces max 5 requests per 10-minute window without requiring external Redis.
 */
export function memoryRateLimit(
  identifier: string,
  limit = RATE_LIMIT_MAX,
  windowMs = RATE_LIMIT_WINDOW_MS,
): { success: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const windowStart = now - windowMs;

  const record = memoryStore.get(identifier);

  if (!record || now > record.expiresAt) {
    memoryStore.set(identifier, {
      timestamps: [now],
      expiresAt: now + windowMs,
    });
    return { success: true, remaining: limit - 1, reset: now + windowMs };
  }

  // Filter timestamps within current window
  const activeTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (activeTimestamps.length >= limit) {
    return {
      success: false,
      remaining: 0,
      reset: activeTimestamps[0] + windowMs,
    };
  }

  activeTimestamps.push(now);
  record.timestamps = activeTimestamps;
  record.expiresAt = now + windowMs;
  memoryStore.set(identifier, record);

  return {
    success: true,
    remaining: limit - activeTimestamps.length,
    reset: activeTimestamps[0] + windowMs,
  };
}

/**
 * Utility to clear the in-memory store for unit test suites.
 */
export function resetRateLimitStore(): void {
  memoryStore.clear();
}

let ratelimitInstance: Ratelimit | null = null;

if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    const redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    });

    ratelimitInstance = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, "600 s"),
      analytics: false,
      prefix: "ab_removals_quote_ratelimit",
    });
  } catch (_e) {
    ratelimitInstance = null;
  }
}

/**
 * Checks whether an IP is allowed to submit a quote request.
 * Uses Upstash Redis if configured; otherwise gracefully defaults to in-memory sliding window.
 */
export async function checkRateLimit(
  identifier: string,
): Promise<{ success: boolean; remaining?: number }> {
  if (ratelimitInstance) {
    try {
      const result = await ratelimitInstance.limit(identifier);
      return { success: result.success, remaining: result.remaining };
    } catch (_err) {
      // If Upstash connection fails, fall back to in-memory limiter
      return memoryRateLimit(identifier);
    }
  }

  return memoryRateLimit(identifier);
}
