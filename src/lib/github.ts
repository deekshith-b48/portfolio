export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  languages_url: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  visibility: 'public' | 'private';
  archived: boolean;
  disabled: boolean;
  pushed_at: string;
  size: number;
  default_branch: string;
}

export interface GitHubLanguages {
  [language: string]: number;
}

const GITHUB_USERNAME = 'deekshith-b48';
const GITHUB_API_BASE = 'https://api.github.com';

// Fallback data when API fails (static project data)
const FALLBACK_REPOS: (GitHubRepo & { languages: string[] })[] = [
  {
    id: 1,
    name: "Decentralized-NFT-Marketplace-Platform",
    full_name: "deekshith-b48/Decentralized-NFT-Marketplace-Platform",
    description: "A blockchain-based NFT marketplace built on Ethereum with smart contracts for minting, buying, and selling digital assets. Features wallet integration and decentralized storage.",
    html_url: "https://github.com/deekshith-b48/Decentralized-NFT-Marketplace-Platform-",
    homepage: null,
    language: "Solidity",
    languages_url: "",
    stargazers_count: 8,
    forks_count: 2,
    created_at: "2024-03-15T10:30:00Z",
    updated_at: "2024-12-01T14:20:00Z",
    topics: ["blockchain", "nft", "ethereum", "web3"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-12-01T14:20:00Z",
    size: 15420,
    default_branch: "main",
    languages: ["Solidity", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 2,
    name: "Real-time-Product-operating-system",
    full_name: "deekshith-b48/Real-time-Product-operating-system",
    description: "Enterprise-grade operating system for product management with real-time data processing, inventory tracking, and automated workflow management.",
    html_url: "https://github.com/deekshith-b48/Real-time-Product-operating-system",
    homepage: null,
    language: "C++",
    languages_url: "",
    stargazers_count: 12,
    forks_count: 4,
    created_at: "2024-02-20T08:15:00Z",
    updated_at: "2024-11-25T16:45:00Z",
    topics: ["os", "realtime", "product-management"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-11-25T16:45:00Z",
    size: 28750,
    default_branch: "main",
    languages: ["C++", "C", "Shell", "Makefile"]
  },
  {
    id: 3,
    name: "SocialSpark",
    full_name: "deekshith-b48/SocialSpark",
    description: "Social media platform with real-time messaging, content sharing, and community features. Built with modern web technologies and scalable architecture.",
    html_url: "https://github.com/deekshith-b48/SocialSpark",
    homepage: null,
    language: "JavaScript",
    languages_url: "",
    stargazers_count: 15,
    forks_count: 6,
    created_at: "2024-01-10T12:00:00Z",
    updated_at: "2024-11-30T09:30:00Z",
    topics: ["social-media", "react", "nodejs", "realtime"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-11-30T09:30:00Z",
    size: 22100,
    default_branch: "main",
    languages: ["JavaScript", "React", "Node.js", "CSS"]
  },
  {
    id: 4,
    name: "sentiment-analysis",
    full_name: "deekshith-b48/sentiment-analysis",
    description: "Machine learning application for analyzing sentiment in text data using natural language processing techniques. Supports real-time sentiment classification.",
    html_url: "https://github.com/deekshith-b48/sentiment-analysis",
    homepage: null,
    language: "Python",
    languages_url: "",
    stargazers_count: 9,
    forks_count: 3,
    created_at: "2024-04-05T14:30:00Z",
    updated_at: "2024-10-15T11:20:00Z",
    topics: ["machine-learning", "nlp", "sentiment-analysis"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-10-15T11:20:00Z",
    size: 8650,
    default_branch: "main",
    languages: ["Python", "Jupyter Notebook", "HTML"]
  },
  {
    id: 5,
    name: "ZeroHack",
    full_name: "deekshith-b48/ZeroHack",
    description: "Cybersecurity toolkit and penetration testing framework with automated vulnerability scanning and security assessment capabilities.",
    html_url: "https://github.com/deekshith-b48/ZeroHack",
    homepage: null,
    language: "Python",
    languages_url: "",
    stargazers_count: 18,
    forks_count: 8,
    created_at: "2024-01-20T16:45:00Z",
    updated_at: "2024-11-20T13:15:00Z",
    topics: ["cybersecurity", "penetration-testing", "security"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-11-20T13:15:00Z",
    size: 12300,
    default_branch: "main",
    languages: ["Python", "Shell", "PowerShell"]
  },
  {
    id: 6,
    name: "Helmet-Detection",
    full_name: "deekshith-b48/Helmet-Detection",
    description: "Computer vision application using deep learning to detect helmet usage in construction sites and industrial environments for safety compliance monitoring.",
    html_url: "https://github.com/deekshith-b48/Helmet-Detection",
    homepage: null,
    language: "Python",
    languages_url: "",
    stargazers_count: 7,
    forks_count: 2,
    created_at: "2024-03-01T10:00:00Z",
    updated_at: "2024-09-10T15:30:00Z",
    topics: ["computer-vision", "deep-learning", "safety"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-09-10T15:30:00Z",
    size: 9850,
    default_branch: "main",
    languages: ["Python", "Jupyter Notebook"]
  }
];

class GitHubService {
  private rateLimitExceeded = false;
  private lastRateLimitReset = 0;

  private async fetchWithCache<T>(url: string, cacheKey: string, ttl: number = 600000): Promise<T> {
    // Check if we're currently rate limited
    if (this.rateLimitExceeded && Date.now() - this.lastRateLimitReset < 3600000) {
      throw new Error('Rate limit exceeded, using fallback data');
    }

    // Check cache first with longer TTL
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < ttl) {
          return data;
        }
      } catch (error) {
        console.warn('Cache parse error, clearing cache');
        localStorage.removeItem(cacheKey);
      }
    }

    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        }
      });

      if (!response.ok) {
        if (response.status === 403) {
          this.rateLimitExceeded = true;
          this.lastRateLimitReset = Date.now();
          
          // Check if we have rate limit headers
          const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
          const rateLimitReset = response.headers.get('X-RateLimit-Reset');
          
          console.warn('GitHub API rate limit exceeded:', {
            remaining: rateLimitRemaining,
            reset: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000) : 'Unknown'
          });
          
          throw new Error('GitHub API rate limit exceeded');
        }
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Cache the result with error handling
      try {
        localStorage.setItem(cacheKey, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.warn('Failed to cache data:', error);
      }
      
      // Reset rate limit flag on successful request
      this.rateLimitExceeded = false;
      
      return data;
    } catch (error) {
      console.error('GitHub API fetch error:', error);
      throw error;
    }
  }

  async getRepositories(sort: 'updated' | 'created' | 'pushed' = 'updated'): Promise<GitHubRepo[]> {
    try {
      const url = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=${sort}&per_page=50&type=owner`;
      const repos = await this.fetchWithCache<GitHubRepo[]>(url, `github-repos-${sort}`, 600000);
      
      // Filter out archived and disabled repos, and sort by last updated
      return repos
        .filter(repo => !repo.archived && !repo.disabled && repo.visibility === 'public')
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    } catch (error) {
      console.warn('Using fallback repository data due to API error:', error);
      return FALLBACK_REPOS.map(repo => {
        const { languages, ...repoData } = repo;
        return repoData;
      });
    }
  }

  async getRecentRepositories(limit: number = 6): Promise<GitHubRepo[]> {
    const repos = await this.getRepositories('updated');
    return repos.slice(0, limit);
  }

  async getRepositoryLanguages(repo: GitHubRepo): Promise<GitHubLanguages> {
    try {
      const cacheKey = `github-languages-${repo.name}`;
      return await this.fetchWithCache<GitHubLanguages>(repo.languages_url, cacheKey, 1200000);
    } catch (error) {
      console.warn(`Failed to fetch languages for ${repo.name}, using fallback`);
      // Return fallback language data
      if (repo.language) {
        return { [repo.language]: 100 };
      }
      return {};
    }
  }

  async getEnhancedRepositories(limit: number = 6): Promise<(GitHubRepo & { languages: string[] })[]> {
    try {
      const repos = await this.getRecentRepositories(limit);
      
      const enhancedRepos = await Promise.all(
        repos.map(async (repo) => {
          try {
            const languages = await this.getRepositoryLanguages(repo);
            const languageList = Object.keys(languages).slice(0, 5);
            return { ...repo, languages: languageList };
          } catch (error) {
            console.warn(`Failed to fetch languages for ${repo.name}:`, error);
            return { ...repo, languages: repo.language ? [repo.language] : [] };
          }
        })
      );

      return enhancedRepos;
    } catch (error) {
      console.warn('Using fallback enhanced repository data:', error);
      return FALLBACK_REPOS.slice(0, limit);
    }
  }

  // Helper method to check if we're using fallback data
  isUsingFallbackData(): boolean {
    return this.rateLimitExceeded;
  }

  formatRepoDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return '1 day ago';
    if (diffDays <= 30) return `${diffDays} days ago`;
    if (diffDays <= 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }

  getRepoStatus(repo: GitHubRepo): 'Active' | 'Inactive' | 'Archived' {
    if (repo.archived) return 'Archived';
    
    const lastUpdate = new Date(repo.pushed_at || repo.updated_at);
    const now = new Date();
    const daysSinceUpdate = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
    
    return daysSinceUpdate <= 90 ? 'Active' : 'Inactive';
  }
}

export const githubService = new GitHubService();
