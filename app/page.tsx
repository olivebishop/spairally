import GrainOverlay from "@/app/shared/grain";
import Hero from "@/app/shared/hero";
import Navbar from "@/app/shared/navbar";
import Footer from "@/app/shared/footer";
import CtaSection from "@/app/shared/cta-section";
import {
  AboutSection,
  SolutionsSection,
  UseCaseSection,
} from "@/app/shared/sections";

export default function Home() {
  return (
    <div className="landing-page flex min-h-dvh flex-col bg-[#080808] text-white">
      <section className="hero-section relative isolate w-full overflow-hidden bg-[#080808]">
        <GrainOverlay position="absolute" />
        <Navbar />
        <Hero />
      </section>

      <AboutSection />
      <SolutionsSection />
      <UseCaseSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
