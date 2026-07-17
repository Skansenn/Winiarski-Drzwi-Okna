import Image from "next/image";

const images = [
  "/realizacje/20230831_174128.jpg",
  "/realizacje/20240605_145248.jpg",
  "/realizacje/20250306_125047.jpg",
  "/realizacje/20250317_134347.jpg",
  "/realizacje/20250317_151844.jpg",
  "/realizacje/20250829_154230.jpg",
  "/realizacje/20251205_111436.jpg",
  "/realizacje/IMG_20251016_183448.jpg",
  "/realizacje/IMG_20251016_183511.jpg",
];

export default function Gallery() {
  return (
    <section id="realizacje" className="py-24 bg-background border-t border-border/40">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Galeria
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Nasze Ostatnie Realizacje
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zobacz przykłady naszych profesjonalnych montaży. Dbamy o każdy detal,
            od odpowiedniego uszczelnienia po idealne wykończenie.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-border/50 bg-muted/20"
            >
              <Image
                src={src}
                alt={`Realizacja montażu ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
