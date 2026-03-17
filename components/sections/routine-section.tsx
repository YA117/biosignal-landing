"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const routineSteps = [
  {
    id: "cleanse",
    title: "Cleanse",
    subtitle: "Gentle Purifying Cleanser",
    description: "Start fresh with our microbiome-friendly formula that removes impurities without stripping your skin's natural barrier.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    price: "$42",
  },
  {
    id: "treat",
    title: "Treat",
    subtitle: "Vitamin C Brightening Serum",
    description: "Potent antioxidants penetrate deep to target dark spots, even skin tone, and boost collagen production.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
    price: "$68",
  },
  {
    id: "protect",
    title: "Protect",
    subtitle: "Daily Defense SPF 50",
    description: "Weightless mineral protection shields against UVA/UVB rays while nourishing with hyaluronic acid.",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80",
    price: "$48",
  },
];

export function RoutineSection() {
  return (
    <section className="w-full bg-[#faf9f7] py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b8680]">
            Simple & Effective
          </span>
          <h2 className="mt-4 text-3xl font-light text-[#1a1a1a] sm:text-4xl md:text-5xl">
            Your Routine, <span className="font-normal italic">Reimagined</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#8b8680]">
            Three essential steps. Clinically proven results. Discover the ritual that transforms your skin.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {routineSteps.map((step, index) => (
            <Link
              key={step.id}
              href={`/product/${step.id}`}
              className="group img-zoom hover-lift"
            >
              <div 
                className="relative overflow-hidden rounded-2xl bg-[#f5f3ef]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/5] relative">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Quick Add Button */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="w-full rounded-full bg-white py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#c9a962] hover:text-white">
                      Quick Add {step.price}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-[#1a1a1a]">{step.title}</h3>
                      <p className="mt-1 text-sm text-[#8b8680]">{step.subtitle}</p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 -rotate-45 text-[#c9a962] transition-transform group-hover:rotate-0" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#8b8680]">
                    {step.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#1a1a1a] px-8 py-4 text-sm font-medium text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
          >
            View Full Collection
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
