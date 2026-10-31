"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FieldError } from "@/components/ui/field-error";
import { searchUkPostcodes, type UKPostcodeItem } from "@/lib/geo/uk-postcodes";

interface PostcodeAutocompleteProps {
  id?: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  className?: string;
}

export function PostcodeAutocomplete({
  id,
  name,
  label,
  value,
  onChange,
  placeholder = "e.g. SW1A 1AA or Manchester",
  hint,
  error,
  className = "",
}: PostcodeAutocompleteProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<UKPostcodeItem[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Trigger search on value changes
  useEffect(() => {
    if (!value || value.trim().length === 0) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const matches = searchUkPostcodes(value, 6);
    setSuggestions(matches);
    setIsOpen(matches.length > 0);
    setHighlightedIndex(-1);
  }, [value]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: UKPostcodeItem) => {
    onChange(item.postcode);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) {
      if (e.key === "ArrowDown" && value.trim().length > 0) {
        const matches = searchUkPostcodes(value, 6);
        if (matches.length > 0) {
          setSuggestions(matches);
          setIsOpen(true);
        }
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1,
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      const selected = suggestions[highlightedIndex];
      if (selected) {
        handleSelect(selected);
      }
    } else if (e.key === "Escape" || e.key === "Tab") {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full text-left ${className}`}
    >
      {/* Label */}
      <label
        htmlFor={inputId}
        className="block font-display uppercase italic font-bold text-xs tracking-wider text-brand-navy mb-1.5"
      >
        <span>{label}</span>
      </label>

      {/* Input Field with search icon */}
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          id={inputId}
          name={name}
          type="text"
          role="combobox"
          value={value}
          autoComplete="off"
          autoCapitalize="characters"
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          aria-autocomplete="list"
          aria-expanded={isOpen}
          onFocus={() => {
            if (value.trim().length > 0) {
              const matches = searchUkPostcodes(value, 6);
              setSuggestions(matches);
              setIsOpen(matches.length > 0);
            }
          }}
          onChange={(e) => onChange(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          className={`w-full h-11 px-3.5 pr-9 bg-white border-2 text-brand-navy placeholder:text-brand-navy/40 font-mono text-sm rounded-xs transition-colors duration-100 uppercase focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 ${
            error
              ? "border-brand-red focus:border-brand-red focus:ring-brand-red/15"
              : "border-brand-navy/30 hover:border-brand-navy/60"
          }`}
        />

        {/* Search / Map Pin Icon */}
        <span className="absolute right-3 text-brand-navy/40 pointer-events-none select-none text-xs">
          🔍
        </span>
      </div>

      {/* Autocomplete Dropdown Menu */}
      {isOpen && suggestions.length > 0 && (
        <div
          role="listbox"
          aria-label={`${label} search suggestions`}
          className="absolute left-0 right-0 top-full mt-1 bg-white border-2 border-brand-navy rounded-xs shadow-cargo-lg z-50 max-h-60 overflow-y-auto divide-y divide-brand-navy/10"
        >
          {suggestions.map((item, index) => {
            const isHighlighted = index === highlightedIndex;

            return (
              <button
                type="button"
                key={`${item.postcode}-${index}`}
                role="option"
                aria-selected={isHighlighted}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => handleSelect(item)}
                className={`w-full p-2.5 cursor-pointer text-left transition-colors flex items-center justify-between gap-3 ${
                  isHighlighted
                    ? "bg-brand-navy text-white"
                    : "hover:bg-brand-paper bg-white text-brand-navy"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono font-black text-sm tracking-wider ${
                        isHighlighted ? "text-brand-tan" : "text-brand-red"
                      }`}
                    >
                      {item.postcode}
                    </span>
                    <span
                      className={`font-display font-bold text-xs uppercase ${
                        isHighlighted ? "text-white" : "text-brand-navy"
                      }`}
                    >
                      {item.city}
                    </span>
                  </div>
                  <p
                    className={`text-[11px] font-sans truncate max-w-xs ${
                      isHighlighted ? "text-white/80" : "text-brand-navy/70"
                    }`}
                  >
                    {item.area}
                  </p>
                </div>

                <span
                  className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-xs shrink-0 border ${
                    isHighlighted
                      ? "bg-white/10 text-white/90 border-white/20"
                      : "bg-brand-paper text-brand-navy/60 border-brand-navy/15"
                  }`}
                >
                  {item.region}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Hint Text */}
      {hint && !error && (
        <p id={hintId} className="mt-1 text-xs text-brand-navy/70 font-sans">
          {hint}
        </p>
      )}

      {/* Error Message */}
      <FieldError id={errorId} message={error} />
    </div>
  );
}
