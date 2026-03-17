"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const footerLinks = {
  shop: [
    { label: "All Products", href: "#products" },
    { label: "Cleanse", href: "#products" },
    { label: "Treat", href: "#products" },
    { label: "Protect", href: "#products" },
  ],
  learn: [
    { label: "Our Story", href: "#about" },
    { label: "Ingredients", href: "#science" },
    { label: "The Science", href: "#science" },
    { label: "Skin Quiz", href: "#" },
  ],
  support: [
    { label: "Contact", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a]">
      {/* Main Footer */}
      <div className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-light text-white">
                Your Best Skin
                <br />
                Starts Here
              </h3>
              
              {/* Newsletter */}
              <div className="mt-6">
                <div className="flex max-w-xs">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-l-full border border-white/20 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962]"
                  />
                  <button className="rounded-r-full bg-[#c9a962] px-4 py-2.5 text-[#1a1a1a] transition-colors hover:bg-[#d4b978]">
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                {["IG", "TW", "YT"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-white/60 transition-all hover:border-[#c9a962] hover:text-[#c9a962]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-3 gap-8 lg:col-span-8">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-white/60">Shop</h4>
                <ul className="mt-4 space-y-2">
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
                <h4 className="text-xs font-medium uppercase tracking-wider text-white/60">Learn</h4>
                <ul className="mt-4 space-y-2">
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
                <h4 className="text-xs font-medium uppercase tracking-wider text-white/60">Support</h4>
                <ul className="mt-4 space-y-2">
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
          <h2 className="text-center text-7xl font-light tracking-tight text-white sm:text-8xl md:text-9xl">
            Lumière
          </h2>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-4 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Lumière Skin
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-white/40 hover:text-white/60">Privacy</Link>
            <Link href="#" className="text-xs text-white/40 hover:text-white/60">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
