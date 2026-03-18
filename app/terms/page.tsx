import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Terms of Use — BioSignal",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-28 pb-24">
        <div className="w-full px-6 lg:px-12 max-w-3xl">
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6">
            — Terms of Use
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-12">
            Terms of Use
          </h1>

          <div className="space-y-8 text-sm text-foreground/60 leading-relaxed">
            <p>
              <strong className="text-foreground">Last updated:</strong> March 2026
            </p>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">1. About BioSignal</h2>
              <p>
                BioSignal is a brand of OakMark Trading Limited. By accessing or using the BioSignal website and any related services, you agree to be bound by these Terms of Use. If you do not agree, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">2. Not Medical Advice</h2>
              <p>
                BioSignal provides educational content and wellness products. Nothing on this website constitutes medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before making changes to your health routine, diet, or supplementation. BioSignal products are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">3. Waitlist and Communications</h2>
              <p>
                By joining the BioSignal waitlist, you consent to receive email communications related to product launches, updates, and relevant content. You may unsubscribe at any time using the link provided in any email.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and design — is the property of OakMark Trading Limited and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">5. Product Claims and Research</h2>
              <p>
                BioSignal references peer-reviewed research to support its framework. Where evidence is strong, we state so. Where evidence is emerging, we disclose that. Individual results may vary. Our money-back guarantee is subject to the specific terms communicated at the time of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, OakMark Trading Limited shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our products.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">7. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction in which OakMark Trading Limited is registered. Any disputes shall be resolved in the courts of that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">8. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">9. Contact</h2>
              <p>
                For any questions regarding these Terms, please contact us at{" "}
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
