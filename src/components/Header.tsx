import { Twitter, Github, Linkedin, Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useScrollProgress } from "@/hooks/useScrollAnimation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['experience', 'education', 'projects', 'skills', 'achievements', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      href: "https://x.com/deekshith_b48", 
      icon: Twitter, 
      label: "X (Twitter)",
      hoverColor: "hover:text-blue-400"
    },
    { 
      href: "https://www.linkedin.com/in/deekshithb48", 
      icon: Linkedin, 
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600"
    },
    { 
      href: "https://github.com/deekshith-b48", 
      icon: Github, 
      label: "GitHub",
      hoverColor: "hover:text-accent"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-lg shadow-accent/5' 
        : 'bg-background/95 backdrop-blur'
    }`}>
      {/* Scroll progress indicator */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6">
        {/* Logo */}
        <div className="group flex items-center space-x-3">
          <a 
            href="/" 
            className="flex items-center space-x-3 transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary p-2 shadow-lg group-hover:shadow-accent/25 transition-all duration-300 group-hover:scale-110">
                <Sparkles className="w-full h-full text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-background animate-pulse-soft" />
            </div>
            <span className="hidden font-bold text-lg sm:inline-block bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
              Deekshith B Gowda
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                activeSection === item.href.slice(1)
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/70 hover:text-accent hover:bg-accent/5'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.href.slice(1) && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg animate-fade-in" />
              )}
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-accent to-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </nav>

        {/* Social Links & Mobile Menu */}
        <div className="flex items-center space-x-2">
          {/* Desktop Social Links */}
          <div className="hidden sm:flex items-center space-x-1">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button 
                  key={social.href}
                  variant="ghost" 
                  size="icon" 
                  asChild
                  className={`group relative overflow-hidden transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                >
                  <a 
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden group transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl animate-slide-down">
          <div className="container px-6 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg animate-slide-up ${
                    activeSection === item.href.slice(1)
                      ? 'text-accent bg-accent/10 border border-accent/20'
                      : 'text-foreground/70 hover:text-accent hover:bg-accent/5'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/20">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button 
                    key={social.href}
                    variant="outline" 
                    size="sm" 
                    asChild
                    className={`group transition-all duration-300 hover:scale-105 animate-scale-in ${social.hoverColor}`}
                    style={{ animationDelay: `${index * 100 + 300}ms` }}
                  >
                    <a 
                      href={social.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <IconComponent className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                      <span className="text-xs">{social.label}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
