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
  repeatLabel = false,
  className,
  ...props
}: TapeDividerProps) {
  const heightClasses = {
    sm: "h-2.5",
    md: "h-5",
    lg: "h-8",
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

  return (
    <div
      aria-hidden="true"
      className={twMerge(
        clsx(
          "w-full relative overflow-hidden flex items-center justify-center border-y-2 border-brand-navy-950 shadow-cargo-sm select-none pointer-events-none",
          heightClasses,
          variantTape,
          className,
        ),
      )}
      {...props}
    >
      <div className="bg-brand-navy text-white px-3 py-0.5 font-display italic font-black uppercase text-xs tracking-widest border-x-2 border-brand-red flex items-center gap-2 select-none shadow-sm z-10 whitespace-nowrap">
        <span className="text-brand-red text-xs">{"///"}</span>
        <span>{label}</span>
        {repeatLabel && (
          <>
            <span className="text-brand-red text-xs">{"///"}</span>
            <span>{label}</span>
          </>
        )}
        <span className="text-brand-red text-xs">{"///"}</span>
      </div>
    </div>
  );
}
