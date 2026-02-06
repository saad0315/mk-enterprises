import React from "react";
import { CONFIG } from "@/src/constants/config";
import { CheckCircle2, Globe2, History, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/hero-timber.jpg" alt="Background" className="w-full h-full object-cover" width={100} height={100} />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 italic uppercase tracking-tighter">
            About <span className="text-brand-primary">MK Enterprises</span>
          </h1>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            A legacy of excellence in the timber industry since 1955.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Story & History */}
            <div className="lg:col-span-7 space-y-8">
              <div className="industrial-border pl-6">
                <h2 className="text-3xl font-bold text-brand-text leading-tight">
                  Our Journey from SAK Group to MK Enterprises
                </h2>
              </div>
              
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>
                  <strong className="text-brand-text">Saleh Mohammad A. Karim (SAK Group)</strong> is a family-owned company and has been involved in the timber business since 1955. We are the largest and leading timber traders and importers in Pakistan, sourcing various types of Round Logs, Softwood, Hardwood, and Sawn Timber from across the globe.
                </p>
                <p>
                  Our traditional business line is various tropical hardwoods and lumber (mainly logs). We have been the largest importers of <span className="text-brand-primary font-semibold">Myanmar (Burma) Teak</span> in Pakistan for the last several decades, known for its superior grain quality and technical characteristics.
                </p>
                <p>
                  Beyond teak, we regularly import and maintain massive stocks of Gurjan round logs from Myanmar, specially recommended for plywood production. We are also major importers of Mixed Light Hardwood (MLH) from Malaysia and tropical lumbers like Dark Red Meranti, Kapur, Sapelli, Iroko, and Wenge.
                </p>
              </div>

              {/* Quality Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <HighlightItem 
                  icon={<Globe2 size={24} className="text-brand-primary" />}
                  title="Global Sourcing"
                  text="Direct imports from France, USA, Malaysia, Myanmar, and Africa."
                />
                <HighlightItem 
                  icon={<Award size={24} className="text-brand-primary" />}
                  title="Market Leader"
                  text="Supplying over 80% of Pakistan's European beech lumber requirements."
                />
              </div>
            </div>

            {/* Right Column: Key Facts & Image */}
            <div className="lg:col-span-5 space-y-10">
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 shadow-xl">
                <Image 
                  src="/about.jpg" 
                  alt="Industrial Timber" 
                  className="rounded-2xl shadow-lg mb-8 grayscale hover:grayscale-0 transition-all duration-700"
                  width={400}
                  height={300}
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-brand-text border-b pb-4 mb-4">Core Strengths</h3>
                  <ul className="space-y-3">
                    <FactItem text="Leading suppliers of American White Ash lumber." />
                    <FactItem text="Specialized in Softwood logs from Alaska (USA)." />
                    <FactItem text="Active players in Engineered Wood (MDF/Plywood)." />
                    <FactItem text="Strong distribution network across Pakistan." />
                  </ul>
                </div>
              </div>
              
              <div className="bg-brand-primary p-8 rounded-3xl text-white">
                <History size={40} className="mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-2 tracking-tighter italic">Decades of Trust</h3>
                <p className="text-white/80 text-sm">
                  With roots stretching back to 1955, we have built a reputation for honesty, quality, and technical expertise in the timber industry.
                </p>
              </div>
            </div>

          </div>

          {/* Expanded Content Section */}
          <div className="mt-20 pt-20 border-t border-zinc-100">
            <div className="max-w-4xl space-y-8 text-zinc-600">
              <p>
                A few years ago, we expanded into the softwood lumber and logs business. Today, we are one of the biggest importers of softwood round logs from <strong className="text-brand-text">Alaska (USA)</strong>. Our softwood requirement is also fulfilled through imports from Europe and Russia, including S4S lumbers from North America.
              </p>
              <p>
                MK Enterprises is also an active player in engineered wood products such as sanded and laminated MDF from Malaysia, Thailand, Sri Lanka, and fancy plywood from China. Our associate companies are further involved in manufacturing glue and melamine compounds, creating a vertically integrated support system for the wood industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HighlightItem({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="flex gap-4 p-6 bg-zinc-50 rounded-2xl border border-transparent hover:border-zinc-200 hover:bg-white hover:shadow-lg transition-all">
      <div className="shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-brand-text mb-1">{title}</h4>
        <p className="text-sm text-zinc-500">{text}</p>
      </div>
    </div>
  );
}

function FactItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-center text-sm font-medium text-zinc-700">
      <CheckCircle2 size={16} className="text-brand-primary" />
      {text}
    </li>
  );
}
