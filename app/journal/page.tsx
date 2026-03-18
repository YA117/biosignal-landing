import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Research, insights, and practical guidance on the gut-skin axis, skin barrier health, and the science behind BioSignal.',
  openGraph: {
    title: 'BioSignal Journal',
    description:
      'Research and insights on the gut-skin axis and signal-based skin health.',
    url: '/journal',
  },
  alternates: {
    canonical: '/journal',
  },
}

export default function JournalPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-4">
        Coming Soon
      </span>
      <h1 className="mt-4 text-3xl font-sans font-normal text-foreground sm:text-4xl">
        BioSignal <span className="text-foreground/40 italic">Journal</span>
      </h1>
      <p className="mt-4 text-sm text-foreground/60 text-center max-w-md">
        Research, insights, and practical guidance on the gut-skin axis, skin barrier health, and the science behind BioSignal.
      </p>
      <Link
        href="/"
        className="mt-12 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        Back to Home
      </Link>
    </div>
  );
}
