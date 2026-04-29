const testimonials = [
  {
    quote:
      "Her classes have completely transformed my relationship with my body. I feel stronger, calmer, and more centered than ever before.",
    name: "Sarah M.",
    role: "Vinyasa student",
  },
  {
    quote:
      "The most welcoming and thoughtful yoga teacher I've ever had. Every session feels like it was designed just for me.",
    name: "James L.",
    role: "Private client",
  },
  {
    quote:
      "I came for the flexibility, but I stayed for the peace of mind. Her restorative classes are pure magic.",
    name: "Priya K.",
    role: "Restorative student",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden"
    >
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center space-y-4 mb-16 max-w-xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
            Kind Words
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">
            From the <span className="italic text-accent">community</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`relative bg-background rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <span className="absolute -top-6 left-8 font-serif text-7xl text-accent leading-none">
                "
              </span>
              <blockquote className="text-foreground/80 leading-relaxed font-serif italic text-lg pt-4">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-6 mt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
