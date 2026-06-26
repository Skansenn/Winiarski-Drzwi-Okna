import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="bg-primary text-white text-sm font-semibold text-center py-2.5 px-4 z-50 relative">
        <Link href="#promocja" className="hover:underline flex items-center justify-center gap-2 flex-wrap">
          <span>PROMOCJA: Solidne drzwi z montażem w Radomiu i okolicach za 2200 zł.</span>
          <span className="underline ml-1">Umów darmowy pomiar &rarr;</span>
        </Link>
      </div>
      <header className="w-full bg-[#1A1A1A] border-b border-[#333] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                <img src="/logo.png" alt="Winiarski Okna Drzwi Logo" className="h-16 w-auto object-contain" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#oferta" className="text-slate-300 hover:text-white transition-colors font-medium">
                Oferta i Usługi
              </Link>
              <Link href="#promocja" className="text-primary hover:text-primary-hover transition-colors font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Promocja!
              </Link>
              <Link href="#faq" className="text-slate-300 hover:text-white transition-colors font-medium">
                FAQ
              </Link>
            </nav>
            <div className="hidden md:flex items-center">
               <Link href="#kontakt" className="text-sm font-semibold text-white bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-lg transition-colors shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                 Darmowy pomiar
               </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
