export function BentoArcsWide({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      viewBox="0 0 700 300"
      aria-hidden
    >
      <path
        d="M500 -20 Q300 160 700 280"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />
      <path
        d="M550 -10 Q350 170 750 300"
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="1"
      />
      <path
        d="M450 -30 Q250 150 650 260"
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function BentoArcsNarrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      viewBox="0 0 300 300"
      aria-hidden
    >
      <path
        d="M220 -20 Q80 150 320 280"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />
      <path
        d="M260 -10 Q120 160 350 300"
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="1"
      />
      <path
        d="M180 -30 Q40 140 280 260"
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />
    </svg>
  );
}
