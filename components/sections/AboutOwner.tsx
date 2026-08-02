import Image from "next/image";
import Link from "next/link";
import { Coffee, ShieldCheck } from "lucide-react";

export default function AboutOwner() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">O nas</span>
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">
              Andrzej Winiarski <br className="hidden md:block"/> 
              <span className="text-slate-400 font-light">— właściciel</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
              <p>
                Zaczynałem od montażu. Dziś mam własną ekipę i magazyn w Guzowie pod Radomiem, ale na pomiary wciąż jeżdżę sam — bo to pierwsza rozmowa decyduje o tym, czy stolarka będzie pasować do Twojego domu, czy tylko do otworu w ścianie.
              </p>
              
              <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-primary/20 relative shadow-lg">
                <Coffee className="absolute top-6 right-6 w-8 h-8 text-primary/30" />
                <p className="relative z-10 pr-10">
                  Chcesz najpierw zobaczyć towar na własne oczy? Wpadnij do magazynu. Zaparzę kawę i pokażę wszystko na miejscu. Uprzedzam, że o drzwiach potrafię mówić za długo — możesz to potraktować jak darmową konsultację.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
                <p>
                  <strong className="text-white font-medium block mb-1">Każdego klienta traktuję jak swojego.</strong> 
                  Nazwisko na szyldzie zobowiązuje: jak coś pójdzie nie tak, wiesz, do kogo wracać.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Link 
                href="#kontakt" 
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
              >
                Umów się na darmowy pomiar
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="relative w-full aspect-[3/4] max-w-[450px] mx-auto lg:ml-auto">
              {/* Photo frame decoration */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-xl"></div>
              <div className="absolute inset-0 border border-primary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-[#222]">
                <Image
                  src="/Andrzej.JPG"
                  alt="Andrzej Winiarski - Właściciel"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
