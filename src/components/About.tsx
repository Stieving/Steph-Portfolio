import { Card } from "@/components/ui/card";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Passionate about building scalable solutions and leveraging AI to solve complex problems
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 card-hover bg-card border-border">
            <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Experience</h3>
            <p className="text-muted-foreground">
              2+ years as Full Stack Engineer at Volkswagen, curtailing production errors by 50% and building scalable dealer management systems
            </p>
          </Card>

          <Card className="p-6 card-hover bg-card border-border">
            <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-muted-foreground">
              MS in Artificial Intelligence at Worcester Polytechnic Institute. B.Tech in Computer Science
            </p>
          </Card>

          <Card className="p-6 card-hover bg-card border-border">
            <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expertise</h3>
            <p className="text-muted-foreground">
              Specializing in AI/ML (RAG, LLMs, MCP), full-stack development, and cloud architecture. Currently TA at WPI teaching Data Mining
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
