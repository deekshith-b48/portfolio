import { useState, useEffect } from "react";
import { ExternalLink, Github, Star, GitFork, Clock, Sparkles, Loader2, ChevronDown, ChevronUp, Calendar, Code2 } from "lucide-react";
import { TechTag } from "./TechTag";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { githubService, GitHubRepo } from "@/lib/github";

export function ProjectsSection() {
  const [githubRepos, setGithubRepos] = useState<(GitHubRepo & { languages: string[] })[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedRepo, setExpandedRepo] = useState<number | null>(null);
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [usingFallbackData, setUsingFallbackData] = useState(false);

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  const fetchGithubRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const repos = await githubService.getEnhancedRepositories(25);

      // Enhanced filtering for major fullstack projects with priority for featured projects
      const filteredRepos = repos.filter(repo => {
        const hasFullStackLanguages = repo.languages.some(lang =>
          ['JavaScript', 'TypeScript', 'React', 'Node', 'Python', 'HTML', 'CSS', 'Solidity', 'C++', 'Web3'].includes(lang)
        );
        const isSignificantSize = repo.size > 100;
        const isFeaturedProject = ['PoliGap', 'SocialSpark', 'ZeroHack', 'Decentralized-NFT-Marketplace-Platform'].includes(repo.name);

        return hasFullStackLanguages || isSignificantSize || isFeaturedProject;
      }).sort((a, b) => {
        // Prioritize PoliGap and other featured projects
        if (a.name === 'PoliGap') return -1;
        if (b.name === 'PoliGap') return 1;
        if (a.name === 'SocialSpark') return -1;
        if (b.name === 'SocialSpark') return 1;
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });

      setGithubRepos(filteredRepos);

      // Check if we're using fallback data
      const isUsingFallback = githubService.isUsingFallbackData();
      setUsingFallbackData(isUsingFallback);

      if (isUsingFallback) {
        console.info('Using cached/fallback project data due to GitHub API limits');
      }
    } catch (err) {
      console.error("Error fetching GitHub repos:", err);
      // Don't show error to user, fallback data should handle this
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Inactive":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-accent/20 text-accent border-accent/30";
    }
  };

  const formatDate = (dateString: string) => {
    return githubService.formatRepoDate(dateString);
  };

  const toggleRepoDetails = (repoId: number) => {
    setExpandedRepo(expandedRepo === repoId ? null : repoId);
  };

  const displayedRepos = showAllRepos ? githubRepos : githubRepos.slice(0, 6);

  return (
    <section id="projects" className="container max-w-screen-2xl px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 blur-3xl" />
      
      <div className="space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Github className="w-4 h-4" />
            Live Repository
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of my fullstack projects, automatically sourced from GitHub.
            Each project represents real-world problem-solving with modern technologies.
          </p>
          {usingFallbackData && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs">
              <Clock className="w-3 h-3" />
              Showing cached projects
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Fetching latest projects from GitHub...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <p className="text-red-400 mb-4">{error}</p>
            <Button onClick={fetchGithubRepos} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {displayedRepos.map((repo, index) => (
                <div
                  key={repo.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 backdrop-blur-sm transition-all duration-700 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 line-clamp-1">
                          {repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={`${getStatusColor(githubService.getRepoStatus(repo))} text-xs`}>
                            {githubService.getRepoStatus(repo)}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {formatDate(repo.updated_at)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Description */}
                    {repo.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {repo.description}
                      </p>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <Code2 className="w-3 h-3" />
                        {Math.round(repo.size / 1024)}KB
                      </div>
                    </div>

                    {/* Languages Preview */}
                    <div className="flex flex-wrap gap-1">
                      {repo.languages.slice(0, expandedRepo === repo.id ? repo.languages.length : 3).map((language) => (
                        <TechTag key={language} variant="secondary" className="text-xs">
                          {language}
                        </TechTag>
                      ))}
                      {!expandedRepo === repo.id && repo.languages.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{repo.languages.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Expanded Details */}
                    {expandedRepo === repo.id && (
                      <div className="space-y-3 animate-fade-in border-t border-border/50 pt-4">
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-muted-foreground">Created:</span>
                            <div className="font-medium">{new Date(repo.created_at).toLocaleDateString()}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Last Push:</span>
                            <div className="font-medium">{new Date(repo.pushed_at).toLocaleDateString()}</div>
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-xs text-muted-foreground">Default Branch:</span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {repo.default_branch}
                          </Badge>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
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
                          <Github className="h-3 w-3" />
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
                            className="inline-flex items-center gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            Live
                          </a>
                        </Button>
                      )}
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleRepoDetails(repo.id)}
                        className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
                      >
                        {expandedRepo === repo.id ? (
                          <ChevronUp className="h-3 w-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Button */}
            {githubRepos.length > 6 && (
              <div className="text-center space-y-6 pt-8 animate-fade-in">
                <Button
                  variant="outline"
                  onClick={() => setShowAllRepos(!showAllRepos)}
                  className="group border-accent/20 hover:border-accent/50 hover:bg-accent/10 px-8 py-3"
                >
                  {showAllRepos ? "Show Less Projects" : `View All ${githubRepos.length} Projects`}
                  {showAllRepos ? (
                    <ChevronUp className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </Button>
              </div>
            )}

            {/* Call to action */}
            <div className="text-center space-y-6 pt-8 animate-fade-in">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-2">Explore More on GitHub</h3>
                <p className="text-muted-foreground mb-4">
                  Visit my GitHub profile to see all repositories, contributions, and collaborative projects.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="bg-accent hover:bg-accent/90 text-background px-8 py-3"
                >
                  <a
                    href="https://github.com/deekshith-b48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View GitHub Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && !error && githubRepos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No fullstack projects found in repositories.</p>
            <Button onClick={fetchGithubRepos} variant="outline" className="mt-4">
              Refresh Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
