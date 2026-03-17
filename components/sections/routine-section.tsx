"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const routineSteps = [
  {
    id: "cleanse",
    title: "Cleanse",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    description: "Start fresh. Remove impurities without stripping natural barrier.",
  },
  {
    id: "treat",
    title: "Treat",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
    description: "Target concerns. Potent actives for visible results.",
  },
  {
    id: "protect",
    title: "Protect",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80",
    description: "Shield daily. Defense against environmental stressors.",
  },
];

export function RoutineSection() {
  return (
    <section id="products" className="w-full bg-[#faf9f7] py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b8680]">
            Simple & Effective
          </span>
          <h2 className="mt-3 text-3xl font-light text-[#1a1a1a] sm:text-4xl">
            Your Routine, <span className="italic">Reimagined</span>
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {routineSteps.map((step, index) => (
            <div
              key={step.id}
              className="group"
            >
              <div className="relative overflow-hidden bg-[#2d2d2d]">
                {/* Image */}
                <div className="aspect-[4/5] relative">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Label Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="text-white text-sm font-medium tracking-wide">
                      {step.title}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content Below */}
              <div className="pt-4">
                <p className="text-sm text-[#8b8680] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
