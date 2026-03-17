"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("You're on the list! We'll be in touch soon.");
    setEmail("");
    setLoading(false);
  };

  return (
    <section id="waitlist" className="w-full bg-[#1a1a1a] py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[#c9a962]">
          Launching 2025
        </span>
        <h2 className="mt-4 text-3xl font-light text-white">
          Join the <span className="italic">Waitlist</span>
        </h2>
        <p className="mt-4 text-sm text-white/50">
          Be the first to experience science-backed skincare. Get 20% off when we launch.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a962]"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a962] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#d4b978] disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Waitlist"}
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-4 text-xs text-white/30">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
