import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface TapeDividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "standard" | "warning" | "navy-white";
  size?: "sm" | "md" | "lg";
  label?: string;
  repeatLabel?: boolean;
}

export function TapeDivider({
  variant = "standard",
  size = "md",
  label,
  repeatLabel = true,
  className,
  ...props
}: TapeDividerProps) {
  // Substantially increased heights when text label is present to prevent clipping
  const heightClasses = label
    ? {
        sm: "h-8 sm:h-9",
        md: "h-10 sm:h-11",
        lg: "h-12 sm:h-14",
      }[size]
    : {
        sm: "h-2.5",
        md: "h-4 sm:h-5",
        lg: "h-6 sm:h-8",
      }[size];

  const variantTape = {
    standard: "hazard-tape-stripe",
    warning: "hazard-tape-stripe-warning",
    "navy-white":
      "[background:repeating-linear-gradient(-45deg,#03234c,#03234c_14px,#f6f4ee_14px,#f6f4ee_28px)]",
  }[variant];

  if (!label) {
    return (
      <div
        aria-hidden="true"
        className={twMerge(
          clsx(
            "w-full border-y border-brand-navy-950 shadow-sm select-none pointer-events-none",
            heightClasses,
            variantTape,
            className,
          ),
        )}
        {...props}
      />
    );
  }

  // Labelled tape: High-visibility logistics hazard dispatch ribbon with continuous motion
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        clsx(
          "w-full relative overflow-hidden flex items-center bg-brand-navy-950 border-y-2 border-brand-red shadow-cargo-sm select-none pointer-events-none",
          heightClasses,
          className,
        ),
      )}
      {...props}
    >
      {/* Top & Bottom authentic hazard pinstripes */}
      <div className="absolute inset-x-0 top-0 h-1 hazard-tape-stripe opacity-95 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1 hazard-tape-stripe opacity-95 pointer-events-none" />

      {/* Ticker / Marquee Track for Seamless Infinite Scrolling */}
      <div className="tape-ticker-track flex items-center shrink-0">
        {[1, 2, 3, 4].map((itemIndex) => (
          <div
            key={itemIndex}
            className="flex items-center gap-4 sm:gap-6 px-4 whitespace-nowrap"
          >
            <span className="text-brand-red font-black text-sm sm:text-base tracking-widest">
              {"///"}
            </span>
            <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-white drop-shadow-sm">
              {label}
            </span>
            <span className="text-brand-tan font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-brand-navy px-2 py-0.5 rounded-xs border border-brand-tan/30">
              AB REMOVALS • UK TRANSIT
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
