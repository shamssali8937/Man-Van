import { env } from "@/lib/env";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

/**
 * Server-side verification of Cloudflare Turnstile token.
 * If Turnstile is omitted / unconfigured in environment, gracefully returns true.
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<boolean> {
  // If no secret key is configured, bypass Turnstile verification
  if (!env.TURNSTILE_SECRET_KEY) {
    return true;
  }

  // If token is missing when secret key IS required, fail verification
  if (!token) {
    return false;
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", env.TURNSTILE_SECRET_KEY);
    formData.append("response", token);
    if (remoteIp) {
      formData.append("remoteip", remoteIp);
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const data = (await response.json()) as TurnstileVerifyResponse;
    return Boolean(data.success);
  } catch (error) {
    console.error("Cloudflare Turnstile verification network error:", error);
    return false;
  }
}
