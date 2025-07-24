import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'rotate-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

const animationClasses = {
  'fade-in': 'animate-fade-in',
  'slide-up': 'animate-slide-up',
  'slide-down': 'animate-slide-down',
  'slide-left': 'animate-slide-left',
  'slide-right': 'animate-slide-right',
  'scale-in': 'animate-scale-in',
  'rotate-in': 'animate-rotate-in'
};

const hiddenClasses = {
  'fade-in': 'opacity-0',
  'slide-up': 'opacity-0 translate-y-8',
  'slide-down': 'opacity-0 -translate-y-8',
  'slide-left': 'opacity-0 translate-x-8',
  'slide-right': 'opacity-0 -translate-x-8',
  'scale-in': 'opacity-0 scale-95',
  'rotate-in': 'opacity-0 rotate-3 scale-95'
};

export function AnimatedSection({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  stagger = false,
  staggerDelay = 100
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay
  });

  const animationClass = animationClasses[animation];
  const hiddenClass = hiddenClasses[animation];

  // Handle staggered animations for child elements
  React.useEffect(() => {
    if (stagger && isVisible && elementRef.current) {
      const children = elementRef.current.children;
      Array.from(children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.animationDelay = `${index * staggerDelay}ms`;
        }
      });
    }
  }, [isVisible, stagger, staggerDelay]);

  const baseClasses = `transition-all duration-700 ease-out ${
    isVisible ? animationClass : hiddenClass
  } ${className}`;

  return (
    <div ref={elementRef} className={baseClasses}>
      {children}
    </div>
  );
}

// Staggered children wrapper
export function StaggeredChildren({
  children,
  delay = 100,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const { isVisible } = useScrollAnimation({ threshold: 0.1 });

  React.useEffect(() => {
    if (isVisible && elementRef.current) {
      const children = elementRef.current.children;
      Array.from(children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.animationDelay = `${index * delay}ms`;
          child.classList.add('animate-fade-in');
        }
      });
    }
  }, [isVisible, delay]);

  return (
    <div ref={elementRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="opacity-0 translate-y-4 transition-all duration-500 ease-out"
          style={{ animationFillMode: 'forwards' }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// Parallax wrapper
export function ParallaxSection({
  children,
  speed = 0.5,
  className = ''
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
