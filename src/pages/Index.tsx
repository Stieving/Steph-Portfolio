import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
