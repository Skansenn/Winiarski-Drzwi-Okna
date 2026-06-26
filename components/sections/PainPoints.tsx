import { HeartCrack, Wind, Volume2, LayoutGrid } from 'lucide-react';

export default function PainPoints() {
  const problems = [
    {
      icon: <HeartCrack className="w-8 h-8 text-primary" />,
      title: "Ekipy, które znikają lub przeciągają terminy",
      desc: "W branży stolarki terminy potrafią ciągnąć się miesiącami. U nas szybkość i terminowość to podstawa. Umawiamy się na konkretny dzień montażu i jesteśmy na miejscu."
    },
    {
      icon: <Wind className="w-8 h-8 text-primary" />,
      title: "Wiejące uszczelki i nieszczelne progi",
      desc: "Nawet najdroższe okno PCV czy drzwi premium stracą swoje właściwości, jeśli monter wrzuci je „na szybko” tylko na piankę. Montujemy stolarkę precyzyjnie, dbając o szczelność na lata, żebyś nie dopłacał do rachunków za ogrzewanie."
    },
    {
      icon: <Volume2 className="w-8 h-8 text-primary" />,
      title: "Hałas z klatki schodowej i ulicy",
      desc: "Jeśli wymieniasz drzwi w bloku, chcesz odciąć się od dźwięków windy i rozmów na korytarzu. Dbamy o idealne dopasowanie skrzydła i ościeżnicy, żeby zapewnić Ci w mieszkaniu upragnioną ciszę."
    }
  ];

  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <LayoutGrid className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] text-white/[0.02] -rotate-12 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
            Montaż okien i drzwi bez <span className="text-primary block mt-2">typowych problemów</span> na budowie i remoncie
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Wiemy, z jakimi historiami o ekipach budowlanych mierzą się inwestorzy w Radomiu i okolicach. Zamiast dokładać Ci stresu, po prostu eliminujemy najczęstsze problemy:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, i) => (
            <div key={i} className="bg-[#222] border border-[#333] rounded-2xl p-8 hover:bg-[#2A2A2A] transition-colors duration-300">
              <div className="w-16 h-16 bg-[#111] rounded-xl flex items-center justify-center mb-8 border border-[#333]">
                {prob.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-4">{prob.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
