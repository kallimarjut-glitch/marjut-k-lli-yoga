import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Gallery from "@/components/Gallery";
import Youtube from "@/components/Youtube";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Gallery />
      <Youtube />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
