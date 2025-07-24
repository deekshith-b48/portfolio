import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles, Code2, Database, Cpu, Globe, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function HomePage() {
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
    window.open('/projects', '_self');
  };

  const quickFacts = [
    "Full Stack Developer with 2+ years experience",
    "Specialized in React, Node.js, and Modern Technologies", 
    "Built 50+ projects across various tech stacks",
    "Kroolo Full Stack Developer",
    "AI & Machine Learning enthusiast",
    "Open source contributor and hackathon winner"
  ];

  // Tech icons floating around profile
  const techIcons = [
    { icon: Code2, delay: 0, position: { top: '20%', right: '25%' } },
    { icon: Database, delay: 2, position: { top: '60%', right: '15%' } },
    { icon: Cpu, delay: 4, position: { top: '40%', left: '20%' } },
    { icon: Globe, delay: 6, position: { top: '70%', left: '30%' } },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '10s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '12s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-screen-lg px-6 py-16 relative z-10">
        <div className={`text-center space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Status Badge */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Badge variant="outline" className="px-6 py-3 bg-accent/10 border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300 text-sm">
              <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse" />
              Open to opportunities • Available for hire
            </Badge>
          </div>

          {/* Profile Section with Tech Icons */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group inline-block">
              <Avatar className="w-48 h-48 mx-auto ring-4 ring-accent/30 transition-all duration-500 group-hover:ring-accent/50 group-hover:scale-105 shadow-2xl shadow-accent/20">
                <AvatarImage 
                  src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png" 
                  alt="Deekshith B Gowda"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-accent to-primary text-background">
                  DG
                </AvatarFallback>
              </Avatar>
              
              {/* Status indicator */}
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-background rounded-full border-4 border-accent flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
              </div>

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="absolute animate-float opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      ...tech.position,
                      animationDelay: `${tech.delay}s`,
                      animationDuration: `${6 + index}s`
                    }}
                  >
                    <div className="p-3 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
                <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Deekshith B Gowda
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-xl text-muted-foreground">
                <span className="font-bold text-accent text-2xl">Full Stack Developer</span>
                <span className="w-2 h-2 bg-muted-foreground rounded-full hidden sm:block" />
                <span className="text-lg">CS Engineering Student</span>
                <span className="w-2 h-2 bg-muted-foreground rounded-full hidden sm:block" />
                <span className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5" />
                  India, {timeString}
                </span>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Building <span className="text-accent font-medium">innovative solutions</span> with modern technologies.
              <br className="hidden md:block" />
              Passionate about <span className="text-accent font-medium">AI, Full-Stack Development,</span> and <span className="text-accent font-medium">problem-solving</span>.
            </p>

            {/* Expandable Details */}
            {showDetails && (
              <div className="space-y-8 animate-fade-in border-t border-border/20 pt-8">
                <div className="grid md:grid-cols-2 gap-6 text-lg text-muted-foreground max-w-4xl mx-auto">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/20 hover:border-accent/30 transition-all duration-300">
                      <Sparkles className="w-6 h-6 text-accent/60 flex-shrink-0 mt-1" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
                
                {/* Contact quick links */}
                <div className="flex items-center justify-center gap-6">
                  <a 
                    href="https://linkedin.com/in/deekshithb48" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-card/50 border border-border/20 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://github.com/deekshith-b48" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-card/50 border border-border/20 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </a>
                  <a 
                    href="mailto:deekshithbgowda48@gmail.com" 
                    className="p-4 rounded-xl bg-card/50 border border-border/20 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
                  >
                    <Mail className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/25"
            >
              View My Work
              <ArrowDown className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowDetails(!showDetails)}
              className="group px-10 py-6 text-xl border-accent/30 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-105"
            >
              {showDetails ? "Show Less" : "Know More"}
              <ChevronDown className={`ml-3 w-6 h-6 transition-all duration-300 ${showDetails ? 'rotate-180' : ''} group-hover:scale-110`} />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in pt-12" style={{ animationDelay: '1.2s' }}>
            <div className="flex flex-col items-center gap-3 text-muted-foreground/60">
              <span className="text-sm font-medium">Explore more sections</span>
              <div className="w-1 h-12 bg-gradient-to-b from-accent/50 to-transparent animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
