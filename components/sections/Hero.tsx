import Link from 'next/link';
import { ArrowRight, ShieldCheck, Heart, DoorOpen, LayoutGrid, Wrench } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pb-20 pt-16 md:pt-24 bg-[#0A0A0A]">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A]/80 to-[#1A1A1A]/30 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40 grayscale"
          style={{ backgroundImage: 'url("/hero.png")' }}
        />
        
        {/* Subtle decorative icons indicating windows, doors & tools */}
        <div className="absolute inset-0 z-10">
           <DoorOpen className="absolute top-1/4 left-[-10%] md:left-[-5%] w-[400px] h-[400px] text-white/[0.02] -rotate-12" />
           <LayoutGrid className="absolute bottom-[-10%] right-[-10%] md:right-[-5%] w-[500px] h-[500px] text-white/[0.02] rotate-12" />
           <Wrench className="absolute top-1/3 right-[15%] w-64 h-64 text-primary/[0.03] rotate-45" />
        </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-full justify-center">
        
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-12 mt-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Ekipa montażowa z Radomia (działamy do 100 km)</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 tracking-tight">
              Szybki i szczelny montaż okien oraz drzwi. <br/> 
              <span className="text-primary">Bez opóźnień i poprawek.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl mb-10">
              Nie jesteśmy tylko pośrednikiem, który znika po wzięciu zaliczki. Sami doradzamy, przywozimy i montujemy stolarkę w Radomiu i okolicach. Dbamy o to, by w Twoim domu było ciepło i cicho, a zamówienie realizujemy sprawnie – bez tygodni oczekiwania na wolny termin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#kontakt" 
                className="group inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
              >
                Umów darmowy pomiar i wycenę
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#promocja" 
                className="inline-flex items-center justify-center bg-transparent border border-[#444] hover:border-slate-300 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Zobacz ofertę za 2200 zł
              </Link>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="hidden lg:flex flex-col gap-6 w-full max-w-xs">
             <div className="bg-[#1A1A1A]/60 backdrop-blur-md border border-[#333] p-6 rounded-2xl hover:border-primary/50 transition-colors">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-white font-semibold mb-2">Ciepło i cisza w domu</h3>
                <p className="text-sm text-slate-400">Dbamy o idealne dopasowanie skrzydła, chroniąc przed chłodem i uciążliwym hałasem z zewnątrz.</p>
             </div>
             <div className="bg-[#1A1A1A]/60 backdrop-blur-md border border-[#333] p-6 rounded-2xl hover:border-primary/50 transition-colors">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-white font-semibold mb-2">Pewność na lata</h3>
                <p className="text-sm text-slate-400">Wykonujemy precyzyjny montaż, bierzemy pełną odpowiedzialność i gwarantujemy solidność na lata.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
