import vinyasaImg from "@/assets/class-vinyasa.jpg";
import restorativeImg from "@/assets/class-restorative.jpg";
import meditationImg from "@/assets/class-meditation.jpg";

const classes = [
  {
    image: vinyasaImg,
    name: "Yin Yoga",
    description:
      "A grounding yin yoga practice focused on slowing down, reconnecting, and finding balance.",
    duration: "60 - 90 MIN",
    level: "All Levels",
  },
  {
    image: restorativeImg,
    name: "Restorative",
    description:
      "Soft, supported shapes held with bolsters and blankets to deeply soothe the nervous system.",
    duration: "75 min",
    level: "Beginner Friendly",
  },
  {
    image: meditationImg,
    name: "Stillness & Breath",
    description:
      "A guided meditation and pranayama session to cultivate presence, calm and clarity.",
    duration: "45 min",
    level: "All Levels",
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
              What I Offer
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground">
              Practices to <span className="italic text-accent">come home</span> to.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed md:text-right">
            Yoga is my way to connect with myself, and by guiding you through
            these practices, I hope to help you do the same.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((cls, i) => (
            <article
              key={cls.name}
              className="group relative"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-6 shadow-md">
                <img
                  src={cls.image}
                  alt={cls.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-medium tracking-widest uppercase bg-background/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full">
                  {"\n"}
                </span>
              </div>

              {/* Text */}
              <div className="space-y-3 px-1">
                <h3 className="text-2xl font-serif text-foreground">
                  {cls.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cls.description}
                </p>
                <div className="flex items-center gap-3 pt-2 text-xs tracking-widest uppercase text-primary">
                  <span>{cls.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                  <span>{cls.level}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
