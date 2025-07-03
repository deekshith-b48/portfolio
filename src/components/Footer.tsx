import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="container max-w-screen-2xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 Deekshith B Gowda. Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and React.</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a 
              href="#experience" 
              className="hover:text-accent transition-colors"
            >
              Experience
            </a>
            <a 
              href="#education" 
              className="hover:text-accent transition-colors"
            >
              Education
            </a>
            <a 
              href="#projects" 
              className="hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="hover:text-accent transition-colors"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}