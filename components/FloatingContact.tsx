import { Phone } from 'lucide-react';

export default function FloatingContact() {
  return (
    <a
      href="tel:+48604257107"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover hover:scale-110 transition-all duration-300 md:bottom-10 md:right-10 group"
      aria-label="Zadzwoń do nas"
    >
      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40 group-hover:opacity-0 transition-opacity"></div>
      <Phone className="w-6 h-6 relative z-10" />
    </a>
  );
}
