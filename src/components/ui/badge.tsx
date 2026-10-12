import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "navy" | "red" | "tan" | "outline" | "warning";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  variant = "navy",
  size = "md",
  dot = false,
  className,
  ...props
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-[0.625rem] tracking-wider",
    md: "px-2.5 py-1 text-xs tracking-wider",
  }[size];

  const variantClasses = {
    navy: "bg-brand-navy text-white border border-brand-navy-950 font-display italic font-black uppercase",
    red: "bg-brand-red text-white border border-brand-red-700 font-display italic font-black uppercase",
    tan: "bg-brand-tan text-brand-navy-950 border border-brand-tan-700 font-display italic font-black uppercase",
    outline:
      "bg-transparent text-brand-navy border border-brand-navy/60 font-mono text-[0.6875rem] font-bold uppercase",
    warning:
      "bg-amber-100 text-amber-950 border border-amber-500 font-sans font-bold uppercase",
  }[variant];

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 rounded-xs select-none shadow-xs",
          sizeClasses,
          variantClasses,
          className,
        ),
      )}
      {...props}
    >
      {dot && (
        <span
          className={clsx(
            "w-1.5 h-1.5 rounded-full",
            variant === "navy" && "bg-brand-red",
            variant === "red" && "bg-white",
            variant === "tan" && "bg-brand-navy",
            variant === "outline" && "bg-brand-navy",
            variant === "warning" && "bg-amber-600",
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
