"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-background pt-28 pb-0 overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <div className="py-16 md:py-24 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8"
          >
            A New Framework for Skin Health
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-normal leading-[1.1] tracking-tight text-foreground mb-8"
          >
            Your skin is not the problem.{" "}
            <span className="text-foreground/40">
              It is the signal.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-foreground/50 leading-relaxed max-w-2xl mb-10"
          >
            BioSignal is a structured system that decodes what your skin is telling you and resolves it at the source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Link
              href="#waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Join the Waitlist
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
