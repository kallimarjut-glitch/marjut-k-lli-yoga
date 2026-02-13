import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-primary">
              Yoga · Mindfulness · Balance
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight text-foreground">
              Find Your <br />
              <span className="text-accent italic">Balance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
              Reconnect with your body and mind through thoughtful, 
              personalized yoga sessions designed to nurture your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Book a Class
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-3 text-base font-medium text-primary hover:bg-primary/5 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="text-center text-primary/40 space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <p className="text-sm font-medium">Your Photo Here</p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-72 h-96 md:w-80 md:h-[28rem] rounded-[2rem] border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
