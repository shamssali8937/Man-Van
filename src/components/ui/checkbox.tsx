import { clsx } from "clsx";
import { forwardRef, type InputHTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError } from "./field-error";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, id, className, disabled, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;
    const errorId = `${checkboxId}-error`;
    const descId = `${checkboxId}-desc`;

    return (
      <div className="flex flex-col gap-1 text-left">
        <label
          htmlFor={checkboxId}
          className={clsx(
            "group relative flex items-start gap-3 select-none cursor-pointer",
            disabled && "cursor-not-allowed opacity-60",
          )}
        >
          <div className="relative flex items-center justify-center shrink-0 mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              disabled={disabled}
              aria-invalid={Boolean(error)}
              aria-describedby={
                error ? errorId : description ? descId : undefined
              }
              className={twMerge(clsx("peer sr-only", className))}
              {...props}
            />

            {/* Custom Box */}
            <div
              className={clsx(
                "w-5 h-5 rounded-xs border-2 bg-white flex items-center justify-center transition-colors duration-100",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-navy peer-focus-visible:ring-offset-2",
                "peer-checked:bg-brand-navy peer-checked:border-brand-navy",
                error
                  ? "border-brand-red"
                  : "border-brand-navy/40 group-hover:border-brand-navy",
              )}
            >
              {/* Checkmark icon */}
              <svg
                className="w-3.5 h-3.5 text-white stroke-current stroke-[3] fill-none opacity-0 peer-checked:opacity-100 transition-opacity duration-100"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            {label && (
              <span className="font-sans text-sm font-semibold text-brand-navy group-hover:text-brand-navy-950">
                {label}
              </span>
            )}
            {description && (
              <span
                id={descId}
                className="font-sans text-xs text-brand-navy/70 leading-normal"
              >
                {description}
              </span>
            )}
          </div>
        </label>

        <FieldError id={errorId} message={error} className="ml-8" />
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
