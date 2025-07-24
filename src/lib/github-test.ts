import { githubService } from './github';

// Simple test utility to verify GitHub service functionality
export async function testGitHubService() {
  console.log('🔍 Testing GitHub Service...');

  try {
    const repos = await githubService.getEnhancedRepositories(3);
    const isUsingFallback = githubService.isUsingFallbackData();

    console.log('✅ Successfully loaded repositories:', repos.length);
    console.log('📊 Data source:', isUsingFallback ? 'Fallback/Cache' : 'Live GitHub API');

    if (repos.length > 0) {
      console.log('📝 Sample repository:', {
        name: repos[0].name,
        languages: repos[0].languages,
        stars: repos[0].stargazers_count,
        updated: repos[0].updated_at
      });

      // Check for PoliGap specifically
      const poliGap = repos.find(repo => repo.name === 'PoliGap');
      if (poliGap) {
        console.log('🎯 PoliGap found:', {
          name: poliGap.name,
          description: poliGap.description?.substring(0, 50) + '...',
          languages: poliGap.languages
        });
      }
    }

    return {
      success: true,
      count: repos.length,
      usingFallback: isUsingFallback,
      hasPoliGap: repos.some(repo => repo.name === 'PoliGap')
    };
  } catch (error) {
    console.error('❌ GitHub service test failed:', error);
    console.warn('🔄 Service will attempt to use fallback data gracefully');
    return {
      success: false,
      error: error.message,
      fallbackAvailable: true
    };
  }
}

// Auto-test on import in development
if (import.meta.env.DEV) {
  // Delayed test to avoid blocking initial render
  setTimeout(() => {
    testGitHubService().then(result => {
      console.log('📋 GitHub Service Test Result:', result);
    });
  }, 3000);
}
