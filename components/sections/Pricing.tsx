import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="promocja" className="bg-[#111111] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl border border-primary/30 overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)]">
          <div className="flex flex-col lg:flex-row">
            
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-red-500"></div>
              
              <div className="inline-block bg-primary/10 text-primary border border-primary/20 text-sm font-bold px-4 py-1.5 rounded-full w-fit mb-6 uppercase tracking-wider">
                🔥 Oferta Specjalna
              </div>
              
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                Promocja: Solidne drzwi z montażem za <span className="text-primary text-5xl md:text-6xl block mt-2">2200 zł</span>
              </h2>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                Szukasz sprawdzonych drzwi wejściowych, ale przerażają Cię odległe terminy w salonach? Mamy dla Ciebie gotowe rozwiązanie. Wybraliśmy solidne, najchętniej kupowane modele drzwi i sprowadziliśmy je do naszego magazynu w Radomiu. Nie czekasz tygodniami – możemy u Ciebie być nawet następnego dnia.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-slate-200">
                  <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                     <span className="font-semibold block text-white mb-0.5">Kompletne drzwi gotowe do użytku</span>
                     <span className="font-light text-sm text-slate-400">Solidne skrzydło, dopasowana ościeżnica, klamki oraz zamki. Żadnego dokupowania na własną rękę.</span>
                  </div>
                </li>
                <li className="flex items-start text-slate-200">
                  <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                     <span className="font-semibold block text-white mb-0.5">Profesjonalny, szczelny montaż</span>
                     <span className="font-light text-sm text-slate-400">Demontujemy stare drzwi, osadzamy nowe i dbamy o to, by nigdzie nie wiało.</span>
                  </div>
                </li>
                <li className="flex items-start text-slate-200">
                  <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                     <span className="font-semibold block text-white mb-0.5">Darmowy dojazd i pomiar</span>
                     <span className="font-light text-sm text-slate-400">Przyjedziemy (do 100 km od Radomia), wymierzymy i potwierdzimy cenę przed startem prac.</span>
                  </div>
                </li>
                <li className="flex items-start text-slate-200">
                  <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <div>
                     <span className="font-semibold block text-white mb-0.5">Ekspresowy termin</span>
                     <span className="font-light text-sm text-slate-400">Te modele mamy na miejscu. Umawiamy się i montujemy. Nawet z dnia na dzień.</span>
                  </div>
                </li>
              </ul>
              
              <Link 
                href="#kontakt" 
                className="bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-xl text-center transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transform hover:-translate-y-1"
              >
                Umów darmowy pomiar i zarezerwuj drzwi w promocji
              </Link>
              
            </div>

            <div className="lg:w-1/2 relative min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent z-10 lg:hidden"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: 'url("/drzwi.png")' }}
              ></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
