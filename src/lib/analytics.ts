// Analytics utility for tracking user interactions
// This can be easily integrated with Google Analytics, Mixpanel, or other services

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
}

class Analytics {
  private isEnabled: boolean = true;

  constructor() {
    // Disable analytics in development
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  track(event: string, properties?: Record<string, any>) {
    if (!this.isEnabled) return;

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', { event, properties });
      return;
    }

    // In production, integrate with your analytics service
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties);
    }

    // Example: Mixpanel
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.track(event, properties);
    }
  }

  page(path: string, title?: string) {
    if (!this.isEnabled) return;

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: title,
      });
    }
  }

  identify(userId: string, traits?: Record<string, any>) {
    if (!this.isEnabled) return;

    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.identify(userId);
      if (traits) {
        (window as any).mixpanel.people.set(traits);
      }
    }
  }
}

export const analytics = new Analytics();

// Common event tracking functions
export const trackEvent = {
  contactFormSubmit: (success: boolean) => {
    analytics.track('contact_form_submit', { success });
  },
  
  projectView: (projectName: string) => {
    analytics.track('project_view', { project: projectName });
  },
  
  socialLinkClick: (platform: string) => {
    analytics.track('social_link_click', { platform });
  },
  
  resumeDownload: () => {
    analytics.track('resume_download');
  },
  
  sectionView: (section: string) => {
    analytics.track('section_view', { section });
  },
};