import { DoorOpen, Home, Settings, MapPin } from 'lucide-react';

export default function Features() {
  const services = [
    {
      icon: <DoorOpen className="w-8 h-8" />,
      title: "Drzwi zewnętrzne i wewnętrzne (Montaż nawet z dnia na dzień)",
      desc: "Mamy własny magazyn w Radomiu i mnóstwo popularnych modeli od ręki. Jeśli zależy Ci na czasie, nie musisz czekać tygodniami na dostawę. Wybierasz model, a my przyjeżdżamy z montażem nawet następnego dnia – dotyczy to szczególnie drzwi w promocji."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Okna PCV, aluminiowe i drewniane",
      desc: "Pomożemy Ci dobrać profile idealne do bloku (gdzie liczy się wyciszenie) lub do domu jednorodzinnego (gdzie najważniejsza jest ochrona przed utratą ciepła). Doradzimy tak, żebyś nie przepłacał za parametry, których nie potrzebujesz."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Szybki serwis i regulacja stolarki",
      desc: "Nie znikamy po zainstalowaniu okien czy drzwi. Jeśli po czasie skrzydło opadnie lub będzie wymagało regulacji przed zimą, przyjedziemy i ustawimy wszystko na miejscu."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Radom i okolice do 100 km",
      desc: "Nasza baza jest w Radomiu, ale sprawnie dojeżdżamy do klientów z całego regionu (w tym w województwach mazowieckim, świętokrzyskim, łódzkim i lubelskim)."
    }
  ];

  return (
    <section id="oferta" className="bg-[#FAF8F4] py-24 md:py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 tracking-tight">
            W czym możemy Ci pomóc? <span className="text-primary block mt-2">Okna i drzwi od ręki</span>
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Nie musisz szukać osobno sprzedawcy i osobno ekipy montażowej. Bierzemy na siebie wszystko – od doradztwa po czysty montaż.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((feat, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feat.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl text-slate-900 mb-4 leading-tight">{feat.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
