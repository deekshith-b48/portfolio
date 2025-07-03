// Performance monitoring utilities

export class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();

  startMeasure(name: string) {
    this.metrics.set(name, performance.now());
  }

  endMeasure(name: string): number {
    const startTime = this.metrics.get(name);
    if (!startTime) {
      console.warn(`No start time found for measurement: ${name}`);
      return 0;
    }

    const duration = performance.now() - startTime;
    this.metrics.delete(name);
    
    // Log performance in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    }

    return duration;
  }

  // Measure Web Vitals
  measureWebVitals() {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Image lazy loading performance
  trackImageLoad(src: string) {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Image loaded: ${src} (${loadTime.toFixed(2)}ms)`);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
    };
    
    img.src = src;
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Hook for measuring component render time
export function usePerformanceMeasure(componentName: string) {
  const startTime = performance.now();
  
  return () => {
    const renderTime = performance.now() - startTime;
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
    }
  };
}

// Lazy loading utilities
export function lazyLoadImage(img: HTMLImageElement, src: string) {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = src;
          image.classList.add('fade-in');
          imageObserver.unobserve(image);
        }
      });
    });
    
    imageObserver.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
}