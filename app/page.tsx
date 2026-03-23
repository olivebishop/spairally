"use client";

import { useState } from "react";
import GrainOverlay from "@/app/shared/grain";
import Hero from "@/app/shared/hero";
import Navbar from "@/app/shared/navbar";
import TrustedByMarquee from "@/app/shared/trusted-by-marquee";
import Footer from "@/app/shared/footer";
import CtaSection from "@/app/shared/cta-section";
import {
  AboutSection,
  SolutionsSection,
  UseCaseSection,
} from "@/app/shared/sections";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="landing-page flex min-h-dvh flex-col">
      <section className="hero-section relative isolate min-h-dvh flex-1 w-full overflow-x-hidden overflow-y-auto bg-[#080808]">
        <GrainOverlay position="absolute" />
        <Navbar loaded={loaded} />
        <Hero loaded={loaded} onHeroImageLoad={() => setLoaded(true)} />
      </section>
      <TrustedByMarquee />
      <AboutSection />
      <SolutionsSection />
      <UseCaseSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
