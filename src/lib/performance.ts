// Performance optimization utilities for animations and interactions

// Debounce utility for scroll events
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
}

// Throttle utility for frequent events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Check if device prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Optimize animations based on device capabilities
export function getOptimizedAnimationConfig() {
  const isLowEnd = navigator.hardwareConcurrency <= 4;
  const prefersReduced = prefersReducedMotion();
  
  return {
    enableAnimations: !prefersReduced,
    reducedMotion: prefersReduced,
    enableParallax: !isLowEnd && !prefersReduced,
    animationDuration: prefersReduced ? 0 : isLowEnd ? 200 : 300,
    staggerDelay: prefersReduced ? 0 : isLowEnd ? 50 : 100,
    enableHoverEffects: !prefersReduced,
    enableGlowEffects: !isLowEnd && !prefersReduced
  };
}

// Intersection Observer with performance optimizations
export function createOptimizedObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
}

// Check if animations should be enabled
export function shouldEnableAnimations(): boolean {
  if (typeof window === 'undefined') return true;
  
  // Check for reduced motion preference
  if (prefersReducedMotion()) return false;
  
  // Check for low-end devices
  const isLowEnd = navigator.hardwareConcurrency <= 4;
  if (isLowEnd) return false;
  
  // Check for slow connections
  const connection = (navigator as any).connection;
  if (connection && connection.effectiveType === 'slow-2g') return false;
  
  return true;
}

// Lazy load images with performance optimizations
export function lazyLoadImage(
  img: HTMLImageElement,
  src: string,
  placeholder?: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    
    image.onload = () => {
      img.src = src;
      img.classList.add('loaded');
      resolve();
    };
    
    image.onerror = reject;
    
    if (placeholder) {
      img.src = placeholder;
    }
    
    image.src = src;
  });
}

// Monitor performance metrics
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }
  
  markStart(name: string): void {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(`${name}-start`);
    }
  }
  
  markEnd(name: string): number | null {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(`${name}-end`);
      window.performance.measure(name, `${name}-start`, `${name}-end`);
      
      const measure = window.performance.getEntriesByName(name, 'measure')[0];
      if (measure) {
        this.metrics.set(name, measure.duration);
        return measure.duration;
      }
    }
    return null;
  }
  
  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }
  
  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }
  
  clearMetrics(): void {
    this.metrics.clear();
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.clearMarks();
      window.performance.clearMeasures();
    }
  }
}

// Animation frame utility for smooth animations
export function requestAnimationFrameAsync(): Promise<number> {
  return new Promise(resolve => {
    requestAnimationFrame(resolve);
  });
}

// Optimize heavy computations with Web Workers (if available)
export function isWebWorkerSupported(): boolean {
  return typeof Worker !== 'undefined';
}

// Cache management for API responses
export class CacheManager {
  private static cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  
  static set(key: string, data: any, ttl: number = 300000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }
  
  static get(key: string): any | null {
    const cached = this.cache.get(key);
    if (!cached) return null;
    
    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }
  
  static clear(): void {
    this.cache.clear();
  }
  
  static size(): number {
    return this.cache.size;
  }
}
