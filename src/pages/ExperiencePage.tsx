import { ExternalLink, Calendar, MapPin, Building2, TrendingUp, Target, ChevronRight, CheckCircle2 } from "lucide-react";
import { ExperienceDetailModal } from "@/components/ExperienceDetailModal";
import { ResumeDownload } from "@/components/ResumeDownload";
import { useState } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  status: "Current" | "Past";
  description: string;
  detailedDescription: string;
  technologies: string[];
  achievements: string[];
  skills: string[];
  impact: string[];
  links?: { label: string; url: string }[];
  icon?: string;
  location: string;
  type: string;
  note?: string;
}

const ACCENT_GRAD = "linear-gradient(135deg, hsl(258 90% 78%), hsl(200 90% 68%))";

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer Intern",
    company: "Anvelos",
    period: "Dec 2025 - Present",
    status: "Current",
    location: "Bengaluru, India",
    type: "Internship",
    description: "Developing full-stack features with React, Node.js, REST APIs, and CI/CD pipelines in an Agile team; contributing to backend design, frontend components, and cloud deployments.",
    detailedDescription: "Developing full-stack features with React, Node.js, REST APIs, and CI/CD pipelines in an Agile team. Contributing to backend design, frontend components, and cloud deployments across the full development lifecycle.",
    achievements: [
      "Developing full-stack features with React and Node.js in an Agile team",
      "Contributing to backend design and REST API development",
      "Building frontend components with modern design patterns",
      "Setting up and maintaining CI/CD pipelines",
      "Supporting cloud deployment and infrastructure tasks"
    ],
    impact: [
      "Accelerating feature delivery through Agile practices",
      "Improving backend API reliability and design quality",
      "Contributing to frontend component reusability",
      "Streamlining deployment via CI/CD automation"
    ],
    skills: [
      "Full-Stack Web Development", "REST API Design",
      "React.js & Frontend Development", "Node.js & Backend APIs",
      "CI/CD Pipelines", "Cloud Deployments"
    ],
    technologies: ["React", "Node.js", "REST APIs", "CI/CD", "Git", "Agile"],
    links: [],
    icon: "🚀"
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Kroolo",
    period: "Jul 2025 - Nov 2025",
    status: "Past",
    location: "Bengaluru, India",
    type: "Internship",
    description: "Shipped AI-integrated features using Next.js, Node.js, Express, PostgreSQL; maintained 97.8% uptime across 5,000+ users; cut API latency 40% via Redis caching and N+1 query fixes.",
    detailedDescription: "Shipped AI-integrated features using Next.js, Node.js, Express, and PostgreSQL at Kroolo's AI-powered productivity SaaS. Maintained 97.8% uptime across 5,000+ users and cut API latency 40% via Redis caching and N+1 query fixes. Delivered real-time WebSocket dashboards with SSR, secured APIs with JWT + RBAC, and deployed on AWS EC2/S3 using Docker and automated CI/CD.",
    achievements: [
      "Maintained 97.8% uptime across 5,000+ active users",
      "Cut API latency 40% via Redis caching and N+1 query fixes",
      "Delivered real-time WebSocket dashboards with SSR (+35% engagement)",
      "Secured APIs with JWT + RBAC authentication",
      "Deployed on AWS EC2/S3 using Docker and automated CI/CD"
    ],
    impact: [
      "40% reduction in API latency through Redis caching",
      "97.8% platform uptime for 5,000+ users",
      "35% increase in user engagement via real-time dashboards",
      "Improved security posture with JWT + RBAC"
    ],
    skills: [
      "Full-Stack Development", "Real-time Systems (WebSockets/SSE)",
      "Redis Caching & Performance Optimisation", "Auth & AuthZ Patterns (JWT, RBAC)",
      "AWS Cloud Deployments", "CI/CD & Docker"
    ],
    technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "WebSockets", "JWT", "RBAC", "AWS EC2", "AWS S3", "Docker", "CI/CD"],
    links: [{ label: "Kroolo Website", url: "https://kroolo.com/" }],
    icon: "🏢"
  }
];

const impactStats = [
  { val: "97.8%", label: "Uptime maintained" },
  { val: "40%",   label: "API latency cut" },
  { val: "5K+",   label: "Users served" },
  { val: "35%",   label: "Engagement lift" },
];

export function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open  = (exp: ExperienceItem) => { setSelectedExperience(exp); setIsModalOpen(true); };
  const close = () => { setIsModalOpen(false); setSelectedExperience(null); };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 space-y-8">

        <ResumeDownload />

        {/* ── Header ── */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">
              01 —
            </span>
            <span className="section-badge">
              <Building2 className="w-3 h-3" />
              Professional Journey
            </span>
          </div>
          <h1 className="font-bitcount page-heading">Experience</h1>
          <p className="font-space text-sm text-muted-foreground max-w-2xl leading-relaxed">
            8+ months building full-stack products across AI SaaS and enterprise platforms.
          </p>
        </div>

        {/* ── Impact numbers ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {impactStats.map((s) => (
            <div key={s.label}
              className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-4 text-center hover:border-accent/20 transition-all duration-300">
              <p className="font-doto font-bold text-2xl bg-clip-text text-transparent"
                style={{ backgroundImage: ACCENT_GRAD }}>
                {s.val}
              </p>
              <p className="font-space text-[11px] text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Vertical Timeline ── */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-5 top-6 bottom-6 w-px pointer-events-none"
            style={{ background: "linear-gradient(to bottom, hsl(258 90% 68% / 0.5), hsl(258 90% 68% / 0.15), transparent)" }} />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={exp.company + exp.title} className="relative flex gap-5">

                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0 w-10 flex flex-col items-center pt-5">
                  <div className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    exp.status === "Current"
                      ? "border-accent bg-accent/15"
                      : "border-white/20 bg-card/80"
                  }`}>
                    <Building2 className={`w-4 h-4 ${exp.status === "Current" ? "text-accent" : "text-muted-foreground"}`} />
                    {exp.status === "Current" && (
                      <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                    )}
                  </div>
                  {/* Step number */}
                  <span className="font-doto text-[10px] text-muted-foreground/50 mt-2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <div className="flex-1 pb-6 cursor-pointer group" onClick={() => open(exp)}>
                  <div className={`rounded-2xl border bg-card/50 backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${
                    exp.status === "Current"
                      ? "border-accent/25 hover:border-accent/40"
                      : "border-white/[0.07] hover:border-white/[0.14]"
                  }`}
                    style={exp.status === "Current" ? {
                      background: "linear-gradient(135deg, hsl(258 90% 68% / 0.04), transparent)"
                    } : undefined}>

                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="space-y-1">
                        {/* Status + type badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          {exp.status === "Current" ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400 font-space">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-medium text-blue-400 font-space">
                              Completed
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] text-muted-foreground font-space">
                            {exp.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-bitcount font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </h2>

                        {/* Company + meta */}
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="text-accent font-semibold font-space">@ {exp.company}</span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground font-space">
                            <Calendar className="w-3 h-3" />
                            <span className="font-doto">{exp.period}</span>
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground font-space">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ChevronRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                    </div>

                    {/* Description */}
                    <p className="font-space text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Key achievements (first 3) */}
                    <div className="space-y-1.5 mb-4">
                      {exp.achievements.slice(0, 3).map((a) => (
                        <div key={a} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent/60 flex-shrink-0 mt-0.5" />
                          <span className="font-space text-xs text-muted-foreground">{a}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {exp.technologies.slice(0, 6).map((t) => (
                        <span key={t}
                          className="px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] text-foreground/70 font-space hover:border-accent/30 hover:text-accent transition-all duration-200">
                          {t}
                        </span>
                      ))}
                      {exp.technologies.length > 6 && (
                        <span className="px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] text-muted-foreground font-space">
                          +{exp.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                      <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-space">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-accent/50" />
                          {exp.achievements.length} achievements
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-3 h-3 text-accent/50" />
                          {exp.impact.length} key impacts
                        </span>
                        {exp.links?.map((l) => (
                          <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-accent hover:underline">
                            <ExternalLink className="w-3 h-3" />
                            {l.label}
                          </a>
                        ))}
                      </div>
                      <span className="text-[11px] text-accent font-space font-medium group-hover:underline">
                        View details →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Summary stats ── */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { val: experiences.length,                                           label: "Positions" },
            { val: "8+",                                                         label: "Months XP" },
            { val: experiences.filter((e) => e.status === "Current").length,    label: "Active now" },
          ].map((s) => (
            <div key={s.label}
              className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-4 md:p-6 text-center hover:border-accent/20 hover:scale-105 transition-all duration-300">
              <p className="font-doto font-bold text-2xl md:text-3xl bg-clip-text text-transparent"
                style={{ backgroundImage: ACCENT_GRAD }}>
                {s.val}
              </p>
              <p className="font-space text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </div>

      <ExperienceDetailModal isOpen={isModalOpen} onClose={close} experience={selectedExperience} />
    </div>
  );
}
