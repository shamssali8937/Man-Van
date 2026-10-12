import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type StampRotation =
  | "-6"
  | "-5"
  | "-4"
  | "-3"
  | "-2"
  | "-1"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";

export interface StampProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "red" | "navy" | "kraft" | "muted";
  size?: "sm" | "md" | "lg";
  rotation?: StampRotation;
  subtext?: string;
}

export function Stamp({
  children,
  variant = "red",
  size = "md",
  rotation = "-3",
  subtext,
  className,
  ...props
}: StampProps) {
  const rotationClasses: Record<StampRotation, string> = {
    "-6": "-rotate-6",
    "-5": "-rotate-5",
    "-4": "-rotate-4",
    "-3": "-rotate-3",
    "-2": "-rotate-2",
    "-1": "-rotate-1",
    "0": "rotate-0",
    "1": "rotate-1",
    "2": "rotate-2",
    "3": "rotate-3",
    "4": "rotate-4",
    "5": "rotate-5",
    "6": "rotate-6",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[0.6875rem] border-[1.5px] tracking-widest",
    md: "px-3 py-1 text-xs border-2 tracking-widest",
    lg: "px-4 py-1.5 text-sm border-[2.5px] tracking-[0.2em]",
  }[size];

  const variantClasses = {
    red: "border-brand-red text-brand-red bg-brand-red/5 [text-shadow:0_0_1px_rgba(220,1,9,0.3)]",
    navy: "border-brand-navy text-brand-navy bg-brand-navy/5 [text-shadow:0_0_1px_rgba(3,35,76,0.3)]",
    kraft:
      "border-brand-tan-800 text-brand-tan-800 bg-brand-tan/10 [text-shadow:0_0_1px_rgba(142,88,36,0.3)]",
    muted: "border-brand-navy/40 text-brand-navy/60 bg-brand-navy/5",
  }[variant];

  return (
    <div
      className={twMerge(
        clsx(
          "inline-flex flex-col items-center justify-center font-display uppercase italic font-black select-none pointer-events-none transform transition-transform duration-150",
          "outline outline-1 outline-offset-1",
          variant === "red" && "outline-brand-red/40",
          variant === "navy" && "outline-brand-navy/40",
          variant === "kraft" && "outline-brand-tan-800/40",
          variant === "muted" && "outline-brand-navy/20",
          rotationClasses,
          sizeClasses,
          variantClasses,
          className,
        ),
      )}
      {...props}
    >
      <span>{children}</span>
      {subtext && (
        <span className="text-[0.5625rem] font-sans not-italic font-bold tracking-wider opacity-80 mt-0.5">
          {subtext}
        </span>
      )}
    </div>
  );
}
