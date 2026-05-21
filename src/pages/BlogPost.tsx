import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-6 pt-40 pb-32 text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-5">
            Journal
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Post not found
          </h1>
          <p className="text-muted-foreground mb-8">
            This journal entry doesn't exist — yet.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to the journal
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <article className="pt-32 md:pt-40 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to the journal
              </Link>

              <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-5">
                {post.category} · {post.date}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-foreground">
                {post.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="max-w-4xl mx-auto mt-12 md:mt-16">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-6">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-foreground/85 leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="py-20 md:py-24 bg-secondary/40">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-10">
                  Keep reading
                </p>
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/blog/${p.slug}`}
                      className="group block"
                    >
                      <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/10] mb-5">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <p className="text-xs tracking-wider uppercase text-muted-foreground">
                        {p.category} · {p.date}
                      </p>
                      <h3 className="mt-2 text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
