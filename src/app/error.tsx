"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log minimal error boundary notification without personally identifiable info
    console.error("Application error boundary triggered:", error.message);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-[#0B2152]">
        Something went wrong
      </h1>
      <p className="mt-4 text-base text-slate-700">
        An unexpected error occurred. Please try again or contact us directly.
      </p>
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-[#0B2152] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0B2152]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2152]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
