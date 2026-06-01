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
