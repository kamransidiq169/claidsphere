/**
 * Case-study plates. No project screenshots exist yet, so each plate is a structural schematic of the kind of work
 * (a website layout, an identity system): vector, so it stays crisp at any density, with no readable copy and no
 * invented client detail. `slice` crops intelligently as the frame changes aspect ratio.
 */
const line = "rgb(120 190 255 / 0.28)";
const faint = "rgb(255 255 255 / 0.07)";
const solid = "#eef5f8";
const dim = "rgb(255 255 255 / 0.2)";
const acc = "#39c8ff";
const blue = "#2f8cf5";

export function WebsitePlate({ label }: { label: string }) {
  return (
    <svg className="hx-wk__svg" viewBox="0 0 1600 700" preserveAspectRatio="xMinYMid slice" role="img" aria-label={label} fill="none">
      <defs>
        <pattern id="wk-hatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
          <line x1="0" y1="0" x2="0" y2="14" stroke={acc} strokeOpacity="0.16" strokeWidth="2" />
        </pattern>
        <radialGradient id="wk-glow" cx="72%" cy="30%" r="55%">
          <stop offset="0" stopColor="#1478ff" stopOpacity="0.32" />
          <stop offset="1" stopColor="#1478ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="700" fill="url(#wk-glow)" />
      {/* 12-column grid */}
      {Array.from({ length: 13 }, (_, i) => <line key={i} x1={80 + i * 120} y1="0" x2={80 + i * 120} y2="700" stroke={faint} />)}
      {/* navigation */}
      <rect x="80" y="64" width="120" height="16" fill={solid} />
      <g fill={dim}>{[0, 1, 2, 3].map((i) => <rect key={i} x={560 + i * 112} y="68" width="72" height="8" />)}</g>
      <rect x="1240" y="56" width="280" height="32" rx="16" fill={blue} />
      <line x1="80" y1="128" x2="1520" y2="128" stroke={line} />
      {/* hero: headline, lede, actions */}
      <g fill={solid}><rect x="80" y="204" width="660" height="40" /><rect x="80" y="272" width="540" height="40" /><rect x="80" y="340" width="400" height="40" /></g>
      <g fill={dim}><rect x="80" y="428" width="520" height="10" /><rect x="80" y="456" width="460" height="10" /></g>
      <rect x="80" y="520" width="200" height="48" rx="24" fill={blue} />
      <rect x="296" y="520" width="168" height="48" rx="24" stroke={dim} />
      {/* hero plate */}
      <rect x="800" y="176" width="720" height="440" fill="#08162b" stroke={line} />
      <rect x="800" y="176" width="720" height="440" fill="url(#wk-hatch)" />
      <circle cx="1160" cy="396" r="150" stroke={acc} strokeOpacity="0.55" />
      <circle cx="1160" cy="396" r="96" stroke={acc} strokeOpacity="0.25" />
      <circle cx="1160" cy="396" r="5" fill={acc} />
      <line x1="800" y1="396" x2="1520" y2="396" stroke={line} strokeDasharray="3 7" />
      <line x1="1160" y1="176" x2="1160" y2="616" stroke={line} strokeDasharray="3 7" />
      {/* registration ticks */}
      <g stroke={acc} strokeOpacity="0.7">
        <path d="M 800 188 V 176 H 812" /><path d="M 1520 604 V 616 H 1508" />
      </g>
    </svg>
  );
}

export function BrandPlate({ label }: { label: string }) {
  return (
    <svg className="hx-wk__svg" viewBox="0 0 1200 960" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} fill="none">
      <defs>
        <radialGradient id="wk-glow-b" cx="30%" cy="35%" r="60%">
          <stop offset="0" stopColor="#1478ff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#1478ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="960" fill="url(#wk-glow-b)" />
      {/* mark tile with construction geometry */}
      <rect x="64" y="64" width="624" height="832" fill="#06101d" stroke={line} />
      <g stroke={line} strokeDasharray="3 7">
        <line x1="64" y1="480" x2="688" y2="480" /><line x1="376" y1="64" x2="376" y2="896" />
        <circle cx="376" cy="480" r="250" /><circle cx="376" cy="480" r="190" />
      </g>
      <circle cx="376" cy="480" r="140" stroke={acc} strokeWidth="3" />
      <circle cx="376" cy="480" r="46" fill={acc} />
      <path d="M 376 340 A 140 140 0 0 1 516 480" stroke={solid} strokeWidth="3" />
      <g stroke={acc} strokeOpacity="0.7"><path d="M 76 76 H 64 V 88" /><path d="M 676 884 H 688 V 872" /></g>
      {/* type specimen */}
      <rect x="720" y="64" width="416" height="400" fill="#06101d" stroke={faint} />
      <text x="760" y="330" fontSize="230" fontWeight="300" letterSpacing="-14" fill={solid} style={{ fontFamily: "var(--font-sans)" }}>Aa</text>
      <g fill={dim}><rect x="760" y="372" width="260" height="8" /><rect x="760" y="396" width="200" height="8" /></g>
      {/* palette */}
      <g>
        {[["#050d14", dim], ["#0c2750", dim], [blue, "none"], [acc, "none"], [solid, "none"]].map(([f, s], i) => (
          <rect key={i} x={720 + i * 84} y="496" width="76" height="168" fill={f} stroke={s} />
        ))}
      </g>
      {/* stationery */}
      <rect x="720" y="696" width="416" height="200" fill="rgb(255 255 255 / 0.03)" stroke={faint} />
      <circle cx="768" cy="744" r="14" stroke={acc} strokeWidth="2" /><circle cx="768" cy="744" r="4" fill={acc} />
      <g fill={dim}><rect x="760" y="800" width="180" height="8" /><rect x="760" y="824" width="124" height="8" /><rect x="760" y="848" width="150" height="8" /></g>
    </svg>
  );
}
