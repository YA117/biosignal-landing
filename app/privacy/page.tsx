import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How BioSignal and OAKMARK Trading Limited collect, use, and protect your personal data under UK GDPR and the Data (Use and Access) Act 2025.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-28 pb-24">
        <div className="w-full px-6 lg:px-12 max-w-3xl mx-auto">
          <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6">
            Privacy Policy
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-12">
            BioSignal Privacy Policy
          </h1>

          <div className="space-y-8 text-sm text-foreground/60 leading-relaxed">
            <p>
              <strong className="text-foreground">Last updated:</strong> March 2026<br />
              <strong className="text-foreground">Effective date:</strong> March 2026
            </p>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">1. Introduction</h2>
              <p className="mb-3">
                This privacy policy explains how OAKMARK Trading Limited ("we", "us", "our"), trading as BioSignal, collects, uses, stores, and protects your personal data when you visit our website at biosignal.co.uk (the "Website"), subscribe to our communications, or purchase our products.
              </p>
              <p className="mb-3">
                OAKMARK Trading Limited is a company registered in England and Wales (Company No. 17073095) with its registered office at 167-169 Great Portland Street, London, United Kingdom, W1W 5PF.
              </p>
              <p className="mb-3">
                For the purposes of the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the Data (Use and Access) Act 2025, OAKMARK Trading Limited is the data controller responsible for your personal data.
              </p>
              <p className="mb-3">
                We are registered with the Information Commissioner's Office (ICO) under registration number [INSERT].
              </p>
              <p>
                We are committed to protecting your privacy and handling your data in an open, transparent, and lawful manner. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">2. Data Protection Officer</h2>
              <p className="mb-3">
                For all enquiries relating to data protection, including the exercise of your rights, please contact:
              </p>
              <p className="mb-3">
                <strong>Data Protection Contact</strong><br />
                Email: privacy@biosignal.co.uk<br />
                Post: Data Protection, OAKMARK Trading Limited, 167-169 Great Portland Street, London, United Kingdom, W1W 5PF
              </p>
              <p>
                We aim to respond to all legitimate enquiries within 30 calendar days. In exceptional circumstances, where a request is particularly complex or voluminous, we may extend this period by a further 60 days, in which case we will notify you and explain the reason for the extension.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">3. Personal Data We Collect</h2>
              <p className="mb-3">We collect and process the following categories of personal data, depending on how you interact with us.</p>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">3.1 Data you provide directly</h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Waitlist registration:</strong> Email address (To notify you of product launches, provide early access, and send relevant BioSignal content)</li>
                <li><strong>Product purchase:</strong> Full name, email address, billing address, delivery address, telephone number (To fulfil your order, process payment, arrange delivery, and provide customer support)</li>
                <li><strong>Payment information:</strong> Card details and billing data (Processed securely by our third-party payment processor. We do not store card details on our servers.)</li>
                <li><strong>Customer support:</strong> Name, email, and any information you include in your correspondence (To respond to your enquiry and resolve any issues)</li>
                <li><strong>Subscription management:</strong> Email address, delivery preferences, payment details (To manage recurring deliveries, process renewal payments, and action cancellation or amendment requests)</li>
              </ul>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">3.2 Data collected automatically</h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Device and browser data:</strong> IP address (anonymised), browser type and version, operating system, device type, screen resolution</li>
                <li><strong>Usage data:</strong> Pages visited, time spent on pages, referring URL, click interactions, scroll depth</li>
                <li><strong>Cookie data:</strong> Strictly necessary cookies and, with your consent, analytics cookies</li>
                <li><strong>Location data:</strong> Approximate geographic location derived from anonymised IP address</li>
              </ul>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">3.3 Data from third parties</h3>
              <p className="mb-2">We may receive personal data from the following third-party sources:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Payment processors who confirm transaction status</li>
                <li>Delivery partners who provide delivery confirmation and tracking information</li>
                <li>Fraud prevention services who verify transaction legitimacy</li>
              </ul>
              <p>We do not purchase or acquire personal data from data brokers, list providers, or social media platforms.</p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">4. Lawful Bases for Processing</h2>
              <p className="mb-3">
                Under Articles 6 and 7 of the UK GDPR, as amended by the Data (Use and Access) Act 2025, we process your personal data on the following lawful bases:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Consent (Art. 6(1)(a)):</strong> Sending waitlist communications.</li>
                <li><strong>Performance of a contract (Art. 6(1)(b)):</strong> Fulfilling product orders, processing payments, managing subscriptions, and sending transactional emails.</li>
                <li><strong>Recognised legitimate interest (Art. 6(1)(f)):</strong> Website analytics (anonymised) and preventing fraud.</li>
                <li><strong>Legal obligation (Art. 6(1)(c)):</strong> Retaining financial records and responding to data protection requests.</li>
              </ul>
              <p className="mb-3">
                Where we rely on consent, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal.
              </p>
              <p>
                Where we rely on legitimate interests, we have conducted a legitimate interests assessment, which is available upon request.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">5. How We Use Your Data</h2>
              <p className="mb-2">We use your personal data for the following purposes only:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>To register you on our waitlist and send you launch communications</li>
                <li>To process, fulfil, and deliver your orders</li>
                <li>To manage your subscription (renewals, amendments, cancellations)</li>
                <li>To process payments and refunds</li>
                <li>To communicate with you about your orders, including dispatch and delivery notifications</li>
                <li>To respond to your enquiries and provide customer support</li>
                <li>To analyse Website usage and improve its content, functionality, and performance</li>
                <li>To detect and prevent fraud</li>
                <li>To comply with our legal and regulatory obligations</li>
                <li>To handle data protection complaints</li>
              </ul>
              <p>We do not use your personal data for automated decision-making or profiling that produces legal or similarly significant effects.</p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">6. Data Sharing</h2>
              <p className="mb-3">
                We share your personal data only with trusted third-party service providers who process data on our behalf and only to the extent necessary for the purposes described in this policy.
              </p>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">6.1 Categories of recipients</h3>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Hosting and infrastructure providers (technical data, usage data)</li>
                <li>Email service providers (email address, name)</li>
                <li>Payment processors (payment details, billing address)</li>
                <li>Delivery partners (name, delivery address, telephone number)</li>
                <li>Analytics providers (anonymised usage data only)</li>
                <li>Fraud prevention services (transaction data, IP address)</li>
              </ul>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">6.2 Data processing agreements</h3>
              <p className="mb-3">
                Each third-party processor is bound by a written data processing agreement that complies with Article 28 of the UK GDPR, including obligations relating to data security, confidentiality, sub-processing, data breach notification, and data return or deletion upon termination.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">6.3 What we never do</h3>
              <p className="mb-3">
                We do not sell, rent, lease, or trade your personal data to any third party. We do not share your data with advertisers, marketing platforms, or social media networks. We do not permit our service providers to use your data for their own purposes.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">6.4 Legal disclosures</h3>
              <p>
                We may disclose your personal data if required to do so by law, by a court order, by a regulatory authority, or if we believe in good faith that such disclosure is necessary to comply with a legal obligation, protect our rights or the rights of others, or prevent fraud or other unlawful activity.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">7. International Data Transfers</h2>
              <p className="mb-3">
                Your personal data is primarily stored and processed within the United Kingdom and the European Economic Area (EEA).
              </p>
              <p className="mb-3">
                Where we transfer personal data outside the UK or EEA, we ensure that appropriate safeguards are in place in accordance with Chapter V of the UK GDPR. These safeguards include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>UK adequacy regulations</li>
                <li>Standard contractual clauses (the UK International Data Transfer Agreement (IDTA) or the UK Addendum to EU standard contractual clauses)</li>
                <li>Supplementary measures where required</li>
              </ul>
              <p>Details of the specific safeguards applied to any transfer are available upon request.</p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">8. Data Retention</h2>
              <p className="mb-3">
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
              </p>
              <p className="mb-3">
                Our retention periods are as follows:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Waitlist email addresses:</strong> Until you unsubscribe, or 24 months from last engagement if no purchase is made</li>
                <li><strong>Order and transaction records:</strong> 6 years from the date of the transaction</li>
                <li><strong>Subscription records:</strong> Duration of subscription plus 6 years</li>
                <li><strong>Customer support correspondence:</strong> 24 months from the date the enquiry is resolved</li>
              </ul>
              <p>At the end of the applicable retention period, personal data is securely deleted or irreversibly anonymised.</p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">9. Your Rights</h2>
              <p className="mb-3">
                Under the UK GDPR and the Data Protection Act 2018, as amended by the Data (Use and Access) Act 2025, you have the following rights:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li><strong>Right of access</strong> (Art. 15)</li>
                <li><strong>Right to rectification</strong> (Art. 16)</li>
                <li><strong>Right to erasure</strong> (Art. 17)</li>
                <li><strong>Right to restriction of processing</strong> (Art. 18)</li>
                <li><strong>Right to data portability</strong> (Art. 20)</li>
                <li><strong>Right to object</strong> (Art. 21)</li>
                <li><strong>Right to withdraw consent</strong> (Art. 7(3))</li>
              </ul>
              
              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">9.1 How to exercise your rights</h3>
              <p className="mb-3">
                To exercise any of the above rights, contact us at privacy@biosignal.co.uk with sufficient information to identify you. We will respond within 30 calendar days.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">9.2 Data protection complaints</h3>
              <p>
                To submit a complaint, contact us at privacy@biosignal.co.uk with the subject line "Data Protection Complaint." If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ico.org.uk).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">10. Data Security</h2>
              <p className="mb-3">
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised or unlawful processing and against accidental loss, destruction, or damage.
              </p>
              <p>
                In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the ICO within 72 hours, and we will notify you without undue delay where the breach is likely to result in a high risk to your rights.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">11. Cookies and Similar Technologies</h2>
              <p className="mb-3">
                Our use of cookies and similar technologies is governed by the Privacy and Electronic Communications Regulations 2003 (PECR).
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">11.1 Strictly necessary cookies</h3>
              <p className="mb-3">
                These cookies are essential for the Website to function and cannot be disabled.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">11.2 Analytics cookies</h3>
              <p className="mb-3">
                With your consent, we use analytics cookies to collect anonymised information about how visitors interact with the Website. You may change your preferences at any time.
              </p>

              <h3 className="text-base font-sans font-normal text-foreground mb-2 mt-6">11.3 Cookies we do not use</h3>
              <p>
                We do not use advertising cookies, tracking cookies, social media cookies, or any cookies that build a profile of your browsing activity across third-party websites. We do not participate in real-time bidding or programmatic advertising.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">12. Children's Data</h2>
              <p>
                BioSignal products and services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children under 16. If you believe that we have inadvertently collected personal data from a child under 16, please contact us at privacy@biosignal.co.uk.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">13. Third-Party Links</h2>
              <p>
                The Website may contain links to third-party websites, services, or resources. We are not responsible for the privacy practices or content of those third parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">14. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. When we make material changes, we will update the "Last updated" date at the top of this policy and notify you by email where possible.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">15. Governing Law</h2>
              <p>
                This privacy policy is governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or in connection with this policy shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-normal text-foreground mb-3">16. Contact</h2>
              <p>
                <strong>OAKMARK Trading Limited</strong><br />
                Trading as BioSignal<br />
                Company No. 17073095<br />
                Registered address: 167-169 Great Portland Street, London, United Kingdom, W1W 5PF<br />
                ICO Registration No. [INSERT]<br /><br />
                <strong>Email:</strong> privacy@biosignal.co.uk
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
