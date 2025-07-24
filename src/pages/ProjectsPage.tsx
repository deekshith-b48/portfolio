import { useState, useEffect } from "react";
import { ExternalLink, Github, Star, GitFork, Clock, Sparkles, Loader2, Calendar, Code2, ChevronRight } from "lucide-react";
import { TechTag } from "@/components/TechTag";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { ResumeDownload } from "@/components/ResumeDownload";
import { githubService, GitHubRepo } from "@/lib/github";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: (GitHubRepo & { languages: string[] }) | null;
}

function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">📁</div>
            <div className="flex-1 space-y-2">
              <DialogTitle className="text-xl font-bold text-left leading-tight">
                {project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
              </DialogTitle>
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {githubService.getRepoStatus(project)}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    Updated {githubService.formatRepoDate(project.updated_at)}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {project.forks_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <Code2 className="w-3 h-3" />
                    {Math.round(project.size / 1024)}KB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Description */}
          {project.description && (
            <div>
              <h4 className="font-semibold text-accent mb-2">Description</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-accent mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.languages.map((language) => (
                <TechTag key={language} variant="secondary" className="text-xs">
                  {language}
                </TechTag>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
            <div>
              <div className="text-xs text-muted-foreground">Created</div>
              <div className="text-sm font-medium">{new Date(project.created_at).toLocaleDateString()}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Last Push</div>
              <div className="text-sm font-medium">{new Date(project.pushed_at).toLocaleDateString()}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Default Branch</div>
              <div className="text-sm font-medium">{project.default_branch}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Language</div>
              <div className="text-sm font-medium">{project.language || 'Multiple'}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              asChild
              className="flex-1 hover:bg-accent hover:text-background hover:border-accent"
            >
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            </Button>
            
            {project.homepage && (
              <Button
                variant="outline"
                asChild
                className="flex-1 hover:bg-accent hover:text-background hover:border-accent"
              >
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsPage() {
  const [githubRepos, setGithubRepos] = useState<(GitHubRepo & { languages: string[] })[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<(GitHubRepo & { languages: string[] }) | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [usingFallbackData, setUsingFallbackData] = useState(false);

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  const fetchGithubRepos = async () => {
    setLoading(true);
    setError(null);
    setUsingFallbackData(false);

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
        console.info('Using cached/fallback project data due to GitHub API connectivity issues');
      } else {
        console.info('Successfully loaded projects from GitHub API');
      }

      // Always clear error if we successfully get data (even if it's fallback)
      setError(null);
    } catch (err) {
      console.error("Error fetching GitHub repos:", err);
      
      // Check if github service has fallback data to display
      const isUsingFallback = githubService.isUsingFallbackData();
      
      if (isUsingFallback) {
        // If we have fallback data, don't show error to user
        setUsingFallbackData(true);
        setError(null);
        console.info('Displaying fallback project data due to API connectivity issues');
      } else {
        // Only show error if we truly can't get any data
        setError('Unable to load projects. Please try again later.');
        setUsingFallbackData(false);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleProjectClick = (project: GitHubRepo & { languages: string[] }) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const displayedRepos = showAllRepos ? githubRepos : githubRepos.slice(0, 6);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-6 md:space-y-12">
        
        {/* Resume Download Section */}
        <ResumeDownload />
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
            <Github className="w-3 h-3 md:w-4 md:h-4" />
            Live Repository
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of my fullstack projects, automatically sourced from GitHub.
          </p>
          {usingFallbackData && (
            <div className="flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs">
                <Clock className="w-3 h-3" />
                Showing cached projects
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={fetchGithubRepos}
                className="text-xs text-muted-foreground hover:text-accent"
              >
                Try refreshing from GitHub
              </Button>
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
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedRepos.map((repo, index) => (
                <Card
                  key={repo.id}
                  className="group cursor-pointer border-border/50 bg-card/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => handleProjectClick(repo)}
                >
                  <CardContent className="p-4 md:p-6 space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-2 flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold group-hover:text-accent transition-colors duration-300 line-clamp-1">
                          {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className={`${githubService.getRepoStatus(repo) === 'Active' 
                            ? "bg-green-500/20 text-green-400 border-green-500/30" 
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          } text-xs`}>
                            {githubService.getRepoStatus(repo)}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {githubService.formatRepoDate(repo.updated_at)}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>

                    {/* Description */}
                    {repo.description && (
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {repo.description}
                      </p>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
                    <div className="space-y-2">
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
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 text-xs">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 hover:bg-accent hover:text-background hover:border-accent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      
                      {repo.homepage && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-accent hover:text-background hover:border-accent"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Show More/Less Button */}
            {githubRepos.length > 6 && (
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAllRepos(!showAllRepos)}
                  className="border-accent/20 hover:border-accent/50 hover:bg-accent/10"
                >
                  {showAllRepos ? "Show Less" : `View All ${githubRepos.length} Projects`}
                </Button>
              </div>
            )}

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">{githubRepos.length}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                    {githubRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Stars</div>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                    {githubRepos.reduce((sum, repo) => sum + repo.forks_count, 0)}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">Forks</div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}
