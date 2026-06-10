const values = [
  {
    title: "Presence",
    text: "Not in the past. Not in the future. Just here, with what is.",
  },
  {
    title: "Soft & Strong",
    text: "A reminder that calm and ambition can coexist.",
  },
  {
    title: "Authenticity",
    text: "My teaching is rooted in lived experience rather than performance.",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
            My Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">
            Living in <span className="italic text-accent">alignment</span>.
          </h2>
          <p className="text-foreground/70 leading-relaxed pt-2">
            The main lesson for me has been learning to trust myself. To live by my own values, follow my own path, and listen to my intuition. I aim to bring the same approach into my teaching and share what I have learned through my own experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-secondary/40 rounded-[2rem] p-8 md:p-10 text-center space-y-3"
            >
              <h3 className="font-serif text-2xl text-foreground italic">{v.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{v.text}</p>
            </div>
          ))}
        </div>

        <figure className="max-w-3xl mx-auto text-center relative">
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-7xl text-accent leading-none">
            "
          </span>
          <blockquote className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed pt-6 whitespace-pre-line">
            Alignment isn't about a perfection.{"\n"}
            It's about reconnecting with yourself, again and again.
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

export default Gallery;
