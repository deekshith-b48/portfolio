import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Calendar, Code2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-screen-xl px-6 py-16 relative z-10">
        <div className={`flex flex-col items-center text-center space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Status Badge */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Badge variant="outline" className="px-4 py-2 bg-accent/10 border-accent/20 text-accent hover:bg-accent/20 transition-all duration-300">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </Badge>
          </div>

          {/* Profile Section */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <Avatar className="w-40 h-40 md:w-48 md:h-48 ring-4 ring-accent/20 transition-all duration-500 group-hover:ring-accent/40 group-hover:scale-105">
                <AvatarImage
                  src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png"
                  alt="Deekshith B Gowda"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  key="profile-image-v3"
                />
                <AvatarFallback className="text-3xl font-semibold bg-gradient-to-br from-accent to-primary text-background">DG</AvatarFallback>
              </Avatar>

              {/* Status indicator with enhanced styling */}
              <div className="absolute -bottom-3 -right-3 flex items-center space-x-2">
                <div className="w-8 h-8 bg-background rounded-full border-4 border-accent flex items-center justify-center animate-pulse-soft">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-4 -left-4 animate-float" style={{ animationDelay: '1s' }}>
                <Code2 className="w-6 h-6 text-accent/60" />
              </div>
              <div className="absolute -top-4 -right-4 animate-float" style={{ animationDelay: '2s' }}>
                <Github className="w-6 h-6 text-accent/60" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 max-w-4xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-gradient">
                Deekshith B Gowda
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-4 text-lg md:text-xl text-muted-foreground">
                <span className="font-semibold text-accent">Full Stack Developer</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
                <span>CS Engineering Student</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  India
                </span>
              </div>
            </div>

            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Crafting{' '}
              <span className="text-accent font-medium">scalable applications</span>
              {' '}with modern technologies.
              <br className="hidden md:block" />
              Passionate about{' '}
              <span className="text-accent font-medium">innovation</span>
              {' '}and{' '}
              <span className="text-accent font-medium">clean code</span>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
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
              asChild
              className="group px-8 py-6 text-lg border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-105"
            >
              <a href="https://github.com/deekshith-b48" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Contact Quick Links */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a
              href="https://linkedin.com/in/deekshith-b-gowda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
            <a
              href="mailto:deekshithbgowda48@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>

          {/* Local Time */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse-soft" style={{ animationDelay: '1.2s' }}>
            <Calendar className="w-4 h-4" />
            <span>India Time: {timeString}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
