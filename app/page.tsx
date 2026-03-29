import Hero from "../components/hero/Hero";
import AboutPreview from "../components/aboutPreview/AboutPreview";
import AchievementsPreview from "@/components/achievementsPreview/AchievementsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <AchievementsPreview />
    </>
  );
}