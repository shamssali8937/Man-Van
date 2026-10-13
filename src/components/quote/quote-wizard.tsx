"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { PlannerSummary } from "@/lib/validations/quote";
import { QuoteForm } from "./quote-form";

// Lazy-loaded client Load Planner component with fallback skeleton
const DynamicLoadPlanner = dynamic(
  () => import("./load-planner").then((mod) => mod.LoadPlanner),
  {
    ssr: false,
    loading: () => (
      <div
        aria-busy="true"
        className="bg-brand-paper border-2 border-brand-navy p-8 rounded-xs shadow-cargo animate-pulse space-y-6"
      >
        <div className="flex items-center justify-between border-b-2 border-brand-navy/20 pb-4">
          <div className="space-y-2">
            <div className="h-4 w-28 bg-brand-navy/20 rounded" />
            <div className="h-8 w-64 bg-brand-navy/30 rounded" />
          </div>
          <div className="h-6 w-32 bg-brand-navy/20 rounded" />
        </div>
        <div className="h-48 w-full bg-white border-2 border-brand-navy/20 rounded flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-navy/60 font-bold">
            INITIALIZING 3.5T LUTON VAN LOAD SIMULATOR...
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="h-20 bg-white border border-brand-navy/15 rounded"
            />
          ))}
        </div>
      </div>
    ),
  },
);

export function QuoteWizard() {
  const [plannerSummary, setPlannerSummary] = useState<
    PlannerSummary | undefined
  >(undefined);

  return (
    <div className="space-y-12">
      {/* STEP 1: Interactive Lazy-Loaded Cargo Planner */}
      <DynamicLoadPlanner onSummaryChange={setPlannerSummary} />

      {/* STEP 2: Main Quote & Transit Specification Form */}
      <QuoteForm plannerSummary={plannerSummary} />
    </div>
  );
}
