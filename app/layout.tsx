import { Inter, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { Agentation } from "agentation";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-ibm-plex" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

import type { Metadata } from 'next'

const SITE_URL = 'https://biosignal.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'BioSignal Your Skin Is the Signal',
    template: '%s | BioSignal',
  },
  description:
    'A science-led framework that decodes chronic skin conditions by addressing the gut, skin barrier, and nervous system. Probiotics formulated for acne, eczema, rosacea, and reactive skin.',
  keywords: [
    'probiotics for skin',
    'gut skin axis',
    'probiotics for acne',
    'probiotics for eczema',
    'skin probiotic supplement',
    'gut health and skin',
    'probiotics for rosacea',
    'clear skin probiotic',
    'skin health supplement UK',
  ],
  authors: [{ name: 'BioSignal', url: SITE_URL }],
  creator: 'BioSignal',
  publisher: 'OAKMARK Trading Limited',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'BioSignal',
    title: 'BioSignal Your Skin Is the Signal',
    description:
      'A science-led framework for acne, eczema, rosacea, and reactive skin. Addressing the gut, skin barrier, and nervous system.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BioSignal Your Skin Is the Signal',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BioSignal Your Skin Is the Signal',
    description:
      'A science-led framework for acne, eczema, rosacea, and reactive skin.',
    images: ['/og-image.jpg'],
    creator: '@biosignal',
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'INSERT_GOOGLE_VERIFICATION_CODE',
  },
}

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BioSignal',
  legalName: 'OAKMARK Trading Limited',
  url: 'https://biosignal.co.uk',
  logo: 'https://biosignal.co.uk/logo.png',
  description:
    'A science-led framework that decodes chronic skin conditions by addressing the gut, skin barrier, and nervous system.',
  foundingDate: '2026',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://instagram.com/biosignal',
    'https://x.com/biosignal',
  ],
  brand: {
    '@type': 'Brand',
    name: 'BioSignal',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${ibmPlex.variable} ${mono.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-blue-bio/20 selection:text-blue-bio">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        {children}
        <Toaster />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
