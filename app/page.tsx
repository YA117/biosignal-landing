import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/Hero";
import { Reframe } from "@/components/sections/Reframe";
import { ThreeSystems } from "@/components/sections/ThreeSystems";
import { Method } from "@/components/sections/Method";
import { Evidence } from "@/components/sections/Evidence";
import { Waitlist } from "@/components/sections/Waitlist";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reframe />
        <ThreeSystems />
        <Method />
        <Evidence />
        <Waitlist />
        <Footer />
      </main>
    </>
  );
}
