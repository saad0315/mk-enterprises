import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="industrial-border pl-6 mb-6">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">
                Our Legacy
              </span>
              <h2 className="text-4xl font-bold mt-2 text-brand-text">
                Building Trust Since the 1960s
              </h2>
            </div>
            <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
              MK Enterprises is one of Pakistan&apos;s leading timber exporters, importers, and traders. Based in the heart of Karachi, we carry a legacy of excellence starting from 1972.
            </p>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              We specialize in premium Hardwood sourced globally and are proud introducers of Southern Yellow Pine to the country, serving industries from construction to interior design.
            </p>
            <Link
              href="/about"
              className="text-brand-primary font-bold flex items-center gap-2 hover:gap-4 transition-all underline underline-offset-8"
            >
              Learn More About Our History <ArrowRight size={18} />
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-zinc-100 rounded-lg p-4 shadow-2xl ">
              <Image
                src="/homeAbout.webp"
                alt="Timber Industry"
                className=" rounded shadow-inner grayscale hover:grayscale-0 transition-all duration-700"
                width={800}
                height={600}
                
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-8 rounded-lg shadow-xl hidden md:block">
              <span className="text-4xl font-bold">60+</span>
              <p className="text-sm font-medium uppercase tracking-tighter">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
