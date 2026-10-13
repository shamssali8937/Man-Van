"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui";
import {
  calculateLoadMetrics,
  ITEM_CATEGORIES,
  type ItemCategory,
  LUTON_VAN_CAPACITY_M3,
  PLANNER_DISCLAIMER,
  PLANNER_ITEMS,
  type PlannerItem,
} from "@/content/load-planner";
import type { PlannerSummary } from "@/lib/validations/quote";
import { LutonVanLoadSvg } from "./luton-van-load-svg";

const STORAGE_KEY = "ab_removals_load_planner_v1";

interface LoadPlannerProps {
  onSummaryChange?: (summary: PlannerSummary) => void;
  className?: string;
}

export function LoadPlanner({
  onSummaryChange,
  className = "",
}: LoadPlannerProps) {
  // State: item id -> quantity
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<
    ItemCategory["id"] | "all"
  >("all");
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>("");
  const [isHydrated, setIsHydrated] = useState(false);

  // 1. Restore state from sessionStorage on mount (guarded with try/catch)
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const stored = window.sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && typeof parsed === "object") {
            setQuantities(parsed);
          }
        }
      }
    } catch (error) {
      console.warn("Unable to read load planner from sessionStorage:", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // 2. Persist state to sessionStorage on changes (guarded with try/catch)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(quantities));
      }
    } catch (error) {
      console.warn("Unable to persist load planner to sessionStorage:", error);
    }
  }, [quantities, isHydrated]);

  // 3. Compute metrics
  const metrics = useMemo(() => {
    return calculateLoadMetrics(quantities);
  }, [quantities]);

  // 4. Build PlannerSummary for form submission
  const plannerSummary = useMemo<PlannerSummary>(() => {
    const itemsList = PLANNER_ITEMS.filter(
      (item) => (quantities[item.id] || 0) > 0,
    ).map((item) => ({
      id: item.id,
      name: item.name,
      quantity: quantities[item.id],
      volumeM3: Math.round(item.volumeM3 * quantities[item.id] * 10) / 10,
    }));

    const summaryText = itemsList
      .map((it) => `${it.quantity}x ${it.name}`)
      .join(", ");

    return {
      items: itemsList,
      totalVolumeM3: metrics.totalVolumeM3,
      vanFillPercentage: metrics.vanFillPercentage,
      suggestedHelpers: metrics.suggestedHelpersLabel,
      summaryText: summaryText || "No items selected in planner",
    };
  }, [quantities, metrics]);

  // 5. Notify parent callback on summary change
  useEffect(() => {
    if (onSummaryChange) {
      onSummaryChange(plannerSummary);
    }
  }, [plannerSummary, onSummaryChange]);

  // Update item quantity
  const handleUpdateQuantity = useCallback(
    (item: PlannerItem, delta: number) => {
      setQuantities((prev) => {
        const current = prev[item.id] || 0;
        const next = Math.max(0, current + delta);
        const updated = { ...prev };
        if (next === 0) {
          delete updated[item.id];
        } else {
          updated[item.id] = next;
        }

        // Screen reader announcement
        const action = delta > 0 ? "Added" : "Removed";
        setLiveAnnouncement(
          `${action} 1 ${item.name}. Current count: ${next}. Estimated volume: ${item.volumeM3} cubic metres each.`,
        );

        return updated;
      });
    },
    [],
  );

  const handleResetAll = useCallback(() => {
    setQuantities({});
    setLiveAnnouncement(
      "Load planner reset. All cargo items cleared from vehicle.",
    );
  }, []);

  // Filter items by active category
  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return PLANNER_ITEMS;
    return PLANNER_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      aria-labelledby="load-planner-heading"
      className={`bg-brand-paper border-2 border-brand-navy shadow-cargo rounded-xs overflow-hidden ${className}`}
    >
      {/* Accessible live region for screen readers */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="planner-live-region"
      >
        {liveAnnouncement}
      </div>

      {/* Header Bar */}
      <div className="bg-brand-navy text-brand-paper p-4 sm:p-6 border-b-2 border-brand-navy">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="red" size="sm">
                STEP 01
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-brand-tan">
                INTERACTIVE VAN LOAD ESTIMATOR
              </span>
            </div>
            <h2
              id="load-planner-heading"
              className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wide text-white"
            >
              Luton Van Cargo Planner
            </h2>
          </div>

          {metrics.totalItemsCount > 0 && (
            <button
              type="button"
              onClick={handleResetAll}
              className="self-start sm:self-auto font-mono text-xs uppercase text-brand-tan hover:text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-paper cursor-pointer"
            >
              Reset Cargo ({metrics.totalItemsCount} items)
            </button>
          )}
        </div>

        <p className="font-sans text-xs sm:text-sm text-brand-paper/85 mt-2 leading-relaxed max-w-3xl">
          Tap or click standard household and commercial cargo items below.
          Watch the 3.5t Luton box van fill up in real time to calculate your
          required space and recommended helpers before submitting your quote.
        </p>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 space-y-8">
        {/* =========================================================================
            1. VAN VISUALIZATION & REAL-TIME LOAD METRICS
            ========================================================================= */}
        <div className="bg-white border-2 border-brand-navy/30 p-4 sm:p-6 rounded-xs shadow-cargo-sm">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            {/* Left: Side-view SVG */}
            <div className="w-full lg:w-7/12">
              <LutonVanLoadSvg
                fillPercentage={metrics.vanFillPercentage}
                totalVolumeM3={metrics.totalVolumeM3}
                capacityM3={LUTON_VAN_CAPACITY_M3}
              />
            </div>

            {/* Right: Key Haulage Metrics Dashboard */}
            <div className="w-full lg:w-5/12 space-y-4">
              <div className="border-b-2 border-brand-navy/15 pb-3">
                <span className="font-mono text-[0.6875rem] font-bold text-brand-navy/60 uppercase tracking-widest block">
                  VEHICLE SPECIFICATION
                </span>
                <span className="font-display font-black text-lg text-brand-navy uppercase">
                  3.5T LUTON BOX VAN (19 M³ / 670 CU FT)
                </span>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-brand-paper p-3 border border-brand-navy/20 rounded-xs">
                  <span className="font-mono text-[0.625rem] text-brand-navy/70 uppercase block">
                    TOTAL VOLUME
                  </span>
                  <span className="font-display font-black text-xl text-brand-navy">
                    {metrics.totalVolumeM3}{" "}
                    <span className="text-xs font-mono font-bold text-brand-navy/70">
                      m³
                    </span>
                  </span>
                </div>

                <div className="bg-brand-paper p-3 border border-brand-navy/20 rounded-xs">
                  <span className="font-mono text-[0.625rem] text-brand-navy/70 uppercase block">
                    SELECTED ITEMS
                  </span>
                  <span className="font-display font-black text-xl text-brand-navy">
                    {metrics.totalItemsCount}
                  </span>
                </div>
              </div>

              {/* Recommended Crew Configuration */}
              <div className="bg-brand-navy-950/5 border-2 border-brand-navy p-3.5 rounded-xs">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="font-mono text-[0.6875rem] font-bold text-brand-navy uppercase tracking-wider">
                    RECOMMENDED CREW
                  </span>
                </div>
                <p className="font-sans text-sm font-bold text-brand-navy">
                  {metrics.suggestedHelpersLabel}
                </p>
                <p className="font-sans text-xs text-brand-navy/75 mt-0.5">
                  {metrics.hasHeavyItems
                    ? "Includes heavy/bulky cargo items requiring a 2-man lift."
                    : "Flexible loading assistance based on your estimated cargo volume."}
                </p>
              </div>
            </div>
          </div>

          {/* Legal / Operational Estimate Disclaimer */}
          <div className="mt-4 pt-3 border-t border-brand-navy/15 flex items-start gap-2 text-brand-navy/75 text-[0.6875rem] font-sans">
            <span className="font-mono font-bold text-brand-red shrink-0 uppercase">
              [DISCLAIMER]
            </span>
            <span>{PLANNER_DISCLAIMER}</span>
          </div>
        </div>

        {/* =========================================================================
            2. CATEGORY SELECTOR TABS
            ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-display uppercase font-bold text-xs tracking-wider text-brand-navy">
              CHOOSE CARGO CATEGORY
            </span>
            <span className="font-mono text-xs text-brand-navy/70">
              Showing {filteredItems.length} items
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Furniture Categories"
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-xs transition-colors whitespace-nowrap cursor-pointer border ${
                activeCategory === "all"
                  ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                  : "bg-white text-brand-navy border-brand-navy/30 hover:border-brand-navy"
              }`}
            >
              All Items ({PLANNER_ITEMS.length})
            </button>

            {ITEM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-xs transition-colors whitespace-nowrap cursor-pointer border ${
                  activeCategory === cat.id
                    ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                    : "bg-white text-brand-navy border-brand-navy/30 hover:border-brand-navy"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            3. INTERACTIVE ITEM CARDS GRID
            ========================================================================= */}
        <section
          aria-label="Available cargo items"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5"
        >
          {filteredItems.map((item) => {
            const count = quantities[item.id] || 0;
            const isSelected = count > 0;

            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between p-3.5 rounded-xs border-2 transition-all duration-150 select-none ${
                  isSelected
                    ? "bg-white border-brand-navy shadow-cargo-sm ring-1 ring-brand-navy/20"
                    : "bg-white/80 border-brand-navy/25 hover:border-brand-navy/60 hover:bg-white"
                }`}
              >
                {/* Top: Name & Volume Badge */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-sans text-xs sm:text-sm font-bold text-brand-navy leading-snug group-hover:text-brand-navy-950">
                      {item.name}
                    </h3>
                    {count > 0 && (
                      <span
                        title={`${count} selected`}
                        className="font-mono text-xs font-black bg-brand-red text-white px-2 py-0.5 rounded-xs shrink-0 shadow-sm"
                      >
                        &times;{count}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-[0.6875rem] font-sans text-brand-navy/65 leading-tight mb-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Bottom Bar: Estimated Volume & Counter Controls */}
                <div className="pt-2 border-t border-brand-navy/15 flex items-center justify-between mt-auto">
                  <span className="font-mono text-[0.6875rem] font-bold text-brand-navy/70">
                    ~{item.volumeM3} m³
                  </span>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1">
                    {count > 0 && (
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => handleUpdateQuantity(item, -1)}
                        className="w-7 h-7 flex items-center justify-center bg-brand-paper hover:bg-brand-paper-rule border border-brand-navy/40 text-brand-navy font-bold rounded-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
                      >
                        &minus;
                      </button>
                    )}

                    <button
                      type="button"
                      aria-label={`Add 1 ${item.name}`}
                      onClick={() => handleUpdateQuantity(item, 1)}
                      className={`h-7 px-2.5 flex items-center justify-center font-mono text-xs font-bold rounded-xs cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy ${
                        count > 0
                          ? "bg-brand-navy text-white hover:bg-brand-navy-950"
                          : "bg-brand-paper hover:bg-brand-navy hover:text-white border border-brand-navy/40 text-brand-navy"
                      }`}
                    >
                      {count > 0 ? "+ Add" : "+ Add"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}
