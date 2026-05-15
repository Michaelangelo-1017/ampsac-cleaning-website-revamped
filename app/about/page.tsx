import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutStorySection from "@/components/sections/about/StorySection";
import AboutValuesSection from "@/components/sections/about/ValuesSection";
import AboutTimelineSection from "@/components/sections/about/TimelineSection";
import AboutTeamSection from "@/components/sections/about/TeamSection";
import { HERO_IMAGES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About AMPSAC City Clean | Our Story & Values",
  description:
    "Learn about AMPSAC City Clean, a new cleaning company in the UK committed to delivering exceptional cleaning services with integrity and excellence.",
  keywords:
    "about AMPSAC, cleaning company UK, professional cleaners, cleaning team, company values, cleaning history",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Our Cleaning Company | AMPSAC City Clean",
    images: ["/images/social/twitter-card.jpg"],
  },
  twitter: { images: ["/images/social/twitter-card.jpg"] },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About AMPSAC City Clean"
        subtitle="Learn about our story, our values, and the dedicated team behind our exceptional cleaning services."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage={HERO_IMAGES.about}
      />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutTimelineSection />
      <AboutTeamSection />
    </>
  );
}
