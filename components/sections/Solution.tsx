import { CheckCircle2, Check } from 'lucide-react';

export default function Solution() {
  const benefits = [
    {
      title: "Prawidłowy montaż warstwowy (tzw. ciepły)",
      desc: "Nie żałujemy materiałów. Używamy profesjonalnych folii i taśm okiennych (paroszczelnych i paroprzepuszczalnych). Dzięki temu piana montażowa jest chroniona przed wilgocią, a w narożnikach nigdy nie wyjdzie grzyb ani pleśń."
    },
    {
      title: "Gwarancja terminu wpisana w umowie",
      desc: "Wiemy, że opóźnienia na budowie to zmora. Harmonogram, który z nami ustalasz, jest święty. Dokładnie wiesz, kiedy przyjedziemy i jak długo potrwają prace."
    },
    {
      title: "Własna, doświadczona ekipa z Radomia",
      desc: "Nie zlecamy montażu przypadkowym podwykonawcom „z łapanki”. Przyjeżdżają do Ciebie nasi ludzie, którzy zamontowali już tysiące skrzydeł i biorą pełną odpowiedzialność za robotę."
    },
    {
      title: "Dokładny odbiór i porządek",
      desc: "Prace kończymy dopiero wtedy, gdy wspólnie sprawdzimy działanie każdego zamka, klamki i skrzydła. Co ważne: nie zostawiamy Cię z bałaganem, sprzątamy po sobie miejsce pracy."
    }
  ];

  const steps = [
    { title: "Darmowy pomiar i wycena", desc: "Przyjedziemy na miejsce w dogodnym dla Ciebie terminie. Dokładnie wymierzymy otwory i podpowiemy najlepsze rozwiązanie. Ta wizyta do niczego Cię nie zobowiązuje." },
    { title: "Jasna umowa i zamówienie", desc: "Podpisujemy prostą umowę bez ukrytych kosztów. Od razu zamawiamy Twoje okna lub drzwi bezpośrednio u producenta, żeby skrócić czas oczekiwania." },
    { title: "Ustalenie świętego terminu", desc: "Gdy tylko dostajemy sygnał z fabryki, rezerwujemy dzień na montaż. Szanujemy Twój czas, dlatego wyznaczonego terminu trzymamy się bezdyskusyjnie." },
    { title: "Szybki i szczelny montaż", desc: "Przyjeżdżają nasi monterzy. Pracują sprawnie, nie marnują czasu i dbają o to, by stolarka była osadzona idealnie prosto i szczelnie." },
    { title: "Odbiór, gwarancja i porządek", desc: "Wspólnie sprawdzamy jak działają zamki i skrzydła. Sprzątamy stanowisko pracy, oddajemy klucze i przekazujemy pisemną gwarancję." },
  ];

  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight tracking-tight">
              Jak dbamy o to, by wszystko działało <span className="text-primary block mt-2">bez zarzutu?</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
              Zamiast rzucać ogólnymi hasłami o „najwyższej jakości”, stosujemy cztery proste zasady. To dzięki nim masz pewność, że Twoje okna i drzwi będą szczelne przez długie lata:
            </p>
            
            <ul className="space-y-6 mb-10">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-4 mt-0.5" />
                  <div>
                    <h4 className="text-slate-800 font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-slate-600 font-light text-sm">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            {/* Decorative background blur */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 to-red-200/30 blur-3xl rounded-full z-0"></div>
            
            {/* Timeline Mockup */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 h-full flex flex-col">
              <div className="h-12 bg-slate-50/80 border-b border-slate-100 flex items-center px-4 gap-2 backdrop-blur-sm shrink-0">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <span className="ml-4 text-xs font-semibold text-slate-400 tracking-wider uppercase">Proces Współpracy</span>
              </div>
              
              <div className="p-8 md:p-10 flex-grow flex flex-col bg-white relative">
                 <div className="mb-8">
                   <h3 className="font-heading text-2xl font-bold text-slate-800">Prosty proces: od pomiaru do ciepłego domu</h3>
                   <p className="text-slate-500 text-sm mt-2 leading-relaxed">Nie musisz znać się na budownictwie ani tracić czasu na formalności. Całą drogę przechodzimy w 5 prostych krokach:</p>
                 </div>
                 
                 <div className="relative space-y-6">
                   {/* Vertical Line */}
                   <div className="absolute top-2 bottom-4 left-[11px] w-[2px] bg-slate-100 z-0"></div>
                   
                   {steps.map((step, index) => (
                     <div key={index} className="relative z-10 flex gap-5 items-start group">
                       <div className="relative w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5 ring-4 ring-white group-hover:scale-110 transition-transform duration-300 shadow-sm">
                         <Check className="w-3.5 h-3.5 text-white" />
                       </div>
                       <div>
                         <h4 className="font-semibold text-slate-800 mb-1">{step.title}</h4>
                         <p className="text-sm text-slate-500 font-light leading-relaxed">{step.desc}</p>
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
  );
}
