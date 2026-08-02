import Image from 'next/image';

export default function FloatingContact() {
  return (
    <a
      href="tel:+48604257107"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:scale-110 transition-all duration-300 md:bottom-10 md:right-10 group overflow-hidden border-2 border-primary"
      aria-label="Zadzwoń do nas"
    >
      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30 group-hover:opacity-0 transition-opacity"></div>
      <Image src="/glowka.JPG" alt="Zadzwoń - Andrzej Winiarski" fill className="object-cover relative z-10" />
    </a>
  );
}
