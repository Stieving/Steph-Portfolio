import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company: "Worcester Polytechnic Institute",
    period: "Aug 2025 – Present",
    achievements: [
      "Support 35 graduate students in CS-548 Knowledge Discovery and Data Mining coursework through weekly office hours",
      "Guide students on classification, clustering, regression, and real-world data mining projects",
      "Assist with complex concepts in machine learning algorithms and practical implementations"
    ],
    technologies: ["Python", "Machine Learning", "Data Mining", "Teaching"]
  },
  {
    title: "Full Stack Software Engineer",
    company: "Volkswagen",
    period: "Aug 2022 – Nov 2024",
    achievements: [
      "Curtailed production runtime errors by 50% for a Taiwan-based dealer management system serving 100+ dealers by redesigning REST API integrations in Vue.js and React",
      "Resolved 100+ critical UI, backend, and database bugs through root cause analysis and end-to-end debugging, improving system stability by 40%",
      "Architected automated multi-language support using PostgreSQL, LINQ, and microservices to localize 250+ text labels",
      "Coordinated production rollouts for 100+ dealers with a 3-person team, reducing deployment downtime significantly",
      "Improved billing report generation speed by 30% using DevExpress and optimized database stored procedures"
    ],
    technologies: ["Vue.js", "React", "Node.js", "PostgreSQL", ".NET Core", "Azure DevOps", "Docker"]
  },
  {
    title: "Software Engineer Intern",
    company: "Myridius x Aethereus",
    period: "Jan 2022 – Mar 2022",
    achievements: [
      "Minimized manual CRM work by 20% and boosted system reliability by 30% by building 10+ Salesforce triggers and workflows",
      "Debugged complex Apex code alongside senior engineers to resolve critical system issues"
    ],
    technologies: ["Salesforce", "Apex", "CRM", "Workflows"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Building enterprise solutions and driving innovation
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 card-hover bg-card border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-xl text-primary mb-2">{exp.company}</p>
                </div>
                <p className="text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
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

export default Experience;
