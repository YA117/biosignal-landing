"use client";

import { motion } from "framer-motion";

export function WhatComesNext() {
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
            <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-6">
              What Comes Next
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-8">
              Skin is the first channel.{" "}
              <span className="text-foreground/40">It will not be the last.</span>
            </h2>
            <div className="space-y-4 text-base text-foreground/50 leading-relaxed max-w-2xl">
              <p>
                The same framework that reads skin signals applies to every system the body uses to communicate. Gut. Sleep. Energy. Cognition. Each one generates data. Each one responds to the same interpretive logic.
              </p>
              <p className="text-foreground">
                BioSignal is building the tools to read all of them.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
