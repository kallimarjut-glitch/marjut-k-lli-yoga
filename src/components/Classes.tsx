import { Flame, Wind, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const classes = [
  {
    icon: Wind,
    name: "Vinyasa Flow",
    description: "A dynamic, breath-synchronized practice that builds strength, flexibility, and mindfulness through fluid movement.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    icon: Flame,
    name: "Power Yoga",
    description: "An energizing practice that challenges your body and mind with strength-building poses and active sequences.",
    duration: "75 min",
    level: "Intermediate",
  },
  {
    icon: Moon,
    name: "Restorative Yoga",
    description: "A gentle, soothing practice using props and long holds to release tension and promote deep relaxation.",
    duration: "60 min",
    level: "Beginner",
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Classes & Services
          </h2>
          <div className="w-16 h-1 rounded-full bg-accent/60 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {classes.map((cls) => (
            <Card
              key={cls.name}
              className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden bg-card hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-accent/10 transition-colors">
                  <cls.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {cls.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cls.description}
                </p>
                <div className="flex justify-center gap-4 pt-2">
                  <span className="text-xs font-medium bg-secondary px-3 py-1 rounded-full text-muted-foreground">
                    {cls.duration}
                  </span>
                  <span className="text-xs font-medium bg-secondary px-3 py-1 rounded-full text-muted-foreground">
                    {cls.level}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
