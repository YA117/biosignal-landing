"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { label: "Shop", href: "#products" },
  { label: "Science", href: "#science" },
  { label: "Our Story", href: "#about" },
  { label: "Join Waitlist", href: "#waitlist", highlight: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[#faf9f7]/80 backdrop-blur-md border-b border-[#e5e2dd]/50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-light text-[#1a1a1a]">Lumière</span>
          <span className="text-xl font-normal text-[#c9a962]">Skin</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.highlight
                  ? "bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full hover:bg-[#c9a962]"
                  : "text-[#1a1a1a]/70 hover:text-[#1a1a1a]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#faf9f7] border-b border-[#e5e2dd] px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium text-[#1a1a1a]"
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
