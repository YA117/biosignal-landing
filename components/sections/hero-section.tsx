"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#faf9f7]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1920&q=80"
          alt="Skincare model"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col justify-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="animate-fade-in-up text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Glow Confidently.
            <br />
            <span className="font-normal italic">Powered by Science.</span>
          </h1>
          
          <p className="animate-fade-in-up delay-200 mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            Discover the perfect balance of nature and science. Our dermatologist-tested 
            formulas reveal your skin&apos;s natural radiance.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap gap-4">
            <Link
              href="/search"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1a1a1a] transition-all hover:bg-[#c9a962] hover:text-white"
            >
              <ShoppingBagIcon className="h-4 w-4" />
              Shop Now
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Floating Product Card */}
        <div className="animate-fade-in-up delay-500 absolute bottom-12 right-6 sm:right-12 lg:right-24 hidden md:block">
          <div className="flex items-center gap-4 rounded-2xl bg-white/95 p-4 backdrop-blur-sm shadow-xl">
            <div className="h-16 w-16 overflow-hidden rounded-xl bg-[#f5f3ef]">
              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80"
                alt="Featured product"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-[#8b8680]">Bestseller</p>
              <p className="text-sm font-medium text-[#1a1a1a]">Radiance Serum</p>
              <p className="text-sm text-[#c9a962]">$85</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-white/30" />
        </div>
      </div>
    </section>
  );
}
