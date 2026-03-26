"use client";

import GrainOverlay from "@/app/shared/grain";
import {
  BELLA_BODY,
  BELLA_BULLETS,
  BELLA_EYEBROW,
  BELLA_HEADING,
} from "@/data/bella";

export default function BellaSection() {
  return (
    <section
      id="bella"
      className="content-section section-anchor relative isolate overflow-hidden bg-[#0c0c0c]"
      aria-labelledby="bella-heading"
    >
      <GrainOverlay position="absolute" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-eyebrow">{BELLA_EYEBROW}</p>
            <h2
              id="bella-heading"
              className="section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[52px]"
            >
              {BELLA_HEADING}
            </h2>
            <div className="mt-6 h-1 w-12 bg-white/80" />
            <p className="mt-6 text-base leading-[1.7] text-[var(--hero-body)] sm:text-lg">
              {BELLA_BODY}
            </p>
            <ul className="mt-6 space-y-3">
              {BELLA_BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] text-[var(--hero-body)]"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="relative aspect-[16/10] overflow-hidden border border-white/[0.08]"
              style={{
                boxShadow:
                  "0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#080808] via-[#0a0a0a] to-[#080808]">
                <div className="text-center">
                  <span
                    className="block text-6xl font-extrabold tracking-[-0.04em] text-white/90 sm:text-7xl"
                    aria-hidden
                  >
                    Bella
                  </span>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--hero-caption)]">
                    Detection engine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
