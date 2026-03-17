import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Lumière | Science-Backed Skincare",
  description: "Glow Confidently. Powered by Science. Premium skincare for effortless radiance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-[#faf9f7] text-[#1a1a1a] antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
