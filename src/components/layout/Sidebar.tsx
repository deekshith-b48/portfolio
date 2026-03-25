import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Briefcase,
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
  Share2,
} from "lucide-react";

interface SidebarProps {
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

export function Sidebar({ isDarkMode, toggleTheme }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 z-50 lg:flex hidden flex-col border-r border-white/[0.06] bg-background/80 backdrop-blur-xl">

      {/* ── Profile ── */}
      <div className="px-4 pt-6 pb-4 border-b border-white/[0.06]">
        <Link to="/" className="flex items-center gap-3 group mb-4">
          <div className="relative flex-shrink-0">
            <Avatar className="w-9 h-9 ring-1 ring-accent/30 group-hover:ring-accent/60 transition-all duration-300">
              <AvatarImage
                src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png"
                alt="Deekshith B Gowda"
                className="object-cover"
              />
              <AvatarFallback className="text-xs font-bold bg-gradient-to-br from-accent to-blue-500 text-white">
                DG
              </AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-background" />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-foreground leading-none truncate">
              Deekshith B Gowda
            </h2>
            <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
              Full Stack Developer
            </p>
          </div>
        </Link>

        {/* Status */}
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-emerald-500/8 border border-emerald-500/15">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium text-emerald-400">Available for work</span>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-foreground bg-accent/10'
                  : 'text-muted-foreground hover:text-foreground/80 hover:bg-foreground/[0.04]'
              }`}
            >
              {/* Left active indicator */}
              {isActive && (
                <span className="absolute left-0 inset-y-1.5 w-[3px] rounded-r-full bg-accent" />
              )}

              {/* Icon container */}
              <span className={`flex-shrink-0 p-1.5 rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-accent/15 text-accent'
                  : 'bg-foreground/[0.04] text-muted-foreground group-hover:bg-foreground/[0.07] group-hover:text-foreground/70'
              }`}>
                <Icon className="w-3.5 h-3.5" />
              </span>

              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* ── Footer ── */}
      <div className="px-4 py-4 border-t border-white/[0.06] space-y-3">
        {/* Social links */}
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
          <div className="flex-1" />
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <p className="text-[10px] text-muted-foreground/50 text-center">
          © 2025 Deekshith B Gowda
        </p>
      </div>
    </aside>
  );
}
