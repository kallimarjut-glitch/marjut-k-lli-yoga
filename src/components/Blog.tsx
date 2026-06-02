import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

const Blog = () => {
  const preview = posts.slice(0, 3);

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
            My reflections for a more aligned life.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {preview.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="group block">
              <article>
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
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            View all journal entries
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
