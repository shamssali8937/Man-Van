import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize =
  | "display-2xl"
  | "display-xl"
  | "display-lg"
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "heading-sm";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  children: ReactNode;
  withRoadLine?: boolean;
  accentWord?: string;
  variant?: "navy" | "red" | "paper" | "tan";
}

export function Heading({
  as: Component = "h2",
  size,
  children,
  withRoadLine = false,
  variant = "navy",
  className,
  ...props
}: HeadingProps) {
  // Default size mapping according to heading level
  const defaultSize: Record<HeadingLevel, HeadingSize> = {
    h1: "display-xl",
    h2: "display-lg",
    h3: "heading-xl",
    h4: "heading-lg",
    h5: "heading-md",
    h6: "heading-sm",
  };

  const resolvedSize = size || defaultSize[Component];

  const sizeClasses: Record<HeadingSize, string> = {
    "display-2xl": "text-[var(--text-display-2xl)] leading-[0.92]",
    "display-xl": "text-[var(--text-display-xl)] leading-[0.95]",
    "display-lg": "text-[var(--text-display-lg)] leading-[1.0]",
    "heading-xl": "text-[var(--text-heading-xl)] leading-[1.05]",
    "heading-lg": "text-[var(--text-heading-lg)] leading-[1.1]",
    "heading-md": "text-[var(--text-heading-md)] leading-[1.15]",
    "heading-sm": "text-base leading-[1.2]",
  };

  const variantColor = {
    navy: "text-brand-navy",
    red: "text-brand-red",
    paper: "text-brand-paper-light",
    tan: "text-brand-tan-800",
  }[variant];

  return (
    <div className="relative inline-block max-w-full">
      <Component
        className={twMerge(
          clsx(
            "font-display italic font-black uppercase tracking-wider",
            sizeClasses[resolvedSize],
            variantColor,
            className,
          ),
        )}
        {...props}
      >
        {children}
      </Component>

      {/* The Route: swoosh road arc accent underline */}
      {withRoadLine && (
        <div
          className="mt-2 h-1.5 w-full max-w-[140px] bg-brand-red flex items-center shadow-sm"
          aria-hidden="true"
        >
          <div className="h-full w-1/3 bg-brand-navy" />
          <div className="h-full w-2/3 bg-brand-red" />
        </div>
      )}
    </div>
  );
}
