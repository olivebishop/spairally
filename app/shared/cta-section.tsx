"use client";

import Image from "next/image";
import Link from "next/link";
import GrainOverlay from "@/app/shared/grain";
import { ImageGrain } from "@/app/shared/grain";

export default function CtaSection() {
  return (
    <section
      className="relative isolate min-h-[420px] overflow-hidden bg-[#080808] font-[var(--font-inter),system-ui,sans-serif sm:min-h-[480px] lg:min-h-[520px]"
      aria-labelledby="cta-heading"
    >
      <GrainOverlay position="absolute" />

      {/* Image: full bleed bg layer — right side on lg, full on mobile */}
      <div className="absolute inset-0 z-0 lg:left-auto lg:right-0 lg:w-[52%]">
        <Image
          src="/images/footer.png"
          alt="Spairally app in action — instant threat detection alerts"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1023px) 100vw, 52vw"
          priority={false}
        />
        <ImageGrain />
        {/* Gradients to blend image into bg — same pattern as hero */}
        <div
          className="absolute inset-y-0 left-0 w-32 sm:w-40 lg:w-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #080808 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 sm:h-32 lg:h-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #080808 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #080808 0%, transparent 100%)",
          }}
        />
        {/* Extra dark overlay on mobile for text contrast */}
        <div
          className="absolute inset-0 lg:hidden z-10 pointer-events-none opacity-40"
          style={{
            background: "linear-gradient(135deg, #080808 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Content — overlaid on left, aligns with navbar/hero */}
      <div className="relative z-10 flex min-h-[420px] w-full flex-col justify-center px-4 py-16 sm:min-h-[480px] sm:px-6 sm:py-20 lg:min-h-[520px] lg:w-[52%] lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[500px] w-full">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Get early access
          </p>
          <h2
            id="cta-heading"
            className="max-w-xl text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl xl:text-[52px] leading-[1.12]"
          >
            Ready to protect what matters?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Join security teams across schools, venues & public spaces. Download
            Spairally and get instant threat alerts — before it&apos;s too late.
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="cta-btn inline-flex items-center justify-center gap-2 rounded-none bg-white px-8 py-4 text-[15px] font-semibold tracking-[0.02em] text-[#080808] no-underline transition-all hover:bg-white/92"
            >
              Download Spairally Now
            </Link>
            <p className="mt-3 text-[13px] text-white/40">
              Available on App Store & Google Play
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
