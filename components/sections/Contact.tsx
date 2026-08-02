import { Phone, Mail, DoorOpen } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#0A0A0A] py-24 md:py-32 relative overflow-hidden border-t border-[#1A1A1A]">
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-full max-w-4xl h-full bg-primary/5 blur-[100px] rounded-full"></div>
        <DoorOpen className="w-[600px] h-[600px] text-white/[0.02] opacity-50" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
          Czas na ciepły i cichy dom <span className="text-primary block mt-2">bez nerwów o terminy</span>
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Nie musisz niczego zgadywać ani mierzyć na własną rękę. Zrób pierwszy krok i umów się na darmowy pomiar. Przyjedziemy na miejsce, sprawdzimy otwory montażowe i podamy Ci ostateczną, uczciwą cenę – całkowicie bez zobowiązań. Jeśli wybierzesz drzwi w promocji za 2200 zł lub inny model z naszego magazynu w Radomiu, montaż możemy zrobić nawet następnego dnia.
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-[5px] border-primary/20 shadow-[0_0_30px_rgba(220,38,38,0.25)]">
            <Image src="/glowka.JPG" alt="Andrzej Winiarski" fill className="object-cover scale-[1.8] origin-[50%_18%]" />
          </div>
          <p className="text-white font-medium text-2xl mb-1">Masz pytania? Chętnie odpowiem!</p>
          <p className="text-lg text-slate-400">Andrzej Winiarski</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+48604257107" className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] w-full sm:w-auto transform hover:-translate-y-1">
            <Phone className="w-5 h-5" />
            <span>Zadzwoń: 604 257 107</span>
          </a>
          <a href="mailto:oknadrzwi.winiarski@op.pl" className="flex items-center justify-center gap-3 bg-[#1A1A1A] border border-[#333] text-white hover:bg-[#222] font-semibold py-4 px-8 rounded-xl transition-all w-full sm:w-auto">
            <Mail className="w-5 h-5 text-slate-400" />
            <span>oknadrzwi.winiarski@op.pl</span>
          </a>
        </div>
      </div>
    </section>
  );
}
