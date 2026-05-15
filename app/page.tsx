import type { Metadata } from "next";
import VideoHeroSection from "@/components/VideoHeroSection";
import HomeAboutSection from "@/components/sections/home/AboutSection";
import HomeServicesSection from "@/components/sections/home/ServicesSection";
import HomeCtaSection from "@/components/sections/home/CtaSection";

export const metadata: Metadata = {
  title: "AMPSAC City Clean | Professional Cleaning Services UK",
  description:
    "AMPSAC City Clean offers professional cleaning services for homes, offices, and commercial spaces across the UK. Get a free quote today!",
  keywords:
    "cleaning services, office cleaning, home cleaning, commercial cleaning, UK cleaning company, AMPSAC",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Professional Cleaning Services | AMPSAC City Clean",
    images: ["/images/social/twitter-card.jpg"],
  },
  twitter: {
    images: ["/images/social/twitter-card.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <VideoHeroSection
        title="Professional Cleaning Services for Your Space"
        subtitle="Your health, our priority. Delivering exceptional cleaning solutions for homes, offices, and commercial spaces. Experience a cleaner, healthier environment with AMPSAC City Clean."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        videoSrc="/video/back.mp4"
      />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeCtaSection />
    </>
  );
}
