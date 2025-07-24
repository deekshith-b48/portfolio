import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { 
  Menu,
  Home, 
  User, 
  GraduationCap, 
  FolderOpen, 
  Code2, 
  Trophy, 
  Award, 
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

interface MobileNavProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const navigationItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/experience", icon: User, label: "Experience" },
  { path: "/education", icon: GraduationCap, label: "Education" },
  { path: "/projects", icon: FolderOpen, label: "Projects" },
  { path: "/skills", icon: Code2, label: "Skills" },
  { path: "/achievements", icon: Trophy, label: "Achievements" },
  { path: "/certifications", icon: Award, label: "Certifications" },
  { path: "/contact", icon: Mail, label: "Contact" }
];

const socialLinks = [
  { href: "https://github.com/deekshith-b48", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/deekshithb48", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/deekshith_b48", icon: Twitter, label: "Twitter" }
];

export function MobileNav({ isDarkMode, toggleTheme }: MobileNavProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/40 px-3 py-2.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Avatar className="w-7 h-7">
              <AvatarImage
                src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png"
                alt="Deekshith B Gowda"
                className="object-cover"
              />
              <AvatarFallback className="text-xs font-semibold bg-gradient-to-br from-accent to-primary text-background">
                DG
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h2 className="text-xs font-bold truncate">Deekshith B Gowda</h2>
            </div>
          </Link>
          
          <div className="flex items-center gap-2">
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
            
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Profile Section */}
                  <div className="p-4 border-b border-border/20">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
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
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <nav className="flex-1 p-4 space-y-1">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      
                      return (
                        <SheetClose asChild key={item.path}>
                          <Link
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
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
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>
                  
                  {/* Social Links */}
                  <div className="p-4 border-t border-border/20 space-y-3">
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
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
