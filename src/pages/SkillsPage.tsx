import { Card, CardContent } from "@/components/ui/card";
import { SkillDetailModal } from "@/components/SkillDetailModal";
import { ResumeDownload } from "@/components/ResumeDownload";
import { useState } from "react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  Brain,
  Zap,
  ChevronRight,
  Layers,
  GitBranch,
  Shield,
  Network,
  Box,
  Lock,
  Link2,
  Bot,
  Radio,
  Search,
  ArrowLeftRight,
  Settings2,
  FileCode,
  Monitor,
  RefreshCw,
  Globe,
  KeyRound,
  LayoutTemplate,
  Cpu,
  CheckCircle2,
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  icon: any;
  accentColor: string;
  bgColor: string;
  description: string;
}

interface SkillItem {
  name: string;
  level: number;
  experience: string;
  projects?: number;
  icon: any;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "UI/UX · Responsive · Component architecture",
    icon: Monitor,
    accentColor: "text-violet-400",
    bgColor: "bg-violet-500/10 border-violet-500/20",
    skills: [
      { name: "React.js",    level: 95, experience: "2+ yrs",   projects: 15, icon: Code2 },
      { name: "Next.js",     level: 90, experience: "1+ yr",    projects: 10, icon: LayoutTemplate },
      { name: "TypeScript",  level: 90, experience: "1.5+ yrs", projects: 12, icon: FileCode },
      { name: "TailwindCSS", level: 90, experience: "1.5+ yrs", projects: 12, icon: Palette },
      { name: "Redux",       level: 80, experience: "1+ yr",    projects: 6,  icon: RefreshCw },
      { name: "Material-UI", level: 80, experience: "1+ yr",    projects: 5,  icon: Layers },
      { name: "HTML5/CSS3",  level: 95, experience: "2+ yrs",   projects: 20, icon: Globe },
    ],
  },
  {
    title: "Backend",
    description: "APIs · Auth · Real-time · Microservices",
    icon: Server,
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "Node.js",        level: 90, experience: "1.5+ yrs", projects: 10, icon: Server },
      { name: "Express.js",     level: 88, experience: "1.5+ yrs", projects: 8,  icon: Zap },
      { name: "RESTful APIs",   level: 92, experience: "1.5+ yrs", projects: 12, icon: ArrowLeftRight },
      { name: "GraphQL",        level: 70, experience: "8+ mos",   projects: 4,  icon: Network },
      { name: "WebSockets",     level: 85, experience: "1+ yr",    projects: 5,  icon: Radio },
      { name: "JWT / OAuth 2.0",level: 88, experience: "1+ yr",    projects: 8,  icon: KeyRound },
      { name: "RBAC",           level: 85, experience: "1+ yr",    projects: 6,  icon: Shield },
    ],
  },
  {
    title: "Languages",
    description: "Core programming language proficiency",
    icon: Code2,
    accentColor: "text-blue-400",
    bgColor: "bg-blue-500/10 border-blue-500/20",
    skills: [
      { name: "JavaScript (ES2022+)", level: 92, experience: "2+ yrs",   projects: 15, icon: Code2 },
      { name: "TypeScript",           level: 90, experience: "1.5+ yrs", projects: 12, icon: FileCode },
      { name: "Python (AI)",          level: 85, experience: "1.5+ yrs", projects: 8,  icon: Cpu },
      { name: "Java",                 level: 78, experience: "1+ yr",    projects: 5,  icon: Code2 },
      { name: "SQL",                  level: 82, experience: "1+ yr",    projects: 10, icon: Database },
    ],
  },
  {
    title: "Databases",
    description: "Storage · Caching · Indexing · Optimisation",
    icon: Database,
    accentColor: "text-orange-400",
    bgColor: "bg-orange-500/10 border-orange-500/20",
    skills: [
      { name: "PostgreSQL",              level: 88, experience: "1+ yr", projects: 6, icon: Database },
      { name: "MongoDB",                 level: 85, experience: "1+ yr", projects: 8, icon: Database },
      { name: "MySQL",                   level: 80, experience: "1+ yr", projects: 6, icon: Database },
      { name: "Redis (TTL, cache-aside)", level: 85, experience: "1+ yr", projects: 5, icon: Zap },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "AWS · Docker · Kubernetes · CI/CD",
    icon: Cloud,
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 80, experience: "1+ yr",  projects: 5,  icon: Cloud },
      { name: "Docker",                level: 82, experience: "1+ yr",  projects: 6,  icon: Box },
      { name: "Kubernetes",            level: 70, experience: "6+ mos", projects: 3,  icon: Network },
      { name: "CI/CD",                 level: 80, experience: "1+ yr",  projects: 6,  icon: RefreshCw },
      { name: "Nginx",                 level: 75, experience: "8+ mos", projects: 4,  icon: Globe },
      { name: "Azure",                 level: 68, experience: "6+ mos", projects: 2,  icon: Cloud },
      { name: "Git",                   level: 92, experience: "2+ yrs", projects: 25, icon: GitBranch },
    ],
  },
  {
    title: "AI & LLM",
    description: "LangChain · OpenAI · Agent pipelines",
    icon: Brain,
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/10 border-purple-500/20",
    skills: [
      { name: "LangChain",    level: 82, experience: "8+ mos", projects: 3, icon: Link2 },
      { name: "OpenAI API",   level: 88, experience: "8+ mos", projects: 5, icon: Bot },
      { name: "Python AI/ML", level: 85, experience: "1+ yr",  projects: 6, icon: Cpu },
    ],
  },
  {
    title: "System Design",
    description: "Scalability · Performance · Auth patterns",
    icon: Settings2,
    accentColor: "text-amber-400",
    bgColor: "bg-amber-500/10 border-amber-500/20",
    skills: [
      { name: "REST API Design",           level: 92, experience: "1.5+ yrs", projects: 12, icon: ArrowLeftRight },
      { name: "Redis Caching",             level: 85, experience: "1+ yr",    projects: 5,  icon: Zap },
      { name: "DB Indexing & Optimisation",level: 82, experience: "1+ yr",    projects: 5,  icon: Search },
      { name: "Real-time (WebSockets/SSE)",level: 85, experience: "1+ yr",    projects: 4,  icon: Radio },
      { name: "Microservices",             level: 75, experience: "8+ mos",   projects: 3,  icon: Network },
      { name: "Auth & AuthZ Patterns",     level: 88, experience: "1+ yr",    projects: 8,  icon: Lock },
    ],
  },
];

const methodologies = [
  { label: "Agile / Scrum",          icon: RefreshCw },
  { label: "Test-Driven Dev",        icon: CheckCircle2 },
  { label: "Clean Code",             icon: Code2 },
  { label: "RESTful Design",         icon: ArrowLeftRight },
  { label: "Responsive Design",      icon: Monitor },
  { label: "CI/CD Automation",       icon: GitBranch },
];

function ProficiencyBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="relative h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
      <div
        className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${color}`}
        style={{ width: `${level}%` }}
      />
    </div>
  );
}

const barColorMap: Record<string, string> = {
  "text-violet-400": "bg-gradient-to-r from-violet-500 to-violet-400",
  "text-emerald-400": "bg-gradient-to-r from-emerald-500 to-emerald-400",
  "text-blue-400":   "bg-gradient-to-r from-blue-500 to-blue-400",
  "text-orange-400": "bg-gradient-to-r from-orange-500 to-orange-400",
  "text-cyan-400":   "bg-gradient-to-r from-cyan-500 to-cyan-400",
  "text-purple-400": "bg-gradient-to-r from-purple-500 to-purple-400",
  "text-amber-400":  "bg-gradient-to-r from-amber-500 to-amber-400",
};

export function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category: SkillCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const totalTech = skillCategories.reduce((s, c) => s + c.skills.length, 0);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 space-y-8 md:space-y-12">

        <ResumeDownload />

        {/* ── Header ── */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">01 —</span>
            <span className="section-badge"><Code2 className="w-3 h-3" />Skills</span>
          </div>
          <h1 className="font-bitcount page-heading">Skills & Technologies</h1>
          <p className="font-space text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Full-stack toolkit spanning frontend, backend, cloud, databases, and AI — built through real-world products.
          </p>
        </div>

        {/* ── Summary stats ── */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { val: `${totalTech}+`, label: "Technologies", icon: Code2 },
            { val: "8+",  label: "Months XP",    icon: Zap },
            { val: "7",   label: "Skill Domains", icon: Layers },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-4 flex flex-col items-center gap-1 text-center"
              >
                <Icon className="w-4 h-4 text-accent mb-1" />
                <span
                  className="font-doto text-xl md:text-2xl font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, hsl(258 90% 78%), hsl(200 90% 68%))" }}
                >
                  {s.val}
                </span>
                <span className="font-space text-xs text-muted-foreground">{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* ── Category cards grid ── */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const CatIcon = category.icon;
            const barColor = barColorMap[category.accentColor];
            const topSkills = [...category.skills].sort((a, b) => b.level - a.level).slice(0, 3);
            const avgLevel = Math.round(
              category.skills.reduce((s, sk) => s + sk.level, 0) / category.skills.length
            );

            return (
              <div
                key={category.title}
                className="group relative rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 cursor-pointer hover:border-accent/25 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_hsl(258_90%_68%/0.12)]"
                onClick={() => handleCategoryClick(category)}
              >
                {/* Top glow on hover */}
                <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-lg border ${category.bgColor} flex-shrink-0`}>
                    <CatIcon className={`w-4 h-4 ${category.accentColor}`} />
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 mt-1 flex-shrink-0" />
                </div>

                <h3 className={`text-sm font-bold mb-0.5 group-hover:${category.accentColor} transition-colors duration-200`}>
                  {category.title}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Top 3 skills */}
                <div className="space-y-2.5 mb-4">
                  {topSkills.map((skill) => {
                    const SkIcon = skill.icon;
                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <SkIcon className={`w-3 h-3 flex-shrink-0 ${category.accentColor} opacity-70`} />
                            <span className="text-[11px] font-medium text-foreground/80 truncate">{skill.name}</span>
                          </div>
                          <span className={`text-[10px] font-semibold ${category.accentColor} flex-shrink-0 ml-2`}>
                            {skill.level}%
                          </span>
                        </div>
                        <ProficiencyBar level={skill.level} color={barColor} />
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    {category.skills.length} skills
                  </span>
                  <span className={`font-semibold ${category.accentColor}`}>
                    ~{avgLevel}% avg
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── All technologies tag cloud ── */}
        <div className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-6 space-y-5">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-foreground">All Technologies</h3>
            <span className="ml-auto text-xs text-muted-foreground">{totalTech} total</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => {
                const SkIcon = skill.icon;
                const tier =
                  skill.level >= 88 ? "expert" :
                  skill.level >= 78 ? "proficient" : "familiar";
                const tierStyle =
                  tier === "expert"
                    ? "border-accent/30 bg-accent/8 text-foreground"
                    : tier === "proficient"
                    ? "border-white/[0.09] bg-white/[0.04] text-foreground/80"
                    : "border-white/[0.06] bg-transparent text-muted-foreground";

                return (
                  <span
                    key={`${cat.title}-${skill.name}`}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all duration-200 hover:border-accent/30 hover:text-foreground cursor-default ${tierStyle}`}
                  >
                    <SkIcon className={`w-3 h-3 flex-shrink-0 ${cat.accentColor} opacity-80`} />
                    {skill.name}
                  </span>
                );
              })
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 pt-1 border-t border-white/[0.05]">
            <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">Proficiency</span>
            {[
              { label: "Expert (88%+)",    style: "border-accent/30 bg-accent/8 text-foreground" },
              { label: "Proficient (78%+)", style: "border-white/[0.09] bg-white/[0.04] text-foreground/70" },
              { label: "Familiar",          style: "border-white/[0.06] text-muted-foreground" },
            ].map((t) => (
              <span key={t.label} className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] border ${t.style}`}>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Methodologies ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-foreground">Development Practices</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {methodologies.map(({ label, icon: MIcon }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-white/[0.07] bg-card/50 hover:border-accent/25 hover:bg-accent/5 transition-all duration-200 cursor-default text-center"
              >
                <MIcon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <SkillDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        category={selectedCategory}
      />
    </div>
  );
}
