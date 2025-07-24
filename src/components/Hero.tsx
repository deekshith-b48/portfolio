import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles, Code2, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickFacts = [
    "Full Stack Developer with 2+ years experience",
    "Specialized in React, Node.js, and Web3 technologies", 
    "Built 50+ projects across various tech stacks",
    "Samsung Innovation Lab Core Member",
    "AI & Machine Learning enthusiast",
    "Open source contributor and tech blogger"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-card/20">
      {/* Minimalistic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '10s' }} />
      </div>

      {/* Floating particles - minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-screen-lg px-6 py-16 relative z-10">
        <div className={`text-center space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Status Badge - Minimalistic */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Badge variant="outline" className="px-4 py-2 bg-accent/5 border-accent/20 text-accent hover:bg-accent/10 transition-all duration-300">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </Badge>
          </div>

          {/* Profile Section - Clean and minimal */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto ring-2 ring-accent/20 transition-all duration-500 group-hover:ring-accent/40 group-hover:scale-105">
                <AvatarImage 
                  src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png" 
                  alt="Deekshith B Gowda"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  key="profile-image-v3"
                />
                <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-accent to-primary text-background">DG</AvatarFallback>
              </Avatar>
              
              {/* Minimal status indicator */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-background rounded-full border-2 border-accent flex items-center justify-center">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Content Section - Clean typography */}
          <div className="space-y-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                  Deekshith B Gowda
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-lg text-muted-foreground">
                <span className="font-semibold text-accent">Full Stack Developer</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
                <span>CS Engineering Student</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  India, {timeString}
                </span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              Building <span className="text-accent font-medium">innovative solutions</span> with modern technologies.
              <br className="hidden md:block" />
              Passionate about <span className="text-accent font-medium">AI, Web3,</span> and <span className="text-accent font-medium">scalable applications</span>.
            </p>

            {/* Expandable Details */}
            {showDetails && (
              <div className="space-y-6 animate-fade-in border-t border-border/20 pt-6">
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground max-w-2xl mx-auto">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-card/50 border border-border/20">
                      <Sparkles className="w-4 h-4 text-accent/60 flex-shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
                
                {/* Contact quick links */}
                <div className="flex items-center justify-center gap-4">
                  <a 
                    href="https://linkedin.com/in/deekshith-b-gowda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card/50 border border-border/20 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://github.com/deekshith-b48" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card/50 border border-border/20 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </a>
                  <a 
                    href="mailto:deekshithbgowda48@gmail.com" 
                    className="p-2 rounded-lg bg-card/50 border border-border/20 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* CTA Buttons - Clean and minimal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-accent hover:bg-accent/90 text-background px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowDetails(!showDetails)}
              className="group px-8 py-6 text-lg border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-105"
            >
              {showDetails ? "Show Less" : "Know More"}
              <ChevronDown className={`ml-2 w-5 h-5 transition-all duration-300 ${showDetails ? 'rotate-180' : ''} group-hover:scale-110`} />
            </Button>
          </div>

          {/* Scroll indicator - Subtle */}
          <div className="animate-fade-in pt-8" style={{ animationDelay: '1.2s' }}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
              <span className="text-xs font-medium">Scroll to explore</span>
              <div className="w-0.5 h-8 bg-gradient-to-b from-accent/50 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
