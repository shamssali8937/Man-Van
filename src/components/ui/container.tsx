import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "default" | "narrow" | "wide" | "full";
}

export function Container({
  children,
  size = "default",
  className,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  }[size];

  return (
    <div
      className={twMerge(
        clsx("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses, className),
      )}
      {...props}
    >
      {children}
    </div>
  );
}
