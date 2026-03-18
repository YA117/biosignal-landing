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
              Your body does not fail silently. It signals. Constantly.
            </h2>
            <div className="space-y-4 text-base text-foreground/50 leading-relaxed max-w-2xl">
              <p>
                A breakout is not a skin problem. It is a data point. Redness is not a cosmetic issue. It is a reading. Persistent dryness, reactivity, inflammation that will not resolve, these are not random. They are outputs from systems under strain.
              </p>
              <p className="text-foreground">
                The problem is not that your body is broken. The problem is that nothing you have tried so far was designed to interpret what it is telling you.
              </p>
              <p>
                Skincare treats the surface. Medicine treats the diagnosis. BioSignal reads the space in between, the patterns your body is producing every day that no one has taught you to decode.
              </p>
              <p>
                We start with skin because it is the most visible signal your body generates. It is the organ you can see, the one that changes in real time, the one that has been trying to get your attention for years.
              </p>
              <p className="text-foreground/40">But skin is the starting point. Not the destination.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
