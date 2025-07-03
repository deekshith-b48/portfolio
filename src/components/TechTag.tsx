import { cn } from "@/lib/utils";

interface TechTagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function TechTag({ children, variant = "default", className }: TechTagProps) {
  return (
    <span
      className={cn(
        "tech-tag",
        variant === "accent" && "bg-accent/10 text-accent border border-accent/20",
        className
      )}
    >
      {children}
    </span>
  );
}