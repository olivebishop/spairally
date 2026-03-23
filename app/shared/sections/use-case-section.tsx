"use client";

import GrainOverlay from "@/app/shared/grain";

const USE_CASES = [
  {
    title: "Schools & campuses",
    stat: "24/7",
    description:
      "From drop-off to pickup, keep students and staff safe without turning campuses into fortresses.",
  },
  {
    title: "Venues & events",
    stat: "Real-time",
    description:
      "Concert halls, arenas, conferences — high throughput, zero compromise on safety.",
  },
  {
    title: "Public spaces",
    stat: "Scalable",
    description:
      "Libraries, transit hubs, government buildings. One platform, many entrances.",
  },
] as const;

export default function UseCaseSection() {
  return (
    <section
      id="use-case"
      className="content-section section-anchor relative isolate overflow-hidden bg-[#080808]"
      aria-labelledby="use-case-heading"
    >
      <GrainOverlay position="absolute" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">
            Where Spairally fits
          </p>
          <h2
            id="use-case-heading"
            className="section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[52px]"
          >
            Trusted where safety can&apos;t wait.
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 bg-white/80" />
          <p className="mt-6 text-base leading-[1.7] text-[var(--hero-body)] sm:text-lg">
            Security teams across schools, venues, and public spaces rely on
            Spairally to detect threats before they escalate.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 lg:mt-20">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.title}
              className="flex flex-col rounded-none border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.03] sm:p-8"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
              }}
            >
              <span className="text-2xl font-extrabold tracking-tight text-white/90 sm:text-3xl">
                {useCase.stat}
              </span>
              <h3 className="mt-2 text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
                {useCase.title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-[var(--hero-body)]">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-16 border-t border-white/10 pt-12 lg:mt-20">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--hero-caption)]">
            Trusted by security teams
          </p>
          <p className="mt-2 text-center text-[15px] leading-relaxed text-[var(--hero-body)]">
            Schools · Venues · Public spaces · Events
          </p>
        </div>
      </div>
    </section>
  );
}
