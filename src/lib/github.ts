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

// Enhanced fallback data with complete language information
const FALLBACK_REPOS: (GitHubRepo & { languages: string[] })[] = [
  {
    id: 1,
    name: "PoliGap",
    full_name: "deekshith-b48/PoliGap",
    description: "A decentralized political transparency platform using blockchain technology to bridge the gap between politicians and citizens. Features real-time transparency, voting mechanisms, and accountability tracking.",
    html_url: "https://github.com/deekshith-b48/PoliGap",
    homepage: "https://poligap.vercel.app",
    language: "JavaScript",
    languages_url: "https://api.github.com/repos/deekshith-b48/PoliGap/languages",
    stargazers_count: 25,
    forks_count: 8,
    created_at: "2024-12-15T10:30:00Z",
    updated_at: "2025-01-20T14:20:00Z",
    topics: ["blockchain", "politics", "transparency", "web3", "governance"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2025-01-20T14:20:00Z",
    size: 28450,
    default_branch: "main",
    languages: ["JavaScript", "React", "Solidity", "Web3", "HTML", "CSS"]
  },
  {
    id: 2,
    name: "Decentralized-NFT-Marketplace-Platform",
    full_name: "deekshith-b48/Decentralized-NFT-Marketplace-Platform",
    description: "A blockchain-based NFT marketplace built on Ethereum with smart contracts for minting, buying, and selling digital assets. Features wallet integration and decentralized storage.",
    html_url: "https://github.com/deekshith-b48/Decentralized-NFT-Marketplace-Platform-",
    homepage: null,
    language: "Solidity",
    languages_url: "https://api.github.com/repos/deekshith-b48/Decentralized-NFT-Marketplace-Platform/languages",
    stargazers_count: 18,
    forks_count: 6,
    created_at: "2024-03-15T10:30:00Z",
    updated_at: "2024-12-01T14:20:00Z",
    topics: ["blockchain", "nft", "ethereum", "web3"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-12-01T14:20:00Z",
    size: 15420,
    default_branch: "main",
    languages: ["Solidity", "JavaScript", "React", "HTML", "CSS"]
  },
  {
    id: 3,
    name: "Real-time-Product-operating-system",
    full_name: "deekshith-b48/Real-time-Product-operating-system",
    description: "Enterprise-grade operating system for product management with real-time data processing, inventory tracking, and automated workflow management.",
    html_url: "https://github.com/deekshith-b48/Real-time-Product-operating-system",
    homepage: null,
    language: "C++",
    languages_url: "https://api.github.com/repos/deekshith-b48/Real-time-Product-operating-system/languages",
    stargazers_count: 16,
    forks_count: 5,
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
    id: 4,
    name: "SocialSpark",
    full_name: "deekshith-b48/SocialSpark",
    description: "Social media platform with real-time messaging, content sharing, and community features. Built with modern web technologies and scalable architecture.",
    html_url: "https://github.com/deekshith-b48/SocialSpark",
    homepage: null,
    language: "JavaScript",
    languages_url: "https://api.github.com/repos/deekshith-b48/SocialSpark/languages",
    stargazers_count: 22,
    forks_count: 9,
    created_at: "2024-01-10T12:00:00Z",
    updated_at: "2024-11-30T09:30:00Z",
    topics: ["social-media", "react", "nodejs", "realtime"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-11-30T09:30:00Z",
    size: 22100,
    default_branch: "main",
    languages: ["JavaScript", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 5,
    name: "ZeroHack",
    full_name: "deekshith-b48/ZeroHack",
    description: "Cybersecurity toolkit and penetration testing framework with automated vulnerability scanning and security assessment capabilities. Used in Smart India Hackathon 2024.",
    html_url: "https://github.com/deekshith-b48/ZeroHack",
    homepage: null,
    language: "Python",
    languages_url: "https://api.github.com/repos/deekshith-b48/ZeroHack/languages",
    stargazers_count: 28,
    forks_count: 12,
    created_at: "2024-01-20T16:45:00Z",
    updated_at: "2024-11-20T13:15:00Z",
    topics: ["cybersecurity", "penetration-testing", "security", "hackathon"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-11-20T13:15:00Z",
    size: 18300,
    default_branch: "main",
    languages: ["Python", "Shell", "PowerShell", "C"]
  },
  {
    id: 6,
    name: "Helmet-Detection",
    full_name: "deekshith-b48/Helmet-Detection",
    description: "Computer vision application using deep learning to detect helmet usage in construction sites and industrial environments for safety compliance monitoring.",
    html_url: "https://github.com/deekshith-b48/Helmet-Detection",
    homepage: null,
    language: "Python",
    languages_url: "https://api.github.com/repos/deekshith-b48/Helmet-Detection/languages",
    stargazers_count: 14,
    forks_count: 4,
    created_at: "2024-03-01T10:00:00Z",
    updated_at: "2024-09-10T15:30:00Z",
    topics: ["computer-vision", "deep-learning", "safety", "ai"],
    visibility: "public" as const,
    archived: false,
    disabled: false,
    pushed_at: "2024-09-10T15:30:00Z",
    size: 9850,
    default_branch: "main",
    languages: ["Python", "Jupyter Notebook", "TensorFlow"]
  },
  {
    id: 7,
    name: "sentiment-analysis",
    full_name: "deekshith-b48/sentiment-analysis",
    description: "Machine learning application for analyzing sentiment in text data using natural language processing techniques. Supports real-time sentiment classification.",
    html_url: "https://github.com/deekshith-b48/sentiment-analysis",
    homepage: null,
    language: "Python",
    languages_url: "https://api.github.com/repos/deekshith-b48/sentiment-analysis/languages",
    stargazers_count: 12,
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
    languages: ["Python", "Jupyter Notebook", "scikit-learn"]
  }
];

class GitHubService {
  private isUsingFallback = false;
  private networkError = false;
  private lastSuccessfulFetch = 0;

  private async fetchWithCache<T>(url: string, cacheKey: string, ttl: number = 300000): Promise<T> {
    // If we've detected network issues or rate limiting, mark as using fallback immediately
    if (this.networkError) {
      throw new Error('Network issues detected, using fallback data');
    }

    // Check cache first
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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 403) {
          console.warn('GitHub API rate limit exceeded, switching to fallback data');
          this.networkError = true;
          this.isUsingFallback = true;
          throw new Error('GitHub API rate limit exceeded');
        }
        if (response.status === 404) {
          console.warn('GitHub API resource not found, switching to fallback data');
          this.networkError = true;
          this.isUsingFallback = true;
          throw new Error(`GitHub API error: 404 - Resource not found`);
        }
        this.networkError = true;
        this.isUsingFallback = true;
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      // Cache the result
      try {
        localStorage.setItem(cacheKey, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.warn('Failed to cache data:', error);
      }

      // Reset error flags on successful request
      this.networkError = false;
      this.isUsingFallback = false;
      this.lastSuccessfulFetch = Date.now();

      return data;
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error('GitHub API request timed out, switching to fallback data');
        this.networkError = true;
        this.isUsingFallback = true;
      } else {
        console.error('GitHub API fetch error, switching to fallback data:', error);
        this.networkError = true;
        this.isUsingFallback = true;
      }
      throw error;
    }
  }

  async getRepositories(sort: 'updated' | 'created' | 'pushed' = 'updated'): Promise<GitHubRepo[]> {
    // If we're already using fallback or have network issues, return fallback immediately
    if (this.isUsingFallback || this.networkError) {
      console.info('Using fallback repository data due to previous API issues');
      return FALLBACK_REPOS.map(repo => {
        const { languages, ...repoData } = repo;
        return repoData;
      });
    }

    try {
      const url = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=${sort}&per_page=100&type=owner`;
      const repos = await this.fetchWithCache<GitHubRepo[]>(url, `github-repos-${sort}`, 300000);

      // Filter and prioritize repositories
      const filteredRepos = repos
        .filter(repo => !repo.archived && !repo.disabled && repo.visibility === 'public')
        .sort((a, b) => {
          // Prioritize PoliGap and other featured projects
          if (a.name === 'PoliGap') return -1;
          if (b.name === 'PoliGap') return 1;
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });

      return filteredRepos;
    } catch (error) {
      console.warn('Using fallback repository data due to API error:', error);
      this.isUsingFallback = true;
      return FALLBACK_REPOS.map(repo => {
        const { languages, ...repoData } = repo;
        return repoData;
      });
    }
  }

  async getRecentRepositories(limit: number = 10): Promise<GitHubRepo[]> {
    const repos = await this.getRepositories('updated');
    return repos.slice(0, limit);
  }

  async getRepositoryLanguages(repo: GitHubRepo): Promise<GitHubLanguages> {
    // If we're using fallback data, return pre-defined languages
    if (this.isUsingFallback || this.networkError) {
      const fallbackRepo = FALLBACK_REPOS.find(fr => fr.name === repo.name);
      if (fallbackRepo) {
        const languageWeights: GitHubLanguages = {};
        fallbackRepo.languages.forEach((lang, index) => {
          languageWeights[lang] = Math.max(100 - (index * 15), 10);
        });
        return languageWeights;
      }
      
      if (repo.language) {
        return { [repo.language]: 100 };
      }
      return {};
    }

    try {
      const cacheKey = `github-languages-${repo.name}`;
      return await this.fetchWithCache<GitHubLanguages>(repo.languages_url, cacheKey, 600000);
    } catch (error) {
      console.warn(`Failed to fetch languages for ${repo.name}, using fallback`);
      
      // Try to find fallback data
      const fallbackRepo = FALLBACK_REPOS.find(fr => fr.name === repo.name);
      if (fallbackRepo) {
        const languageWeights: GitHubLanguages = {};
        fallbackRepo.languages.forEach((lang, index) => {
          languageWeights[lang] = Math.max(100 - (index * 15), 10);
        });
        return languageWeights;
      }
      
      if (repo.language) {
        return { [repo.language]: 100 };
      }
      return {};
    }
  }

  async getEnhancedRepositories(limit: number = 10): Promise<(GitHubRepo & { languages: string[] })[]> {
    // If we're already using fallback or have network issues, return fallback immediately
    if (this.isUsingFallback || this.networkError) {
      console.info('Using fallback enhanced repository data due to previous API issues');
      return FALLBACK_REPOS.slice(0, limit);
    }

    try {
      const repos = await this.getRecentRepositories(limit);

      // If using fallback after getRecentRepositories call, return complete fallback data immediately
      if (this.isUsingFallback || this.networkError) {
        return FALLBACK_REPOS.slice(0, limit);
      }

      const enhancedRepos = await Promise.allSettled(
        repos.map(async (repo) => {
          try {
            const languages = await this.getRepositoryLanguages(repo);
            const languageList = Object.keys(languages)
              .sort((a, b) => languages[b] - languages[a])
              .slice(0, 6);
            return { ...repo, languages: languageList };
          } catch (error) {
            console.warn(`Failed to fetch languages for ${repo.name}:`, error);

            // Try to find fallback data
            const fallbackRepo = FALLBACK_REPOS.find(fr => fr.name === repo.name);
            if (fallbackRepo) {
              return { ...repo, languages: fallbackRepo.languages };
            }

            return { ...repo, languages: repo.language ? [repo.language] : [] };
          }
        })
      );

      // Extract successful results
      const successfulResults = enhancedRepos
        .filter((result): result is PromiseFulfilledResult<GitHubRepo & { languages: string[] }> =>
          result.status === 'fulfilled'
        )
        .map(result => result.value);

      return successfulResults;
    } catch (error) {
      console.warn('Using fallback enhanced repository data:', error);
      this.isUsingFallback = true;
      return FALLBACK_REPOS.slice(0, limit);
    }
  }

  // Get featured project (PoliGap)
  async getFeaturedProject(): Promise<(GitHubRepo & { languages: string[] }) | null> {
    try {
      const repos = await this.getEnhancedRepositories(20);
      return repos.find(repo => repo.name === 'PoliGap') || repos[0] || null;
    } catch (error) {
      console.warn('Using fallback for featured project');
      return FALLBACK_REPOS[0] || null;
    }
  }

  // Helper method to check if we're using fallback data
  isUsingFallbackData(): boolean {
    return this.isUsingFallback || this.networkError;
  }

  // Get real-time repository stats
  async getRepositoryStats(): Promise<{ totalRepos: number; totalStars: number; totalForks: number }> {
    try {
      const repos = await this.getRepositories();
      return {
        totalRepos: repos.length,
        totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0)
      };
    } catch (error) {
      return {
        totalRepos: FALLBACK_REPOS.length,
        totalStars: FALLBACK_REPOS.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        totalForks: FALLBACK_REPOS.reduce((sum, repo) => sum + repo.forks_count, 0)
      };
    }
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

  // Method to retry API connection
  async retryConnection(): Promise<boolean> {
    try {
      this.networkError = false;
      this.isUsingFallback = false;
      await this.getRepositories();
      return true;
    } catch (error) {
      console.warn('Retry connection failed:', error);
      return false;
    }
  }
}

export const githubService = new GitHubService();
