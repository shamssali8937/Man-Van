import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        {/* Brand Route Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-4">
          404 • Destination Not On Route
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          Page Not Found
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
          The removal page or URL you were looking for could not be located. You
          may have mistyped the route or the page has moved.
        </p>

        {/* Quick Navigation Links */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold">
          <Link
            href="/"
            className="rounded-xl bg-slate-900 p-3 text-white hover:bg-red-600 transition-colors"
          >
            Return Home &rarr;
          </Link>
          <Link
            href="/services"
            className="rounded-xl bg-white p-3 border border-slate-200 text-slate-900 hover:border-red-300 hover:text-red-600 transition-colors shadow-2xs"
          >
            Our Services
          </Link>
          <Link
            href="/areas"
            className="rounded-xl bg-white p-3 border border-slate-200 text-slate-900 hover:border-red-300 hover:text-red-600 transition-colors shadow-2xs"
          >
            Coverage Areas
          </Link>
          <Link
            href="/the-van"
            className="rounded-xl bg-white p-3 border border-slate-200 text-slate-900 hover:border-red-300 hover:text-red-600 transition-colors shadow-2xs"
          >
            The Luton Van
          </Link>
          <Link
            href="/faq"
            className="rounded-xl bg-white p-3 border border-slate-200 text-slate-900 hover:border-red-300 hover:text-red-600 transition-colors shadow-2xs"
          >
            Frequently Asked Questions
          </Link>
          <Link
            href="/quote"
            className="rounded-xl bg-red-600 p-3 text-white hover:bg-red-500 transition-colors"
          >
            Get a Free Quote &rarr;
          </Link>
        </div>

        {/* Direct Phone Help */}
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
          Need immediate removals assistance? Call our driver team directly on{" "}
          <a
            href={siteConfig.telHref}
            className="font-bold text-slate-900 hover:underline"
          >
            {siteConfig.telephone}
          </a>
        </div>
      </main>
      <div />
    </div>
  );
}
