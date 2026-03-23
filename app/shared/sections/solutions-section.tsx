"use client";

import GrainOverlay from "@/app/shared/grain";

const FEATURES = [
  {
    title: "Real-time detection",
    description:
      "AI processes live video streams to identify concealed weapons in milliseconds — before an incident escalates.",
  },
  {
    title: "Instant alerts",
    description:
      "Security teams get push notifications and in-app alerts the moment a threat is detected. No delay, no guesswork.",
  },
  {
    title: "Scale without friction",
    description:
      "Deploy across entrances, lobbies, and high-traffic areas. One platform, many touchpoints, unified command.",
  },
  {
    title: "Privacy-first by design",
    description:
      "No facial recognition. No stored identities. We detect objects, not people — security with dignity.",
  },
] as const;

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="content-section section-anchor relative isolate overflow-hidden bg-[#0c0c0c]"
      aria-labelledby="solutions-heading"
    >
      <GrainOverlay position="absolute" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">
            How it works
          </p>
          <h2
            id="solutions-heading"
            className="section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[52px]"
          >
            Built for the moment it matters.
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 bg-white/80" />
          <p className="mt-6 text-base leading-[1.7] text-[var(--hero-body)] sm:text-lg">
            Spairally gives security teams eyes they didn&apos;t have before —
            without slowing down the people who depend on you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:gap-10">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative rounded-none border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.1] hover:bg-white/[0.04] sm:p-8"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              <span
                className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-white/90 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <span className="text-[12px] font-semibold uppercase tracking-wider text-white/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--hero-body)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
