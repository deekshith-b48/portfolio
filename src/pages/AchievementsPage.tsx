import { Trophy, CheckCircle2, Star } from "lucide-react";
import { TechTag } from "@/components/TechTag";
import { AchievementDetailModal } from "@/components/AchievementDetailModal";
import { ResumeDownload } from "@/components/ResumeDownload";
import { useState } from "react";

interface Achievement {
  id: string;
  title: string;
  organization: string;
  type: "hackathon" | "opensource" | "contribution";
  date: string;
  status: "Winner" | "Finalist" | "Participant" | "Contributor";
  description: string;
  detailedDescription: string;
  technologies: string[];
  links?: { label: string; url: string }[];
  highlights: string[];
  impact: string[];
  icon: string;
  featured?: boolean;
}

const achievements: Achievement[] = [
  {
    id: "sih-2024",
    title: "SIH Runner-Up — Smart India Hackathon 2024",
    organization: "Government of India",
    type: "hackathon",
    date: "Dec 2024",
    status: "Winner",
    description: "Runner-Up at Smart India Hackathon 2024 — Top 0.004% of 52,000+ teams nationwide.",
    detailedDescription: "Achieved Runner-Up position at India's largest hackathon, placing in the top 0.004% of over 52,000 competing teams. Demonstrated exceptional problem-solving and full-stack development skills on a national stage.",
    technologies: ["Python", "C++", "Security Analysis", "Fuzzing", "Crash Triaging", "Code Coverage"],
    links: [
      { label: "ZeroHack GitHub", url: "https://github.com/deekshith-b48/ZeroHack" }
    ],
    highlights: [
      "🥈 Runner-Up among 52,000+ competing teams nationwide",
      "🌟 Top 0.004% of all SIH 2024 participants",
      "🔒 Built advanced security tooling for national judges",
      "📊 Achieved 85% code coverage in testing",
      "📈 Improved vulnerability detection by 40%",
      "🤝 Led a cross-functional team under time pressure"
    ],
    impact: [
      "Recognised at the national level by Government of India",
      "Demonstrated advanced full-stack and security skills",
      "Contributed to open-source cybersecurity research",
      "Placed in top 0.004% of 52K+ teams"
    ],
    icon: "🇮🇳",
    featured: true
  },
  {
    id: "gssoc-2024",
    title: "GSSoC 2024 — 15+ PRs Merged, Campus Ambassador",
    organization: "GirlScript Foundation",
    type: "opensource",
    date: "May - Aug 2024",
    status: "Contributor",
    description: "Active contributor and Campus Ambassador at GirlScript Summer of Code 2024 with 15+ merged pull requests.",
    detailedDescription: "Participated in one of India's largest open-source programs as both an active contributor and Campus Ambassador. Merged 15+ pull requests across multiple repositories, represented the program on campus, and helped onboard peers to open-source development.",
    technologies: ["JavaScript", "React", "Python", "HTML/CSS", "Git", "Open Source"],
    links: [
      { label: "GSSoC Profile", url: "https://gssoc.girlscript.tech/" }
    ],
    highlights: [
      "📝 15+ pull requests merged across multiple repositories",
      "🎓 Served as Campus Ambassador, promoting open-source on campus",
      "🌟 Maintained 95% code review approval rate",
      "👥 Collaborated with 50+ contributors globally",
      "🔧 Fixed critical bugs in popular open-source repositories",
      "📚 Improved documentation for broader accessibility"
    ],
    impact: [
      "Promoted open-source culture on campus as Ambassador",
      "Improved multiple open-source projects with merged PRs",
      "Enhanced code quality and documentation",
      "Contributed to the global developer community"
    ],
    icon: "👩‍💻",
    featured: true
  },
  {
    id: "coding-club-lead",
    title: "Coding Club Lead",
    organization: "Cambridge Institute of Technology",
    type: "contribution",
    date: "2023 - 2025",
    status: "Contributor",
    description: "Led the college Coding Club — organised 3 technical workshops and mentored 100+ peers in programming and development.",
    detailedDescription: "Served as Coding Club Lead at Cambridge Institute of Technology, driving technical growth across the student community. Organised and conducted 3 hands-on workshops covering modern web development, DSA, and open-source contribution, directly mentoring 100+ peers.",
    technologies: ["JavaScript", "React", "Node.js", "DSA", "Git", "Open Source"],
    links: [],
    highlights: [
      "🎤 Organised 3 technical workshops for the college community",
      "👥 Mentored 100+ peers in programming and web development",
      "🚀 Introduced students to open-source contribution practices",
      "📚 Covered DSA, full-stack dev, and modern tooling in sessions",
      "🏫 Built a collaborative technical culture at the college"
    ],
    impact: [
      "Mentored 100+ students in software development",
      "Strengthened the technical community at CIT",
      "Increased student participation in hackathons and open source",
      "Delivered 3 impactful hands-on technical workshops"
    ],
    icon: "🏫"
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming — LeetCode & HackerRank",
    organization: "LeetCode / HackerRank",
    type: "contribution",
    date: "Ongoing",
    status: "Contributor",
    description: "Consistent competitive programmer with 500+ LeetCode problems solved and 5-star HackerRank rating.",
    detailedDescription: "Demonstrated strong problem-solving skills and algorithmic thinking through consistent performance on competitive programming platforms. Maintained high accuracy and solved complex data structure and algorithm problems regularly.",
    technologies: ["Java", "Python", "JavaScript", "Data Structures", "Algorithms", "Problem Solving"],
    links: [
      { label: "LeetCode Profile", url: "https://leetcode.com/" },
      { label: "HackerRank Profile", url: "https://www.hackerrank.com/" }
    ],
    highlights: [
      "💯 500+ problems solved on LeetCode",
      "⭐ 5-star rating on HackerRank",
      "🏅 Top 10% in multiple contests",
      "🧠 Strong in dynamic programming and graph algorithms",
      "📈 Consistent daily coding practice"
    ],
    impact: [
      "Developed strong algorithmic thinking",
      "Improved problem-solving efficiency",
      "Enhanced coding interview readiness",
      "Built systematic approach to complex problems"
    ],
    icon: "💻"
  }
];

const ACCENT_GRAD = "linear-gradient(135deg, hsl(258 90% 78%), hsl(200 90% 68%))";

function stripEmoji(text: string): string {
  return text.replace(/[\u{1F300}-\u{1FFFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F1FF}\u{1F200}-\u{1F2FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]/gu, "").trim();
}

export function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  const featuredAchievement = achievements.find((a) => a.id === "sih-2024")!;
  const secondFeatured = achievements.find((a) => a.id === "gssoc-2024")!;
  const regularAchievements = achievements.filter(
    (a) => a.id !== "sih-2024" && a.id !== "gssoc-2024"
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-8 md:space-y-14">

        {/* Resume Download */}
        <ResumeDownload />

        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">01 —</span>
            <span className="section-badge"><Trophy className="w-3 h-3" />Recognition & Awards</span>
          </div>
          <h1 className="font-bitcount page-heading">Achievements</h1>
          <p className="font-space text-sm text-muted-foreground max-w-2xl leading-relaxed">
            National hackathon recognition, open-source contributions, and community leadership.
          </p>
        </div>

        {/* FEATURED: SIH Runner-Up — full-width glowing card */}
        <div
          className="relative rounded-2xl border border-violet-500/40 overflow-hidden cursor-pointer group transition-all duration-300 hover:border-violet-400/60 hover:shadow-[0_0_48px_0_hsl(258_90%_78%_/_0.18)]"
          onClick={() => handleAchievementClick(featuredAchievement)}
        >
          {/* Gradient accent background overlay */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ background: ACCENT_GRAD }}
          />
          {/* Glow edge */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-violet-500/20" />

          <div className="relative z-10 p-6 md:p-8 lg:p-10 space-y-6">
            {/* Top row */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-medium font-space uppercase tracking-wider"
                    style={{ background: "hsl(258 90% 78% / 0.12)", borderColor: "hsl(258 90% 78% / 0.35)", color: "hsl(258 90% 82%)" }}>
                    <Star className="w-3 h-3" /> Featured · Hackathon
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] font-medium text-yellow-400 font-space">
                    Runner-Up
                  </span>
                </div>
                <h2 className="font-bitcount font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                  {featuredAchievement.title}
                </h2>
                <p className="font-space text-sm text-muted-foreground">{featuredAchievement.organization}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-doto font-bold text-4xl md:text-5xl bg-clip-text text-transparent block" style={{ backgroundImage: ACCENT_GRAD }}>
                  #2
                </span>
                <span className="font-doto text-xs text-muted-foreground/60 tracking-widest uppercase block mt-0.5">
                  {featuredAchievement.date}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="font-space text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
              {featuredAchievement.description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {featuredAchievement.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-violet-400" />
                  <span className="font-space text-xs text-muted-foreground leading-relaxed">{stripEmoji(h)}</span>
                </div>
              ))}
            </div>

            {/* Footer row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.06]">
              <div className="flex flex-wrap gap-1.5">
                {featuredAchievement.technologies.map((tech) => (
                  <TechTag key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </TechTag>
                ))}
              </div>
              <span className="font-space text-xs text-violet-400 group-hover:underline cursor-pointer">
                View Details →
              </span>
            </div>
          </div>
        </div>

        {/* SECOND FEATURED: GSSoC — slightly smaller prominent card */}
        <div
          className="relative rounded-2xl border border-white/[0.09] bg-card/50 backdrop-blur-sm overflow-hidden cursor-pointer group transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
          onClick={() => handleAchievementClick(secondFeatured)}
        >
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: ACCENT_GRAD }} />

          <div className="relative z-10 p-6 md:p-8 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-medium font-space uppercase tracking-wider"
                    style={{ background: "hsl(200 90% 68% / 0.10)", borderColor: "hsl(200 90% 68% / 0.30)", color: "hsl(200 90% 72%)" }}>
                    <Star className="w-3 h-3" /> Featured · Open Source
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-medium text-violet-400 font-space">
                    Contributor
                  </span>
                </div>
                <h2 className="font-bitcount font-bold text-xl md:text-2xl text-foreground leading-tight">
                  {secondFeatured.title}
                </h2>
                <p className="font-space text-sm text-muted-foreground">{secondFeatured.organization}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-doto font-bold text-3xl md:text-4xl bg-clip-text text-transparent block" style={{ backgroundImage: ACCENT_GRAD }}>
                  15+
                </span>
                <span className="font-doto text-xs text-muted-foreground/60 tracking-widest uppercase block mt-0.5">
                  {secondFeatured.date}
                </span>
              </div>
            </div>

            <p className="font-space text-sm text-muted-foreground leading-relaxed max-w-3xl">
              {secondFeatured.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {secondFeatured.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-sky-400" />
                  <span className="font-space text-xs text-muted-foreground leading-relaxed">{stripEmoji(h)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {secondFeatured.technologies.map((tech) => (
                  <TechTag key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </TechTag>
                ))}
              </div>
              <span className="font-space text-xs text-accent group-hover:underline cursor-pointer">
                View Details →
              </span>
            </div>
          </div>
        </div>

        {/* Regular achievements — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {regularAchievements.map((achievement) => {
            const statValue = achievement.id === "coding-club-lead" ? "100+" : "500+";
            const statLabel = achievement.id === "coding-club-lead" ? "Peers Mentored" : "Problems Solved";
            return (
              <div
                key={achievement.id}
                className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 md:p-6 hover:border-accent/20 transition-all duration-300 group cursor-pointer"
                onClick={() => handleAchievementClick(achievement)}
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-space text-[10px] uppercase tracking-wider text-muted-foreground/50 border border-white/[0.06] rounded-full px-2 py-0.5">
                        {achievement.type === "opensource" ? "Open Source" : achievement.type === "hackathon" ? "Hackathon" : "Contribution"}
                      </span>
                    </div>
                    <h3 className="font-bitcount font-bold text-lg text-foreground leading-tight line-clamp-2">
                      {achievement.title}
                    </h3>
                    <p className="font-space text-xs text-muted-foreground mt-1">{achievement.organization}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="font-doto font-bold text-2xl md:text-3xl bg-clip-text text-transparent block" style={{ backgroundImage: ACCENT_GRAD }}>
                      {statValue}
                    </span>
                    <span className="font-doto text-[9px] text-muted-foreground/50 tracking-wider uppercase block">
                      {statLabel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-space text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {achievement.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  {achievement.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-accent/60" />
                      <span className="font-space text-xs text-muted-foreground">{stripEmoji(h)}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                  <span className="font-doto text-xs text-muted-foreground/50 tracking-wider">{achievement.date}</span>
                  <span className="font-space text-xs text-accent group-hover:underline">View Details →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats row */}
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {[
            {
              value: String(achievements.filter((a) => a.status === "Winner").length),
              label: "Wins",
            },
            {
              value: String(achievements.filter((a) => a.type === "hackathon").length),
              label: "Hackathons",
            },
            {
              value: String(achievements.filter((a) => a.featured).length),
              label: "Featured",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-4 md:p-6 text-center hover:border-accent/20 transition-all duration-300"
            >
              <span
                className="font-doto font-bold text-2xl md:text-3xl bg-clip-text text-transparent block"
                style={{ backgroundImage: ACCENT_GRAD }}
              >
                {stat.value}
              </span>
              <span className="font-space text-xs text-muted-foreground mt-1 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Detail Modal */}
      <AchievementDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        achievement={selectedAchievement}
      />
    </div>
  );
}
