interface UKHub {
  name: string;
  x: number;
  y: number;
  postcode: string;
  isHQ?: boolean;
}

const UK_HUBS: UKHub[] = [
  { name: "London", x: 350, y: 505, postcode: "E, EC, N, SE", isHQ: true },
  { name: "Birmingham", x: 275, y: 420, postcode: "B" },
  { name: "Manchester", x: 260, y: 330, postcode: "M" },
  { name: "Leeds", x: 300, y: 305, postcode: "LS" },
  { name: "Sheffield", x: 295, y: 345, postcode: "S" },
  { name: "Liverpool", x: 230, y: 332, postcode: "L" },
  { name: "Bristol", x: 235, y: 508, postcode: "BS" },
  { name: "Cardiff", x: 205, y: 500, postcode: "CF" },
  { name: "Glasgow", x: 195, y: 160, postcode: "G" },
  { name: "Edinburgh", x: 245, y: 155, postcode: "EH" },
];

export function UKRouteMap() {
  return (
    <div className="relative w-full aspect-[4/5] max-h-[500px] flex items-center justify-center p-2">
      <svg
        viewBox="0 0 500 620"
        className="w-full h-full drop-shadow-sm select-none"
        aria-label="Real UK Mainland Route Network Map"
        role="img"
      >
        <title>Real UK Mainland Haulage and Transport Map</title>

        {/* UK Sea / Background Glow */}
        <defs>
          <filter id="road-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="1.5"
              floodColor="#03234C"
              floodOpacity="0.2"
            />
          </filter>
        </defs>

        {/* 1. Real Geographical Coastline of Great Britain (Scotland, England, Wales) */}
        <path
          d="M 165 55 
             C 180 50, 205 48, 230 52 
             C 245 55, 255 70, 240 85 
             C 235 95, 245 110, 260 115 
             C 280 120, 265 140, 255 150 
             C 260 165, 275 180, 265 195 
             C 260 210, 275 230, 285 245 
             C 300 265, 315 290, 310 305 
             C 325 320, 335 345, 330 365 
             C 345 375, 365 390, 360 410 
             C 375 430, 395 450, 385 475 
             C 380 490, 395 510, 400 525 
             C 395 540, 375 550, 350 545 
             C 325 540, 305 545, 285 540 
             C 260 550, 235 555, 205 550 
             C 170 565, 140 585, 120 580 
             C 130 560, 155 540, 175 535 
             C 195 530, 210 525, 205 510 
             C 185 505, 160 510, 145 500 
             C 165 470, 180 440, 175 415 
             C 150 405, 155 385, 185 380 
             C 210 375, 225 350, 210 330 
             C 215 300, 205 275, 215 250 
             C 200 230, 190 205, 165 190 
             C 150 160, 165 130, 150 100 
             C 160 75, 155 60, 165 55 Z"
          fill="#F6F4EE"
          stroke="#03234C"
          strokeWidth="2.5"
          className="transition-colors hover:fill-[#FAF8F2]"
        />

        {/* 2. Real Northern Ireland Coastline */}
        <path
          d="M 95 235 
             C 115 225, 135 220, 140 235 
             C 145 250, 135 270, 125 285 
             C 110 280, 95 270, 90 255 Z"
          fill="#F6F4EE"
          stroke="#03234C"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeOpacity="0.7"
        />

        {/* Internal Sea Waterway Lines */}
        <path
          d="M 175 535 C 190 520, 215 515, 235 508"
          fill="none"
          stroke="#03234C"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* 3. Real Motorway Arteries */}
        {/* M1: London to Leeds */}
        <path
          d="M 350 505 L 305 455 L 295 420 L 295 345 L 300 305"
          fill="none"
          stroke="#DC0109"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#road-glow)"
        />

        {/* M6: Birmingham to Glasgow via Manchester & Carlisle */}
        <path
          d="M 275 420 L 265 370 L 260 330 L 245 260 L 225 205 L 195 160"
          fill="none"
          stroke="#03234C"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#road-glow)"
        />

        {/* M4: London to Cardiff via Bristol */}
        <path
          d="M 350 505 L 315 508 L 280 508 L 235 508 L 205 500"
          fill="none"
          stroke="#073570"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#road-glow)"
        />

        {/* M62: Liverpool to Leeds via Manchester */}
        <path
          d="M 230 332 L 260 330 L 300 305"
          fill="none"
          stroke="#DA985B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* M8: Glasgow to Edinburgh */}
        <path
          d="M 195 160 L 245 155"
          fill="none"
          stroke="#03234C"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* M5: Birmingham to Bristol */}
        <path
          d="M 275 420 L 255 465 L 235 508"
          fill="none"
          stroke="#073570"
          strokeWidth="2.5"
          strokeDasharray="4 2"
        />

        {/* M25: London Orbital */}
        <ellipse
          cx="350"
          cy="505"
          rx="22"
          ry="17"
          fill="none"
          stroke="#DC0109"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />

        {/* 4. Top 10 Major Removals Hubs */}
        {UK_HUBS.map((hub) => (
          <g key={hub.name} className="cursor-pointer group">
            {/* Outer halo */}
            <circle
              cx={hub.x}
              cy={hub.y}
              r={hub.isHQ ? "7" : "5"}
              fill={hub.isHQ ? "#DC0109" : "#03234C"}
              stroke="#F6F4EE"
              strokeWidth="2"
            />
            {/* Inner pin */}
            <circle
              cx={hub.x}
              cy={hub.y}
              r={hub.isHQ ? "3" : "2"}
              fill="#FFFFFF"
            />

            {/* Hub City Name Label */}
            <text
              x={hub.x + (hub.x > 320 ? -8 : 8)}
              y={hub.y + 3}
              textAnchor={hub.x > 320 ? "end" : "start"}
              fontSize="10"
              fontFamily="var(--font-display), sans-serif"
              fontWeight="900"
              fontStyle="italic"
              fill="#03234C"
              className="uppercase tracking-wider select-none drop-shadow-xs"
            >
              {hub.name}
            </text>
          </g>
        ))}

        {/* Map Legend */}
        <g transform="translate(25, 490)">
          <rect
            x="0"
            y="0"
            width="125"
            height="90"
            rx="2"
            fill="#FFFFFF"
            fillOpacity="0.95"
            stroke="#03234C"
            strokeWidth="1.5"
          />
          <text
            x="8"
            y="16"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="bold"
            fill="#03234C"
          >
            DIRECT ROUTE ARTERIES
          </text>
          <line
            x1="8"
            y1="28"
            x2="32"
            y2="28"
            stroke="#DC0109"
            strokeWidth="3"
          />
          <text
            x="38"
            y="31"
            fontSize="8"
            fontFamily="sans-serif"
            fill="#03234C"
            fontWeight="bold"
          >
            M1 North-South
          </text>
          <line
            x1="8"
            y1="44"
            x2="32"
            y2="44"
            stroke="#03234C"
            strokeWidth="3"
          />
          <text
            x="38"
            y="47"
            fontSize="8"
            fontFamily="sans-serif"
            fill="#03234C"
            fontWeight="bold"
          >
            M6 Central-Scot
          </text>
          <line
            x1="8"
            y1="60"
            x2="32"
            y2="60"
            stroke="#073570"
            strokeWidth="3"
          />
          <text
            x="38"
            y="63"
            fontSize="8"
            fontFamily="sans-serif"
            fill="#03234C"
            fontWeight="bold"
          >
            M4 West-Wales
          </text>
          <line
            x1="8"
            y1="76"
            x2="32"
            y2="76"
            stroke="#DA985B"
            strokeWidth="2.5"
          />
          <text
            x="38"
            y="79"
            fontSize="8"
            fontFamily="sans-serif"
            fill="#03234C"
            fontWeight="bold"
          >
            M62 Cross-Pennine
          </text>
        </g>
      </svg>
    </div>
  );
}
