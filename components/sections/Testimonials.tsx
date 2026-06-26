import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Andrzej z Radomia",
      role: "Wymiana okien w domu jednorodzinnym",
      content: "Wreszcie ekipa, która przyjechała punktualnie i po prostu zrobiła swoje. Montaż bardzo dokładny, wszystko szczelne, od razu czuć różnicę w domu. Wielki plus za to, że chłopaki posprzątali po sobie cały ten poekipowy bałagan. Z czystym sumieniem polecam."
    },
    {
      name: "Krzysztof Nowak",
      role: "Wymiana drzwi w bloku",
      content: "Solidni fachowcy i uczciwa wycena. Drzwi w bloku zamontowane sprawnie, bez przeciągania terminów. Cena dokładnie taka, na jaką się umawialiśmy na początku, żadnych ukrytych dopłat. Robota bez jakichkolwiek zastrzeżeń."
    },
    {
      name: "Marek i Sylwia",
      role: "Nowe drzwi wejściowe",
      content: "Szybko, sprawnie i w bardzo dobrej cenie. Ekipa terminowa, a sam montaż wykonany solidnie, z dbałością o najmniejsze detale. W mieszkaniu zrobiło się ciszej i cieplej. Polecamy każdemu, komu zależy na czasie i świętym spokoju."
    },
    {
      name: "Halina z Gnatowa",
      role: "Wymiana stolarki w starym domu",
      content: "Bardzo miła obsługa od pierwszego telefonu aż po sam montaż. Chłopaki świetnie doradzili w wyborze, wszystko dopięte na ostatni guzik, sprawnie i z uśmiechem. Dom przygotowany na zimę, dziękuję!"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 font-light leading-relaxed mb-8 italic">
                  "{test.content}"
                </p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p className="font-heading font-semibold text-slate-900 text-lg">{test.name}</p>
                <p className="text-sm text-slate-500 mt-1">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
