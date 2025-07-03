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
    title: "Full-Stack Blockchain Engineer",
    company: "Wildcard",
    period: "2024 - Present",
    status: "Current",
    description: "Building smart wallet infrastructure and blockchain applications",
    technologies: ["Rust", "Solana", "EVM", "Next.js"],
    icon: "💳"
  },
  {
    title: "Full-Stack Engineer",
    company: "Swifey AI",
    period: "2024",
    status: "Past",
    description: "Full-stack development across web, mobile, and blockchain",
    technologies: ["FastAPI", "Node.js", "React", "TypeScript", "Flutter", "Solana", "Rust"],
    links: [
      { label: "Contracts", url: "https://github.com/cb7chaitanya/swifey-contracts" },
      { label: "App Store", url: "https://apps.apple.com/us/app/swifey-dating/id6737560814" },
      { label: "Twitter", url: "https://x.com/SwifeyAI" }
    ],
    icon: "💕"
  },
  {
    title: "Founding Engineer",
    company: "Veritas AO",
    period: "2024",
    status: "Past",
    description: "Building fair launch platform on Arweave's AO protocol",
    technologies: ["AO", "TypeScript", "React", "Node.js"],
    links: [
      { label: "Website", url: "https://veritas-ao.dev/" },
      { label: "Twitter", url: "https://x.com/Veritas_ao" }
    ],
    icon: "⚖️"
  },
  {
    title: "Full-Stack Engineering Intern",
    company: "Grafieks",
    period: "2023",
    status: "Past",
    description: "Full-stack development internship",
    technologies: ["Go", "Node.js", "React", "TypeScript"],
    links: [
      { label: "Website", url: "https://grafieks.com/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/grafieks" }
    ],
    icon: "📊"
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