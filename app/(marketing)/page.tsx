import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-background">
      <Hero />
      <div id="problemy">
        <PainPoints />
      </div>
      <Solution />
      <div id="oferta">
        <Features />
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Testimonials />
      <Contact />
    </main>
  );
}
