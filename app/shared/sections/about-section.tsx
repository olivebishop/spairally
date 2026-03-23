"use client";

import Image from "next/image";
import GrainOverlay from "@/app/shared/grain";
import { ImageGrain } from "@/app/shared/grain";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="content-section section-anchor relative isolate overflow-hidden bg-[#080808]"
      aria-labelledby="about-heading"
    >
      <GrainOverlay position="absolute" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <p className="section-eyebrow mb-8">About</p>
        <h2
          id="about-heading"
          className="section-heading text-2xl sm:text-3xl lg:text-4xl mb-10 lg:mb-12"
        >
          Mission & Vision
        </h2>

        {/* Bento grid — cards left, image right (explicit placement) */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-4 lg:grid-rows-2">
          {/* Mission — left column */}
          <div className="lg:col-start-1 lg:col-span-5 lg:row-start-1 rounded-none border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 lg:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
              Our Mission
            </h3>
            <p className="text-[15px] leading-[1.75] text-[var(--hero-body)] sm:text-base">
              To revolutionize public safety through cutting-edge AI technology,
              providing real-time concealed weapon detection that protects
              communities, schools, and public spaces. We&apos;re committed to
              creating a safer world where security is seamless, non-intrusive,
              and powered by innovation.
            </p>
          </div>

          {/* Vision — left column */}
          <div className="lg:col-start-1 lg:col-span-5 lg:row-start-2 rounded-none border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 lg:p-10 flex flex-col">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
              Our Vision
            </h3>
            <p className="text-[15px] leading-[1.75] text-[var(--hero-body)] sm:text-base flex-1">
              To become the global leader in AI-driven security solutions, making
              weapon detection accessible, affordable, and effective for every
              organization. We envision a future where advanced technology
              empowers communities to prevent threats before they happen,
              ensuring a safer future.
            </p>
          </div>

          {/* Image — right column, spans both rows */}
          <div className="lg:col-start-6 lg:col-span-7 lg:row-start-1 lg:row-span-2 relative order-first lg:order-none overflow-hidden rounded-none border border-white/[0.08] min-h-[240px] sm:min-h-[280px] lg:min-h-full">
            <Image
              src="/images/mission.png"
              alt="Spairally — protecting communities with AI"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 55vw"
            />
            <ImageGrain />
            <div
              className="absolute inset-y-0 left-0 w-24 sm:w-32 lg:w-40 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to right, #080808 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-16 sm:h-20 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to top, #080808 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-x-0 top-0 h-12 sm:h-16 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to bottom, #080808 0%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
