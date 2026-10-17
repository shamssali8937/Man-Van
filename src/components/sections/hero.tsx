import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { heroContent } from "@/content/hero";

const blurData = {
  desktop:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAAIABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDHtHCsSV3AVqWt5CzqEUbieAV4H1oopyCJ/9k=",
  mobile:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAALABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDPSzgY8yn8qsR6dbHlmcDPXFVVVRC5wM4o09j58fJ4PFNtgkj/2Q==",
};

/**
 * Trust Strip Item Icons (Semantic inline SVGs matching reference layout)
 */
function TrustIcon({ id }: { id: string }) {
  switch (id) {
    case "experienced-team":
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-brand-tan shrink-0"
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Front center user */}
          <circle cx="16" cy="11" r="3.75" />
          <path d="M10 24.5v-2a6 6 0 0 1 12 0v2" />
          {/* Left user */}
          <circle cx="8.5" cy="12.5" r="2.75" />
          <path d="M4.5 24.5v-1.5a5 5 0 0 1 4.5-4.8" />
          {/* Right user */}
          <circle cx="23.5" cy="12.5" r="2.75" />
          <path d="M27.5 24.5v-1.5a5 5 0 0 0-4.5-4.8" />
        </svg>
      );
    case "fully-insured":
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-brand-tan shrink-0"
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 4.5L6.5 8.5v7c0 7.5 4.5 13.5 9.5 15 5-1.5 9.5-7.5 9.5-15v-7L16 4.5z" />
          <path d="M11.5 16l3.5 3.5 6.5-6.5" strokeWidth="2.2" />
        </svg>
      );
    case "on-time-reliable":
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-brand-tan shrink-0"
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="11.5" />
          <polyline points="16 10 16 16 21 13" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-brand-tan shrink-0"
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 4.5C11.3 4.5 7.5 8.3 7.5 13c0 6.5 8.5 15.5 8.5 15.5s8.5-9 8.5-15.5c0-4.7-3.8-8.5-8.5-8.5z" />
          <circle cx="16" cy="13" r="3.25" />
        </svg>
      );
  }
}

/**
 * Rebuilt Hero Section
 * Fully responsive, zero CLS, Server Component with high accessibility & WCAG AA contrast.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative bg-brand-navy-950 text-white overflow-hidden pb-24 sm:pb-28 md:pb-0"
    >
      {/* =========================================================================
          DESKTOP FULL-WIDTH BACKGROUND (>= 768px)
          Features the Luton van on the right third, Westminster skyline,
          and a dark directional navy overlay on the left for WCAG AAA text contrast.
          ========================================================================= */}
      <div className="hidden md:block absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={heroContent.images.desktop}
          alt={heroContent.images.alt}
          fill
          sizes="(min-width: 768px) 100vw, 0px"
          quality={75}
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={blurData.desktop}
          className="object-cover object-[right_center]"
        />
        {/* Directional gradient overlay: 100% solid on left, feathering into clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/90 to-brand-navy-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy-950 to-transparent" />
      </div>

      {/* =========================================================================
          "THE ROUTE" SWEPT ARC SVG ACCENTS
          Echoes the logo's red & navy dynamic curve sweeping behind the van.
          One-time CSS stroke-draw animation, disabled under prefers-reduced-motion.
          ========================================================================= */}
      <div
        className="hidden md:block absolute inset-0 z-1 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 720"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full opacity-60 md:opacity-75"
          aria-hidden="true"
        >
          <path
            d="M-100 480 C 350 480, 720 380, 1080 220 C 1220 160, 1380 180, 1540 260"
            stroke="#DC0109"
            strokeWidth="3"
            strokeLinecap="round"
            className="hero-route-arc"
          />
          <path
            d="M-100 495 C 340 495, 710 395, 1070 235 C 1210 175, 1370 195, 1540 275"
            stroke="#03234C"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="hero-route-arc"
          />
        </svg>
      </div>

      {/* =========================================================================
          MAIN HERO CONTENT GRID
          Desktop: Two-column grid, 55% text column on left, open van view on right.
          Mobile: Clean stacked order: Text -> Van Photo Card -> Full-width CTAs.
          ========================================================================= */}
      <div className="relative z-10 pt-8 pb-4 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 min-h-[auto] md:min-h-[min(720px,85svh)] flex flex-col justify-between">
        <Container className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content Column (55% width on desktop) */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6 max-w-2xl text-left">
              {/* Eyebrow with leading signal-red line */}
              <div className="flex items-center gap-2.5 sm:gap-3 animate-fade-slide-up">
                <span
                  className="w-6 sm:w-8 h-0.5 bg-brand-red inline-block"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-brand-tan">
                  {heroContent.eyebrow}
                </p>
              </div>

              {/* H1 Heading:
                  Line 1: "Moving Made Easy"
                  Line 2: "Across London & the UK" (visually distinct kraft tan + red swoosh underline)
              */}
              <h1
                id="hero-title"
                className="font-display uppercase italic font-black text-white leading-[0.98] sm:leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-fade-slide-up animate-delay-100"
              >
                <span className="block text-white drop-shadow-sm">
                  {heroContent.h1Line1}
                </span>
                <span className="relative inline-block mt-1 sm:mt-1.5 text-[#DA985B] drop-shadow-md">
                  {heroContent.h1Line2}
                  {/* Inline SVG Hand-drawn Red Swoosh Underline echoing logo */}
                  <svg
                    viewBox="0 0 380 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 text-brand-red pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 13C65 5 180 2 376 11C280 4 140 6 12 15C100 12 250 11 368 16"
                      stroke="#DC0109"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subheading Paragraph */}
              <p className="font-sans text-sm sm:text-base md:text-lg text-brand-paper leading-relaxed max-w-xl font-normal drop-shadow-xs pt-1 sm:pt-2 animate-fade-slide-up animate-delay-200">
                {heroContent.paragraph}
              </p>

              {/* Mobile Van Photo Card (shown between text and buttons on mobile < md) */}
              <div className="block md:hidden relative w-full aspect-16/10 rounded-xs overflow-hidden border-2 border-brand-navy shadow-cargo my-3 animate-fade-slide-up animate-delay-200">
                <Image
                  src={heroContent.images.mobile}
                  alt={heroContent.images.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 2rem), 0px"
                  quality={75}
                  priority
                  fetchPriority="high"
                  placeholder="blur"
                  blurDataURL={blurData.mobile}
                  className="object-cover object-center"
                />
              </div>

              {/* Call to Action Buttons:
                  Side-by-side on desktop, stacked full-width on mobile.
                  Minimum 48px touch targets, visible focus rings.
              */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 animate-fade-slide-up animate-delay-300">
                <Link
                  href={heroContent.primaryCta.href}
                  className="btn-shimmer inline-flex items-center justify-center h-12 sm:h-13 px-8 text-base font-display font-black uppercase italic tracking-wider bg-brand-red text-white border-2 border-brand-red-700 rounded-sm shadow-cargo hover:bg-brand-red-700 active:translate-y-0 transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy select-none min-h-[48px] w-full sm:w-auto text-center"
                >
                  {heroContent.primaryCta.label}
                </Link>

                <a
                  href={heroContent.secondaryCta.href}
                  className="inline-flex items-center justify-center h-12 sm:h-13 px-7 text-base font-display font-black uppercase italic tracking-wider bg-brand-navy-950/80 hover:bg-white hover:text-brand-navy text-white border-2 border-white/70 hover:border-white rounded-sm shadow-cargo hover:-translate-y-0.5 hover:shadow-cargo-lg active:translate-y-0 transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy select-none min-h-[48px] backdrop-blur-xs w-full sm:w-auto text-center"
                >
                  {heroContent.secondaryCta.label}
                </a>
              </div>
            </div>

            {/* Right Column (Desktop >= lg):
                Leaves the van photo and landmark skyline unobstructed.
            */}
            <div
              className="lg:col-span-5 relative hidden lg:block"
              aria-hidden="true"
            />
          </div>
        </Container>

        {/* =========================================================================
            FOUR-ITEM TRUST STRIP
            Rendered directly over the hero background without a separate panel fill.
            Matches reference layout: horizontal items with vertical line dividers.
            ========================================================================= */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-3 pb-3 sm:pb-4">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-y-3 sm:gap-y-4">
              {heroContent.trustStrip.map((item, index) => {
                const isDesktopLast = index === 3;
                const isMobileFirstCol = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`group flex items-center gap-2.5 sm:gap-3.5 py-1.5 sm:py-2 px-2 sm:px-4 md:px-5 lg:px-6 rounded-xs hover:bg-white/5 transition-all duration-200 ${
                      isDesktopLast
                        ? "md:border-r-0"
                        : "md:border-r md:border-white/25"
                    } ${
                      isMobileFirstCol
                        ? "border-r border-white/20"
                        : "border-r-0"
                    }`}
                  >
                    <div className="shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <TrustIcon id={item.id} />
                    </div>
                    <div className="flex flex-col justify-center leading-tight">
                      <span className="font-sans font-bold text-xs sm:text-sm text-white drop-shadow-sm tracking-tight sm:tracking-normal group-hover:text-brand-tan transition-colors">
                        {item.line1}
                      </span>
                      {Boolean(item.line2) && (
                        <span className="font-sans font-bold text-xs sm:text-sm text-white drop-shadow-sm tracking-tight sm:tracking-normal group-hover:text-brand-tan transition-colors">
                          {item.line2}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
