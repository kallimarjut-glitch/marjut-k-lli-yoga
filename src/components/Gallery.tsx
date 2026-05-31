import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import about from "@/assets/about-yoga.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 max-w-xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
            Moments
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">
            Glimpses from <span className="italic text-accent">the mat</span>.
          </h2>
        </div>

        {/* Bento-ish grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          <div className="relative rounded-[1.5rem] overflow-hidden aspect-[3/4] md:row-span-2 md:aspect-auto">
            <img src={g3} alt="Tree pose silhouette" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="relative rounded-[1.5rem] overflow-hidden aspect-square">
            <img src={g1} alt="Yoga flat lay" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="relative rounded-[1.5rem] overflow-hidden aspect-square col-span-2 md:col-span-1">
            <img src={about} alt="Warrior pose" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="relative rounded-[1.5rem] overflow-hidden aspect-square col-span-2 md:col-span-1">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center p-6">
              <p className="font-serif italic text-2xl text-background text-center leading-snug">
                "flow over force"
              </p>
            </div>
          </div>
          <div className="relative rounded-[1.5rem] overflow-hidden aspect-square col-span-2 md:col-span-2">
            <img src={g2} alt="Hands in prayer" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
