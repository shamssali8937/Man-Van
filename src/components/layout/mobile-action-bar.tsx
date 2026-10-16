import Link from "next/link";
import { siteConfig } from "@/content/site";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick mobile actions"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-brand-paper-light border-t-2 border-brand-navy shadow-cargo-lg select-none pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-3 gap-1.5 p-2 max-w-md mx-auto">
        {/* 1. Call Button */}
        <a
          href={siteConfig.telHref}
          className="flex flex-col items-center justify-center py-2 px-1 bg-brand-navy text-white rounded-xs border-2 border-brand-navy-950 shadow-xs hover:bg-brand-navy-800 active:translate-y-0.5 transition-transform"
        >
          <svg
            className="w-4 h-4 text-brand-red mb-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
          </svg>
          <span className="font-display italic font-black uppercase text-xs tracking-wider">
            CALL
          </span>
          <span className="font-mono text-[0.5625rem] text-white font-semibold tracking-tight leading-none">
            DIRECT
          </span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#075E54] text-white rounded-xs border-2 border-[#054c44] shadow-xs hover:bg-[#128C7E] active:translate-y-0.5 transition-transform"
        >
          <svg
            className="w-4 h-4 text-white mb-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="font-display italic font-black uppercase text-xs tracking-wider">
            WHATSAPP
          </span>
          <span className="font-mono text-[0.5625rem] text-white font-semibold tracking-tight leading-none">
            INSTANT
          </span>
        </a>

        {/* 3. Get Quote Button */}
        <Link
          href="/quote"
          className="flex flex-col items-center justify-center py-2 px-1 bg-brand-red text-white rounded-xs border-2 border-brand-red-700 shadow-xs hover:bg-brand-red-700 active:translate-y-0.5 transition-transform"
        >
          <svg
            className="w-4 h-4 text-white mb-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="font-display italic font-black uppercase text-xs tracking-wider">
            GET QUOTE
          </span>
          <span className="font-mono text-[0.5625rem] text-white font-semibold tracking-tight leading-none">
            FREE &amp; FAST
          </span>
        </Link>
      </div>
    </nav>
  );
}
