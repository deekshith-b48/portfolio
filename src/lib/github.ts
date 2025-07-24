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

class GitHubService {
  private async fetchWithCache<T>(url: string, cacheKey: string, ttl: number = 300000): Promise<T> {
    // Check cache first
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < ttl) {
        return data;
      }
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Cache the result
      sessionStorage.setItem(cacheKey, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
      
      return data;
    } catch (error) {
      console.error('GitHub API fetch error:', error);
      throw error;
    }
  }

  async getRepositories(sort: 'updated' | 'created' | 'pushed' = 'updated'): Promise<GitHubRepo[]> {
    const url = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=${sort}&per_page=100&type=owner`;
    const repos = await this.fetchWithCache<GitHubRepo[]>(url, `github-repos-${sort}`, 300000);
    
    // Filter out archived and disabled repos, and sort by last updated
    return repos
      .filter(repo => !repo.archived && !repo.disabled && repo.visibility === 'public')
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  }

  async getRecentRepositories(limit: number = 6): Promise<GitHubRepo[]> {
    const repos = await this.getRepositories('updated');
    return repos.slice(0, limit);
  }

  async getRepositoryLanguages(repo: GitHubRepo): Promise<GitHubLanguages> {
    const cacheKey = `github-languages-${repo.name}`;
    return this.fetchWithCache<GitHubLanguages>(repo.languages_url, cacheKey, 600000);
  }

  async getEnhancedRepositories(limit: number = 6): Promise<(GitHubRepo & { languages: string[] })[]> {
    const repos = await this.getRecentRepositories(limit);
    
    const enhancedRepos = await Promise.all(
      repos.map(async (repo) => {
        try {
          const languages = await this.getRepositoryLanguages(repo);
          const languageList = Object.keys(languages).slice(0, 5); // Top 5 languages
          return { ...repo, languages: languageList };
        } catch (error) {
          console.warn(`Failed to fetch languages for ${repo.name}:`, error);
          return { ...repo, languages: repo.language ? [repo.language] : [] };
        }
      })
    );

    return enhancedRepos;
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
