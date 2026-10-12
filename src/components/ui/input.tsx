import { clsx } from "clsx";
import { forwardRef, type InputHTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError } from "./field-error";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  prefixText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, hint, prefixText, id, className, disabled, ...props },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
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

        <div className="relative flex items-center">
          {prefixText && (
            <span className="inline-flex items-center px-3 h-11 bg-brand-paper-rule border-2 border-r-0 border-brand-navy/30 text-brand-navy font-mono text-xs font-bold select-none rounded-l-xs">
              {prefixText}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            className={twMerge(
              clsx(
                "w-full h-11 px-3.5 bg-white border-2 text-brand-navy placeholder:text-brand-navy/40 font-sans text-sm rounded-xs transition-colors duration-100",
                "focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15",
                "disabled:bg-brand-paper-rule disabled:opacity-60 disabled:cursor-not-allowed",
                error
                  ? "border-brand-red focus:border-brand-red focus:ring-brand-red/15"
                  : "border-brand-navy/30 hover:border-brand-navy/60",
                prefixText && "rounded-l-none",
                className,
              ),
            )}
            {...props}
          />
        </div>

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

Input.displayName = "Input";
