import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { ScrollProgress } from "@/components/ScrollProgress";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setIsDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden transition-colors duration-300">

      {/* ── Ambient gradient orbs ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-left violet orb */}
        <div
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.12] blur-[96px] animate-orb-float"
          style={{ background: 'hsl(258 90% 68%)' }}
        />
        {/* Bottom-right blue orb */}
        <div
          className="absolute -bottom-32 right-0 w-[420px] h-[420px] rounded-full opacity-[0.08] blur-[96px]"
          style={{
            background: 'hsl(200 90% 60%)',
            animation: 'orb-float 18s ease-in-out infinite reverse'
          }}
        />
        {/* Center faint */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-[0.04] blur-[80px]"
          style={{ background: 'hsl(258 90% 68%)' }}
        />
      </div>

      {/* ── Subtle grid ── */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-100" />

      <ScrollProgress />
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <MobileNav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* ── Main content ── */}
      <main className="lg:ml-60 min-h-screen pt-14 lg:pt-0 relative z-10">
        {children}
      </main>
    </div>
  );
}
