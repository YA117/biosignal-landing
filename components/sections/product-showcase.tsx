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
          <div className="order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c9a962]">
              Featured Collection
            </span>
            
            <h2 className="mt-4 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              Enhance
            </h2>
            
            <p className="mt-2 text-xl text-white/60 italic">
              Jojoba Oil Blend
            </p>

            <div className="my-8 h-px w-24 bg-[#c9a962]" />

            <p className="max-w-md text-base leading-relaxed text-white/70">
              Molecularly similar to your skin&apos;s natural sebum, our cold-pressed 
              Jojoba Oil penetrates deeply to balance, nourish, and restore. 
              Rich in vitamins E and B-complex, it repairs damage and calms inflammation 
              for visibly healthier skin.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Non-comedogenic & fast-absorbing",
                "Rich in antioxidants & fatty acids",
                "Suitable for all skin types",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#c9a962]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/product/enhance"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1a1a1a] transition-all hover:bg-[#c9a962] hover:text-white"
              >
                Shop Now
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="group flex items-center gap-3 text-white/70 transition-colors hover:text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-[#c9a962] group-hover:bg-[#c9a962]">
                  <PlayIcon className="h-4 w-4 fill-current" />
                </span>
                <span className="text-sm">Watch the Story</span>
              </button>
            </div>

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-2xl font-light text-white">$72</span>
              <span className="text-sm text-white/40">/ 30ml</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80"
                  alt="Jojoba Oil Products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#c9a962] p-6 shadow-2xl">
                <p className="text-xs uppercase tracking-wider text-[#1a1a1a]/70">Clinical Results</p>
                <p className="mt-1 text-3xl font-light text-[#1a1a1a]">94%</p>
                <p className="text-sm text-[#1a1a1a]/70">saw improved hydration</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute -right-4 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-[#c9a962] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
