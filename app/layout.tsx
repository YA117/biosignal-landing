import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "BioSignal — Your Skin Is the Signal",
  description:
    "A science-backed framework that decodes chronic skin conditions by addressing the gut, skin barrier, and nervous system.",
  openGraph: {
    title: "BioSignal — Your Skin Is the Signal",
    description:
      "Stop treating the symptom. Start reading the signal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-[#faf8f5] text-[#1c1917] antialiased font-[family-name:var(--font-geist-sans)]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
