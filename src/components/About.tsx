const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-96 rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
              <div className="text-center text-primary/40 space-y-2">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">📸</span>
                </div>
                <p className="text-sm font-medium">Your Photo Here</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-primary">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
              My Yoga Journey
            </h2>
            {/* Decorative line */}
            <div className="w-16 h-1 rounded-full bg-primary/60" />
            <p className="text-muted-foreground leading-relaxed">
              With over 10 years of dedicated practice and teaching, I believe yoga is for everyone. 
              My approach blends traditional techniques with modern understanding of the body, 
              creating a practice that is both authentic and accessible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm a certified 500-hour RYT instructor specializing in Vinyasa and Restorative yoga. 
              My mission is to help you find stillness in movement and strength in surrender.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-serif font-semibold text-accent">10+</p>
                <p className="text-sm text-muted-foreground">Years Teaching</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-semibold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-semibold text-accent">RYT</p>
                <p className="text-sm text-muted-foreground">500 Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
