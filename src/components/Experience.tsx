import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Zap, Code } from "lucide-react";

const experiences = [
  {
    title: "NYSC Internship",
    company: "University of Ibadan",
    period: "Sep 2023 – Jun 2024",
    location: "Nigeria",
    logo: "/UI_logo.png",
    achievements: [
      "Led a digitalization project within the Institute of African Studies to modernize archival systems",
      "Managed website operations and server maintenance to ensure 100% uptime and performance",
      "Developed internal tools using Python to automate data entry and reporting tasks, reducing manual effort by 30%",
    ],
    technologies: ["JavaScript", "Python", "Node JS", "React", "SQL", "MongoDB"]
  },
  {
    title: "Freelance Web Developer & Designer",
    company: "Upwork",
    period: "2023 – 2026",
    location: "Remote",
    logo: "/upwork_logo.png",
    achievements: [
      "Designed and developed full-featured e-commerce platforms using the MERN stack (MongoDB, Express, React, Node.js)",
      "Integrated secure payment gateways and user authentication protocols for client projects",
      "Implemented SEO best practices and responsive design, significantly improving client search rankings and user retention",
      "Created personal portfolio websites utilizing advanced CSS animations and JavaScript frameworks to showcase client work effectively"
    ],
    technologies: ["React", "Node JS", "Express JS", "MongoDB", "JavaScript", "CSS", "SEO"]
  },
  {
    title: "Graphic Designer & Motion Artist",
    company: "Freelance",
    period: "2021 – 2026",
    location: "Remote",
    logo: "/design_logo.png",
    achievements: [
      "Developed comprehensive UI/UX designs for web and mobile applications to enhance user engagement",
      "Produced high-quality motion graphics and video content for YouTube channels using Capcut and Alight Motion",
      "Managed multiple design projects simultaneously, delivering custom logos and marketing materials using Adobe Creative Suite",
      "Utilized Adobe After Effects for complex motion graphics projects and visual effects"
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "After Effects", "Capcut", "Alight Motion", "Canva"]
  },
  {
    title: "Siwes Internship",
    company: "Femtech PC Clinic",
    period: "2019",
    location: "Ilorin, Nigeria",
    logo: "/femtech_logo.png",
    achievements: [
      "Gained hands-on experience in computer hardware diagnostics and software troubleshooting",
      "Assisted in technical support and system maintenance for a wide range of client devices"
    ],
    technologies: ["Hardware Tech", "Troubleshooting", "System Maintenance"]
  },
  {
    title: "Fintech Internship",
    company: "Fipay",
    period: "Sep 2023 – Jun 2024",
    location: "Nigeria",
    logo: "/fipay_logo.png",
    achievements: [
      "Enhanced transaction processing logic, reducing API response latency by [20%] and ensuring sub-second execution for real-time payments.",
      "Developed and maintained [10+] reusable UI components for a fintech dashboard, ensuring a consistent user experience across web and mobile platforms [cite: 40]",
      "Collaborated with cross-functional teams to implement secure fintech solutions",
      "Revamped the payment checkout UI using React and Tailwind CSS, resulting in a [12%] increase in successful transaction completion rates."
    ],
    technologies: ["JavaScript", "Python", "Node JS", "React", "SQL", "MongoDB"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Professional</span> Journey
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Skilled Computer Science graduate specializing in full-stack development, 
          UI/UX design, and motion graphics.
        </p>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <Card className="p-6 card-hover bg-card border-border shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-border">
                          <Code className="text-primary w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary text-xs mt-1.5">●</span>
                            <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                        <Code className="w-3 h-3 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;