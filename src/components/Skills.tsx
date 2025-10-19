import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI/ML",
    skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "HuggingFace", "LangChain", "Prompt Engineering", "RAG", "MCP", "NLTK", "LLMs"]
  },
  {
    title: "Languages",
    skills: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Web Technologies & Frameworks",
    skills: ["HTML/DOM", "CSS", "ASP.NET Core", "Spring Boot", "Flask", "Django", "FastAPI", "React.js", "Vue.js", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "pgvector", "ChromaDB", "Hibernate", "LINQ"]
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "AWS", "Linux", "Azure DevOps", "Docker", "Vercel", "Postman", "Cursor IDE", "VS Code", "Visual Studio", "PyCharm", "IntelliJ"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Modern technologies and frameworks for building intelligent solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 card-hover bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-secondary text-foreground">
                    {skill}
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

export default Skills;
