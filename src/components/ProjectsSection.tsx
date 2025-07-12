
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
    links: [
      { type: "github", url: "https://github.com/deekshithbgowda/taskflow", label: "Source Code" }
    ],
    category: "personal"
  },
  {
    title: "Weather Intelligence Dashboard",
    description: "Dynamic weather application with OpenWeatherMap API integration, geolocation services, and 7-day forecast functionality with responsive mobile-first design.",
    status: "Completed",
    technologies: ["React", "TailwindCSS", "OpenWeatherMap API", "Geolocation"],
    links: [
      { type: "github", url: "https://github.com/deekshithbgowda/weather-dashboard", label: "Source Code" },
      { type: "demo", url: "https://weather-intelligence-app.vercel.app", label: "Live Demo" }
    ],
    category: "personal"
  },
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio built with React, TypeScript, and Tailwind CSS. Features dark theme, responsive design, and smooth animations with optimized performance.",
    status: "Active",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    links: [
      { type: "github", url: "https://github.com/deekshithbgowda/portfolio-v2", label: "Source Code" },
      { type: "website", url: "https://deekshithbgowda.dev", label: "Live Site" }
    ],
    category: "personal"
  },
  {
    title: "E-Commerce API",
    description: "RESTful API for e-commerce platform with user authentication, product management, order processing, and payment integration. Built with Node.js and MongoDB.",
    status: "Completed",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe API"],
    links: [
      { type: "github", url: "https://github.com/deekshithbgowda/ecommerce-api", label: "Source Code" }
    ],
    category: "personal"
  },
  {
    title: "Real-Time Chat Application",
    description: "Full-stack chat application with Socket.io for real-time messaging, user authentication, group chats, and file sharing capabilities.",
    status: "Active",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "Material-UI"],
    links: [
      { type: "github", url: "https://github.com/deekshithbgowda/realtime-chat", label: "Source Code" },
      { type: "demo", url: "https://chat-app-realtime.herokuapp.com", label: "Live Demo" }
    ],
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
            A collection of my recent work spanning from full-stack applications to API development, 
            showcasing modern web technologies and best practices.
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
            <div className="text-center py-12">
              <p className="text-muted-foreground">Client projects will be added here soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
