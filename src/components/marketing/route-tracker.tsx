"use client";

import { useEffect, useState } from "react";

interface RouteStop {
  id: string;
  label: string;
  code: string;
}

const ROUTE_STOPS: RouteStop[] = [
  { id: "hero", label: "Dispatch", code: "01" },
  { id: "trust", label: "Principles", code: "02" },
  { id: "route-story", label: "Route", code: "03" },
  { id: "services-grid", label: "Services", code: "04" },
  { id: "load-planner", label: "Luton Van", code: "05" },
  { id: "coverage-map", label: "Coverage", code: "06" },
  { id: "faq-section", label: "FAQ", code: "07" },
  { id: "final-quote", label: "Quote", code: "08" },
];

/**
 * Clean Top-down Luton Van SVG Icon
 * Designed specifically for the vertical route track:
 * Faces downwards (cab at bottom, tail lift at top), centered on road centerline.
 */
function VerticalLutonVan({ className = "w-7 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 44"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <rect
        x="3"
        y="3"
        width="22"
        height="38"
        rx="3"
        fill="#03234C"
        fillOpacity="0.2"
      />

      {/* Main Cargo Box (Luton) */}
      <rect
        x="4"
        y="4"
        width="20"
        height="26"
        rx="2"
        fill="#DC0109"
        stroke="#03234C"
        strokeWidth="1.5"
      />
      {/* Box roof ridges */}
      <line
        x1="8"
        y1="8"
        x2="8"
        y2="26"
        stroke="#03234C"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <line
        x1="14"
        y1="8"
        x2="14"
        y2="26"
        stroke="#03234C"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <line
        x1="20"
        y1="8"
        x2="20"
        y2="26"
        stroke="#03234C"
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Rear Tail Lift Bar (at top) */}
      <rect
        x="6"
        y="2"
        width="16"
        height="3"
        fill="#DA985B"
        stroke="#03234C"
        strokeWidth="1"
      />

      {/* Overhang Pod over cab */}
      <rect
        x="5"
        y="29"
        width="18"
        height="4"
        rx="1"
        fill="#DC0109"
        stroke="#03234C"
        strokeWidth="1"
      />

      {/* Driver Cab (at bottom, pointing down) */}
      <path
        d="M5 33 L23 33 L21 41 L7 41 Z"
        fill="#03234C"
        stroke="#03234C"
        strokeWidth="1"
      />
      {/* Windshield */}
      <path d="M7 34 L21 34 L19 38 L9 38 Z" fill="#F6F4EE" />

      {/* Headlights (at front bumper, facing downwards) */}
      <circle cx="8" cy="41" r="1.5" fill="#DA985B" />
      <circle cx="20" cy="41" r="1.5" fill="#DA985B" />

      {/* Wing Mirrors */}
      <rect x="2" y="34" width="2" height="3" rx="0.5" fill="#03234C" />
      <rect x="24" y="34" width="2" height="3" rx="0.5" fill="#03234C" />
    </svg>
  );
}

export function RouteTracker() {
  const [activeStopIndex, setActiveStopIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user reached bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY + clientHeight >= scrollHeight - 80) {
        setActiveStopIndex(ROUTE_STOPS.length - 1);
        return;
      }

      // Find active section using getBoundingClientRect relative to viewport
      const triggerY = clientHeight * 0.45;
      for (let i = ROUTE_STOPS.length - 1; i >= 0; i--) {
        const element = document.getElementById(ROUTE_STOPS[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom > 0) {
            setActiveStopIndex(i);
            return;
          }
        }
      }
      setActiveStopIndex(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalStops = ROUTE_STOPS.length;
  // Calculate vertical position percentage (from stop 0 at 0% to stop 7 at 100%)
  const stopSpacingPercent = 100 / (totalStops - 1);
  const vanTopPercent = activeStopIndex * stopSpacingPercent;

  return (
    <aside
      aria-label="The Route Section Tracker"
      className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none"
    >
      <div className="bg-brand-paper/95 backdrop-blur-md border-2 border-brand-navy p-3 shadow-cargo rounded-xs flex flex-col items-center w-20">
        {/* Route Header Badge */}
        <div className="font-mono text-[9px] font-black text-brand-navy tracking-widest uppercase mb-1 text-center">
          THE ROUTE
        </div>
        <div className="font-mono text-[8px] font-bold text-brand-red tracking-wider mb-2">
          STOP {activeStopIndex + 1}/{totalStops}
        </div>

        {/* The Vertical Road Corridor */}
        <div className="relative w-12 h-[420px] bg-brand-navy-100/60 rounded-xs border-x-2 border-brand-navy/30 overflow-visible">
          {/* Center Road Dashed Line */}
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #03234C 0, #03234C 10px, transparent 10px, transparent 18px)",
            }}
            aria-hidden="true"
          />

          {/* DOCKED VAN: Perfectly centered on road centerline, moving smoothly between stops */}
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 ease-out z-20"
            style={{
              top: `${vanTopPercent}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <VerticalLutonVan className="w-6 h-10 drop-shadow-md" />
          </div>

          {/* Waypoint Stations along the track */}
          <nav
            aria-label="Route Station Stops"
            className="absolute inset-0 flex flex-col justify-between py-1 z-10"
          >
            {ROUTE_STOPS.map((stop, idx) => {
              const isActive = idx === activeStopIndex;
              const isPassed = idx < activeStopIndex;

              return (
                <a
                  key={stop.id}
                  href={`#${stop.id}`}
                  title={`Stop ${stop.code}: ${stop.label}`}
                  className="group relative flex items-center justify-center w-full h-7 outline-none"
                >
                  {/* Station Marker Pin */}
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all flex items-center justify-center ${
                      isActive
                        ? "bg-brand-red border-brand-navy scale-125 shadow-sm"
                        : isPassed
                          ? "bg-brand-navy border-brand-navy"
                          : "bg-brand-paper border-brand-navy/50 group-hover:border-brand-navy group-hover:bg-brand-tan"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>

                  {/* Tooltip Tag on Hover / Focus */}
                  <span
                    className={`absolute right-12 px-2 py-1 bg-brand-navy text-brand-paper font-mono text-[9px] uppercase font-bold rounded-xs transition-all pointer-events-none shadow-cargo-sm whitespace-nowrap ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-95"
                    }`}
                  >
                    <span className="text-brand-tan mr-1">{stop.code}.</span>
                    {stop.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer status label */}
        <div className="mt-2 text-center">
          <span className="font-mono text-[8px] font-bold text-brand-navy/70 uppercase tracking-tight block">
            {ROUTE_STOPS[activeStopIndex].label}
          </span>
        </div>
      </div>
    </aside>
  );
}
