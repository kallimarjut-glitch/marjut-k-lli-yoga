import aboutImg from "@/assets/about-portrait.png";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src={aboutImg}
                  alt="Marjut - Yin yoga teacher portrait"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


          {/* Text */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground whitespace-pre-line">
              Hi, I'm <span className="italic text-accent">Marjut</span>!{"\n"}
              So glad you're here.
            </h2>
            <div className="w-20 h-px bg-primary/40" />
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
              My mission is to help people slow down without losing their ambitions and dreams. I believe that when the nervous system feels safe and balanced, we can experience more energy, clarity and strength in our lives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I was 19, I moved abroad and spent years searching for a deeper sense of fulfilment in life. Along the way, I learned that true wellbeing isn't about becoming someone else, it's about reconnecting with who you already are. Most importantly, I realised that I could feel grounded without losing my spark.
            </p>

            <div className="flex gap-10 pt-6">
              <div>
                <p className="text-4xl font-serif text-accent">8+ years</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  Own Practice
                </p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-4xl font-serif text-accent">RYT</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  50 Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
