import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ReframeSection } from "@/components/sections/reframe-section";
import { ThreeSystemsSection } from "@/components/sections/three-systems";
import { MarqueeBanner } from "@/components/sections/marquee-banner";
import { MethodSection } from "@/components/sections/method-section";
import { EvidenceSection } from "@/components/sections/evidence-section";
import { ProductSection } from "@/components/sections/product-section";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ReframeSection />
        <ThreeSystemsSection />
        <MarqueeBanner />
        <MethodSection />
        <EvidenceSection />
        <MarqueeBanner />
        <ProductSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
