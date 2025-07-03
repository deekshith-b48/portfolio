import { Twitter, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-6">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Deekshith B Gowda
            </span>
          </a>
        </div>
        
        <nav className="flex items-center gap-6 text-sm">
          <a 
            href="#experience" 
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Experience
          </a>
          <a 
            href="#education" 
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Education
          </a>
          <a 
            href="#projects" 
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Skills
          </a>
          <a 
            href="#certifications" 
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Certifications
          </a>
          <a 
            href="#contact" 
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://x.com/deekshith_b48" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://www.linkedin.com/in/deekshithb48" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://github.com/deekshith-b48" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}