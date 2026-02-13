import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Her classes have completely transformed my relationship with my body. I feel stronger, calmer, and more centered than ever before.",
    name: "Sarah M.",
    initials: "SM",
  },
  {
    quote: "The most welcoming and thoughtful yoga teacher I've ever had. Every session feels like it was designed just for me.",
    name: "James L.",
    initials: "JL",
  },
  {
    quote: "I came for the flexibility, but I stayed for the peace of mind. Her restorative classes are pure magic.",
    name: "Priya K.",
    initials: "PK",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Kind Words
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            What Students Say
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary/60 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-secondary/40 rounded-2xl p-8 space-y-6 text-center"
            >
              <div className="text-accent text-3xl font-serif">"</div>
              <p className="text-muted-foreground leading-relaxed italic text-sm">
                {t.quote}
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
