"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/search" },
    { label: "Cleanse", href: "/search?q=cleanse" },
    { label: "Treat", href: "/search?q=treat" },
    { label: "Protect", href: "/search?q=protect" },
    { label: "Gift Cards", href: "/gift-cards" },
  ],
  learn: [
    { label: "Our Story", href: "/about" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "The Science", href: "/science" },
    { label: "Skin Quiz", href: "/quiz" },
    { label: "Blog", href: "/blog" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Track Order", href: "/track" },
  ],
};

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Twitter" },
  { href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a]">
      {/* Main Footer */}
      <div className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-light text-white">
                  Lumière <span className="text-[#c9a962]">Skin</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                Your Best Skin Starts Here. Science-backed formulas for effortless radiance.
              </p>
              
              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-sm font-medium text-white">Join our newsletter</p>
                <div className="mt-3 flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-l-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962]"
                  />
                  <button className="rounded-r-full bg-[#c9a962] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#d4b978]">
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#c9a962] hover:text-[#c9a962]"
                    aria-label={social.label}
                  >
                    <span className="text-xs font-medium">{social.label[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-3 gap-8 lg:col-span-8">
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-white">Shop</h4>
                <ul className="mt-6 space-y-3">
                  {footerLinks.shop.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-[#c9a962]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-white">Learn</h4>
                <ul className="mt-6 space-y-3">
                  {footerLinks.learn.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-[#c9a962]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-white">Support</h4>
                <ul className="mt-6 space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-[#c9a962]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Logo */}
      <div className="border-t border-white/10 px-6 py-12 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-6xl font-light tracking-tight text-white sm:text-8xl md:text-9xl lg:text-[12rem]">
            Lumière
          </h2>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-6 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Lumière Skin. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/60">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/60">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-white/40 hover:text-white/60">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
