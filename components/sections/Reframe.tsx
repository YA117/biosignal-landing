"use client";

import { motion } from "framer-motion";

export function Reframe() {
  return (
    <section className="bg-background border-t border-border">
      <div className="w-full px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex w-full sm:w-1/3">
              <span className="font-mono text-xs tracking-widest uppercase text-[#c4733b]">
                The Reframe
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-8">
              Your immune system, microbiome, and stress response are constantly generating signals.{" "}
              <span className="text-foreground/40">
                Skin is one of the few places those signals become visible.
              </span>
            </h2>
            <div className="space-y-4 text-base text-foreground/50 leading-relaxed max-w-2xl">
              <p>
                Some approaches help temporarily. Few address the full pattern. Not because your skin is unpredictable, but because the underlying drivers were never mapped in a coordinated way.
              </p>
              <p className="text-foreground pt-4">Your skin is not failing. It is communicating.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
