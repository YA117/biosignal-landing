import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { RoutineSection } from "@/components/sections/routine-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { LifestyleBanner } from "@/components/sections/lifestyle-banner";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { CommunityFavorites } from "@/components/sections/community-favorites";
import { ProcessDiagram } from "@/components/sections/process-diagram";
import { RoutineTimeline } from "@/components/sections/routine-timeline";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RoutineSection />
        <FeaturesSection />
        <LifestyleBanner />
        <ProductShowcase />
        <CommunityFavorites />
        <ProcessDiagram />
        <RoutineTimeline />
        <TestimonialSection />
        <WaitlistSection />
        <Footer />
      </main>
    </>
  );
}
