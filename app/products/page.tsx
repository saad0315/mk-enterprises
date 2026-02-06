import React from "react";
import { CONFIG } from "@/src/constants/config";
import Link from "next/link";
import Image from "next/image";

// Helper to slugify product names for links
const getProductSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-").replace(/[\(\)]/g, "");

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full bg-zinc-50">
      {/* Hero Header */}
      <section className="bg-zinc-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/hero.webp" 
            alt="Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 italic uppercase tracking-tighter">
            Our <span className="text-brand-primary">Products</span>
          </h1>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            High-quality lumber and engineered wood products for your industrial needs.
          </p>
        </div>
      </section>

      {/* Lumber Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="industrial-border pl-6 mb-16">
            <h2 className="text-3xl font-bold text-brand-text tracking-widest uppercase">
              Lumber Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONFIG.lumberProducts.map((product, index) => (
              <ProductCard key={index} name={product.name} description={product.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineered Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="industrial-border pl-6 mb-16">
            <h2 className="text-3xl font-bold text-brand-text tracking-widest uppercase">
              Engineered Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONFIG.engineeredProducts.map((product, index) => (
              <ProductCard key={index} name={product.name} description={product.description} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ name, description }: { name: string; description: string }) {
  const slug = getProductSlug(name);
  
  return (
    <Link href={`/products/${slug}`} className="block relative group overflow-hidden rounded-xl h-64 shadow-xl border border-zinc-200 cursor-pointer">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-timber.jpg" 
          alt={name} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
        <h3 className="text-white text-2xl font-bold uppercase tracking-wider mb-2">
          {name}
        </h3>
        <div className="w-12 h-0.5 bg-brand-primary mb-4 transform scale-x-100 group-hover:scale-x-150 transition-transform duration-500"></div>
        <p className="text-zinc-200 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
