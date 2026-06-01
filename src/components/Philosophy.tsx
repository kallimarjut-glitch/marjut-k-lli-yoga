import philosophyImg from "@/assets/philosophy-walk.jpg";

const pillars = [
  {
    number: "01",
    title: "Presence",
    text: "Bringing awareness to the small moments — how you breathe, how you listen, how you move through your day.",
  },
  {
    number: "02",
    title: "Intention",
    text: "Choosing actions that align with your values, not just your to-do list. Living on purpose instead of on autopilot.",
  },
  {
    number: "03",
    title: "Compassion",
    text: "Meeting yourself and others with softness. Strength and gentleness can live in the same breath.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 w-[22rem] h-[22rem] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
            Off the Mat
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground">
            Yoga is a way of <span className="italic text-accent">living</span>,
            not just a practice.
          </h2>
          <div className="w-20 h-px bg-primary/40 mx-auto" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            What we cultivate on the mat — presence, patience, honesty, ease — is
            meant to be carried into the rest of our lives. Into the way we work,
            love, rest, and make decisions. To me, yoga is about living aligned
            with your values and moving through the world a little more
            intentionally.
          </p>
        </div>

        {/* Image + quote */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center max-w-6xl mx-auto mb-20">
          <div className="md:col-span-6">
            <div className="relative w-full max-w-md mx-auto">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src={philosophyImg}
                  alt="Walking barefoot through tall grass at golden hour"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />
            </div>
          </div>

          <div className="md:col-span-6 space-y-6 md:pl-4">
            <p className="font-serif text-6xl text-accent leading-none">"</p>
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-snug text-foreground">
              The way you do anything is the way you do everything. I want to
              move through life the same way I move through a practice —
              slowly, honestly, and with care.
            </blockquote>
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground">
              — Marjut
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          {pillars.map((p) => (
            <div key={p.number} className="space-y-4 md:px-4">
              <p className="font-serif italic text-accent text-2xl">{p.number}</p>
              <div className="w-10 h-px bg-primary/40" />
              <h3 className="text-2xl font-serif text-foreground">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
