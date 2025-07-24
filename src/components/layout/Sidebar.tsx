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

  return (
    <aside className={`fixed left-0 top-0 h-screen w-64 border-r transition-all duration-300 z-50 ${
      isDarkMode
        ? 'bg-background/95 backdrop-blur-xl border-border/40'
        : 'bg-white/95 backdrop-blur-xl border-gray-200/40'
    }`}>
      <div className="flex flex-col h-full p-4">
        {/* Profile Section */}
        <div className="space-y-4 pb-4 border-b border-border/20">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <Avatar className="w-10 h-10 ring-2 ring-accent/20">
                <AvatarImage
                  src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png"
                  alt="Deekshith B Gowda"
                  className="object-cover"
                />
                <AvatarFallback className="text-sm font-semibold bg-gradient-to-br from-accent to-primary text-background">
                  DG
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-sm font-bold">Deekshith B Gowda</h2>
                <p className="text-xs text-muted-foreground">Full Stack Developer</p>
              </div>
            </Link>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-accent/10 h-8 w-8"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Status */}
          <Badge variant="outline" className="bg-accent/10 border-accent/20 text-accent text-xs w-fit">
            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-1.5" />
            Available
          </Badge>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-accent/10 text-muted-foreground hover:text-accent'
                }`}
              >
                <Icon className={`w-4 h-4 ${
                  isActive ? 'text-accent-foreground' : 'group-hover:text-accent'
                }`} />
                <span className={`text-sm font-medium ${isActive ? 'text-accent-foreground' : 'group-hover:text-accent'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full ml-auto" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="pt-4 border-t border-border/20 space-y-3">
          <div className="flex items-center justify-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-accent/10 h-8 w-8"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 hover:text-accent transition-colors" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 Portfolio
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
