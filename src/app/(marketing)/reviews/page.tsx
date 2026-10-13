import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { QuoteCtaCard } from "@/components/common/quote-cta-card";
import { reviews } from "@/content/reviews";
import {
  constructMetadata,
  formatSeoDescription,
  formatSeoTitle,
} from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: formatSeoTitle("Customer Reviews"),
  description: formatSeoDescription(
    "Verified customer reviews for AB Removals. Read honest feedback from residential, student, and commercial moves across the UK.",
  ),
  path: "/reviews",
});

export default function ReviewsPage() {
  const hasReviews = reviews && reviews.length > 0;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Reviews", href: "/reviews" }]} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
            Customer Feedback & Standards
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Customer Reviews
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We hold a strict policy of publishing only 100% verified, genuine
            customer reviews. We never manufacture artificial ratings or
            synthetic testimonials.
          </p>
        </div>

        {/* Content Section: Empty State or Reviews Grid */}
        <section
          aria-labelledby="reviews-section-heading"
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 id="reviews-section-heading" className="sr-only">
            Verified Reviews List
          </h2>

          {!hasReviews ? (
            /* Clean, Transparent Empty State */
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center shadow-xs">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl mb-4">
                ⭐
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                No Reviews Published Yet
              </h3>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
                As part of our commitment to transparency, we only display
                independently verified reviews submitted following real moves.
                We are currently collecting feedback from recent clients across
                our UK routes.
              </p>

              {/* Call to Leave a Review */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 max-w-2xl mx-auto">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  Have You Moved With Us?
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Share Your Experience
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Your feedback helps us continuously refine our removals
                  workflow and helps other UK movers make informed decisions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://g.page/r/abremovals/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-5 py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-xs active:scale-98"
                  >
                    <span>Leave a Google Review</span>
                  </a>
                  <a
                    href="https://www.trustpilot.com/review/abremovals.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#00b67a] hover:bg-[#009e6a] px-5 py-3 text-xs font-bold text-white transition-all duration-200 shadow-xs active:scale-98"
                  >
                    <span>Review on Trustpilot</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Layout Ready for Real Reviews */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((rev) => (
                <article
                  key={rev.id}
                  className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-slate-900 text-base">
                        {rev.author}
                      </span>
                      {rev.isVerified && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                          ✓ Verified Move
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mb-3">
                      {rev.service} • {rev.location} • {rev.date}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed italic">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>
                  {rev.rating && (
                    <div className="mt-4 pt-3 border-t border-slate-100 text-amber-500 text-sm">
                      {"★".repeat(rev.rating)}
                      {"☆".repeat(5 - rev.rating)}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Quote CTA */}
        <div className="max-w-4xl mx-auto">
          <QuoteCtaCard
            title="Book Your Upcoming Move"
            description="Experience punctual, professional removals across the UK. Get your clear, fixed-price quote today."
          />
        </div>
      </main>
    </div>
  );
}
