"use client";

import Image from "next/image";
import { IconCheck } from "@/app/svg/icon-check";
import { RadarArcs } from "@/app/svg/radar-arcs";
import GrainOverlay, { NoiseTexture } from "@/app/shared/grain";
import {
  SPONSORSHIP_BENEFITS,
  SPONSORSHIP_LEGAL_NOTICE,
  SPONSORSHIP_TIERS,
} from "@/data/sponsorship";

export default function SponsorshipPage() {
  return (
    <main className="font-[var(--font-inter),system-ui,sans-serif]">
      {/* Tiers */}
      <section
        id="tiers"
        className="relative isolate overflow-hidden bg-[#080808] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 scroll-mt-20"
      >
        <GrainOverlay position="absolute" />

        <RadarArcs variant="sponsor-top-right" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Sponsorship Tiers
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Choose your level of impact
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/50 sm:text-base">
              Every tier directly funds development, infrastructure, and
              security research. Pick the one that fits your goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-16">
            {SPONSORSHIP_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col overflow-hidden rounded-none border p-6 sm:p-8 ${
                  "featured" in tier && tier.featured
                    ? "border-white/20 bg-[#131313]"
                    : "border-white/[0.06] bg-[#0e0e0e]"
                }`}
              >
                <NoiseTexture className="opacity-40" />

                <div className="relative z-10">
                  {"featured" in tier && tier.featured && (
                    <span className="mb-4 inline-block rounded-none bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#080808]">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
                    {tier.name}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      {tier.price}
                    </span>
                    <span className="text-[13px] text-white/40">/ one-time</span>
                  </div>

                  <p className="mt-4 text-[14px] leading-[1.65] text-white/45">
                    {tier.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[14px] text-white/60"
                      >
                        <IconCheck className="mt-0.5 shrink-0 text-white/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="mailto:sponsor@spairally.com"
                  className={`relative z-10 mt-8 inline-flex w-full items-center justify-center rounded-none px-6 py-3.5 text-[14px] font-semibold no-underline transition-all ${
                    "featured" in tier && tier.featured
                      ? "bg-white text-[#080808] hover:bg-white/90"
                      : "border border-white/15 text-white hover:bg-white hover:text-[#080808]"
                  }`}
                >
                  Sponsor Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="relative isolate overflow-hidden bg-[#080808] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <GrainOverlay position="absolute" />

        <RadarArcs variant="sponsor-bottom-left" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Why Sponsor
              </p>
              <h2 className="mt-3 text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                What your support enables
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-white/50 sm:text-base">
                Sponsorships directly translate into real product milestones and
                community growth.
              </p>

              <div className="mt-10 space-y-6">
                {SPONSORSHIP_BENEFITS.map((benefit, i) => (
                  <div
                    key={benefit.title}
                    className="relative overflow-hidden rounded-none border border-white/[0.06] bg-[#111] p-5 sm:p-6"
                  >
                    <NoiseTexture className="opacity-30" />
                    <div className="relative z-10 flex items-start gap-4">
                      <span className="shrink-0 text-[12px] font-semibold text-white/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold text-white sm:text-base">
                          {benefit.title}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-[1.65] text-white/45 sm:text-[14px]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden overflow-hidden rounded-none border border-white/[0.08] aspect-[4/5] sm:block lg:sticky lg:top-24">
              <Image
                src="/images/support.png"
                alt="What your sponsorship support enables"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 0vw, 50vw"
              />
              <GrainOverlay position="absolute" />

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40"
                style={{ background: "linear-gradient(to top, #080808 10%, transparent 100%)" }}
              />
            </div>
          </div>

          {/* Legal notice */}
          <div className="relative mt-16 overflow-hidden rounded-none border border-white/[0.06] bg-[#0e0e0e] p-6 sm:p-8 lg:mt-20">
            <NoiseTexture className="opacity-30" />
            <h3 className="relative z-10 text-[13px] font-semibold uppercase tracking-[0.15em] text-white/50">
              Legal Notice
            </h3>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/35 sm:text-[14px]">
              {SPONSORSHIP_LEGAL_NOTICE}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative isolate overflow-hidden bg-[#080808] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <GrainOverlay position="absolute" />

        <RadarArcs variant="sponsor-bottom-right" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Ready to make an impact?
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-white/50 sm:text-base">
            Reach out and let&apos;s find the right tier for your goals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#tiers"
              className="inline-flex items-center rounded-none bg-white px-8 py-3.5 text-[14px] font-semibold text-[#080808] no-underline transition-all hover:bg-white/90"
            >
              Get Started
            </a>
            <a
              href="mailto:sponsor@spairally.com"
              className="inline-flex items-center rounded-none border border-white/20 px-8 py-3.5 text-[14px] font-semibold text-white no-underline transition-all hover:bg-white hover:text-[#080808]"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
