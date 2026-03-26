"use client";

import Image from "next/image";
import Link from "next/link";
import { BentoArcsNarrow, BentoArcsWide } from "@/app/svg/bento-arcs";
import GrainOverlay, { NoiseTexture } from "@/app/shared/grain";
import { SOLUTIONS_SECTION } from "@/data/solutions";

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="content-section section-anchor relative isolate overflow-hidden bg-[#080808]"
      aria-labelledby="solutions-heading"
    >
      <GrainOverlay position="absolute" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        {/* Header: heading + subline + CTA */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="solutions-heading"
              className="text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl xl:text-[52px]"
            >
              {SOLUTIONS_SECTION.heading}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-white/45 sm:text-base lg:text-lg">
              {SOLUTIONS_SECTION.subline}
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-none bg-white px-6 py-3 text-[13px] font-semibold text-[#080808] no-underline transition-all hover:bg-white/90 lg:self-auto"
          >
            {SOLUTIONS_SECTION.ctaLabel}
          </Link>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-12 lg:grid-rows-2">
          {/* Card 1 — top-left, wide, text-only */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-none border border-white/[0.08] bg-[#131313] p-6 sm:p-8 lg:col-span-7 lg:row-start-1 lg:min-h-[260px]">
            <NoiseTexture className="opacity-40" />
            <BentoArcsWide className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

            <div className="relative z-10 flex items-start justify-between">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl lg:text-[28px]">
                Real-Time Detection
              </h3>
              <span className="shrink-0 text-[13px] font-medium text-white/30">
                01/
              </span>
            </div>
            <p className="relative z-10 mt-6 max-w-sm text-[14px] leading-[1.7] text-white/50 sm:text-[15px] lg:mt-auto lg:pt-8">
              AI processes live video feeds to identify concealed weapons in
              milliseconds — before an incident has the chance to escalate.
            </p>
          </div>

          {/* Card 2 — right column, tall, spans 2 rows: image + statement */}
          <div className="relative flex flex-col overflow-hidden rounded-none border border-white/[0.08] bg-[#0e0e0e] lg:col-span-5 lg:row-span-2 lg:row-start-1">
            <NoiseTexture className="opacity-40 sm:opacity-0" />
            {/* Image area — hidden on mobile */}
            <div className="relative hidden flex-1 sm:block sm:min-h-[280px]">
              <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between p-5 sm:p-6">
                <span className="text-[13px] font-medium text-white/30">
                  02/
                </span>
                <span className="text-[14px] font-semibold tracking-[-0.01em] text-white/70">
                  Instant Alerts
                </span>
              </div>
              <Image
                src="/images/alert.png"
                alt="Instant threat alerts delivered to security teams"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 0vw, 42vw"
              />
              <NoiseTexture />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24"
                style={{ background: "linear-gradient(to top, #0e0e0e 5%, transparent 100%)" }}
              />
            </div>

            {/* Mobile header */}
            <div className="relative z-10 flex items-start justify-between p-5 sm:hidden">
              <span className="text-[13px] font-medium text-white/30">
                02/
              </span>
              <span className="text-[14px] font-semibold tracking-[-0.01em] text-white/70">
                Instant Alerts
              </span>
            </div>

            {/* Statement block */}
            <div className="relative z-10 p-5 pt-0 sm:bg-[#0e0e0e] sm:p-8">
              <h3 className="relative z-10 text-xl font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-2xl lg:text-[26px]">
                Every Threat Detected.
                <br />
                Every Team Alerted.
              </h3>
              <p className="relative z-10 mt-3 text-[13px] leading-[1.65] text-white/40 sm:text-[14px]">
                Push notifications and in-app alerts the moment a threat is
                detected. No delay, no guesswork — just instant response.
              </p>
            </div>
          </div>

          {/* Card 3 — bottom-left, image card; text-only on mobile */}
          <div className="group relative flex flex-col overflow-hidden rounded-none border border-white/[0.08] bg-[#0e0e0e] lg:col-span-4 lg:row-start-2 lg:min-h-[260px]">
            <NoiseTexture className="opacity-40 sm:opacity-0" />
            <div className="relative z-10 flex items-start justify-between p-5">
              <h3 className="text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
                Scale Without Friction
              </h3>
              <span className="shrink-0 text-[13px] font-medium text-white/30">
                03/
              </span>
            </div>

            {/* Image — hidden on mobile */}
            <div className="relative hidden flex-1 sm:block sm:min-h-[220px]">
              <Image
                src="/images/scale.png"
                alt="Deploy across entrances and high-traffic areas"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 0vw, 33vw"
              />
              <NoiseTexture />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20"
                style={{ background: "linear-gradient(to bottom, #0e0e0e 0%, transparent 100%)" }}
              />
            </div>

            <div className="relative z-10 p-5 pt-0 sm:absolute sm:inset-x-0 sm:bottom-0 sm:z-20 sm:p-5">
              <p className="text-[13px] font-medium text-white/45 sm:text-[14px]">
                Deploy Across Every Entrance
              </p>
            </div>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-24 sm:block"
              style={{ background: "linear-gradient(to top, #0e0e0e 5%, transparent 100%)" }}
            />
          </div>

          {/* Card 4 — bottom-center, text + CTA */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-none border border-white/[0.08] bg-[#131313] p-6 sm:p-8 lg:col-span-3 lg:row-start-2 lg:min-h-[260px]">
            <NoiseTexture className="opacity-40" />
            <BentoArcsNarrow className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

            <div className="relative z-10 flex items-start justify-between">
              <h3 className="text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
                Privacy-First
              </h3>
              <span className="shrink-0 text-[13px] font-medium text-white/30">
                04/
              </span>
            </div>

            <p className="relative z-10 mt-5 text-[14px] leading-[1.7] text-white/50 sm:text-[15px] lg:mt-auto lg:pt-4">
              No facial recognition. No stored identities. We detect objects,
              not people — security with dignity.
            </p>

            <Link
              href="#"
              className="relative z-10 mt-6 inline-flex self-start items-center rounded-none border border-white/20 px-5 py-2.5 text-[13px] font-semibold text-white no-underline transition-all hover:bg-white hover:text-[#080808]"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
