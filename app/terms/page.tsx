import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Terms governing your use of the BioSignal website and food supplement products. OAKMARK Trading Limited, registered in England and Wales.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-28 pb-24">
        <div className="w-full px-6 lg:px-12 max-w-3xl mx-auto">
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6">
            Terms and Conditions
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-12">
            BioSignal Terms and Conditions
          </h1>

          <div className="space-y-8 text-sm text-foreground/60 leading-relaxed">
            <p>
              <strong className="text-foreground">Last updated:</strong> March 2026<br />
              <strong className="text-foreground">Effective date:</strong> March 2026
            </p>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">1. Introduction and Acceptance</h2>
              <p className="mb-3">
                These terms and conditions ("Terms") govern your use of the website at biosignal.co.uk (the "Website") and any products or services made available through it.
              </p>
              <p className="mb-3">
                The Website is operated by OAKMARK Trading Limited, a company registered in England and Wales (Company No. 17073095) with its registered office at 167-169 Great Portland Street, London, United Kingdom, W1W 5PF, trading as BioSignal ("we", "us", "our").
              </p>
              <p className="mb-3">
                By accessing the Website, creating an account, joining our waitlist, or placing an order, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Website.
              </p>
              <p>
                These Terms are to be read alongside our Privacy Policy, which explains how we collect and process your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">2. About BioSignal</h2>
              <p className="mb-3">BioSignal provides health education content and food supplement products.</p>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">2.1 Important health disclaimers</h3>
              <p className="mb-3">
                <strong>BioSignal is not a medical service.</strong> The content provided on the Website, including information about the BioSignal Method and general health education content, is for informational and educational purposes only. It does not constitute and must not be relied upon as medical advice, diagnosis, or treatment.
              </p>
              <p className="mb-3">
                <strong>Always consult a qualified healthcare professional</strong> before starting any new food supplement or making changes to your diet or health regimen. This is particularly important if you:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Are pregnant, breastfeeding, or planning to become pregnant</li>
                <li>Are taking prescription or over-the-counter medication</li>
                <li>Have been diagnosed with a medical condition, including but not limited to allergies, autoimmune conditions, gastrointestinal disorders, or skin conditions requiring medical supervision</li>
                <li>Are under the age of 18</li>
              </ul>
              <p className="mb-3">
                <strong>In a medical emergency, call 999 immediately or contact your nearest Accident and Emergency department.</strong> Nothing on the Website should delay your seeking medical attention.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">2.2 Regulatory classification</h3>
              <p className="mb-3">
                BioSignal Reset and any other products sold through the Website are classified as food supplements under the Food Supplements (England) Regulations 2003 (SI 2003/1387) and retained Regulation (EC) No 178/2002 (General Food Law).
              </p>
              <p className="mb-3">
                Our products are not medicines and have not been evaluated or authorised by the Medicines and Healthcare Products Regulatory Agency (MHRA). They are not intended to diagnose, treat, cure, or prevent any disease.
              </p>
              <p>
                Health claims made in connection with our products comply with the nutrition and health claims framework under retained Regulation (EC) No 1924/2006, as overseen by the UK Nutrition and Health Claims Committee (NHCC) and the Food Standards Agency (FSA).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">3. Eligibility</h2>
              <p className="mb-3">By using the Website and purchasing our products, you confirm that you are:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>At least 18 years of age, or at least 16 years of age with the consent of a parent or guardian</li>
                <li>Resident in the United Kingdom (or a jurisdiction to which we ship, where applicable)</li>
                <li>Legally capable of entering into a binding contract</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">4. Products</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">4.1 Product descriptions</h3>
              <p className="mb-3">
                We make every reasonable effort to ensure that product descriptions, ingredient lists, nutritional information, and other product details on the Website are accurate and up to date. However, we do not warrant that all product information is complete or error-free. If you discover an inaccuracy, please contact us at support@biosignal.co.uk.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">4.2 Product labelling</h3>
              <p className="mb-3">
                All product labelling complies with retained Regulation (EU) No 1169/2011 (Food Information to Consumers), the Food Supplements (England) Regulations 2003, and applicable UK food labelling legislation. Ingredient lists and allergen declarations are provided on all product packaging and on the relevant product page of the Website.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">4.3 Allergen information</h3>
              <p className="mb-3">
                BioSignal products are manufactured in facilities that may handle common allergens. Full allergen information is provided on the product label and the relevant product page. It is your responsibility to review the full ingredient list before use. If you have any food allergies or intolerances, consult the product label or contact us before purchasing.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">4.4 Recommended use</h3>
              <p className="mb-3">
                Food supplements should not be used as a substitute for a varied and balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake as stated on the product label. Keep out of the reach of young children. Store as directed on the product packaging.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">4.5 Availability</h3>
              <p>
                All products are subject to availability. We reserve the right to limit order quantities, discontinue any product, or modify product specifications at any time without prior notice. We will not be liable to you or any third party for any discontinuation or modification.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">5. Orders and Contract Formation</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">5.1 Placing an order</h3>
              <p className="mb-3">
                When you submit an order through the Website, you are making an offer to purchase the products in your order at the prices displayed at the time of submission.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">5.2 Order acceptance</h3>
              <p className="mb-3">
                All orders are subject to acceptance by us. We will confirm receipt of your order by email, but this acknowledgement does not constitute acceptance. A binding contract between you and us is formed only when we send you a dispatch confirmation email.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">5.3 Right to refuse</h3>
              <p className="mb-3">We reserve the right to refuse or cancel any order at our sole discretion, including but not limited to situations where:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>The product is out of stock or discontinued</li>
                <li>There is a pricing or product description error on the Website</li>
                <li>We suspect the order is fraudulent</li>
                <li>The order cannot be fulfilled for reasons beyond our reasonable control</li>
              </ul>
              <p>
                If we cancel your order after payment has been taken, we will issue a full refund to your original payment method without undue delay.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">6. Pricing and Payment</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">6.1 Prices</h3>
              <p className="mb-3">
                All prices displayed on the Website are in pounds sterling (£) and include Value Added Tax (VAT) at the applicable rate, unless otherwise stated. Delivery charges, where applicable, are displayed separately before you confirm your order.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">6.2 Price changes</h3>
              <p className="mb-3">
                We reserve the right to change our prices at any time. Price changes will not affect orders for which we have already sent a dispatch confirmation. Subscription pricing is subject to change upon reasonable notice.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">6.3 Payment</h3>
              <p className="mb-3">
                Payment is taken at the point of purchase through our secure third-party payment processor. We accept the payment methods displayed at checkout. All payment processing is PCI DSS-compliant.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">6.4 Pricing errors</h3>
              <p>
                In the unlikely event that a product is listed at an incorrect price due to a typographical or systems error, we are not obligated to fulfil the order at the incorrect price. We will contact you to inform you of the error and offer you the opportunity to proceed at the correct price or cancel the order for a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">7. Subscriptions</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">7.1 How subscriptions work</h3>
              <p className="mb-3">
                If you subscribe to receive BioSignal products on a recurring basis, you authorise us to charge your chosen payment method at each renewal interval as specified at the time of subscription.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">7.2 Managing your subscription</h3>
              <p className="mb-3">
                You may skip a delivery, change your delivery frequency, update your payment method, or cancel your subscription at any time before the next renewal date. Changes or cancellations take effect from the next billing cycle. No penalty, fee, or minimum commitment applies.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">7.3 Subscription price changes</h3>
              <p>
                We reserve the right to change subscription pricing with at least 30 days' written notice. If you do not agree to a price change, you may cancel your subscription before the new price takes effect without penalty.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">8. Delivery</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">8.1 Delivery times</h3>
              <p className="mb-3">
                We aim to dispatch orders within 3 to 5 working days of the dispatch confirmation email. Estimated delivery times are provided at checkout and vary depending on your location and the delivery method selected. Delivery times are estimates and not guaranteed.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">8.2 Delivery issues</h3>
              <p className="mb-3">
                If your order has not arrived within the estimated timeframe, please contact us at support@biosignal.co.uk. We will investigate and, where appropriate, arrange a replacement or full refund.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">8.3 Risk and title</h3>
              <p>
                Risk in the products passes to you upon delivery to the address you specified when placing the order. Ownership (title) of the products passes to you upon receipt of full payment.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">9. Returns, Refunds, and the 90-Day Guarantee</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">9.1 Your statutory rights</h3>
              <p className="mb-3">Under the Consumer Rights Act 2015, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Cancel</strong> your order within 14 days of delivery for any reason and receive a full refund (the "cooling-off period"). To exercise this right, you must notify us before the 14-day period expires. You must return the product within 14 days of notifying us. The product must be unused and in its original packaging. We will refund the purchase price, including standard delivery costs, within 14 days of receiving the returned product.</li>
                <li><strong>Reject</strong> a product that is faulty, not as described, or not fit for purpose within 30 days of delivery for a full refund.</li>
                <li><strong>Request a repair or replacement</strong> for a faulty product after 30 days but within 6 months of delivery.</li>
              </ul>
              <p className="mb-3">
                These statutory rights are not affected by any other provision in these Terms. Nothing in these Terms is intended to limit or exclude your statutory rights as a consumer.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">9.2 The BioSignal 90-Day Guarantee</h3>
              <p className="mb-3">
                In addition to your statutory rights, we offer a 90-day money-back guarantee on your first order of BioSignal Reset.
              </p>
              <p className="mb-3">
                If you are not satisfied with the product within 90 calendar days of the date of purchase, contact us at support@biosignal.co.uk. We will issue a full refund to your original payment method. No return of the product is required.
              </p>
              <p className="mb-3">
                This guarantee is limited to one refund per customer and applies to the first order only. It may not be combined with other promotional offers or refund mechanisms.
              </p>
              <p className="mb-3">
                This guarantee is offered in addition to, and does not affect or replace, your statutory rights under the Consumer Rights Act 2015.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">9.3 How to request a refund</h3>
              <p>
                To request a refund under the 90-day guarantee or your statutory rights, contact us at support@biosignal.co.uk with your order number and the reason for your request. We will process eligible refunds within 14 days of approving the request.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">10. Health and Safety Disclaimers</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">10.1 Food supplement disclaimer</h3>
              <p className="mb-3">
                BioSignal Reset and any other products sold through the Website are food supplements. Food supplements are intended to supplement the diet and should not be used as a substitute for a varied and balanced diet and a healthy lifestyle.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">10.2 Individual results</h3>
              <p className="mb-3">
                Individual results may vary. The information provided on the Website regarding potential health outcomes is based on published scientific research. However, food supplements are not intended to diagnose, treat, cure, or prevent any disease. We make no guarantee of specific results.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">10.3 Adverse reactions</h3>
              <p className="mb-3">
                If you experience any adverse reaction while taking our products, discontinue use immediately and consult a healthcare professional. We encourage you to report any adverse reactions to us at support@biosignal.co.uk and, where appropriate, to the Food Standards Agency via its food safety reporting mechanisms.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">10.4 Drug interactions</h3>
              <p>
                Certain food supplements may interact with prescription or over-the-counter medications. If you are taking any medication, consult your GP or pharmacist before using our products.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">11. Intellectual Property</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">11.1 Ownership</h3>
              <p className="mb-3">
                All content on the Website, including but not limited to text, graphics, photographs, illustrations, logos, icons, the BioSignal name, the BioSignal Method, product names, and associated branding and trade marks, is the property of OAKMARK Trading Limited or its licensors and is protected by the Copyright, Designs and Patents Act 1988, the Trade Marks Act 1994, and applicable international intellectual property laws.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">11.2 Permitted use</h3>
              <p className="mb-3">
                You may access and view the Website for personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any content from the Website without our prior written consent.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">11.3 Trade marks</h3>
              <p>
                "BioSignal," "BioSignal Reset," "BioSignal Method," and associated logos are trade marks of OAKMARK Trading Limited. Unauthorised use of these marks is strictly prohibited and may constitute an infringement of our trade mark rights.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">12. Website Use</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">12.1 Acceptable use</h3>
              <p className="mb-3">
                You agree to use the Website lawfully and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Website by, any third party.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">12.2 Prohibited conduct</h3>
              <p className="mb-3">You must not:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Use the Website for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to the Website, its servers, or any connected systems</li>
                <li>Introduce viruses, trojans, worms, or other malicious code</li>
                <li>Scrape, harvest, or collect data from the Website by automated means without our written consent</li>
                <li>Use the Website to transmit unsolicited communications</li>
              </ul>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">12.3 Availability</h3>
              <p>
                We do not guarantee that the Website will be available at all times or that it will be uninterrupted, timely, secure, or free from errors. We may suspend or restrict access to the Website at any time for maintenance, updates, or other reasons without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">13. Limitation of Liability</h2>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">13.1 Exclusions</h3>
              <p className="mb-3">To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or our products, including but not limited to loss of profits, data, goodwill, or other intangible losses.</li>
                <li>Our total aggregate liability to you in respect of any and all claims arising from or in connection with these Terms or your use of the Website or our products shall not exceed the total amount you paid to us for the relevant product or service in the 12 months preceding the claim.</li>
              </ul>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">13.2 Preserved rights</h3>
              <p className="mb-3">Nothing in these Terms excludes or limits our liability for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Death or personal injury caused by our negligence</li>
                <li>Fraud or fraudulent misrepresentation</li>
                <li>Breach of the terms implied by section 12 of the Sale of Goods Act 1979 (title and quiet possession)</li>
                <li>Breach of the terms implied by sections 9, 10, 11, and 13 of the Consumer Rights Act 2015 (goods to be of satisfactory quality, fit for purpose, and as described)</li>
                <li>Defective products under the Consumer Protection Act 1987</li>
                <li>Any other liability that cannot be excluded or limited by applicable law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">14. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless OAKMARK Trading Limited, its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from your breach of these Terms or your misuse of the Website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">15. Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performing our obligations under these Terms where such failure or delay results from events beyond our reasonable control, including but not limited to natural disasters, pandemics, epidemics, government actions, supply chain disruptions, postal or courier service failures, industrial disputes, or failure of third-party systems.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">16. Severability</h2>
              <p>
                If any provision of these Terms is found to be unlawful, void, or unenforceable by a court of competent jurisdiction, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">17. Waiver</h2>
              <p>
                No failure or delay by us in exercising any right or remedy under these Terms shall constitute a waiver of that right or remedy. A waiver of any right or remedy on one occasion shall not prevent us from exercising that right or remedy on any subsequent occasion.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">18. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and us in relation to your use of the Website and our products. They supersede all prior agreements, representations, and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">19. Third-Party Rights</h2>
              <p>
                These Terms do not confer any rights on any person or party other than you and OAKMARK Trading Limited. No third party shall have any right to enforce any provision of these Terms under the Contracts (Rights of Third Parties) Act 1999.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">20. Governing Law and Jurisdiction</h2>
              <p className="mb-3">
                These Terms are governed by and construed in accordance with the laws of England and Wales.
              </p>
              <p>
                Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales. If you are a consumer resident in Scotland, you may also bring proceedings in Scotland. If you are a consumer resident in Northern Ireland, you may also bring proceedings in Northern Ireland.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">21. Dispute Resolution</h2>
              <p className="mb-3">
                If you have a complaint about our products or services, please contact us first at support@biosignal.co.uk. We will endeavour to resolve the matter directly.
              </p>
              <p className="mb-3">
                If we are unable to resolve the dispute, you may refer the matter to an alternative dispute resolution (ADR) provider. We are not currently required to participate in ADR, but we will confirm at the time of the complaint whether we are willing to do so.
              </p>
              <p>
                You may also pursue your claim through the courts as described in Section 20.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">22. Changes to These Terms</h2>
              <p className="mb-3">
                We may update these Terms from time to time. When we make changes, we will update the "Last updated" date at the top of this document. Where changes are material, we will take reasonable steps to notify you, including by email where practicable.
              </p>
              <p>
                Your continued use of the Website after updated Terms have been posted constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you should discontinue your use of the Website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">23. Contact</h2>
              <p className="mb-3">For any questions about these Terms:</p>
              <p>
                <strong>Email:</strong> support@biosignal.co.uk<br /><br />
                <strong>OAKMARK Trading Limited</strong><br />
                Trading as BioSignal<br />
                Company No. 17073095<br />
                Registered in England and Wales<br />
                Registered address: 167-169 Great Portland Street, London, United Kingdom, W1W 5PF
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
