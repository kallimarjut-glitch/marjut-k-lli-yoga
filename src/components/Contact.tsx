import { Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Ready to Begin?
          </h2>
          <div className="w-16 h-1 rounded-full bg-accent/60 mx-auto" />
          <p className="text-muted-foreground leading-relaxed">
            Whether you're a complete beginner or a seasoned practitioner, I'd love to hear from you. 
            Reach out to book a session or just say hello.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-8">
            <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">hello@sereneflow.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">Downtown Studio, Your City</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
