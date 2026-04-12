import Hero from "../components/hero/Hero";
import AboutPreview from "../components/aboutPreview/AboutPreview";
import AchievementsPreview from "@/components/achievementsPreview/AchievementsPreview";
import CTA from "@/components/cta/CTA";
import Mission from "@/components/mission/Mission";
import Features from "@/components/features/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Mission />
      <Features />
      <AchievementsPreview />
      <CTA />
    </>
  );
}