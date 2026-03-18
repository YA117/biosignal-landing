"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Method", href: "#method" },
  { label: "Science", href: "#science" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "#waitlist" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      {/* Main Footer */}
      <div className="px-6 lg:px-12 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/">
              <span className="text-xl font-normal text-foreground tracking-tight" style={{ fontFamily: 'var(--font-ibm-plex)' }}>BioSignal</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foreground/40">
              Signal-based health, starting with skin.
            </p>
          </div>

          {/* Nav & Social Links */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            <div className="flex flex-wrap gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/40 transition-colors hover:text-foreground/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/40 transition-colors hover:text-foreground/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 lg:px-12 py-4">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} BioSignal. All rights reserved. BioSignal is a brand of OakMark Trading Limited.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-foreground/30 hover:text-foreground/50">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-foreground/30 hover:text-foreground/50">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
