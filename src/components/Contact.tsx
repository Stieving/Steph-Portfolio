import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Looking for opportunities in full-stack development and AI. Let's connect!
        </p>

        <Card className="p-8 bg-card border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:iamvivekchoudhary77@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>iamvivekchoudhary77@gmail.com</span>
                </a>

                <a 
                  href="tel:+15084109399"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span>+1 (508) 410-9399</span>
                </a>

                <a 
                  href="https://linkedin.com/in/vivek-choudhary-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <span>linkedin.com/in/vivek-choudhary-</span>
                </a>

                <a 
                  href="https://github.com/VivekChoudhary77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <span>github.com/VivekChoudhary77</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently open to full-time opportunities in full-stack development and AI/ML roles. Feel free to reach out!
              </p>
              <Button size="lg" className="glow-effect" asChild>
                <a href="mailto:iamvivekchoudhary77@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
