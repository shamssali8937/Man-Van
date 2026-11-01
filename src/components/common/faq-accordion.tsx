interface FAQItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

export function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  description,
  className = "",
}: FaqAccordionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`w-full ${className}`}>
      {title && (
        <div className="mb-6 md:mb-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm md:text-base text-slate-600">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <details
            key={`${faq.question.slice(0, 20)}-${index}`}
            className="group rounded-xl border border-slate-200 bg-white p-4 md:p-5 transition-all shadow-xs open:shadow-sm open:border-slate-300"
          >
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 focus:outline-hidden group-hover:text-primary-600 transition-colors list-none">
              <span className="text-base md:text-lg pr-4">{faq.question}</span>
              <span className="shrink-0 transition-transform duration-200 group-open:rotate-180 text-slate-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
