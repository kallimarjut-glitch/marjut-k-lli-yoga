import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
import contactImg from "@/assets/gallery-3.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-xl">
              <img
                src={contactImg}
                alt="Yoga at golden hour"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <p className="font-serif italic text-3xl text-primary -rotate-6">
                let's flow ·
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-7 order-1 lg:order-2">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
              Let's Connect
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-foreground">
              Begin where <br />
              you <span className="italic text-accent">are</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-md">
              Whether you're brand new or returning to your mat, I'd love to hear
              from you. Send a note — I reply to every message.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:hello@sereneflow.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center text-primary transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                    hello@sereneflow.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Studio
                  </p>
                  <p className="text-base font-medium text-foreground">
                    Downtown Studio · Your City
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
