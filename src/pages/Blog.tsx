import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Header */}
        <section className="pt-32 md:pt-40 pb-24 md:pb-32 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute top-1/2 -left-40 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl" aria-hidden />

          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-5">
                Journal
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] text-foreground">
                Notes on <span className="italic text-accent">living with intention</span>.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                My reflections on yoga, mindset, and the habits that help you feel 
                more grounded and inspired to live a more fulfilling life.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group block"
                >
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
                      <h2 className="text-2xl font-serif leading-snug text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
