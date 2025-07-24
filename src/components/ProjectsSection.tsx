import { useState, useEffect } from "react";
import { ExternalLink, Github, Star, GitFork, Clock, Sparkles, Loader2 } from "lucide-react";
import { TechTag } from "./TechTag";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { githubService, GitHubRepo } from "@/lib/github";

interface StaticProject {
  title: string;
  description: string;
  status: "Active" | "Paused" | "Completed";
  technologies: string[];
  links?: { type: "github" | "demo" | "website"; url: string; label?: string }[];
  category: "featured";
  featured: boolean;
}

const featuredProjects: StaticProject[] = [
  {
    title: "Decentralized NFT Marketplace Platform",
    description: "A blockchain-based NFT marketplace built on Ethereum with smart contracts for minting, buying, and selling digital assets. Features wallet integration and decentralized storage.",
    status: "Completed",
    technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS", "MetaMask"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/Decentralized-NFT-Marketplace-Platform-", label: "Source Code" }
    ],
    category: "featured",
    featured: true
  },
  {
    title: "Real-time Product Operating System",
    description: "Enterprise-grade operating system for product management with real-time data processing, inventory tracking, and automated workflow management.",
    status: "Active",
    technologies: ["C++", "Linux", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/Real-time-Product-operating-system", label: "Source Code" }
    ],
    category: "featured",
    featured: true
  },
  {
    title: "SocialSpark",
    description: "Social media platform with real-time messaging, content sharing, and community features. Built with modern web technologies and scalable architecture.",
    status: "Active",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "JWT"],
    links: [
      { type: "github", url: "https://github.com/deekshith-b48/SocialSpark", label: "Source Code" }
    ],
    category: "featured",
    featured: true
  }
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("featured");
  const [githubRepos, setGithubRepos] = useState<(GitHubRepo & { languages: string[] })[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab === "github") {
      fetchGithubRepos();
    }
  }, [activeTab]);

  const fetchGithubRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const repos = await githubService.getEnhancedRepositories(12);
      setGithubRepos(repos);
    } catch (err) {
      setError("Failed to fetch GitHub repositories. Please try again later.");
      console.error("Error fetching GitHub repos:", err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Paused":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Inactive":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-accent/20 text-accent border-accent/30";
    }
  };

  const formatDate = (dateString: string) => {
    return githubService.formatRepoDate(dateString);
  };

  return (
    <section id="projects" className="container max-w-screen-2xl px-6 py-24 relative">
      {/* Background decoration */}\n      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 blur-3xl" />\n      \n      <div className="space-y-16 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            My Work
          </div>\n          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>\n          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, from full-stack applications to open-source contributions. 
            Each project represents a journey of learning and innovation.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="featured" className="data-[state=active]:bg-accent data-[state=active]:text-background">
              Featured Projects
            </TabsTrigger>
            <TabsTrigger value="github" className="data-[state=active]:bg-accent data-[state=active]:text-background">
              GitHub Repos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className={`${getStatusColor(project.status)} w-fit`}>
                          {project.status}
                        </Badge>
                      </div>
                      {project.featured && (
                        <Sparkles className="w-6 h-6 text-accent/60 group-hover:text-accent transition-colors duration-300" />
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed line-clamp-4 group-hover:text-foreground/80 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <TechTag key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </TechTag>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    {project.links && (
                      <div className="flex gap-3 pt-2">
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            asChild
                            className="group/btn hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              {link.type === "github" && <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />}
                              {link.type === "demo" && <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />}
                              {link.type === "website" && <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />}
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

          <TabsContent value="github" className="mt-12">
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Fetching repositories from GitHub...</span>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-red-400 mb-4">{error}</p>
                <Button onClick={fetchGithubRepos} variant="outline">
                  Try Again
                </Button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {githubRepos.map((repo, index) => (
                  <div
                    key={repo.id}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-2 flex-1">
                          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-300 line-clamp-1">
                            {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                          </h3>
                          <Badge variant="outline" className={`${getStatusColor(githubService.getRepoStatus(repo))} w-fit text-xs`}>
                            {githubService.getRepoStatus(repo)}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      {repo.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                          {repo.description}
                        </p>
                      )}

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {repo.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {repo.forks_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {formatDate(repo.updated_at)}
                        </div>
                      </div>

                      {/* Languages */}
                      {repo.languages.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.languages.slice(0, 3).map((language) => (
                            <TechTag key={language} variant="secondary" className="text-xs">
                              {language}
                            </TechTag>
                          ))}
                          {repo.languages.length > 3 && (
                            <span className="text-xs text-muted-foreground px-2 py-1">
                              +{repo.languages.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
                        >
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        {repo.homepage && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
                          >
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {githubRepos.length === 0 && !loading && !error && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No repositories found.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Call to action */}
        <div className="text-center space-y-6 pt-8 animate-fade-in">
          <p className="text-lg text-muted-foreground">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group border-accent/20 hover:border-accent/50 hover:bg-accent/10 px-8 py-3"
          >
            <a
              href="https://github.com/deekshith-b48"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View All Projects
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
