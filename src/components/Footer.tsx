import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">
              <span className="gradient-text">&lt;Dev/&gt;</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/VivekChoudhary77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/vivek-choudhary-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:iamvivekchoudhary77@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Vivek Choudhary. Crafted with 
            <Heart className="h-4 w-4 text-primary animate-pulse-glow" fill="currentColor" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
