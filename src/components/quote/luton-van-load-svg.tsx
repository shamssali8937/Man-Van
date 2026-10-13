"use client";

interface LutonVanLoadSvgProps {
  fillPercentage: number;
  totalVolumeM3: number;
  capacityM3?: number;
  className?: string;
}

/**
 * Utilitarian Side-View SVG of a 3.5t Mercedes-Benz Sprinter Luton Box Van
 * Displays proportional cargo hold fill level with animated transitions
 * and industrial tie-rail markers.
 */
export function LutonVanLoadSvg({
  fillPercentage,
  totalVolumeM3,
  capacityM3 = 19.0,
  className = "w-full h-auto",
}: LutonVanLoadSvgProps) {
  // Clamped fill for the visual cargo box (max 100% height inside the bay)
  const clampedFill = Math.min(100, Math.max(0, fillPercentage));
  const isOverloaded = fillPercentage > 100;

  // Cargo bay dimensions inside SVG coordinate system:
  // Main Box Interior: x=145, y=35, width=285, height=135
  // Overhang Pod Interior: x=90, y=35, width=55, height=50
  const cargoBayHeight = 135;
  const fillHeight = (clampedFill / 100) * cargoBayHeight;
  const fillY = 35 + (cargoBayHeight - fillHeight);

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 540 220"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Luton Van visual load status: ${fillPercentage}% filled (${totalVolumeM3} m³ of ${capacityM3} m³)`}
      >
        <defs>
          {/* Diagonal caution stripes for overloaded capacity */}
          <pattern
            id="overload-hazard-stripes"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="6" height="12" fill="#DC0109" />
            <rect x="6" width="6" height="12" fill="#03234C" />
          </pattern>

          {/* Grid pattern for interior cargo bay floor */}
          <pattern
            id="cargo-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#03234C"
              strokeWidth="0.5"
              strokeOpacity="0.12"
            />
          </pattern>
        </defs>

        {/* =========================================================================
            1. GROUND SHADOW & ROAD RUNWAY
            ========================================================================= */}
        <ellipse
          cx="250"
          cy="198"
          rx="230"
          ry="8"
          fill="#03234C"
          fillOpacity="0.15"
        />
        <line
          x1="10"
          y1="198"
          x2="520"
          y2="198"
          stroke="#03234C"
          strokeWidth="2"
          strokeDasharray="6 4"
          strokeOpacity="0.3"
        />

        {/* =========================================================================
            2. CARGO HOLD INTERIOR BAY (Background before filling)
            ========================================================================= */}
        {/* Main Box interior */}
        <rect
          x="145"
          y="35"
          width="285"
          height="135"
          fill="#FAF9F5"
          stroke="#03234C"
          strokeWidth="1.5"
        />
        {/* Interior grid pattern */}
        <rect x="145" y="35" width="285" height="135" fill="url(#cargo-grid)" />

        {/* Luton Overhang Pod interior (over cab) */}
        <path
          d="M 90 35 L 145 35 L 145 85 L 90 85 Z"
          fill="#FAF9F5"
          stroke="#03234C"
          strokeWidth="1.5"
        />
        <rect x="90" y="35" width="55" height="50" fill="url(#cargo-grid)" />

        {/* Internal Cargo Tie Rails (Lashing Track) */}
        <line
          x1="150"
          y1="75"
          x2="425"
          y2="75"
          stroke="#03234C"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          strokeOpacity="0.35"
        />
        <line
          x1="150"
          y1="120"
          x2="425"
          y2="120"
          stroke="#03234C"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          strokeOpacity="0.35"
        />

        {/* =========================================================================
            3. DYNAMIC PROPORTIONAL CARGO FILL
            ========================================================================= */}
        {clampedFill > 0 && (
          <g className="transition-all duration-500 ease-out">
            {/* Main hold fill rectangle */}
            <rect
              x="146"
              y={fillY}
              width="283"
              height={fillHeight}
              fill={
                isOverloaded
                  ? "url(#overload-hazard-stripes)"
                  : clampedFill > 85
                    ? "#DC0109"
                    : clampedFill > 50
                      ? "#03234C"
                      : "#073570"
              }
              fillOpacity={isOverloaded ? 0.9 : 0.85}
              className="transition-all duration-500"
            />

            {/* Overhang fill (activates once main bay exceeds 70% capacity) */}
            {clampedFill > 70 && (
              <rect
                x="91"
                y={36 + (50 - (Math.min(100, clampedFill) - 70) * (50 / 30))}
                width="53"
                height={(Math.min(100, clampedFill) - 70) * (50 / 30)}
                fill={
                  isOverloaded ? "url(#overload-hazard-stripes)" : "#DC0109"
                }
                fillOpacity={0.85}
                className="transition-all duration-500"
              />
            )}
          </g>
        )}

        {/* Cargo Height Watermark / Indicator Line */}
        {clampedFill > 0 && !isOverloaded && (
          <line
            x1="145"
            y1={fillY}
            x2="430"
            y2={fillY}
            stroke="#DA985B"
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />
        )}

        {/* =========================================================================
            4. VEHICLE EXTERIOR OUTLINE & CAB (Sprinter 3.5t Luton)
            ========================================================================= */}
        {/* Exterior Box Roof & Outer Shell */}
        <path
          d="M 85 30 L 435 30 L 435 175 L 85 175 Z"
          fill="none"
          stroke="#03234C"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Overhang Pod Front Slant */}
        <path
          d="M 85 30 L 45 65 L 45 85 L 85 85 Z"
          fill="#DC0109"
          stroke="#03234C"
          strokeWidth="2.5"
        />
        {/* Pod wind deflector stripe */}
        <path
          d="M 50 65 L 85 45"
          stroke="#FAF9F5"
          strokeWidth="2"
          strokeOpacity="0.6"
        />

        {/* Driver Cab Outer Shell */}
        <path
          d="M 85 85 L 45 85 L 25 110 L 15 130 L 15 175 L 85 175 Z"
          fill="#03234C"
          stroke="#03234C"
          strokeWidth="2"
        />

        {/* Windshield & Side Window */}
        <path
          d="M 45 90 L 80 90 L 80 125 L 35 125 L 28 112 Z"
          fill="#FAF9F5"
          stroke="#03234C"
          strokeWidth="2"
        />
        {/* Window Divider Pillar */}
        <line
          x1="58"
          y1="90"
          x2="58"
          y2="125"
          stroke="#03234C"
          strokeWidth="2"
        />

        {/* Cab Door Outline */}
        <path
          d="M 85 90 L 56 90 L 56 170 L 85 170"
          stroke="#03234C"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
        {/* Door Handle */}
        <rect x="62" y="132" width="8" height="3" rx="1" fill="#FAF9F5" />

        {/* Front Headlight Assembly */}
        <path
          d="M 15 136 L 26 136 L 24 150 L 15 150 Z"
          fill="#DA985B"
          stroke="#03234C"
          strokeWidth="1.5"
        />
        {/* Front Bumper */}
        <rect
          x="10"
          y="155"
          width="35"
          height="22"
          rx="2"
          fill="#03234C"
          stroke="#03234C"
          strokeWidth="1.5"
        />

        {/* Wing Mirror */}
        <rect x="25" y="108" width="6" height="12" rx="1" fill="#03234C" />

        {/* Chassis Frame Rail */}
        <rect x="40" y="172" width="400" height="8" fill="#03234C" />

        {/* Fuel Tank / Battery Box Underbody */}
        <rect x="180" y="180" width="45" height="10" fill="#073570" rx="1" />
        <rect x="235" y="180" width="30" height="8" fill="#073570" rx="1" />

        {/* Rear Hydraulic Tail Lift Assembly */}
        <rect
          x="435"
          y="35"
          width="8"
          height="140"
          fill="#DA985B"
          stroke="#03234C"
          strokeWidth="1.5"
        />
        <rect
          x="443"
          y="130"
          width="12"
          height="45"
          fill="#DC0109"
          stroke="#03234C"
          strokeWidth="1.5"
        />
        {/* Tail lift ramp platform folded */}
        <line
          x1="443"
          y1="175"
          x2="455"
          y2="175"
          stroke="#03234C"
          strokeWidth="3"
        />
        {/* Tail lift warning stripe */}
        <rect x="445" y="140" width="8" height="6" fill="#DA985B" />

        {/* =========================================================================
            5. WHEELS & SUSPENSION
            ========================================================================= */}
        {/* Front Wheel Arch */}
        <path
          d="M 35 180 A 30 30 0 0 1 105 180"
          fill="none"
          stroke="#03234C"
          strokeWidth="4"
        />
        {/* Front Wheel (Heavy Duty Tyre) */}
        <circle cx="70" cy="180" r="23" fill="#03234C" />
        <circle
          cx="70"
          cy="180"
          r="14"
          fill="#FAF9F5"
          stroke="#03234C"
          strokeWidth="2"
        />
        <circle cx="70" cy="180" r="6" fill="#DA985B" />
        {/* Wheel Hub bolts */}
        <circle cx="70" cy="174" r="1.5" fill="#03234C" />
        <circle cx="76" cy="180" r="1.5" fill="#03234C" />
        <circle cx="70" cy="186" r="1.5" fill="#03234C" />
        <circle cx="64" cy="180" r="1.5" fill="#03234C" />

        {/* Rear Wheel Arch */}
        <path
          d="M 350 180 A 30 30 0 0 1 420 180"
          fill="none"
          stroke="#03234C"
          strokeWidth="4"
        />
        {/* Rear Wheel (Heavy Duty Dual Tyre) */}
        <circle cx="385" cy="180" r="23" fill="#03234C" />
        <circle
          cx="385"
          cy="180"
          r="14"
          fill="#FAF9F5"
          stroke="#03234C"
          strokeWidth="2"
        />
        <circle cx="385" cy="180" r="6" fill="#DA985B" />
        {/* Wheel Hub bolts */}
        <circle cx="385" cy="174" r="1.5" fill="#03234C" />
        <circle cx="391" cy="180" r="1.5" fill="#03234C" />
        <circle cx="385" cy="186" r="1.5" fill="#03234C" />
        <circle cx="379" cy="180" r="1.5" fill="#03234C" />

        {/* Mudflaps */}
        <rect x="98" y="178" width="6" height="15" fill="#03234C" rx="1" />
        <rect x="415" y="178" width="6" height="15" fill="#03234C" rx="1" />

        {/* =========================================================================
            6. TECHNICAL DIMENSION LABELS
            ========================================================================= */}
        <text
          x="285"
          y="24"
          textAnchor="middle"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#03234C"
          fillOpacity="0.8"
        >
          4.1m LUTON CARGO HOLD (VOLUME: 19.0 m³ / 670 CU FT)
        </text>

        <text
          x="449"
          y="120"
          fontSize="7"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#03234C"
          transform="rotate(90 449,120)"
        >
          500KG TAIL LIFT
        </text>

        <text
          x="65"
          y="26"
          textAnchor="middle"
          fontSize="7"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#03234C"
        >
          LUTON POD
        </text>
      </svg>

      {/* Real-time Load Meter Bar below SVG */}
      <div className="w-full max-w-md mt-2 space-y-1">
        <div className="flex justify-between items-center text-xs font-mono font-bold">
          <span className="text-brand-navy flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                isOverloaded
                  ? "bg-brand-red animate-pulse"
                  : clampedFill > 80
                    ? "bg-brand-tan"
                    : "bg-brand-navy"
              }`}
            />
            ESTIMATED VAN FILL:
          </span>
          <span
            className={
              isOverloaded
                ? "text-brand-red font-black"
                : "text-brand-navy font-black"
            }
          >
            {fillPercentage}% ({totalVolumeM3} m³ / {capacityM3} m³)
          </span>
        </div>

        {/* Progress Track */}
        <div className="w-full h-3 bg-brand-paper-rule border border-brand-navy/30 rounded-xs overflow-hidden relative">
          <div
            className={`h-full transition-all duration-300 ${
              isOverloaded
                ? "bg-brand-red"
                : clampedFill > 85
                  ? "bg-brand-tan"
                  : "bg-brand-navy"
            }`}
            style={{ width: `${clampedFill}%` }}
          />
          {/* 50% & 100% Marker Ticks */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-brand-navy/30" />
          <div className="absolute top-0 bottom-0 left-[85%] w-px bg-brand-navy/30" />
        </div>

        {isOverloaded && (
          <p
            role="alert"
            className="text-[0.6875rem] font-sans font-bold text-brand-red uppercase tracking-wider text-center mt-1"
          >
            ⚠ Warning: Volume exceeds single 3.5t Luton box van capacity. Second
            vehicle or multiple transit shuttle required.
          </p>
        )}
      </div>
    </div>
  );
}
