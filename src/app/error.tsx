"use client";

import Link from "next/link";
import { useEffect } from "react";
import { siteConfig } from "@/content/site";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log minimal operational error notification without leaking PII
    console.error("Application error boundary triggered:", error.message);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div />
      <main className="max-w-xl mx-auto px-4 sm:px-6 py-16 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-4">
          Route Interrupted • Technical Error
        </span>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
          Something Went Wrong
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
          An unexpected glitch interrupted this page. Our systems have logged
          the event, and no data was lost.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto rounded-xl bg-slate-900 px-6 py-3 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition-all focus:outline-hidden focus:ring-2 focus:ring-slate-900"
          >
            🔄 Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
          >
            Return to Home
          </Link>
          <a
            href={siteConfig.telHref}
            className="w-full sm:w-auto rounded-xl bg-red-600 px-6 py-3 text-xs font-bold text-white hover:bg-red-500 transition-all"
          >
            Call {siteConfig.telephone}
          </a>
        </div>

        {error.digest && (
          <p className="mt-8 font-mono text-[11px] text-slate-400">
            Error Reference ID: {error.digest}
          </p>
        )}
      </main>
      <div />
    </div>
  );
}
