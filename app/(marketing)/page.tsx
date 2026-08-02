import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import AboutOwner from "@/components/sections/AboutOwner";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-background">
      <Hero />
      
      <div id="problemy">
        <FadeIn>
          <PainPoints />
        </FadeIn>
      </div>
      
      <FadeIn>
        <AboutOwner />
      </FadeIn>
      
      <FadeIn>
        <Solution />
      </FadeIn>
      
      <div id="oferta">
        <FadeIn>
          <Features />
        </FadeIn>
        <FadeIn>
          <Pricing />
        </FadeIn>
      </div>
      
      <div id="faq">
        <FadeIn>
          <FAQ />
        </FadeIn>
      </div>
      
      <FadeIn>
        <Gallery />
      </FadeIn>
      
      <FadeIn>
        <Testimonials />
      </FadeIn>
      
      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
}
