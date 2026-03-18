"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-background border-t border-border">
      <div className="w-full px-6 lg:px-12 py-24 md:py-32">
        
        {/* Top Header Section (Flex Row) */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-2xl"
          >
            <div className="flex w-full mb-4">
              <span className="font-mono text-xs tracking-widest uppercase text-[#c4733b]">
                The Bigger Picture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal leading-[1.15] tracking-tight text-foreground mb-12">
              Skin is often the first visible signal. <span className="text-foreground/40">It is rarely the only one.</span>
            </h2>
            
            <div className="text-xl sm:text-2xl text-foreground/40 leading-[1.4] mb-8 font-sans tracking-tight">
              Digestive changes.<br/>
              Sleep disruption.<br/>
              Energy variability.<br/>
              Cognitive fog.<br/>
              <span className="block mt-6 text-base text-foreground/60 leading-relaxed max-w-lg">
                Each reflects underlying system behaviour. Each can be interpreted.
              </span>
              <span className="block mt-3 text-base text-foreground leading-relaxed max-w-lg">
                BioSignal begins with skin because it is observable. The framework extends beyond it.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-1 w-full lg:max-w-md relative p-6 sm:p-8 xl:p-10 border border-border bg-surface overflow-hidden flex flex-col justify-end min-h-[450px] group shadow-sm"
          >
            {/* The Venn Overlap Animation */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none pb-20">
              {/* Circle 1 */}
              <motion.div
                 initial={{ y: -80, opacity: 0 }}
                 whileInView={{ y: -24, opacity: 1 }}
                 transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }} 
                 className="absolute w-48 h-48 sm:w-56 sm:h-56 border select-none border-foreground/20 rounded-full"
              />
              {/* Circle 2 */}
              <motion.div
                 initial={{ x: -80, y: 60, opacity: 0 }}
                 whileInView={{ x: -24, y: 20, opacity: 1 }}
                 transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} 
                 className="absolute w-48 h-48 sm:w-56 sm:h-56 border select-none border-foreground/20 rounded-full"
              />
              {/* Circle 3 */}
              <motion.div
                 initial={{ x: 80, y: 60, opacity: 0 }}
                 whileInView={{ x: 24, y: 20, opacity: 1 }}
                 transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} 
                 className="absolute w-48 h-48 sm:w-56 sm:h-56 border select-none border-foreground/20 rounded-full"
              />

              {/* Glowing Intersection Dot (The Signal) */}
              <motion.div
                 initial={{ scale: 0, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 2, delay: 1.8, ease: "easeOut" }}
                 className="absolute w-28 h-28 bg-[#c4733b]/10 rounded-full blur-xl"
              />
              <motion.div
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration: 1.5, delay: 2.1, ease: "backOut" }}
                 className="absolute w-2 h-2 bg-[#c4733b] rounded-full shadow-[0_0_15px_3px_#c4733b]"
              />
            </div>

            {/* Text Card with Glassmorphism */}
            <div className="relative z-10 w-full mt-auto">
              <div className="bg-background/60 backdrop-blur-md p-6 sm:p-8 -mx-2 sm:-mx-4 rounded-xl border border-border/50 shadow-sm">
                <p className="text-lg sm:text-xl text-foreground font-sans font-normal leading-[1.3]">
                  These systems do not operate independently. They interact. Reinforce. Amplify. 
                </p>
                <div className="h-px w-8 bg-foreground/20 my-4" />
                <p className="text-sm border-l-2 border-[#c4733b] pl-3 text-foreground/60 leading-relaxed font-medium">
                  To resolve the signal, you have to work at the level where it is generated.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Waitlist Section */}
        <motion.div
          id="waitlist"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-16 lg:pt-24 border-t border-border scroll-mt-20"
        >
          <div className="max-w-3xl">
            <div className="flex w-full mb-4">
              <span className="font-mono text-xs tracking-widest uppercase text-foreground/40">
                Waitlist
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal text-foreground mb-4">
              Understand the signal before reacting to the symptom.
            </h3>
            <p className="text-base text-foreground/50 leading-relaxed mb-10 max-w-lg">
              BioSignal is launching soon. Join the waitlist for early access and founding member terms.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 py-4">
                <div className="w-2 h-2 rounded-full bg-green-bio" />
                <span className="text-sm text-foreground/60">
                  Thank you. We&apos;ll be in touch.
                </span>
              </div>
            ) : (
              <div className="max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-surface border border-border sm:border-r-0 text-sm text-foreground placeholder:text-foreground/30 outline-none focus:border-foreground/30 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors whitespace-nowrap"
                  >
                    Join the Waitlist
                  </button>
                </form>
                <p className="mt-4 text-xs text-foreground/30">
                  No spam. No wellness trends. Unsubscribe anytime.
                </p>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
