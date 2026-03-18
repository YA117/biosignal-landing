"use client";

import { motion } from "framer-motion";

export function SignalReveal() {
  return (
    <section className="bg-background relative min-h-[70vh] flex items-center justify-center border-t border-border overflow-hidden">
      <div className="w-full px-6 lg:px-12 py-32 max-w-5xl mx-auto text-center relative z-10">
        
        {/* Blurry to sharp reveal animation */}
        <motion.div
          initial={{ filter: "blur(24px)", opacity: 0, scale: 0.95 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-normal leading-[1.1] tracking-tight text-foreground text-balance">
            These systems do not operate independently.{" "}
            <span className="block mt-4 sm:mt-6 text-foreground/40">They interact. Reinforce. Amplify.</span>
          </h2>
        </motion.div>

        {/* Subtitle fades in after the main text becomes clear */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="mt-16 md:mt-24 flex flex-col items-center"
        >
          <div className="h-16 w-px bg-foreground/20 mb-8" />
          <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-foreground/50 max-w-lg mx-auto leading-relaxed">
            To resolve the signal, you have to work at the level where it is generated.
          </p>
        </motion.div>

      </div>
      
      {/* Background elegant gradient/blur as an extra nice touch */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-foreground/[0.02] rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
