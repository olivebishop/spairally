import type { CSSProperties } from "react";

type RadarVariant =
  | "hero"
  | "cta-top-left"
  | "legal-bottom-left"
  | "legal-top-right"
  | "sponsor-top-right"
  | "sponsor-bottom-left"
  | "sponsor-bottom-right";

const STROKES = [
  "rgba(255,255,255,0.07)",
  "rgba(255,255,255,0.055)",
  "rgba(255,255,255,0.04)",
  "rgba(255,255,255,0.025)",
] as const;

const CONFIG: Record<
  RadarVariant,
  {
    className: string;
    width: number;
    height: number;
    viewBox: string;
    style?: CSSProperties;
    circles: { cx: number; cy: number; r: number }[];
  }
> = {
  hero: {
    className:
      "pointer-events-none absolute bottom-0 left-0 z-0 hidden lg:block",
    width: 560,
    height: 560,
    viewBox: "0 0 560 560",
    style: { transform: "translate(-15%, 30%)" },
    circles: [
      { cx: 0, cy: 560, r: 140 },
      { cx: 0, cy: 560, r: 240 },
      { cx: 0, cy: 560, r: 360 },
      { cx: 0, cy: 560, r: 500 },
    ],
  },
  "cta-top-left": {
    className: "pointer-events-none absolute left-0 top-0 z-0 hidden lg:block",
    width: 520,
    height: 520,
    viewBox: "0 0 520 520",
    style: { transform: "translate(-20%, -25%)" },
    circles: [
      { cx: 0, cy: 0, r: 140 },
      { cx: 0, cy: 0, r: 240 },
      { cx: 0, cy: 0, r: 360 },
      { cx: 0, cy: 0, r: 500 },
    ],
  },
  "legal-bottom-left": {
    className:
      "pointer-events-none absolute bottom-0 left-0 z-0 hidden lg:block",
    width: 520,
    height: 520,
    viewBox: "0 0 520 520",
    style: { transform: "translate(-20%, 30%)" },
    circles: [
      { cx: 0, cy: 520, r: 140 },
      { cx: 0, cy: 520, r: 240 },
      { cx: 0, cy: 520, r: 360 },
      { cx: 0, cy: 520, r: 500 },
    ],
  },
  "legal-top-right": {
    className: "pointer-events-none absolute right-0 top-0 z-0 hidden lg:block",
    width: 520,
    height: 520,
    viewBox: "0 0 520 520",
    style: { transform: "translate(20%, -25%)" },
    circles: [
      { cx: 520, cy: 0, r: 140 },
      { cx: 520, cy: 0, r: 240 },
      { cx: 520, cy: 0, r: 360 },
      { cx: 520, cy: 0, r: 500 },
    ],
  },
  "sponsor-top-right": {
    className: "pointer-events-none absolute right-0 top-0 z-0 hidden lg:block",
    width: 520,
    height: 520,
    viewBox: "0 0 520 520",
    style: { transform: "translate(20%, -25%)" },
    circles: [
      { cx: 520, cy: 0, r: 140 },
      { cx: 520, cy: 0, r: 240 },
      { cx: 520, cy: 0, r: 360 },
      { cx: 520, cy: 0, r: 500 },
    ],
  },
  "sponsor-bottom-left": {
    className:
      "pointer-events-none absolute bottom-0 left-0 z-0 hidden lg:block",
    width: 520,
    height: 520,
    viewBox: "0 0 520 520",
    style: { transform: "translate(-20%, 30%)" },
    circles: [
      { cx: 0, cy: 520, r: 140 },
      { cx: 0, cy: 520, r: 240 },
      { cx: 0, cy: 520, r: 360 },
      { cx: 0, cy: 520, r: 500 },
    ],
  },
  "sponsor-bottom-right": {
    className:
      "pointer-events-none absolute bottom-0 right-0 z-0 hidden lg:block",
    width: 480,
    height: 480,
    viewBox: "0 0 480 480",
    style: { transform: "translate(20%, 25%)" },
    circles: [
      { cx: 480, cy: 480, r: 120 },
      { cx: 480, cy: 480, r: 220 },
      { cx: 480, cy: 480, r: 340 },
      { cx: 480, cy: 480, r: 460 },
    ],
  },
};

export function RadarArcs({ variant }: { variant: RadarVariant }) {
  const cfg = CONFIG[variant];
  return (
    <svg
      className={cfg.className}
      width={cfg.width}
      height={cfg.height}
      viewBox={cfg.viewBox}
      fill="none"
      aria-hidden
      style={cfg.style}
    >
      {cfg.circles.map((c, i) => (
        <circle
          key={`${c.cx}-${c.cy}-${c.r}`}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          stroke={STROKES[i]}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
