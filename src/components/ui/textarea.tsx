import { clsx } from "clsx";
import { forwardRef, type TextareaHTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError } from "./field-error";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, hint, id, className, disabled, rows = 4, ...props },
    ref,
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="flex items-center justify-between font-display uppercase italic font-bold text-xs tracking-wider text-brand-navy"
          >
            <span>{label}</span>
            {props.required && (
              <span className="text-brand-red text-[0.6875rem] font-sans font-semibold normal-case">
                *Required
              </span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={twMerge(
            clsx(
              "w-full p-3 bg-white border-2 text-brand-navy placeholder:text-brand-navy/40 font-sans text-sm rounded-xs transition-colors duration-100",
              "focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15",
              "disabled:bg-brand-paper-rule disabled:opacity-60 disabled:cursor-not-allowed",
              error
                ? "border-brand-red focus:border-brand-red focus:ring-brand-red/15"
                : "border-brand-navy/30 hover:border-brand-navy/60",
              className,
            ),
          )}
          {...props}
        />

        {hint && !error && (
          <p id={hintId} className="text-xs text-brand-navy/70 font-sans">
            {hint}
          </p>
        )}

        <FieldError id={errorId} message={error} />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
