import { clsx } from "clsx";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "kraft";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider italic font-black transition-transform duration-100 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

  const sizeClasses = {
    sm: "h-9 px-3.5 text-xs rounded-sm",
    md: "h-11 px-5 text-sm rounded-sm",
    lg: "h-13 px-7 text-base rounded-md",
  }[size];

  const variantClasses = {
    primary:
      "bg-brand-red text-white border-2 border-brand-red-700 shadow-cargo hover:bg-brand-red-700 active:translate-y-0.5 active:shadow-none",
    secondary:
      "bg-brand-navy text-white border-2 border-brand-navy-950 shadow-cargo active:translate-y-0.5 active:shadow-none hover:bg-brand-navy-800",
    ghost:
      "bg-transparent text-brand-navy border-2 border-brand-navy/40 hover:bg-brand-navy/10 hover:border-brand-navy active:translate-y-0.5",
    kraft:
      "bg-brand-tan text-brand-navy-950 border-2 border-brand-tan-700 shadow-cargo-sm hover:bg-brand-tan-300 active:translate-y-0.5 active:shadow-none",
  }[variant];

  const combinedClasses = twMerge(
    clsx(baseClasses, sizeClasses, variantClasses, className),
  );

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
