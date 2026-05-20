import heroImg from "@/assets/hero-yoga.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Organic blob shapes */}
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute top-1/2 -left-40 w-[32rem] h-[32rem] rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-6 space-y-7 order-2 lg:order-1">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-primary">
              WELLNESS · MINDSET · YOGA · LIFE
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] text-foreground">
              Breathe.<br />
              <span className="italic font-normal text-primary">Soften.</span><br />
              <span className="text-accent">Bloom.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              A gentle space to reconnect with yourself through yin yoga, breath, presence, and quiet strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-accent-foreground hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                Contact me
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 px-8 py-3.5 text-sm font-medium tracking-wide text-primary hover:bg-primary/5 transition-colors"
              >
                My story
              </a>
            </div>

            {/* Small meta row */}
            <div className="flex items-center gap-6 pt-6 text-xs text-muted-foreground">
              <span>RYT 50 Certified</span>
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              <span>10+ Years Own Practice</span>
            </div>
          </div>

          {/* Image with editorial framing */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative outline frame */}
              <div className="absolute -top-6 -left-6 w-full h-full rounded-[3rem] border-2 border-primary/30" />
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[3rem] bg-accent/15" />

              {/* Main image */}
              <div className="relative w-[18rem] h-[24rem] md:w-[22rem] md:h-[30rem] rounded-[3rem] overflow-hidden shadow-xl">
                <img
                  src={heroImg}
                  alt="Yoga teacher in lotus meditation pose"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating script accent */}
              <div className="hidden md:flex absolute -right-12 top-8 items-center">
                <span className="font-serif italic text-2xl text-primary/80 rotate-12">
                  breathe in ·
                </span>
              </div>
              <div className="hidden md:flex absolute -left-16 bottom-12 items-center">
                <span className="font-serif italic text-2xl text-accent/80 -rotate-6">
                  · breathe out
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
