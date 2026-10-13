import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface LabelCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "paper" | "kraft" | "navy";
  consignmentNo?: string;
  destinationCode?: string;
  routeCode?: string;
  hasBarcode?: boolean;
  hasPerforation?: boolean;
  hasEyelet?: boolean;
  cornerStamp?: ReactNode;
  priority?: "STANDARD" | "PRIORITY" | "FRAGILE" | "DIRECT";
}

/**
 * Pure SVG Barcode strip for parcel labels
 */
export function BarcodeStrip({
  code = "AB-UK-TRANSIT-98214",
  className,
}: {
  code?: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        clsx(
          "flex flex-col items-center justify-center p-2 bg-white/80 border border-brand-navy/20 rounded-xs select-none",
          className,
        ),
      )}
    >
      <svg
        viewBox="0 0 240 40"
        className="w-full max-w-[240px] h-9"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect x="0" y="0" width="3" height="40" fill="#03234C" />
        <rect x="5" y="0" width="2" height="40" fill="#03234C" />
        <rect x="10" y="0" width="5" height="40" fill="#03234C" />
        <rect x="18" y="0" width="2" height="40" fill="#03234C" />
        <rect x="23" y="0" width="4" height="40" fill="#03234C" />
        <rect x="30" y="0" width="1" height="40" fill="#03234C" />
        <rect x="34" y="0" width="6" height="40" fill="#03234C" />
        <rect x="43" y="0" width="2" height="40" fill="#03234C" />
        <rect x="48" y="0" width="3" height="40" fill="#03234C" />
        <rect x="54" y="0" width="5" height="40" fill="#03234C" />
        <rect x="62" y="0" width="1" height="40" fill="#03234C" />
        <rect x="66" y="0" width="4" height="40" fill="#03234C" />
        <rect x="73" y="0" width="2" height="40" fill="#03234C" />
        <rect x="78" y="0" width="6" height="40" fill="#03234C" />
        <rect x="87" y="0" width="3" height="40" fill="#03234C" />
        <rect x="93" y="0" width="2" height="40" fill="#03234C" />
        <rect x="98" y="0" width="5" height="40" fill="#03234C" />
        <rect x="106" y="0" width="1" height="40" fill="#03234C" />
        <rect x="110" y="0" width="4" height="40" fill="#03234C" />
        <rect x="117" y="0" width="3" height="40" fill="#03234C" />
        <rect x="123" y="0" width="5" height="40" fill="#03234C" />
        <rect x="131" y="0" width="2" height="40" fill="#03234C" />
        <rect x="136" y="0" width="4" height="40" fill="#03234C" />
        <rect x="143" y="0" width="1" height="40" fill="#03234C" />
        <rect x="147" y="0" width="6" height="40" fill="#03234C" />
        <rect x="156" y="0" width="3" height="40" fill="#03234C" />
        <rect x="162" y="0" width="2" height="40" fill="#03234C" />
        <rect x="167" y="0" width="5" height="40" fill="#03234C" />
        <rect x="175" y="0" width="2" height="40" fill="#03234C" />
        <rect x="180" y="0" width="4" height="40" fill="#03234C" />
        <rect x="187" y="0" width="1" height="40" fill="#03234C" />
        <rect x="191" y="0" width="6" height="40" fill="#03234C" />
        <rect x="200" y="0" width="3" height="40" fill="#03234C" />
        <rect x="206" y="0" width="4" height="40" fill="#03234C" />
        <rect x="213" y="0" width="2" height="40" fill="#03234C" />
        <rect x="218" y="0" width="5" height="40" fill="#03234C" />
        <rect x="226" y="0" width="2" height="40" fill="#03234C" />
        <rect x="231" y="0" width="4" height="40" fill="#03234C" />
        <rect x="238" y="0" width="2" height="40" fill="#03234C" />
      </svg>
      <span className="font-mono text-[0.625rem] font-bold tracking-[0.25em] text-brand-navy uppercase mt-1">
        {code}
      </span>
    </div>
  );
}

export function LabelCard({
  children,
  variant = "paper",
  consignmentNo,
  destinationCode,
  routeCode,
  hasBarcode = false,
  hasPerforation = true,
  hasEyelet = true,
  cornerStamp,
  priority,
  className,
  ...props
}: LabelCardProps) {
  const variantStyles = {
    paper:
      "bg-brand-paper-light border-2 border-brand-navy shadow-cargo text-brand-navy",
    kraft:
      "bg-brand-tan-100 border-2 border-brand-tan-700 shadow-cargo text-brand-navy-950",
    navy: "bg-brand-navy border-2 border-brand-navy-950 shadow-cargo-red text-brand-paper-light",
  }[variant];

  return (
    <div
      suppressHydrationWarning
      className={twMerge(
        clsx(
          "relative flex flex-col rounded-sm overflow-hidden",
          variantStyles,
          className,
        ),
      )}
      {...props}
    >
      {/* Eyelet hole / tie punch at top right */}
      {hasEyelet && (
        <div
          className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-brand-navy/60 bg-brand-paper shadow-inner flex items-center justify-center z-10"
          title="Consignment Tag Eyelet"
          aria-hidden="true"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/30" />
        </div>
      )}

      {/* Floating corner stamp if supplied */}
      {cornerStamp && (
        <div className="absolute -top-1 -right-1 z-20 pointer-events-none transform rotate-6">
          {cornerStamp}
        </div>
      )}

      {/* Waybill Manifest Header */}
      {(consignmentNo || destinationCode || routeCode || priority) && (
        <div
          className={clsx(
            "flex flex-wrap items-center justify-between gap-2 px-4 py-2 border-b-2 text-xs",
            variant === "navy"
              ? "border-white/20 bg-brand-navy-950/80 text-white/90"
              : "border-brand-navy/30 bg-brand-paper/80 text-brand-navy",
          )}
        >
          <div className="flex items-center gap-3">
            {consignmentNo && (
              <span className="font-mono text-[0.6875rem] font-bold tracking-wider uppercase">
                WAYBILL: {consignmentNo}
              </span>
            )}
            {destinationCode && (
              <span className="font-display italic font-black uppercase text-brand-red-700 bg-brand-red-50 border border-brand-red-200 px-1.5 py-0.5 rounded-xs">
                DEST: {destinationCode}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 pr-6">
            {routeCode && (
              <span className="font-mono text-[0.625rem] font-semibold text-brand-navy/70 uppercase">
                RT: {routeCode}
              </span>
            )}
            {priority && (
              <span
                className={clsx(
                  "font-display italic font-extrabold text-[0.6875rem] px-2 py-0.5 uppercase tracking-wider rounded-xs",
                  priority === "PRIORITY" || priority === "FRAGILE"
                    ? "bg-brand-red text-white"
                    : "bg-brand-navy text-white",
                )}
              >
                {priority}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Main card body */}
      <div className="p-5 flex-1 flex flex-col relative">{children}</div>

      {/* Optional Barcode Strip */}
      {hasBarcode && (
        <div
          className={clsx(
            "px-4 pb-4 pt-1",
            variant === "navy" && "bg-brand-navy-950/40",
          )}
        >
          <BarcodeStrip
            code={consignmentNo ? `AB-UK-${consignmentNo}` : undefined}
          />
        </div>
      )}

      {/* Perforated ticket tear-off bottom edge */}
      {hasPerforation && (
        <div
          className={clsx(
            "relative w-full h-3 border-t-2 border-dashed flex items-center justify-between px-2",
            variant === "navy" ? "border-white/30" : "border-brand-navy/40",
          )}
          aria-hidden="true"
        >
          <div className="absolute -left-1.5 -top-1.5 w-3 h-3 rounded-full bg-brand-paper border border-brand-navy/40" />
          <div className="absolute -right-1.5 -top-1.5 w-3 h-3 rounded-full bg-brand-paper border border-brand-navy/40" />
        </div>
      )}
    </div>
  );
}
