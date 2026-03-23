"use client";

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0.05 0.1 0.15 0.2'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

type GrainOverlayProps = {
  /** Use "absolute" when inside a section (parent must be relative) */
  position?: "fixed" | "absolute";
};

type ImageGrainProps = {
  className?: string;
};

/** Grain overlay for images — place inside a relative image container */
export function ImageGrain({ className = "" }: ImageGrainProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[2] mix-blend-soft-light ${className}`}
      style={{
        backgroundImage: GRAIN_SVG,
        backgroundSize: "200px 200px",
        opacity: 0.5,
      }}
      aria-hidden
    />
  );
}

const posClass = {
  fixed: "fixed",
  absolute: "absolute",
} as const;

export default function GrainOverlay({ position = "fixed" }: GrainOverlayProps) {
  const inset = posClass[position];
  const z = position === "fixed" ? "z-50" : "z-[1]";
  return (
    <>
      {/* SVG Noise Layer */}
      <div
        className={`pointer-events-none ${inset} inset-0 ${z} mix-blend-soft-light opacity-[0.06]`}
        style={{
          backgroundImage: GRAIN_SVG,
          backgroundSize: "200px 200px",
          opacity: 0.6,
          mixBlendMode: "screen",
        }}
      />

      {/* Radial Gradient Layer */}
      <div
        className={`${inset} inset-0 pointer-events-none ${z}`}
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.02) 0%, transparent 50%),
                       radial-gradient(circle at 70% 70%, rgba(255,255,255,0.015) 0%, transparent 50%)`,
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
