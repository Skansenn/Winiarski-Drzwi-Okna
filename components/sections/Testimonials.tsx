'use client';
import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject if the script hasn't been added yet
    if (containerRef.current && !containerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?e38e64378f017052de2637b8657';
      script.async = true;
      script.defer = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-background-alt py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 tracking-tight">
            Co mówią o nas sąsiedzi z <span className="text-primary">Radomia i okolic?</span>
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Nie ma lepszego dowodu na dobrą robotę niż opinie ludzi, u których już montowaliśmy okna lub drzwi. Oto kilka słów od naszych klientów:
          </p>
        </div>

        {/* Trustindex Widget Container */}
        <div ref={containerRef} className="w-full min-h-[300px] flex justify-center">
          {/* Script will be injected here on the client side */}
        </div>
      </div>
    </section>
  );
}
