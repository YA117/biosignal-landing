"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Method", href: "#" },
  { label: "Science", href: "#" },
  { label: "Journal", href: "#" },
  { label: "Join Waitlist", href: "#waitlist", highlight: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-charcoal/95 backdrop-blur-md border-b border-surface-dark/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-xl font-serif text-white tracking-tight group-hover:opacity-80 transition-opacity">Bio</span>
          <span className="text-xl font-serif text-accent tracking-tight group-hover:opacity-80 transition-opacity italic">Signal</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-sans transition-colors ${
                link.highlight
                  ? "bg-white text-charcoal px-6 py-3 rounded-full font-medium hover-lift"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-charcoal border-b border-surface-dark/10 px-6 py-6 absolute top-24 left-0 right-0 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`block py-4 text-sm font-sans ${
                link.highlight ? "text-accent font-medium mt-4" : "text-white/80"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
