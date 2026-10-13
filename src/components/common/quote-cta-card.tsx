import Link from "next/link";
import { siteConfig } from "@/content/site";

interface QuoteCtaCardProps {
  title?: string;
  description?: string;
  serviceSlug?: string;
  cityName?: string;
  buttonText?: string;
  className?: string;
}

export function QuoteCtaCard({
  title = "Ready for a Stress-Free Move?",
  description = "Get an upfront, transparent quote with zero hidden charges. Fast booking, punctual Luton vans, and professional moving crews.",
  serviceSlug,
  cityName,
  buttonText = "Get a Free Instant Quote",
  className = "",
}: QuoteCtaCardProps) {
  const quoteHref = serviceSlug
    ? `/quote?service=${encodeURIComponent(serviceSlug)}`
    : "/quote";

  return (
    <section
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 text-white shadow-xl ${className}`}
    >
      {/* Decorative route swoosh background */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3.5 py-1 text-xs font-semibold text-red-300 ring-1 ring-red-500/30 mb-4">
          The Reliable Removal Route{" "}
          {cityName ? `• ${cityName}` : "• Nationwide UK"}
        </span>

        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
          {title}
        </h2>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8">
          <Link
            href={quoteHref}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-red-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-red-900/30 hover:bg-red-500 active:scale-95 transition-all focus:outline-hidden focus:ring-2 focus:ring-red-400"
          >
            {buttonText}
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <a
            href={siteConfig.telHref}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-base font-semibold text-white hover:bg-slate-700/80 active:scale-95 transition-all"
          >
            <svg
              className="mr-2 h-4 w-4 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call {siteConfig.telephone}
          </a>
        </div>

        {/* Trust features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-slate-800 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-emerald-400 font-bold">✓</span> No hidden fees
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-emerald-400 font-bold">✓</span> Luton vans
            with tail lifts
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-emerald-400 font-bold">✓</span> Fully insured
            goods
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-emerald-400 font-bold">✓</span> 7-day
            availability
          </div>
        </div>
      </div>
    </section>
  );
}
