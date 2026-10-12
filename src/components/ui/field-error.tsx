import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface FieldErrorProps extends HTMLAttributes<HTMLParagraphElement> {
  message?: string;
}

export function FieldError({
  message,
  id,
  className,
  ...props
}: FieldErrorProps) {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      className={twMerge(
        clsx(
          "flex items-center gap-1.5 text-xs font-semibold text-brand-red font-sans mt-0.5",
          className,
        ),
      )}
      {...props}
    >
      <svg
        className="w-3.5 h-3.5 shrink-0"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM7 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V4Zm1 8a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
          clipRule="evenodd"
        />
      </svg>
      <span>{message}</span>
    </p>
  );
}
