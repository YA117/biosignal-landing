"use client";

import { motion } from "framer-motion";

export function Reframe() {
  return (
    <section className="bg-surface text-charcoal py-32 md:py-48 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12 md:space-y-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.3] md:leading-[1.3] text-charcoal/80">
            You&apos;ve tried the creams, the routines, the elimination diets. You&apos;ve been told it&apos;s hormones, stress, or just something you&apos;ll grow out of. <br className="hidden md:block" />
            <span className="text-charcoal mt-6 block">But the breakouts keep coming back.</span>
          </h2>

          <div className="w-16 h-[1px] bg-accent" />

          <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-charcoal/70">
            That&apos;s because most approaches treat the surface — not the system. Skin conditions like acne, eczema, and rosacea aren&apos;t random. <strong className="font-medium text-charcoal">They are signals from a body under strain.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
