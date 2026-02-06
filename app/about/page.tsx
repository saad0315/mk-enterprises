import React from "react";
import { CONFIG } from "@/src/constants/config";
import { CheckCircle2, Globe2, History, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-zinc-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/section_banner.webp"
            alt="Background"
            className=" object-cover"
            // width={100}
            // height={100}
            fill
          />
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
                  <strong className="text-brand-text">MK Enterprises</strong> is one of the leading Timber exporter, importers, traders & saw millers companies in Pakistan. Located in Karachi, the only city with a Sea Port in the country, it is situated in the heart of all Lumber products in the area.
                </p>
                <p>
                  Established in 2004, the company has a rich history behind it where it carries on the name of a family that had entered the business in 1972. Our experience in the business is our biggest strength and guarantees quality. The key management team led by <span className="text-brand-primary font-semibold">Abbas Khan and Ayub Khan</span> ensures excellence in every operation.
                </p>
                <p>
                  The major nature of the company is Wholesale/Retail. While we carry a wide range of softwood, we majorly specialize in <span className="text-brand-primary font-semibold">Hardwood</span> imported from across the globe, offering a vast catalog that meets all industrial standards.
                </p>
              </div>

              {/* Quality Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <HighlightItem 
                  icon={<Globe2 size={24} className="text-brand-primary" />}
                  title="Global Sourcing"
                  text="Specializing in premium hardwood imported from across the globe."
                />
                <HighlightItem 
                  icon={<Award size={24} className="text-brand-primary" />}
                  title="Market Pioneer"
                  text="Proud introducers of Southern Yellow Pine to the Pakistan market."
                />
              </div>
              <div className="mt-10 border-t border-zinc-100">
                <div className="max-w-4xl space-y-8 text-zinc-600">
                  <p>
                    We take immense pride in being the pioneer introducer of <strong className="text-brand-text">Southern Yellow Pine (SYP)</strong> to Pakistan. Our products are utilized across multiple industries, from heavy-duty construction to intricate interior design and high-end furnishing.
                  </p>
                  <p>
                    Our highest priority and ultimate aim as a business is to source exceptionally high-quality products and deliver them to our consumers at the most competitive rates possible, maintaining our legacy of trust and reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Facts & Image */}
            <div className="lg:col-span-5 space-y-10">
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 shadow-xl">
                <Image
                  src="/about.webp"
                  alt="Industrial Timber"
                  className="rounded-2xl shadow-lg mb-8 grayscale hover:grayscale-0 transition-all duration-700 mx-auto" 
                  width={600}
                  height={300}
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-brand-text border-b pb-4 mb-4">
                    Core Strengths
                  </h3>
                  <ul className="space-y-3">
                    <FactItem text="Leading suppliers of American White Ash lumber." />
                    <FactItem text="Specialized in Softwood logs from Alaska (USA)." />
                    <FactItem text="Active players in Engineered Wood (MDF/Plywood)." />
                    <FactItem text="Strong distribution network across Pakistan&apos;." />
                  </ul>
                </div>
              </div>

              <div className="bg-brand-primary p-8 rounded-3xl text-white">
                <History size={40} className="mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-2 tracking-tighter italic">
                  Decades of Trust
                </h3>
                <p className="text-white/80 text-sm">
                  With roots stretching back to 1955, we have built a reputation
                  for honesty, quality, and technical expertise in the timber
                  industry.
                </p>
              </div>
            </div>
          </div>

          {/* Expanded Content Section */}
        </div>
      </section>
    </div>
  );
}

function HighlightItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 p-6 bg-red-50 rounded-2xl border border-transparent hover:border-zinc-200 hover:bg-white hover:shadow-lg transition-all">
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
