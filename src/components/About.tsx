import aboutImg from "@/assets/about-yoga.jpg";

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
                  alt="Yoga teacher in warrior pose at golden hour"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Small overlapping image */}
              <div className="absolute -bottom-10 -left-6 md:-left-12 w-36 h-44 md:w-44 md:h-52 rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-background">
                <img
                  src={galleryImg}
                  alt="Hands in prayer mudra"
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dot pattern */}
              <div className="absolute -top-6 -right-6 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground">
              Hi, I'm <span className="italic text-accent">Marjut</span> —<br />
              your guide to slowing down without losing your spark.
            </h2>
            <div className="w-20 h-px bg-primary/40" />
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
              My mission is to help people slow down without losing their ambitions and dreams.{"\n"}
              I believe that when the nervous system feels safe and balanced, we can live with more energy, clarity, presence, and strength.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This is a space where you can come exactly as you are. Thank you for being here.
            </p>

            <div className="flex gap-10 pt-6">
              <div>
                <p className="text-4xl font-serif text-accent">10+</p>
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
