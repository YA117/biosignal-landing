"use client";

import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-charcoal text-white flex flex-col justify-center overflow-hidden">
      {/* Abstract Background Viz (subtle) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center pt-24 pb-16">
        {/* Left Column: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="block font-mono text-sm tracking-widest uppercase text-surface-dark mb-6">
            A New Framework For Skin Health
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8">
            Your skin is not the problem. It is the <span className="italic text-accent">signal</span>.
          </h1>
          <p className="text-surface-dark text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
            BioSignal is a structured system that decodes what your skin is communicating — and addresses the cause, not just the symptom.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full font-medium hover-lift transition-all"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: bio4 Abstract Horizontal Bar Data Viz */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[400px] md:h-[500px] flex flex-col justify-center gap-6 w-full max-w-lg mx-auto lg:ml-auto"
        >
          {/* Abstract bars simulating the bio4 data visualization */}
          <div className="flex items-center gap-4 group">
            <div className="w-1/4 text-right font-mono text-xs text-white/50">01 / BARRIER</div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="h-[2px] bg-surface-dark/20 relative flex-1"
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-1 bg-white" />
            </motion.div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-1/4 text-right font-mono text-xs text-white/50">02 / GUT</div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
              className="h-[2px] bg-surface-dark/20 relative flex-1"
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-1/2 h-1 bg-accent" />
            </motion.div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-1/4 text-right font-mono text-xs text-white/50">03 / NERVOUS</div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
              className="h-[2px] bg-surface-dark/20 relative flex-1"
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-[60%] h-1 bg-blue-cool" />
            </motion.div>
          </div>
          
          {/* Additional decorative bars */}
          <div className="flex items-center gap-4 mt-8">
            <div className="w-1/4 text-right font-mono text-xs text-transparent">--</div>
            <div className="h-[1px] bg-surface-dark/10 relative flex-1">
               <div className="absolute top-1/2 -translate-y-1/2 right-10 w-16 h-[2px] bg-green-botanical/50" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-1/4 text-right font-mono text-xs text-transparent">--</div>
            <div className="h-[1px] bg-surface-dark/10 relative flex-1">
               <div className="absolute top-1/2 -translate-y-1/2 left-4 w-24 h-[2px] bg-accent/50" />
            </div>
          </div>
          
          <div className="absolute -left-8 -bottom-12 md:-left-12 md:bottom-0 font-mono text-sm leading-relaxed text-white/60 max-w-[200px]">
            <span className="text-white">91.2%</span><br/>
            Our causally annotated data — and the models trained on it.
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          });
        }}
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll Down</span>
        <MousePointer2 className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
