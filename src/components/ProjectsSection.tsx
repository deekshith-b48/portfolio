import { useState } from "react";
import { ExternalLink, Github, Play, Pause } from "lucide-react";
import { TechTag } from "./TechTag";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Project {
  title: string;
  description: string;
  status: "Active" | "Paused" | "Completed";
  technologies: string[];
  links?: { type: "github" | "demo" | "website"; url: string; label?: string }[];
  category: "personal" | "client";
}

const projects: Project[] = [
  {
    title: "TaskFlow",
    description: "Comprehensive task management web application built with MERN stack. Features JWT authentication, secure session management, and supports 1000+ concurrent users.",
    status: "Completed",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Postman"],
    category: "personal"
  },
  {
    title: "Weather Intelligence Dashboard",
    description: "Dynamic weather application with OpenWeatherMap API integration, geolocation services, and 7-day forecast functionality with responsive mobile-first design.",
    status: "Completed",
    technologies: ["React", "TailwindCSS", "OpenWeatherMap API", "Geolocation"],
    category: "personal"
  }
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("personal");

  const filteredProjects = projects.filter(project => project.category === activeTab);

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "Active":
        return <Play className="h-3 w-3" />;
      case "Paused":
        return <Pause className="h-3 w-3" />;
      case "Completed":
        return <div className="h-3 w-3 rounded-full bg-accent" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Paused":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Completed":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="container max-w-screen-2xl px-6 py-16">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work spanning from blockchain applications to full-stack projects, 
            both personal and professional.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="personal">Personal Projects</TabsTrigger>
            <TabsTrigger value="client">Client Work</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="project-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </div>

                    {project.links && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
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
                              {link.type === "github" && <Github className="h-3 w-3" />}
                              {link.type === "demo" && <ExternalLink className="h-3 w-3" />}
                              {link.type === "website" && <ExternalLink className="h-3 w-3" />}
                              {link.label || (link.type === "github" ? "Code" : "View")}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="client" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="project-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}