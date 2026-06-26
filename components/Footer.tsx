import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-slate-400 py-16 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-10 md:mb-0">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Winiarski Okna Drzwi Logo" className="h-20 w-auto object-contain" />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500 mb-6">
              Szybki i szczelny montaż stolarki. Dbamy o to, by w Twoim domu było ciepło i cicho. Gwarantujemy brak opóźnień i najwyższą jakość prac instalacyjnych.
            </p>
            <div className="flex items-start gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Działamy w Radomiu oraz w promieniu do 100 km <br/>(województwo mazowieckie, świętokrzyskie, łódzkie i lubelskie).</span>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:text-right">
             <p className="text-white font-heading font-semibold mb-2">Szybki kontakt</p>
             <a href="mailto:oknadrzwi.winiarski@op.pl" className="text-sm font-light hover:text-white transition-colors flex items-center md:justify-end gap-2">
                <Mail className="w-4 h-4 text-primary" />
                oknadrzwi.winiarski@op.pl
             </a>
             <a href="tel:+48604257107" className="text-sm font-light hover:text-white transition-colors flex items-center md:justify-end gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +48 604 257 107
             </a>
             
             <p className="text-white font-heading font-semibold mt-6 mb-2">Social Media</p>
             <a href="https://www.facebook.com/profile.php?id=61575779140347" target="_blank" rel="noopener noreferrer" className="text-sm font-light hover:text-[#1877F2] transition-colors flex items-center justify-start md:justify-end gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Facebook
             </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center text-xs">
           <p className="text-slate-600">© {new Date().getFullYear()} Winiarski Okna i Drzwi. Wszelkie prawa zastrzeżone.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <Link href="/polityka" className="text-slate-600 hover:text-white transition-colors">Polityka prywatności</Link>
             <Link href="/regulamin" className="text-slate-600 hover:text-white transition-colors">Regulamin</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
