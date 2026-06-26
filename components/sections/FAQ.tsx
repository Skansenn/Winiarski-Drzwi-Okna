import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Ile kosztują drzwi z montażem?",
      a: "W naszej stałej promocji wybrane solidne modele drzwi wejściowych wraz z pełnym montażem kupisz za jedyne 2200 zł. W tej cenie otrzymujesz komplet: skrzydło, ościeżnicę, klamki, zamki oraz naszą pracę (demontaż starych drzwi i czysty montaż nowych). Cena jest ostateczna – nie dopłacasz za dojazd czy dodatkowe uszczelnienia."
    },
    {
      q: "Jak długo czeka się na montaż?",
      a: "Większość firm zamawia towar dopiero po podpisaniu umowy, co oznacza tygodnie czekania. My działamy inaczej. Posiadamy własny magazyn w Radomiu, w którym najpopularniejsze modele drzwi (w tym te z promocji za 2200 zł) mamy dostępne od ręki. Dzięki temu montaż możemy zrealizować ekspresowo, nawet z dnia na dzień."
    },
    {
      q: "Czy pomiar i wycena są płatne?",
      a: "Nie. Przyjedziemy do Ciebie, dokładnie zmierzymy otwory montażowe i przedstawimy ostateczną wycenę całkowicie bezpłatnie. Dojeżdżamy do klientów w promieniu do 100 km od Radomia. Taka wizyta jest w 100% niezobowiązująca – decyzję o zakupie podejmujesz dopiero po poznaniu dokładnych kosztów."
    },
    {
      q: "Czy realizujecie zamówienia na pojedyncze drzwi, np. do mieszkania w bloku?",
      a: "Tak, jak najbardziej. Pomagamy zarówno inwestorom, którzy zamykają stan surowy w dużych domach jednorodzinnych, jak i osobom prywatnym, które chcą po prostu wymienić stare drzwi wejściowe w bloku, żeby odciąć się od hałasów z klatki schodowej. Każde zlecenie traktujemy tak samo poważnie."
    },
    {
      q: "Czym różni się ciepły montaż od zwykłego?",
      a: "Zwykły montaż opiera się głównie na piance montażowej. Ciepły montaż (warstwowy) polega na dodatkowym zabezpieczeniu tej pianki specjalnymi foliami i taśmami od wewnątrz i zewnątrz. Dzięki temu piana nie niszczeje pod wpływem wilgoci i słońca, nie powstają mostki termiczne, a Ty masz pewność, że wokół okien czy drzwi nigdy nie pojawi się grzyb i nie będzie uciekać ciepło."
    }
  ];

  return (
    <section id="faq" className="bg-[#FAF8F4] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 tracking-tight">
            Najczęściej zadawane <span className="text-primary">pytania (FAQ)</span>
          </h2>
          <p className="text-slate-600 text-lg font-light">
            Masz wątpliwości? Przygotowaliśmy jasne i konkretne odpowiedzi.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 font-heading font-semibold text-lg text-slate-900 hover:text-primary transition-colors">
                <span className="pr-6">{faq.q}</span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180 bg-slate-50 text-primary p-2 rounded-full group-hover:bg-red-50">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed font-light">
                <div className="h-px w-full bg-slate-100 mb-6"></div>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
