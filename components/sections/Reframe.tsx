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
            <span className="block font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8">
              — Reframing Skin Health
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-8">
              Eczema, acne, and psoriasis are not random.{" "}
              <span className="text-foreground/40">
                They are signals from deeper imbalances in your barrier, gut, and nervous system.
              </span>
            </h2>
            <p className="text-base text-foreground/50 leading-relaxed max-w-2xl">
              BioSignal is built on the premise that chronic skin conditions are outputs — not inputs. 
              We decode the signal to address the root cause.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
