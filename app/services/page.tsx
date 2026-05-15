import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import HashScroller from "@/components/HashScroller";
import ServicesOverview from "@/components/sections/services/ServicesOverview";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import ServicesCta from "@/components/sections/services/ServicesCta";
import { HERO_IMAGES, SERVICE_DETAILS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "AMPSAC City Clean offers specialized cleaning services for offices, homes, commercial spaces, and more. Each service is tailored to meet your specific needs.",
  keywords:
    "cleaning services, office cleaning, residential cleaning, commercial cleaning, specialized cleaning, professional cleaners, UK cleaning services",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Professional Cleaning Services | AMPSAC City Clean",
    images: ["/images/social/twitter-card.jpg"],
  },
  twitter: { images: ["/images/social/twitter-card.jpg"] },
};

export default function ServicesPage() {
  return (
    <>
      <HashScroller />
      <HeroSection
        title="Our Professional Cleaning Services"
        subtitle="Comprehensive cleaning solutions for homes, offices, and commercial spaces. We deliver exceptional results with attention to detail."
        buttonText="Request a Quote"
        buttonLink="/contact"
        backgroundImage={HERO_IMAGES.services}
      />

      <ServicesOverview />

      {SERVICE_DETAILS.map((service, index) => (
        <ServiceDetail
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          image={service.image}
          index={index}
        />
      ))}

      <ServicesCta />
    </>
  );
}
