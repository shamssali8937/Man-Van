import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { TapeDivider } from "./tape-divider";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "paper" | "white" | "navy" | "kraft-tint";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  withGrid?: boolean;
  topTape?: boolean;
  bottomTape?: boolean;
  tapeLabel?: string;
}

export function Section({
  children,
  variant = "paper",
  spacing = "md",
  withGrid = false,
  topTape = false,
  bottomTape = false,
  tapeLabel,
  className,
  ...props
}: SectionProps) {
  const variantClasses = {
    paper: "bg-brand-paper text-brand-navy",
    white: "bg-white text-brand-navy",
    navy: "bg-brand-navy text-brand-paper-light",
    "kraft-tint": "bg-brand-tan-50 text-brand-navy-950",
  }[variant];

  const spacingClasses = {
    none: "py-0",
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16 lg:py-20",
    lg: "py-16 sm:py-24 lg:py-28",
    xl: "py-20 sm:py-32",
  }[spacing];

  return (
    <section
      className={twMerge(
        clsx(
          "relative w-full overflow-hidden",
          variantClasses,
          withGrid && "bg-route-grid",
          className,
        ),
      )}
      {...props}
    >
      {topTape && <TapeDivider size="md" label={tapeLabel} />}

      <div className={clsx(spacingClasses)}>{children}</div>

      {bottomTape && <TapeDivider size="md" />}
    </section>
  );
}
