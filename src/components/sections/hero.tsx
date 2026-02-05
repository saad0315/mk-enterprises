import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Arrow } from "radix-ui/internal";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Placeholder for Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-timber.jpg"
          alt="Timber background"
          className="w-full h-full object-cover brightness-50"
          width={100}
          height={100}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Quality Timber for{" "}
            <span className="text-brand-primary">Industrial Excellence</span>
          </h1>
          <p className="text-xl mb-8 text-zinc-200 leading-relaxed">
            MK Enterprises is Pakistan's premier supplier of high-quality Burma
            Teak, Softwood, and specialized timber products for over 60 years.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-primary hover:bg-red-700 font-bold px-8 h-14"
            >
              <Link href="/products">
                Explore Products <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white hover:bg-zinc-100 text-brand-text font-bold px-8 h-14 border-white hover:border-zinc-100"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
