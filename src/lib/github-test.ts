import { githubService } from './github';

// Simple test utility to verify GitHub service functionality
export async function testGitHubService() {
  console.log('Testing GitHub Service...');
  
  try {
    const repos = await githubService.getEnhancedRepositories(3);
    console.log('✅ Successfully fetched repositories:', repos.length);
    console.log('📊 Using fallback data:', githubService.isUsingFallbackData());
    
    if (repos.length > 0) {
      console.log('📝 Sample repository:', {
        name: repos[0].name,
        languages: repos[0].languages,
        stars: repos[0].stargazers_count
      });
    }
    
    return { success: true, count: repos.length, usingFallback: githubService.isUsingFallbackData() };
  } catch (error) {
    console.error('❌ GitHub service test failed:', error);
    return { success: false, error: error.message };
  }
}

// Auto-test on import in development
if (import.meta.env.DEV) {
  // Delayed test to avoid blocking initial render
  setTimeout(() => {
    testGitHubService().then(result => {
      console.log('GitHub Service Test Result:', result);
    });
  }, 2000);
}
