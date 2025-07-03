import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "scale-in";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in",
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? `animate-${animation}` : "opacity-0 translate-y-8",
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}