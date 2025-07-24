import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, Coffee, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Footer() {
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      href: "https://github.com/deekshith-b48", 
      icon: Github, 
      label: "GitHub",
      hoverColor: "hover:text-white"
    },
    { 
      href: "https://www.linkedin.com/in/deekshithb48", 
      icon: Linkedin, 
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400"
    },
    { 
      href: "https://x.com/deekshith_b48", 
      icon: Twitter, 
      label: "Twitter",
      hoverColor: "hover:text-blue-400"
    },
    { 
      href: "mailto:deekshithbgowda48@gmail.com", 
      icon: Mail, 
      label: "Email",
      hoverColor: "hover:text-accent"
    }
  ];

  return (
    <footer className="relative border-t border-border/40 bg-gradient-to-b from-background to-card/50 backdrop-blur">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 blur-3xl opacity-30" />
      
      <div className="container max-w-screen-2xl px-6 py-12 relative z-10">
        <div className="space-y-8">
          {/* Main footer content */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary p-2 shadow-lg">
                  <Code2 className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    Deekshith B Gowda
                  </h3>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate about building innovative solutions with modern technologies. 
                Always learning, always growing.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-accent">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-1 hover:scale-105 group flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>{link.label}</span>
                    <div className="w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social links and contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-accent">Let's Connect</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-2 p-2 rounded-lg bg-card/50 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10 ${social.hoverColor}`}
                    >
                      <IconComponent className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                      <span className="text-sm">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Deekshith B Gowda. Built with</span>
              <Heart 
                className={`h-4 w-4 transition-all duration-300 cursor-pointer ${
                  isHeartHovered 
                    ? 'text-red-500 fill-current scale-125 animate-pulse' 
                    : 'text-red-500/70 fill-current'
                }`}
                onMouseEnter={() => setIsHeartHovered(true)}
                onMouseLeave={() => setIsHeartHovered(false)}
              />
              <span>and</span>
              <div className="flex items-center gap-1">
                <Coffee className="h-4 w-4 text-amber-500" />
                <span>lots of coffee.</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Made with React + TypeScript + Tailwind CSS
              </div>
              
              {/* Back to top button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="group border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-105"
              >
                <ArrowUp className="h-4 w-4 mr-1 transition-transform duration-300 group-hover:-translate-y-1" />
                Back to top
              </Button>
            </div>
          </div>

          {/* Easter egg */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground/50 font-mono">
              // TODO: Build more awesome projects 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
