import { clsx } from "clsx";
import { forwardRef, type SelectHTMLAttributes, useId } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError } from "./field-error";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[];
  error?: string;
  hint?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      children,
      error,
      hint,
      id,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const errorId = `${selectId}-error`;
    const hintId = `${selectId}-hint`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
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

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            className={twMerge(
              clsx(
                "w-full h-11 px-3.5 pr-10 bg-white border-2 text-brand-navy font-sans text-sm rounded-xs transition-colors duration-100 appearance-none cursor-pointer",
                "focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15",
                "disabled:bg-brand-paper-rule disabled:opacity-60 disabled:cursor-not-allowed",
                error
                  ? "border-brand-red focus:border-brand-red focus:ring-brand-red/15"
                  : "border-brand-navy/30 hover:border-brand-navy/60",
                className,
              ),
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                  >
                    {opt.label}
                  </option>
                ))
              : children}
          </select>

          {/* Custom Chevron Indicator */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-navy">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
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

Select.displayName = "Select";
