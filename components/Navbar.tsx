"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Method", href: "#method" },
  { label: "Science", href: "#science" },
  { label: "Journal", href: "/journal" },
  { label: "Join the Waitlist", href: "#waitlist", highlight: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background border-b border-border">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6 lg:px-12">
        <Link href="/" className="group">
          <span className="text-xl font-normal text-foreground tracking-tight" style={{ fontFamily: 'var(--font-ibm-plex)' }}>BioSignal</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-sans transition-colors ${
                link.highlight
                  ? "text-foreground hover:text-foreground/70 flex items-center gap-1"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
              {link.highlight && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 py-4 absolute top-20 left-0 right-0 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center justify-between py-4 text-sm font-sans text-foreground/80`}
              onClick={() => setMobileOpen(false)}
            >
              <span>{link.label}</span>
              {link.highlight && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
