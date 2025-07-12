
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
    title: "Decentralized NFT Marketplace Platform",
    description: "A blockchain-based NFT marketplace built on Ethereum with smart contracts for minting, buying, and selling digital assets. Features wallet integration and decentralized storage.",
    status: "Completed",
    technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS", "MetaMask"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/Decentralized-NFT-Marketplace-Platform-", label: "Source Code" }
    ],
    category: "personal"
  },
  {
    title: "Sentiment Analysis",
    description: "Machine learning application for analyzing sentiment in text data using natural language processing techniques. Supports real-time sentiment classification.",
    status: "Completed",
    technologies: ["Python", "NLTK", "scikit-learn", "Flask", "Pandas", "NumPy"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/sentiment-analysis", label: "Source Code" }
    ],
    category: "personal"
  },
  {
    title: "ZeroHack",
    description: "Cybersecurity toolkit and penetration testing framework with automated vulnerability scanning and security assessment capabilities.",
    status: "Active",
    technologies: ["Python", "Kali Linux", "Nmap", "Metasploit", "Burp Suite", "Shell Scripting"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/ZeroHack", label: "Source Code" }
    ],
    category: "personal"
  },
  {
    title: "Real-time Product Operating System",
    description: "Enterprise-grade operating system for product management with real-time data processing, inventory tracking, and automated workflow management.",
    status: "Active",
    technologies: ["C++", "Linux", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/Real-time-Product-operating-system", label: "Source Code" }
    ],
    category: "personal"
  },
  {
    title: "Helmet Detection",
    description: "Computer vision application using deep learning to detect helmet usage in construction sites and industrial environments for safety compliance monitoring.",
    status: "Completed",
    technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "Keras", "NumPy"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/Helmet-Detection", label: "Source Code" }
    ],
    category: "personal"
  },
  {
    title: "SocialSpark",
    description: "Social media platform with real-time messaging, content sharing, and community features. Built with modern web technologies and scalable architecture.",
    status: "Active",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "JWT"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/SocialSpark", label: "Source Code" }
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
