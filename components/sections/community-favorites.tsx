"use client";

import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";

const products = [
  {
    id: "protect",
    name: "Lightweight Daily Shield",
    category: "Protect",
    price: "$48",
    rating: 4.9,
    reviews: 284,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&q=80",
  },
  {
    id: "enhance",
    name: "Midnight Cream",
    category: "Enhance",
    price: "$62",
    rating: 4.8,
    reviews: 196,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
  },
  {
    id: "treat",
    name: "Recovery Ampoule",
    category: "Treat",
    price: "$85",
    rating: 5.0,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
  },
  {
    id: "hydrate",
    name: "HA Essence",
    category: "Hydrate",
    price: "$58",
    rating: 4.9,
    reviews: 428,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&q=80",
  },
];

export function CommunityFavorites() {
  return (
    <section className="w-full bg-[#faf9f7] py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b8680]">
            Most Loved
          </span>
          <h2 className="mt-3 text-2xl font-light text-[#1a1a1a]">
            Our Community&apos;s <span className="italic">Favorites</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href="#waitlist"
              className="group text-center"
            >
              {/* Image */}
              <div className="relative aspect-square mb-4 bg-[#f5f3ef]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>

              {/* Product Info */}
              <div className="flex items-center justify-center gap-1 mb-1">
                <StarIcon className="h-3 w-3 text-[#c9a962]" />
                <span className="text-xs text-[#1a1a1a]">{product.rating}</span>
                <span className="text-xs text-[#8b8680]">({product.reviews})</span>
              </div>
              
              <h3 className="text-sm font-medium text-[#1a1a1a]">{product.name}</h3>
              <p className="mt-1 text-sm text-[#8b8680]">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
