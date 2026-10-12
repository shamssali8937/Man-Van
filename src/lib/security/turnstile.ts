import { env } from "@/lib/env";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<boolean> {
  // If turnstile secret is not set (e.g. in local development / test), bypass verification
  if (!env.CLOUDFLARE_TURNSTILE_SECRET_KEY) {
    return true;
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", env.CLOUDFLARE_TURNSTILE_SECRET_KEY);
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
    console.error("Cloudflare Turnstile verification error:", error);
    return false;
  }
}
