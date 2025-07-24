import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  User, 
  GraduationCap, 
  FolderOpen, 
  Code2, 
  Trophy, 
  Award, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Sun,
  Moon,
  Sparkles,
  MapPin,
  Calendar
} from "lucide-react";

interface SidebarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const navigationItems = [
  { path: "/", icon: Home, label: "Home", description: "About me" },
  { path: "/experience", icon: User, label: "Experience", description: "Work history" },
  { path: "/education", icon: GraduationCap, label: "Education", description: "Academic background" },
  { path: "/projects", icon: FolderOpen, label: "Projects", description: "Portfolio showcase" },
  { path: "/skills", icon: Code2, label: "Skills", description: "Technical expertise" },
  { path: "/achievements", icon: Trophy, label: "Achievements", description: "Awards & recognition" },
  { path: "/certifications", icon: Award, label: "Certifications", description: "Professional credentials" },
  { path: "/contact", icon: Mail, label: "Contact", description: "Get in touch" }
];

const socialLinks = [
  { href: "https://github.com/deekshith-b48", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/deekshithb48", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/deekshith_b48", icon: Twitter, label: "Twitter" }
];

export function Sidebar({ isDarkMode, toggleTheme }: SidebarProps) {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <aside className={`fixed left-0 top-0 h-screen w-80 border-r transition-all duration-300 z-50 ${
      isDarkMode 
        ? 'bg-background/95 backdrop-blur-xl border-border/40' 
        : 'bg-white/95 backdrop-blur-xl border-gray-200/40'
    }`}>
      <div className="flex flex-col h-full p-6">
        {/* Profile Section */}
        <div className="space-y-6 pb-6 border-b border-border/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <Avatar className="w-16 h-16 ring-2 ring-accent/20 transition-all duration-300 group-hover:ring-accent/40 group-hover:scale-105">
                  <AvatarImage 
                    src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png" 
                    alt="Deekshith B Gowda"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-accent to-primary text-background">
                    DG
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-background rounded-full border-2 border-accent flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  Deekshith B Gowda
                </h2>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="group hover:bg-accent/10"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              )}
            </Button>
          </div>
          
          {/* Status Badge */}
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="bg-accent/10 border-accent/20 text-accent">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Available for work
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>India</span>
            </div>
          </div>
          
          {/* Time */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Local time: {timeString}</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isActive 
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25' 
                    : 'hover:bg-accent/10 text-muted-foreground hover:text-accent'
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? 'text-accent-foreground' : 'group-hover:text-accent'
                }`} />
                <div className="flex-1">
                  <div className={`font-medium ${isActive ? 'text-accent-foreground' : 'group-hover:text-accent'}`}>
                    {item.label}
                  </div>
                  <div className="text-xs opacity-70">
                    {item.description}
                  </div>
                </div>
                {isActive && (
                  <Sparkles className="w-4 h-4 text-accent-foreground animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="pt-6 border-t border-border/20">
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="group hover:bg-accent/10 hover:scale-110 transition-all duration-300"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 group-hover:text-accent transition-colors duration-300" />
                  </a>
                </Button>
              );
            })}
          </div>
          
          {/* Footer */}
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 Portfolio v2.0
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
