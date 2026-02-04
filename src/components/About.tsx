import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Lightbulb, Zap, GraduationCap } from "lucide-react";

const About = () => {
  const workValues = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead of technology trends and implementing cutting-edge solutions",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional results",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "4+", label: "Years Experience" },
    { number: "20+", label: "Technologies Worked" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Building transformative solutions that create real impact.
          </p>
          
          {/* Education Badge */}
          <div className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-full px-6 py-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-foreground">BSc in Computer Science</div>
              <div className="text-xs text-muted-foreground">Ojaja University • GPA 4.33/5.0</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - My Journey */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With a strong foundation in Computer Science and several years of hands-on experience across full-stack development, I’ve worked on a wide range of digital products—from custom websites and e-commerce platforms to UI/UX-driven software and web application projects. My work spans both independent freelance projects and structured team environments, including internships and institutional digitalization initiatives.
              </p>
              
              <p>
                I’m particularly driven by the intersection of functionality and visual clarity. Whether I’m building web applications with React, Node.js, and MongoDB, designing intuitive user interfaces in Figma, or creating compelling visual assets with Adobe tools, my focus is always on delivering solutions that are practical, engaging, and user-centered. I’ve collaborated closely with clients and cross-functional teams, managed multiple projects simultaneously, and consistently delivered work that aligns with both technical requirements and brand identity.
              </p>
              
              <p>
                Beyond technical execution, I value continuous learning and adaptability. From improving SEO performance and server management to exploring automation with Python and modern frontend frameworks, I’m constantly refining my skill set to stay relevant in a fast-evolving tech landscape. Outside of work, I enjoy expanding my knowledge through research, staying informed about global developments, and engaging with creative and interactive digital experiences.
              </p>
            </div>
          </div>

          {/* Right Column - How I Work */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">How I Work</h3>
            <div className="grid grid-cols-2 gap-4">
              {workValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="p-4 bg-card border-border hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <div className={`inline-flex p-2 rounded-lg ${value.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why You Should Hire Me */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Why You Should Hire Me?</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">I Build Solutions That Work and Looks Right</h4>
                <p className="text-muted-foreground leading-relaxed">
                  As a full-stack developer with a strong background in design, I don’t just build functional systems — I build products that users actually enjoy using. I bridge the gap between logic and visuals, ensuring that applications are both technically sound and visually compelling. This means fewer design-to-dev disconnects and faster delivery of polished results.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Hands-On Experience With Real Projects</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I’ve worked on real-world applications ranging from web platforms and APIs to business-focused systems, applying modern tools like Java, Spring Boot, JavaScript, and frontend frameworks. I’m comfortable taking ideas from concept to deployment, solving problems along the way with clean, maintainable code.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Fast Learner, Always Improving</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I’m deeply committed to continuous learning, whether it’s improving my backend architecture skills, refining UI/UX workflows, or staying current with modern web standards. I adapt quickly, pick up new tools efficiently, and apply what I learn immediately to practical use cases.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Clear Communicator & Reliable Team Player</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond technical skills, I communicate clearly, take ownership of tasks, and collaborate effectively with designers, developers, and non-technical stakeholders. My background in content creation and communication helps me explain complex ideas simply and work smoothly within teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-card border border-border/50 rounded-2xl mb-4">
                <span className="text-3xl font-bold gradient-text">{stat.number}</span>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
