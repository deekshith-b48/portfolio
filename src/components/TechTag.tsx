import { cn } from "@/lib/utils";
import { useState } from "react";

interface TechTagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "secondary" | "outline";
  className?: string;
  interactive?: boolean;
  glowOnHover?: boolean;
}

export function TechTag({ 
  children, 
  variant = "default", 
  className,
  interactive = true,
  glowOnHover = false
}: TechTagProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 ease-out cursor-default";

  const variantClasses = {
    default: "bg-tech-tag/50 text-tech-tag-foreground border-border/50 hover:border-accent/30 hover:bg-accent/10 hover:text-accent hover:shadow-lg hover:shadow-accent/20",
    accent: "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/25",
    secondary: "bg-secondary/50 text-secondary-foreground border-secondary/30 hover:border-accent/30 hover:bg-accent/10 hover:text-accent hover:shadow-lg hover:shadow-accent/20",
    outline: "bg-transparent text-muted-foreground border-border hover:border-accent/50 hover:bg-accent/5 hover:text-accent hover:shadow-lg hover:shadow-accent/15"
  };

  const interactiveClasses = interactive 
    ? "hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
    : "";

  const glowClasses = glowOnHover && isHovered 
    ? "shadow-lg shadow-accent/40 ring-1 ring-accent/20" 
    : "";

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        interactiveClasses,
        glowClasses,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered && interactive ? 'translateY(-2px) scale(1.05)' : undefined,
        boxShadow: isHovered && glowOnHover 
          ? '0 4px 20px rgba(var(--accent-rgb, 34, 197, 94), 0.3)' 
          : undefined
      }}
    >
      {children}
      {isHovered && interactive && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 animate-pulse" />
      )}
    </span>
  );
}

// Specialized tech tag for skills with proficiency level
export function SkillTag({ 
  children, 
  level, 
  className 
}: { 
  children: React.ReactNode; 
  level?: number;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-green-400 border-green-400/30 bg-green-400/10";
    if (level >= 80) return "text-blue-400 border-blue-400/30 bg-blue-400/10";
    if (level >= 70) return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10";
    return "text-orange-400 border-orange-400/30 bg-orange-400/10";
  };

  return (
    <div className="relative group">
      <span
        className={cn(
          "inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 ease-out cursor-pointer",
          level ? getLevelColor(level) : "bg-tech-tag/50 text-tech-tag-foreground border-border/50",
          "hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {level && (
          <span className="ml-1 text-xs opacity-70">
            {level}%
          </span>
        )}
      </span>
      
      {/* Tooltip for skill level */}
      {level && isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-background border border-border rounded-md shadow-lg animate-fade-in z-10">
          Proficiency: {level}%
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
        </div>
      )}
    </div>
  );
}

// Animated tech tag with stagger effect
export function AnimatedTechTag({ 
  children, 
  delay = 0,
  className 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-full border",
        "bg-tech-tag/50 text-tech-tag-foreground border-border/50",
        "transition-all duration-500 ease-out",
        "hover:border-accent/30 hover:bg-accent/10 hover:text-accent hover:scale-105 hover:-translate-y-1",
        "animate-slide-up opacity-0",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </span>
  );
}
