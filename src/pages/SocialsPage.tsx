import { useEffect, useRef } from "react";
import {
  Twitter, Linkedin, Github, ExternalLink,
  ArrowUpRight, Users, GitFork, Star,
  Code2, Brain, Shield, TrendingUp,
  CheckCircle2, MapPin,
} from "lucide-react";

const ACCENT_GRAD = "linear-gradient(135deg, hsl(258 90% 78%), hsl(200 90% 68%))";
const GH_USER = "deekshith-b48";
const GH_BG  = "0d0d14";
const GH_BORDER = "ffffff15";
const GH_ACCENT = "8b5cf6";
const GH_TEXT   = "6b7280";
const GH_NUM    = "e2e8f0";

/* ─── GitHub streak / stats image URLs ─── */
const streakUrl =
  `https://streak-stats.demolab.com/?user=${GH_USER}` +
  `&background=${GH_BG}&border=${GH_BORDER}&ring=${GH_ACCENT}` +
  `&fire=c4b5fd&currStreakLabel=${GH_ACCENT}&sideLabels=${GH_TEXT}` +
  `&currStreakNum=${GH_NUM}&dates=${GH_TEXT}&sideNums=${GH_NUM}&stroke=00000000`;

const statsUrl =
  `https://github-readme-stats.vercel.app/api?username=${GH_USER}` +
  `&show_icons=true&count_private=true&hide_title=false` +
  `&bg_color=${GH_BG}&title_color=${GH_ACCENT}&icon_color=${GH_ACCENT}` +
  `&text_color=${GH_TEXT}&border_color=${GH_BORDER}`;

const langsUrl =
  `https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USER}` +
  `&layout=compact&bg_color=${GH_BG}&title_color=${GH_ACCENT}` +
  `&text_color=${GH_TEXT}&border_color=${GH_BORDER}&langs_count=8`;

const activityUrl =
  `https://github-readme-activity-graph.vercel.app/graph?username=${GH_USER}` +
  `&bg_color=${GH_BG}&color=${GH_ACCENT}&line=${GH_ACCENT}` +
  `&point=c4b5fd&area=true&area_color=${GH_ACCENT}&border_color=${GH_BORDER}&hide_border=false`;


/* ─── LinkedIn badge ─── */
function LinkedInBadge() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!document.querySelector('script[src*="linkedin.com/badges"]')) {
      const s = document.createElement("script");
      s.src = "https://platform.linkedin.com/badges/js/profile.js";
      s.async = true; s.defer = true;
      document.head.appendChild(s);
    }
  }, []);
  return (
    <div ref={ref} className="flex justify-center">
      <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium"
        data-theme="dark" data-type="VERTICAL" data-vanity="deekshithb48" data-version="v1" />
    </div>
  );
}

/* ─── README profile card data ─── */
const competencies = [
  { Icon: Code2,     label: "Frontend",      tags: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { Icon: TrendingUp,label: "Backend",       tags: ["Node.js", "Express", "FastAPI", "PostgreSQL"] },
  { Icon: Brain,     label: "AI / ML",       tags: ["LangChain", "Scikit-learn", "spaCy", "OpenAI"] },
  { Icon: Shield,    label: "Web3 / Security",tags: ["Solidity", "Smart Contracts", "Threat Detection"] },
];

const currentFocus = [
  "Daily LeetCode problem-solving",
  "Legal-tech compliance platforms",
  "AI-powered cybersecurity systems",
  "Financial planning applications",
];

const platforms = [
  { label: "GitHub",   href: `https://github.com/${GH_USER}`,              color: "text-foreground/80" },
  { label: "LeetCode", href: "https://leetcode.com/deekshith-b48",         color: "text-yellow-400" },
  { label: "CodeChef", href: "https://www.codechef.com/users/deekshith_b48",color: "text-orange-400" },
  { label: "HackerRank",href:"https://www.hackerrank.com/deekshith_b48",   color: "text-green-400" },
  { label: "LinkedIn", href: "https://linkedin.com/in/deekshithb48",       color: "text-sky-400" },
];


/* ════════════════════════════ PAGE ════════════════════════════ */
export function SocialsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 space-y-8">

        {/* ── Header ── */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">
              01 —
            </span>
            <span className="section-badge">
              <Users className="w-3 h-3" />
              Social Presence
            </span>
          </div>
          <h1 className="font-bitcount page-heading">Socials</h1>
          <p className="font-space text-sm text-muted-foreground max-w-lg leading-relaxed">
            GitHub profile, LinkedIn updates, and live X feed — everything in one place.
          </p>
        </div>

        {/* ══════════════════════ GITHUB PROFILE README ══════════════════════ */}
        <section className="rounded-2xl border border-white/[0.07] bg-card/40 backdrop-blur-sm overflow-hidden">

          {/* Card header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
            <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center">
              <Github className="w-3.5 h-3.5 text-foreground/80" />
            </div>
            <div>
              <p className="font-bitcount font-bold text-sm text-foreground leading-none">
                GitHub Profile
              </p>
              <p className="text-[10px] text-muted-foreground font-space mt-0.5">
                github.com/{GH_USER} · README
              </p>
            </div>
            <a href={`https://github.com/${GH_USER}`} target="_blank" rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 text-[11px] text-muted-foreground hover:text-accent transition-colors font-space">
              View Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-5 md:p-6 space-y-6">

            {/* Bio row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
              <div className="flex-1 space-y-2">
                <h2 className="font-bitcount font-bold text-xl text-foreground">
                  Deekshith B Gowda
                </h2>
                <p className="font-space text-sm text-muted-foreground leading-relaxed max-w-xl">
                  Undergraduate CS student at Cambridge Institute of Technology (2022–2026), Bengaluru.
                  Specialising in{" "}
                  <span className="text-foreground font-medium">full-stack engineering</span>,{" "}
                  <span className="text-foreground font-medium">AI/ML</span>, and{" "}
                  <span className="text-foreground font-medium">Web3 / cybersecurity</span>.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-space pt-1">
                  <MapPin className="w-3.5 h-3.5 text-accent/60" />
                  Bengaluru, Karnataka, India
                </div>
              </div>

              {/* Platform chips */}
              <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                {platforms.map((p) => (
                  <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] font-space font-medium ${p.color} hover:border-accent/30 hover:bg-accent/[0.05] transition-all duration-200`}>
                    {p.label} <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Competencies grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {competencies.map(({ Icon, label, tags }) => (
                <div key={label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                    <span className="font-space font-semibold text-xs text-foreground/80">{label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((t) => (
                      <span key={t}
                        className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] text-muted-foreground font-space">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Current focus */}
            <div className="rounded-xl border border-accent/15 bg-accent/[0.04] p-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-doto text-[10px] text-accent tracking-[0.2em] uppercase">
                  Currently Building →
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {currentFocus.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent/70 flex-shrink-0 mt-0.5" />
                    <span className="font-space text-xs text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub stats images */}
            <div className="space-y-3">
              <p className="font-doto text-[10px] text-muted-foreground/60 tracking-[0.25em] uppercase">
                GitHub Stats
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {/* Streak stats */}
                <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-black/20">
                  <img src={streakUrl} alt="GitHub Streak" className="w-full" loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
                {/* General stats */}
                <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-black/20">
                  <img src={statsUrl} alt="GitHub Stats" className="w-full" loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
              </div>
              {/* Top languages */}
              <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-black/20">
                <img src={langsUrl} alt="Top Languages" className="w-full" loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
              {/* Activity graph */}
              <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-black/20">
                <img src={activityUrl} alt="GitHub Activity Graph" className="w-full" loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════ LINKEDIN POSTS ══════════════════════ */}
        <section className="rounded-2xl border border-white/[0.07] bg-card/40 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div>
              <p className="font-bitcount font-bold text-sm text-foreground leading-none">LinkedIn</p>
              <p className="text-[10px] text-muted-foreground font-space mt-0.5">deekshithb48</p>
            </div>
            <a href="https://linkedin.com/in/deekshithb48" target="_blank" rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 text-[11px] text-muted-foreground hover:text-accent transition-colors font-space">
              Connect <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Profile badge */}
          <div className="px-5 py-6 border-b border-white/[0.06]">
            <LinkedInBadge />
          </div>

          {/* Activity CTA */}
          <div className="px-5 py-5">
            <a href="https://www.linkedin.com/in/deekshithb48/recent-activity/all/"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between w-full rounded-xl border border-sky-500/20 bg-sky-500/[0.04] hover:bg-sky-500/[0.08] hover:border-sky-500/30 px-4 py-3.5 transition-all duration-200">
              <div className="space-y-0.5">
                <p className="font-space text-sm font-medium text-foreground/80">View recent activity</p>
                <p className="font-space text-xs text-muted-foreground">Posts, comments & reactions on LinkedIn</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 flex-shrink-0" />
            </a>
          </div>
        </section>

        {/* ══════════════════════ X / TWITTER ══════════════════════ */}
        <section className="rounded-2xl border border-white/[0.07] bg-card/40 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
            <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Twitter className="w-3.5 h-3.5 text-violet-400" />
            </div>
            <div>
              <p className="font-bitcount font-bold text-sm text-foreground leading-none">X / Twitter</p>
              <p className="text-[10px] text-muted-foreground font-space mt-0.5">@deekshith_b48</p>
            </div>
            <a href="https://twitter.com/deekshith_b48" target="_blank" rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 text-[11px] text-muted-foreground hover:text-accent transition-colors font-space">
              Follow <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="px-5 py-6 space-y-4">
            {/* Profile summary */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Twitter className="w-6 h-6 text-violet-400" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-bitcount font-bold text-base text-foreground">Deekshith B Gowda</p>
                <p className="font-space text-sm text-muted-foreground">@deekshith_b48</p>
                <p className="font-space text-xs text-muted-foreground/70 leading-relaxed pt-1">
                  Full-stack dev · AI/ML · Web3 · Building cool things 🚀
                </p>
              </div>
            </div>

            {/* What I post about */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Tech & Dev", desc: "Tips, tools, and code snippets" },
                { label: "Projects",   desc: "Building in public updates" },
                { label: "AI / ML",    desc: "Experiments & insights" },
                { label: "Career",     desc: "Learnings from internships" },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <p className="font-space text-xs font-semibold text-foreground/80">{label}</p>
                  <p className="font-space text-[11px] text-muted-foreground mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://x.com/deekshith_b48"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full rounded-xl border border-violet-500/20 bg-violet-500/[0.04] hover:bg-violet-500/[0.08] hover:border-violet-500/30 px-4 py-3.5 transition-all duration-200"
            >
              <div className="space-y-0.5">
                <p className="font-space text-sm font-medium text-foreground/80">Follow on X</p>
                <p className="font-space text-xs text-muted-foreground">See all tweets @deekshith_b48</p>
              </div>
              <ExternalLink className="w-4 h-4 text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 flex-shrink-0" />
            </a>
          </div>
        </section>

        {/* ══════════════════════ GITHUB STRIP ══════════════════════ */}
        <div className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm px-5 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 group hover:border-accent/20 transition-all duration-300">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.09] transition-colors">
              <Github className="w-5 h-5 text-foreground/80" />
            </div>
            <div>
              <p className="font-bitcount font-bold text-sm text-foreground">
                github.com/{GH_USER}
              </p>
              <p className="text-xs text-muted-foreground font-space mt-0.5 flex items-center gap-3">
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> Open source projects</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> Contributions & forks</span>
              </p>
            </div>
          </div>
          <a href={`https://github.com/${GH_USER}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-space text-foreground border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-200 flex-shrink-0">
            View GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
