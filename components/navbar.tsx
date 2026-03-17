"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Method", href: "#method" },
  { label: "Science", href: "#science" },
  { label: "Journal", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1c1917]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-baseline gap-0.5">
          <span className="text-xl font-light tracking-tight text-white">
            Bio
          </span>
          <span className="text-xl font-normal text-[#c4733b]">Signal</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-light tracking-wide text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#1c1917]"
          >
            Join Waitlist
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#1c1917] border-t border-white/10 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-light text-white/70"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="mt-4 block w-full rounded-full border border-white/20 bg-white/5 py-3 text-center text-sm font-medium text-white"
            onClick={() => setMobileOpen(false)}
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
