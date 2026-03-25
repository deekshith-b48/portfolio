import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Building2,
  Trophy,
  Code2,
  Download,
  Sparkles,
  Zap,
  Globe,
  Component,
  Triangle,
  Server,
  FileCode,
  Database,
  Cloud,
  Box,
  Search,
  Shield,
  Lock,
  Award,
  Users,
  GraduationCap,
  BrainCircuit,
  Layers,
  GitBranch,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ResumeDownload } from "@/components/ResumeDownload";

const BG = "hsl(240,10%,4%)";
const ACCENT_GRAD = "linear-gradient(135deg, hsl(258 90% 78%), hsl(200 90% 68%))";

export function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const focusPillars = [
    {
      Icon: Layers,
      title: "Frontend Engineering",
      desc: "React, Next.js, TypeScript — pixel-perfect UIs with great UX.",
    },
    {
      Icon: Server,
      title: "Backend Systems",
      desc: "Node.js, REST APIs, PostgreSQL — performant & reliable at scale.",
    },
    {
      Icon: BrainCircuit,
      title: "AI Integration",
      desc: "LangChain, OpenAI — embedding LLM pipelines into real products.",
    },
  ];

  const techStack = [
    { name: "React.js",   Icon: Component },
    { name: "Next.js",    Icon: Triangle },
    { name: "Node.js",    Icon: Server },
    { name: "TypeScript", Icon: FileCode },
    { name: "PostgreSQL", Icon: Database },
    { name: "Redis",      Icon: Zap },
    { name: "AWS",        Icon: Cloud },
    { name: "Docker",     Icon: Box },
  ];

  const featuredProjects = [
    {
      name: "PoliGap",
      Icon: Search,
      description: "AI-powered policy compliance & governance platform with LLM pipeline (LangChain + OpenAI).",
      tech: ["Next.js", "LangChain", "PostgreSQL", "Redis"],
      gradient: "from-violet-600/10 to-indigo-600/10",
      border: "border-violet-500/20",
      accent: "text-violet-300",
      iconClass: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
    {
      name: "AEGIS",
      Icon: Shield,
      description: "AI cybercrime interdiction & real-time mobile platform with geospatial ML hotspot modelling.",
      tech: ["React Native", "TypeScript", "Node.js", "Expo"],
      gradient: "from-sky-600/10 to-cyan-600/10",
      border: "border-sky-500/20",
      accent: "text-sky-300",
      iconClass: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      name: "ZeroHack",
      Icon: Lock,
      description: "AI-integrated network threat detection with Solidity smart contract audit trail.",
      tech: ["TypeScript", "Python", "LangChain", "Solidity"],
      gradient: "from-rose-600/10 to-orange-600/10",
      border: "border-rose-500/20",
      accent: "text-rose-300",
      iconClass: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
  ];

  const achievements = [
    { Icon: Award, label: "SIH Runner-Up",    sub: "Top 0.004% of 52K+ teams" },
    { Icon: Globe, label: "GSSoC 2024",        sub: "15+ PRs · Campus Ambassador" },
    { Icon: Users, label: "Coding Club Lead",  sub: "3 workshops · 100+ mentored" },
  ];

  const socialLinks = [
    { href: "https://github.com/deekshith-b48",     Icon: Github,   label: "GitHub" },
    { href: "https://linkedin.com/in/deekshithb48", Icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/deekshith_b48",          Icon: Twitter,  label: "Twitter" },
    { href: "mailto:bdeekshith41@gmail.com",         Icon: Mail,     label: "Email" },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 space-y-6">

        {/* Resume strip */}
        <ResumeDownload />

        {/* ═══════════════════════ 01 · HERO ═══════════════════════ */}
        <section className="space-y-8 pt-2">

          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400 tracking-wide font-space">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </div>
            <div className="flex items-center gap-0.5">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
                >
                  <s.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Hero grid: typography + avatar */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">

            {/* Left: editorial typography */}
            <div className="space-y-6">

              {/* Section label */}
              <div className="flex items-center gap-3">
                <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">01 —</span>
                <span className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase font-space">
                  Full Stack Developer · CS Engineering
                </span>
              </div>

              {/* Name — Syne display */}
              <div>
                <h1
                  className="font-bitcount font-extrabold leading-[0.88] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(50px, 9vw, 88px)" }}
                >
                  <span className="text-foreground block">Deekshith</span>
                  <span
                    className="block bg-clip-text text-transparent"
                    style={{ backgroundImage: ACCENT_GRAD }}
                  >
                    B Gowda.
                  </span>
                </h1>
              </div>

              {/* Bio — Space Grotesk */}
              <p className="font-space text-base md:text-lg text-muted-foreground leading-[1.7] max-w-lg">
                Building{" "}
                <span className="text-foreground font-medium">AI-integrated</span>{" "}
                full-stack systems — from governance platforms to cybersecurity tools.
                Currently engineering at{" "}
                <span className="text-accent font-semibold">Anvelos</span>, turning complex
                problems into{" "}
                <span className="text-foreground font-medium">production-ready solutions</span>.
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-space">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent/60" />
                  Bengaluru, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-accent/60" />
                  Open to remote
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-semibold text-foreground/80 tabular-nums">{timeString}</span>
                  <span>IST</span>
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-space text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, hsl(258 90% 62%), hsl(200 90% 52%))",
                    boxShadow: "0 0 22px hsl(258 90% 65% / 0.35)",
                  }}
                >
                  <Mail className="w-4 h-4" />
                  Get in touch
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="/Deekshith_B_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-space text-foreground border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>

            {/* Right: avatar + floating stat chips */}
            <div className="hidden md:flex justify-end items-start pt-8">
              <div className="relative w-48">
                {/* Glow blob */}
                <div
                  className="absolute inset-0 scale-[1.8] rounded-full blur-3xl pointer-events-none"
                  style={{ background: "radial-gradient(circle, hsl(258 90% 68% / 0.2), transparent 65%)" }}
                />
                {/* Avatar */}
                <Avatar className="relative w-36 h-36 ring-1 ring-white/10 mx-auto">
                  <AvatarImage
                    src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png"
                    alt="Deekshith B Gowda"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl font-bitcount font-bold bg-gradient-to-br from-accent to-blue-500 text-white">
                    DG
                  </AvatarFallback>
                </Avatar>
                {/* Online dot */}
                <span className="absolute top-[62px] right-[22px] w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-background z-10">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                </span>

                {/* Floating stat: bottom-left */}
                <div className="absolute -bottom-4 -left-10 px-3 py-2 rounded-xl bg-card/95 backdrop-blur-md border border-white/[0.09] text-center shadow-xl">
                  <p className="font-doto font-bold text-lg leading-none" style={{ backgroundImage: ACCENT_GRAD, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>52K+</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-space">Teams Beat</p>
                </div>

                {/* Floating stat: top-right */}
                <div className="absolute -top-4 -right-8 px-3 py-2 rounded-xl bg-card/95 backdrop-blur-md border border-white/[0.09] text-center shadow-xl">
                  <p className="font-doto font-bold text-lg leading-none" style={{ backgroundImage: ACCENT_GRAD, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>8+</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-space">Months XP</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════ 02 · OBJECTIVE ═══════════════════════ */}
        <section className="rounded-2xl border border-white/[0.07] bg-card/40 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top right, hsl(258 90% 68% / 0.07), transparent 55%)" }}
          />
          <div className="relative space-y-6">

            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">02 —</span>
              <span className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase font-space">Objective</span>
            </div>

            {/* Statement */}
            <div className="space-y-1">
              <p className="font-bitcount font-bold text-[11px] tracking-[0.25em] uppercase text-muted-foreground/50 mb-3">
                What drives me
              </p>
              <p className="font-space text-lg md:text-xl font-medium text-foreground/90 leading-[1.65] max-w-3xl">
                To{" "}
                <span
                  className="font-semibold bg-clip-text text-transparent"
                  style={{ backgroundImage: ACCENT_GRAD }}
                >
                  engineer scalable systems
                </span>{" "}
                and contribute to impactful products — combining deep full-stack expertise with
                AI-driven thinking to solve real-world problems at scale. Seeking roles where I
                can{" "}
                <span className="text-foreground font-semibold border-b border-foreground/20 pb-px">
                  ship fast
                </span>
                , learn deep, and grow into a{" "}
                <span className="text-foreground font-semibold border-b border-foreground/20 pb-px">
                  founding-engineer level
                </span>{" "}
                contributor.
              </p>
            </div>

            {/* 3 focus pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {focusPillars.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:border-accent/25 hover:bg-accent/[0.04] transition-all duration-300 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="font-space font-semibold text-sm text-foreground mb-1">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ 03 · ROLE + CLOCK ═══════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Current Role */}
          <div className="sm:col-span-2 rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 md:p-6 relative overflow-hidden hover:border-accent/20 transition-all duration-300 group cursor-default">
            <div
              className="absolute top-0 left-0 w-56 h-56 pointer-events-none"
              style={{ background: "radial-gradient(circle at top left, hsl(258 90% 68% / 0.08), transparent 55%)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Building2 className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-[10px] font-medium text-accent uppercase tracking-[0.2em] font-space">Current Role</span>
                <span className="ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400 font-space">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>
              <h3 className="font-bitcount font-bold text-xl text-foreground leading-tight">
                Software Developer Intern
              </h3>
              <p className="text-accent font-semibold font-space text-sm mt-0.5">@ Anvelos</p>
              <p className="text-xs text-muted-foreground mt-0.5 font-space">Dec 2025 – Present · Bengaluru</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-space max-w-sm">
                Building full-stack features with React, Node.js & REST APIs. Working in an
                Agile team with CI/CD pipelines and real deployment workflows.
              </p>
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors mt-4 font-medium font-space"
              >
                Full experience <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Live clock + quick stats */}
          <div className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 flex flex-col gap-4">
            <div className="pb-4 border-b border-white/[0.06]">
              <p className="text-[10px] text-muted-foreground/70 tracking-[0.2em] uppercase font-space mb-2">
                Local Time · IST
              </p>
              <p className="font-doto font-bold text-[2rem] text-foreground tracking-tight tabular-nums leading-none">
                {timeString}
              </p>
              <p className="text-xs text-muted-foreground mt-1.5 font-space flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Bengaluru, India
              </p>
            </div>
            <div className="space-y-3 flex-1 justify-center flex flex-col">
              {[
                { val: "8+",   label: "Months XP" },
                { val: "3",    label: "AI Projects" },
                { val: "52K+", label: "SIH Teams Beat" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-space">{s.label}</span>
                  <span
                    className="font-doto font-bold text-base bg-clip-text text-transparent"
                    style={{ backgroundImage: ACCENT_GRAD }}
                  >
                    {s.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════ ACHIEVEMENTS ═══════════════════════ */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">03 —</span>
              <Trophy className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase font-space">Highlights</span>
            </div>
            <Link to="/achievements" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors font-space">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-4 flex items-start gap-3 hover:border-accent/20 hover:bg-accent/[0.04] transition-all duration-300 group cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
                  <a.Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground font-space">{a.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════ 04 · TECH MARQUEE ═══════════════════════ */}
        <div className="rounded-2xl border border-white/[0.07] bg-card/40 backdrop-blur-sm py-5 overflow-hidden">
          <div className="flex items-center gap-3 mb-4 px-5">
            <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">04 —</span>
            <Code2 className="w-3.5 h-3.5 text-accent" />
            <span className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase font-space">Core Stack</span>
            <Link to="/skills" className="ml-auto flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors font-space">
              All skills <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="relative">
            {/* edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${BG}, transparent)` }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${BG}, transparent)` }} />
            {/* Marquee track */}
            <div className="flex gap-3 animate-marquee will-change-transform" style={{ width: "max-content" }}>
              {[...techStack, ...techStack].map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-space bg-white/[0.04] border border-white/[0.07] text-foreground/75 shrink-0 hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
                >
                  <t.Icon className="w-3.5 h-3.5 flex-shrink-0 text-accent/60" />
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════ 05 · FEATURED PROJECTS ═══════════════════════ */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">05 —</span>
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase font-space">Featured Projects</span>
            </div>
            <Link to="/projects" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors font-space">
              All projects <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {featuredProjects.map((proj) => (
              <div
                key={proj.name}
                className={`rounded-2xl border ${proj.border} bg-gradient-to-br ${proj.gradient} p-5 group hover:scale-[1.02] transition-all duration-300 cursor-default relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 30% 20%, hsl(258 90% 68% / 0.06), transparent 60%)" }}
                />
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${proj.iconClass}`}>
                  <proj.Icon className="w-4 h-4" />
                </div>
                <h3 className={`font-bitcount font-bold text-base mb-1.5 ${proj.accent}`}>{proj.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-[10px] text-muted-foreground font-space">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ 06 · GITHUB ACTIVITY ═══════════════════════ */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">06 —</span>
              <GitBranch className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase font-space">GitHub Activity</span>
            </div>
            <a
              href="https://github.com/deekshith-b48"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors font-space"
            >
              View GitHub <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Streak + Stats row — compact */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-card/40" style={{ maxHeight: 190 }}>
              <img
                src={`https://streak-stats.demolab.com/?user=deekshith-b48&background=0d0d14&border=ffffff15&ring=8b5cf6&fire=c4b5fd&currStreakLabel=8b5cf6&sideLabels=6b7280&currStreakNum=e2e8f0&dates=6b7280&sideNums=e2e8f0&stroke=00000000`}
                alt="GitHub Streak Stats"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-card/40" style={{ maxHeight: 190 }}>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=deekshith-b48&show_icons=true&count_private=true&bg_color=0d0d14&title_color=8b5cf6&icon_color=8b5cf6&text_color=6b7280&border_color=ffffff15`}
                alt="GitHub Stats"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════ 07 · EDUCATION ═══════════════════════ */}
        <div className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm px-5 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 group hover:border-accent/20 transition-all duration-300 cursor-default">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-bitcount font-bold text-sm text-foreground">B.E. Computer Science Engineering</p>
              <p className="text-xs text-muted-foreground font-space mt-0.5">
                Cambridge Institute of Technology · CGPA 8.4 / 10 · Expected 2026
              </p>
            </div>
          </div>
          <Link
            to="/education"
            className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors font-medium font-space flex-shrink-0"
          >
            More details <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </div>
  );
}
