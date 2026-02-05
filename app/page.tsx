import About from "@/src/components/sections/about";
import Hero from "@/src/components/sections/hero";
import Products from "@/src/components/sections/products";
import ProductRange from "@/src/components/sections/product-range";
import Testimonials from "@/src/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Products />
      <ProductRange />
      <About />
      <Testimonials />
    </div>
  );
}