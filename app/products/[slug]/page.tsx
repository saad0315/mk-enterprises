import React from "react";
import { CONFIG } from "@/src/constants/config";
import { notFound } from "next/navigation";
import { Hammer, Ruler, ShieldAlert, Package, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ProductDetail, LumberProduct, EngineeredProduct } from "@/src/types";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = CONFIG.productDetails[slug];

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: `Technical specifications, applications, and properties of ${product.name} provided by MK Enterprises.`,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = CONFIG.productDetails[slug];

  if (!product) {
    notFound();
  }

  // Determine which layout to use
  if (product.type === "engineered") {
    return <EngineeredLayout product={product as EngineeredProduct} />;
  }

  return <LumberLayout product={product as LumberProduct} />;
}

/* --- LAYOUT 1: LUMBER PRODUCTS (Technical) --- */
function LumberLayout({ product }: { product: LumberProduct }) {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-zinc-900 py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4 uppercase tracking-widest">
            <span>Products</span>
            <ChevronRight size={14} />
            <span className="text-brand-primary">{product.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white italic uppercase tracking-tighter">
            {product.name}
          </h1>
          <div className="w-20 h-1 bg-brand-primary mt-4"></div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-12">
              <PropertySection icon={<Hammer size={20} />} title="Working Properties" content={product.properties.working} />
              <PropertySection icon={<Ruler size={20} />} title="Physical Properties" content={product.properties.physical} />
              <PropertySection icon={<ShieldAlert size={20} />} title="Durability" content={product.properties.durability} />
              <PropertySection icon={<Package size={20} />} title="Main Uses" content={product.properties.uses} />
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-10">
                <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 shadow-xl overflow-hidden group">
                  <div className="h-80 w-full overflow-hidden rounded-xl relative">
                    <Image src={product.textureImage} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"></div>
                  </div>
                </div>

                <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                  <div className="space-y-6">
                    {product.ratings.map((rating, i) => (
                      <div key={i} className="flex items-center gap-4">
                        {/* Dynamic Rating Icons */}
                        <div className="w-10 h-10 relative shrink-0 bg-red-100 rounded-xl shadow-xl ">
                           <Image 
                             src={`/product-icon-${i + 1}.webp`} 
                             alt={rating.label} 
                             fill 
                             className="object-contain p-1"
                           />
                        </div>
                        
                        <div className="flex-grow space-y-2">
                          <div className="flex justify-between text-[11px] font-bold text-zinc-500 tracking-tighter uppercase">
                            <span>{rating.label}</span>
                            <span className="text-zinc-400">POOR <span className="mx-2 text-brand-primary">---</span> GOOD</span>
                          </div>
                          <div className="h-3 bg-zinc-200 rounded-full overflow-hidden border border-zinc-300 p-[1px]">
                            <div className="h-full bg-brand-primary rounded-full" style={{ width: `${rating.value}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
            {product.specs.map((spec, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-black text-brand-primary mb-2 transition-transform duration-500 group-hover:scale-110">
                  {spec.value}{spec.unit && <span className="text-xs ml-0.5 text-zinc-400 font-bold">{spec.unit}</span>}
                </div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.1em] leading-tight">
                  {spec.label}{spec.sublabel && <div className="text-[9px] opacity-60 font-normal mt-1 lowercase capitalize-first">{spec.sublabel}</div>}
                </div>
                {spec.secondary && <div className="mt-4 text-2xl font-black text-white border-t border-zinc-800 pt-4">{spec.secondary}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditional Regional Specs Tables */}
      {product.regionalSpecs && (
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {product.regionalSpecs.map((reg, i) => (
                <div key={i} className="space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="h-px bg-zinc-200 flex-grow"></div>
                    <h2 className="text-2xl font-black text-brand-text uppercase tracking-[0.3em] bg-white px-8 py-2 border border-zinc-100 rounded-full shadow-sm">
                      {reg.region}
                    </h2>
                    <div className="h-px bg-zinc-200 flex-grow"></div>
                  </div>

                  <div className="grid grid-cols-1 gap-12">
                    {reg.subRegions.map((sub, j) => (
                      <div key={j} className="bg-white rounded-2xl border border-zinc-100 shadow-xl overflow-hidden">
                        <div className="bg-zinc-900 text-white px-6 py-3 text-sm font-bold tracking-widest uppercase">
                          {sub.title}
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-100">
                                {sub.headers.map((h, k) => (
                                  <th key={k} className="px-6 py-4 text-[11px] font-black text-zinc-400 uppercase tracking-wider">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sub.rows.map((row, k) => (
                                <tr key={k} className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
                                  {row.map((cell, l) => (
                                    <td key={l} className="px-6 py-4 text-sm font-medium text-zinc-600">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/* --- LAYOUT 2: ENGINEERED PRODUCTS (Catalog/Grid) --- */
function EngineeredLayout({ product }: { product: EngineeredProduct }) {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Dynamic Header */}
      <section className="bg-zinc-900 py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white italic uppercase tracking-tighter">
            {product.name} <span className="text-brand-primary">Solutions</span>
          </h1>
          <div className="w-20 h-1 bg-brand-primary mt-4"></div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 space-y-10">
          {product.subProducts.map((sub, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-10 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="lg:w-3/5 space-y-8  my-auto">
                <div className="industrial-border pl-6">
                  <h2 className="text-3xl font-black text-brand-text uppercase tracking-tight">{sub.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] flex items-center gap-2">
                      <CheckCircle2 size={16} /> Applications & Uses
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {sub.applications.map((app, i) => (
                        <li key={i} className="text-zinc-500 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div> {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] flex items-center gap-2">
                      <Package size={16} /> Product Description
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-lg italic">
                      &quot;{sub.description}&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Image & Dimensions */}
              <div className="lg:w-2/5 w-full space-y-6">
                <div className="bg-zinc-50 p-4 rounded-3xl border border-zinc-100 shadow-2xl relative overflow-hidden group">
                  <div className="aspect-[8/4] w-full relative rounded-2xl overflow-hidden">
                    <Image src={sub.image} alt={sub.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-6 p-6 bg-white rounded-xl border border-zinc-100">
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-2">Standard Dimensions</h4>
                    <p className="text-brand-text font-bold text-sm leading-relaxed">
                      {sub.dimensions}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PropertySection({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="space-y-4 group">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all border border-zinc-100">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-text uppercase tracking-tight">{title}</h3>
      </div>
      <div className="bg-zinc-50/50 p-6 rounded-xl border border-zinc-100 hover:border-brand-primary/20 transition-all leading-relaxed text-zinc-600">
        {content}
      </div>
    </div>
  );
}
