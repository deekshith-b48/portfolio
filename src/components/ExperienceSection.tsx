import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { TechTag } from "./TechTag";
import { Button } from "./ui/button";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  status: "Current" | "Past";
  description: string;
  technologies: string[];
  links?: { label: string; url: string }[];
  icon?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Web Development Intern",
    company: "Internshala",
    period: "Dec 2023 - Mar 2024",
    status: "Past",
    description: "Developed 5+ responsive websites using modern web technologies, resulting in 20% increase in mobile user engagement. Built RESTful APIs and enhanced cross-device compatibility.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Git"],
    links: [
      { label: "Certificate", url: "https://trainings.internshala.com/s/v/3229789/ea9497ac" }
    ],
    icon: "💻"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container max-w-screen-2xl px-6 py-16">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a timeline of my professional journey, showcasing my roles and contributions in 
            blockchain and full-stack development.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="experience-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{experience.icon}</div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <p className="text-lg text-accent">{experience.company}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.status === "Current" 
                          ? "bg-accent/10 text-accent" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {experience.status}
                      </span>
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>

                  {experience.links && (
                    <div className="flex flex-wrap gap-3">
                      {experience.links.map((link) => (
                        <Button
                          key={link.label}
                          variant="outline"
                          size="sm"
                          asChild
                          className="h-8"
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1"
                          >
                            {link.label}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}