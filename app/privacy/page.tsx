import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy — BioSignal",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-28 pb-24">
        <div className="w-full px-6 lg:px-12 max-w-3xl">
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6">
            — Privacy Policy
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-sm text-foreground/60 leading-relaxed">
            <p>
              <strong className="text-foreground">Last updated:</strong> March 2026
            </p>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">1. Introduction</h2>
              <p>
                BioSignal is a brand of OakMark Trading Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). We are committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains how we collect, use, and protect your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email address (when you join the waitlist)</li>
                <li>Usage data and analytics (pages visited, time on site)</li>
                <li>Device and browser information</li>
                <li>IP address</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To manage and communicate with waitlist subscribers</li>
                <li>To send product updates, launch notifications, and relevant content</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share data with trusted third-party service providers (such as email platforms and analytics tools) solely for the purposes described above. All third parties are required to handle your data in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">5. Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to enhance your experience and gather usage analytics. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">6. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">7. Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Unsubscribe from communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">8. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <span className="text-foreground">hello@BioSignal.co.uk</span>.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-blue-bio hover:underline"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
