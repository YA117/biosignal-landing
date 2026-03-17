"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/outline";

export function ProductShowcase() {
  return (
    <section className="w-full bg-[#1a1a1a] py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#c9a962]">
              Featured Collection
            </span>
            
            <h2 className="mt-4 text-4xl font-light text-white sm:text-5xl md:text-6xl">
              Enhance
            </h2>
            
            <p className="mt-3 text-lg text-white/50 italic">
              Jojoba Oil Blend
            </p>

            <div className="my-8 h-px w-20 bg-[#c9a962]" />

            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Molecularly similar to your skin&apos;s natural sebum, our cold-pressed 
              Jojoba Oil penetrates deeply to balance, nourish, and restore. 
              Rich in vitamins E and B-complex.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <Link
                href="#waitlist"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-all hover:bg-[#c9a962] hover:text-white"
              >
                Shop Now
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="group flex items-center gap-2 text-white/50 transition-colors hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                  <PlayIcon className="h-4 w-4 fill-current" />
                </span>
                <span className="text-xs">Watch the Story</span>
              </button>
            </div>

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-3xl font-light text-white">$72</span>
              <span className="text-sm text-white/40">/ 30ml</span>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80"
                  alt="Jojoba Oil Products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#c9a962] px-4 py-3">
                <p className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/70">Clinical Results</p>
                <p className="text-2xl font-light text-[#1a1a1a]">94%</p>
                <p className="text-xs text-[#1a1a1a]/70">improved hydration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
