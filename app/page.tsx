import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import WhoWeServe from "@/components/WhoWeServe";
import Solutions from "@/components/Solutions";
import Benefits from "@/components/Benefits";
import ResultsPlaceholder from "@/components/ResultsPlaceholder";
import Approach from "@/components/Approach";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. WHAT WE DO */}
      <Overview />

      {/* 3. WHO WE SERVE */}
      <WhoWeServe />

      {/* 4. OUR SOLUTIONS */}
      <Solutions />

      {/* 5. WHAT YOU GET: 3 BIG BENEFITS */}
      <Benefits />

      {/* 6. RESULTS PLACEHOLDER */}
      <ResultsPlaceholder />

      {/* 7. OUR APPROACH */}
      <Approach />

      {/* 8. FINAL CTA BAND */}
      <CTA />
    </>
  );
}
