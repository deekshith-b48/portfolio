import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import {
  Menu, X,
  Home, Briefcase, GraduationCap, FolderOpen,
  Code2, Trophy, Award, Mail, Share2,
  Sun, Moon, Github, Linkedin, Twitter,
} from "lucide-react";

interface MobileNavProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const navigationItems = [
  { path: "/",               icon: Home,          label: "Home"           },
  { path: "/experience",     icon: Briefcase,     label: "Experience"     },
  { path: "/education",      icon: GraduationCap, label: "Education"      },
  { path: "/projects",       icon: FolderOpen,    label: "Projects"       },
  { path: "/skills",         icon: Code2,         label: "Skills"         },
  { path: "/achievements",   icon: Trophy,        label: "Achievements"   },
  { path: "/certifications", icon: Award,         label: "Certifications" },
  { path: "/contact",        icon: Mail,          label: "Contact"        },
  { path: "/socials",        icon: Share2,        label: "Socials"        },
];

const socialLinks = [
  { href: "https://github.com/deekshith-b48",     icon: Github,   label: "GitHub"   },
  { href: "https://linkedin.com/in/deekshithb48", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/deekshith_b48",          icon: Twitter,  label: "Twitter"  },
];

export function MobileNav({ isDarkMode, toggleTheme }: MobileNavProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* ── Glassmorphic mobile header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 px-4 flex items-center justify-between bg-background/70 backdrop-blur-xl border-b border-white/[0.06]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="relative">
            <Avatar className="w-7 h-7 ring-1 ring-accent/30">
              <AvatarImage
                src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png"
                alt="Deekshith B Gowda"
                className="object-cover"
              />
              <AvatarFallback className="text-[10px] font-bold bg-gradient-to-br from-accent to-blue-500 text-white">
                DG
              </AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border border-background" />
          </div>
          <span className="text-sm font-semibold text-foreground">Deekshith B Gowda</span>
        </Link>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200">
                {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 p-0 border-l border-white/[0.06] bg-background/90 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              <div className="flex flex-col h-full">
                {/* Profile */}
                <div className="px-5 pt-6 pb-5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <Avatar className="w-10 h-10 ring-1 ring-accent/30">
                        <AvatarImage
                          src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png"
                          alt="Deekshith B Gowda"
                          className="object-cover"
                        />
                        <AvatarFallback className="text-sm font-bold bg-gradient-to-br from-accent to-blue-500 text-white">
                          DG
                        </AvatarFallback>
                      </Avatar>
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-background" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-foreground">Deekshith B Gowda</h2>
                      <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-emerald-500/8 border border-emerald-500/15">
                    <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-medium text-emerald-400">Available for work</span>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <SheetClose asChild key={item.path}>
                        <Link
                          to={item.path}
                          className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'text-foreground bg-accent/10'
                              : 'text-muted-foreground hover:text-foreground/80 hover:bg-foreground/[0.04]'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute left-0 inset-y-1.5 w-[3px] rounded-r-full bg-accent" />
                          )}
                          <span className={`flex-shrink-0 p-1.5 rounded-md transition-all duration-200 ${
                            isActive
                              ? 'bg-accent/15 text-accent'
                              : 'bg-foreground/[0.04] text-muted-foreground group-hover:bg-foreground/[0.07] group-hover:text-foreground/70'
                          }`}>
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* Social links */}
                <div className="px-4 py-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.href}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
