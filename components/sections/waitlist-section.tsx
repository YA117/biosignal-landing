"use client";

import { useState } from "react";
import { toast } from "sonner";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call — replace with Supabase insert
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("You're on the list.");
    setEmail("");
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="w-full bg-[#1c1917] topo-pattern py-24 px-6 sm:px-12 lg:px-24 md:py-32"
    >
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#c4733b]">
          Get Started
        </span>
        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Understand the <span className="italic">signal</span>
        </h2>
        <p className="mt-6 text-sm leading-[1.8] text-white/40">
          Be the first to access the BioSignal framework. Early members receive
          launch pricing and the complete BioSignal Method guide.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-lg border border-[#c4733b]/30 bg-[#c4733b]/5 p-8">
            <p className="text-sm text-white/70">
              You&apos;re in. We&apos;ll be in touch when BioSignal launches.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/30 focus:border-[#c4733b] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1c1917] transition-all hover:bg-[#c4733b] hover:text-white disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/20">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
