import { Inter, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-ibm-plex" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "BioSignal — Your Skin Is the Signal",
  description: "A science-backed framework that decodes chronic skin conditions by addressing the gut, skin barrier, and nervous system.",
  openGraph: {
    title: "BioSignal — Your Skin Is the Signal",
    description: "Stop treating the symptom. Start reading the signal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlex.variable} ${mono.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
