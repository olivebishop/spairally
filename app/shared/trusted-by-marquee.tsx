"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import GrainOverlay from "@/app/shared/grain";

// Placeholder brands — replace with real logo paths when available
const BRANDS = [
  "Schools",
  "Venues",
  "Public Spaces",
  "Events",
  "Campuses",
  "Libraries",
  "Transit",
  "Government",
] as const;

function BrandItem({ name }: { name: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center px-6 sm:px-8 lg:px-10"
      aria-hidden
    >
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-base">
        {name}
      </span>
      <span className="ml-4 h-3 w-px bg-white/25" aria-hidden />
    </div>
  );
}

export default function TrustedByMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const halfWidth = track.scrollWidth / 2;
      gsap.to(track, {
        x: -halfWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef }
  );

  return (
    <section
      className="content-section relative flex items-center border-y border-white/[0.06] bg-[#080808] py-5 sm:py-6"
      aria-label="Trusted by organizations"
    >
      <GrainOverlay position="absolute" />
      <p className="sr-only">Trusted by schools, venues, and public spaces</p>

      {/* "Trusted by" label — fixed left, aligns with hero content */}
      <div className="z-10 shrink-0 pl-4 pr-6 sm:pl-6 sm:pr-8 lg:pl-12 lg:pr-10">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65 sm:text-[11px]">
          Trusted by
        </span>
      </div>

      <div className="min-w-0 flex-1 overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max items-center"
          style={{ willChange: "transform" }}
        >
          {BRANDS.map((name, i) => (
            <BrandItem key={`a-${i}`} name={name} />
          ))}
          {BRANDS.map((name, i) => (
            <BrandItem key={`b-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
