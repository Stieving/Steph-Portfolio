import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import MultilingualGreeting from "./MultilingualGreeting";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-4 flex-wrap">
            <MultilingualGreeting />
            <span>I'm</span>
            <span className="gradient-text">Vivek Choudhary</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-semibold">
            Full Stack Software Engineer & AI Specialist
          </p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Architecting scalable solutions at the intersection of full-stack development and artificial intelligence. 
            From building enterprise systems to deploying cutting-edge ML models, I transform complex problems into elegant, impactful solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap animate-slide-up">
          <Button size="lg" className="glow-effect group" asChild>
            <a href="/Vivek_Choudhary_Resume.pdf" download>
              <FileText className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-12 animate-slide-up">
          <a
            href="https://github.com/VivekChoudhary77"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/vivek-choudhary-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:iamvivekchoudhary77@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="inline-block animate-float">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
