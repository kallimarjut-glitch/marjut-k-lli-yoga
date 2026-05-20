import { ArrowUpRight } from "lucide-react";
import journal from "@/assets/blog-journal.jpg";
import morning from "@/assets/blog-morning.jpg";
import flowers from "@/assets/blog-flowers.jpg";

const posts = [
  {
    image: journal,
    category: "Mindfulness",
    date: "Apr 20, 2026",
    title: "Five small rituals that grounded me this spring",
    excerpt: "Tiny daily practices that quietly changed how I show up — for myself and for others.",
  },
  {
    image: morning,
    category: "Wellness",
    date: "Apr 12, 2026",
    title: "A slow morning routine for anxious minds",
    excerpt: "How I trade the rush for ten honest minutes of breath, light and warmth.",
  },
  {
    image: flowers,
    category: "Self-care",
    date: "Apr 03, 2026",
    title: "Letting softness be a strength",
    excerpt: "Reflections on rest, boundaries and the quiet power of doing less.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 max-w-6xl mx-auto">
          <div className="space-y-4 max-w-xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
              Journal
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] text-foreground">
              Thoughts &amp; tips for <span className="italic text-accent">better wellbeing</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right">
            A place where softness, balance, and quiet strength come together through yoga and mindful living.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-background/95 text-foreground backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-xs tracking-wider uppercase text-muted-foreground">
                  {post.date}
                </p>
                <h3 className="text-2xl font-serif leading-snug text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent pt-1">
                  Read more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            View all journal entries
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
