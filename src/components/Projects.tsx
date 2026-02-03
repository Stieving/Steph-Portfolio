import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SMK solar",
    description: "Developed a website for a solar company using Wordpress and custom JQuery scripts to enhance user experience and SEO performance.",
    achievements: [
      "Integrated Open Graph meta tags for improved social media sharing",
      "Improved site performance by 30% through optimized JQuery code",
      "Integrated Vue.js components for dynamic content rendering"
    ],
    technologies: ["Wordpress", "JQuery", "Vue.js", "Open Graph", "TypeScript"],
    github: "https://smksolar.com.ng",
    period: "Jun 2025"
  },
  {
    title: "Abulesowo",
    description: "Built a website for a real estate company using React.js and TypeScript, focusing on SEO optimization with Open Graph integration.",
    achievements: [
      "Implemented Open Graph meta tags for enhanced social media visibility",
      "Integrated dynamic property listings with React.js",
      "Improved site SEO leading to a 25% increase in organic traffic",
      "Developed reusable TypeScript components for faster development",
    ],
    technologies: ["React.js", "Open Graph", "TypeScript"],
    github: "https://www.abulesowo.ng",
    period: "Feb 2025 – May 2025"
  },
  {
    title: "Woocommerce Store",
    description: "Developed a Woocommerce store using just wordpress and the twenty twentyfive theme. Implemented custom functionalities using JavaScript and Typescript to enhance user experience and streamline operations.",
    achievements: [
      "Integrated payment gateways and optimized checkout process",
      "Built responsive product pages with custom scripts for better user engagement",
      "Enhanced site SEO with structured data and meta tags",
      "Implemented inventory management features using Typescript"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "Typescript"],
    github: "https://github.com/Stieving/Woo",
    period: "Jan 2026"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Full-stack applications and ML solutions that solve real-world problems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col card-hover bg-card border-border">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.period}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <ul className="space-y-1 mb-4">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs border-primary/20 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
