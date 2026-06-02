import { Play, Youtube as YoutubeIcon } from "lucide-react";
import cozy from "@/assets/youtube-cozy.jpg";

const topics = ["Yoga", "Wellness", "Mindset", "Healthy Habits", "Breathwork"];

const Youtube = () => {
  return (
    <section id="youtube" className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl">
              <img
                src={cozy}
                alt="Cozy yoga studio with plants and candles"
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Play overlay */}
              <a
                href="https://www.youtube.com/@marjutkalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit YouTube channel"
                className="absolute inset-0 flex items-center justify-center bg-foreground/10 hover:bg-foreground/30 transition-colors group"
              >
                <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-accent fill-accent ml-1" />
                </span>
              </a>
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-background rounded-full px-5 py-3 shadow-lg flex items-center gap-2 border border-border">
              <YoutubeIcon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Free Yin Yoga classes</span>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2 space-y-7">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
              YouTube Channel · <span className="text-accent">Coming Soon</span>
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] text-foreground">
              A cozy place to <span className="italic text-accent"><br />get inspired</span> together.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg whitespace-pre-line">
              Yin yoga classes, mindset talks, and simple wellness
              practices for creating a more intentional life.{" "}&nbsp;

              Subscribe and be the first to know when new videos are released.
            </p>

            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full bg-background border border-border text-foreground"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://www.youtube.com/@marjutkalli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors shadow-md"
              >
                <YoutubeIcon className="w-5 h-5" />
                Visit the channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
