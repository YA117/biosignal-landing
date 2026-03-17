"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Method", href: "#method" },
  { label: "Science", href: "#science" },
  { label: "Journal", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1c1917]">
      {/* Main Footer */}
      <div className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            {/* Brand */}
            <div className="max-w-xs">
              <Link href="/" className="flex items-baseline gap-0.5">
                <span className="text-xl font-light text-white">Bio</span>
                <span className="text-xl font-normal text-[#c4733b]">
                  Signal
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-white/30">
                Signal-based health, starting with skin.
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {["IG", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-white/40 transition-all hover:border-white/30 hover:text-white/60"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="border-t border-white/5 px-6 py-12 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-6xl font-light tracking-tight text-white/5 sm:text-7xl md:text-8xl lg:text-9xl">
            BioSignal
          </h2>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 py-4 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} BioSignal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-white/20 hover:text-white/40"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/20 hover:text-white/40"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
