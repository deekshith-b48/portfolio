import { GraduationCap, MapPin, BookOpen, Trophy, Target, Sparkles, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { ResumeDownload } from "@/components/ResumeDownload";
import { useState } from "react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  status: "Current" | "Completed";
  description: string;
  detailedDescription: string;
  coursework: string[];
  achievements: string[];
  projects: string[];
  skills: string[];
  icon: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering – Computer Science",
    institution: "Cambridge Institute of Technology",
    location: "Bengaluru, Karnataka",
    period: "Aug 2022 - May 2026",
    cgpa: "8.4 / 10.0",
    status: "Current",
    description: "Pursuing comprehensive education in Computer Science with hands-on experience in software development, algorithms, and modern web technologies.",
    detailedDescription: "Currently pursuing a Bachelor's degree in Computer Science Engineering with a focus on practical software development skills. The curriculum combines theoretical foundations with hands-on projects, preparing for real-world software engineering challenges. Active involvement in coding competitions, hackathons, and technical communities.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Technologies",
      "Object-Oriented Programming",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Artificial Intelligence",
      "Cybersecurity"
    ],
    achievements: [
      "Maintained CGPA of 8.4 / 10.0 throughout the program",
      "SIH Runner-Up — Top 0.004% of 52,000+ teams",
      "GSSoC 2024 — 15+ PRs merged, Campus Ambassador",
      "Coding Club Lead — 3 workshops, 100+ peers mentored",
      "Certs: Full-Stack (Internshala), Figma UX, Postman, Git"
    ],
    projects: [
      "PoliGap — AI Policy Compliance & Governance Platform",
      "AEGIS — AI Cybercrime Interdiction Mobile Platform",
      "ZeroHack — AI Network Threat Detection System",
      "CodeWhisperer — AI Developer Assistant",
      "SocialSpark — Social Media Platform",
      "Sentiment Analysis Web Application"
    ],
    skills: [
      "Problem Solving & Logical Thinking",
      "Software Development Life Cycle",
      "Team Collaboration & Leadership",
      "Research & Documentation",
      "Technical Presentation Skills",
      "Project Management"
    ],
    icon: "🎓"
  }
];

const ACCENT_GRAD = "linear-gradient(135deg, hsl(258 90% 78%), hsl(200 90% 68%))";

interface EducationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  education: EducationItem | null;
}

function EducationDetailModal({ isOpen, onClose, education }: EducationDetailModalProps) {
  if (!education) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">{education.icon}</div>
            <div className="flex-1 space-y-2">
              <DialogTitle className="font-bitcount text-xl font-bold text-left leading-tight">
                {education.degree}
              </DialogTitle>
              <div className="space-y-1">
                <div className="font-bitcount text-accent font-medium">
                  {education.institution}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-space">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {education.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {education.location}
                  </div>
                  <span className="font-doto text-xs border border-white/[0.1] rounded-full px-2 py-0.5 text-muted-foreground">
                    CGPA: {education.cgpa}
                  </span>
                  {education.status === "Current" && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400 font-space">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Active
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div>
            <h4 className="font-bitcount font-semibold text-accent mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Overview
            </h4>
            <p className="font-space text-sm text-muted-foreground leading-relaxed">
              {education.detailedDescription}
            </p>
          </div>

          <div>
            <h4 className="font-bitcount font-semibold text-accent mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Relevant Coursework
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {education.coursework.map((course, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-card/50 border border-border/50 font-space">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bitcount font-semibold text-accent mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Academic Achievements
            </h4>
            <div className="space-y-2">
              {education.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 text-sm p-3 rounded-lg bg-accent/5 border border-accent/20 font-space">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bitcount font-semibold text-accent mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Academic Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {education.projects.map((project, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-card/50 border border-border/50 font-space">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>{project}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bitcount font-semibold text-accent mb-3">Skills Developed</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {education.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground font-space">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function EducationPage() {
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEducationClick = (education: EducationItem) => {
    setSelectedEducation(education);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEducation(null);
  };

  const edu = educationData[0];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-8 md:space-y-14">

        {/* Resume Download */}
        <ResumeDownload />

        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">02 —</span>
            <span className="section-badge"><GraduationCap className="w-3 h-3" />Academic Background</span>
          </div>
          <h1 className="font-bitcount page-heading">Education</h1>
          <p className="font-space text-sm text-muted-foreground max-w-2xl leading-relaxed">
            B.E. Computer Science Engineering · CGPA 8.4 / 10 · Expected 2026
          </p>
        </div>

        {/* Hero Education Card */}
        <div
          className="relative rounded-2xl border border-white/[0.09] bg-card/50 backdrop-blur-sm overflow-hidden cursor-pointer group transition-all duration-300 hover:border-accent/25 hover:shadow-xl hover:shadow-accent/5"
          onClick={() => handleEducationClick(edu)}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ background: ACCENT_GRAD }} />

          <div className="relative z-10 p-6 md:p-8 lg:p-10">
            {/* Top: institution meta */}
            <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
              <div className="space-y-2 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400 font-space">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Active
                  </span>
                  <span className="font-space text-[10px] uppercase tracking-wider text-muted-foreground/50 border border-white/[0.06] rounded-full px-2 py-0.5">
                    Undergraduate
                  </span>
                </div>
                <h2 className="font-bitcount font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                  {edu.institution}
                </h2>
                <p className="font-bitcount text-base md:text-lg text-muted-foreground">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="font-space text-xs text-muted-foreground/70 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />{edu.location}
                  </span>
                </div>
              </div>

              {/* CGPA — large font-doto */}
              <div className="shrink-0 text-right">
                <span
                  className="font-doto font-bold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent block leading-none"
                  style={{ backgroundImage: ACCENT_GRAD }}
                >
                  8.4
                </span>
                <span className="font-doto text-xs text-muted-foreground/50 tracking-widest uppercase block mt-1">
                  CGPA / 10.0
                </span>
              </div>
            </div>

            {/* Period — prominent date display */}
            <div className="flex items-center gap-3 mb-8 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] w-fit">
              <Calendar className="w-4 h-4 text-muted-foreground/50" />
              <span className="font-doto text-sm tracking-wider text-muted-foreground/80">{edu.period}</span>
            </div>

            {/* Description */}
            <p className="font-space text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mb-2">
              {edu.description}
            </p>
          </div>
        </div>

        {/* 3-column bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

          {/* Left (2-col): Coursework pill grid */}
          <div className="md:col-span-2 rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 md:p-6 hover:border-accent/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-3.5 h-3.5 text-accent/70" />
              <h3 className="font-bitcount font-bold text-lg text-foreground">Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="font-space text-xs px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-muted-foreground hover:border-accent/30 hover:text-foreground transition-all duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Right (1-col): Key achievements */}
          <div className="md:col-span-1 rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 md:p-6 hover:border-accent/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-3.5 h-3.5 text-accent/70" />
              <h3 className="font-bitcount font-bold text-lg text-foreground">Highlights</h3>
            </div>
            <ul className="space-y-3">
              {edu.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="w-4 h-4 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-[9px] font-doto font-bold"
                    style={{ background: ACCENT_GRAD, color: "#fff" }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-space text-xs text-muted-foreground leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Projects — horizontal scroll pills */}
        <div className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 md:p-6 hover:border-accent/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-3.5 h-3.5 text-accent/70" />
            <h3 className="font-bitcount font-bold text-lg text-foreground">Academic Projects</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none" style={{ scrollbarWidth: "none" }}>
            {edu.projects.map((project) => {
              const [name, subtitle] = project.split(" — ");
              return (
                <div
                  key={project}
                  className="shrink-0 flex flex-col gap-0.5 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 cursor-default"
                >
                  <span className="font-bitcount font-bold text-sm text-foreground whitespace-nowrap">{name}</span>
                  {subtitle && (
                    <span className="font-space text-[10px] text-muted-foreground/60 whitespace-nowrap">{subtitle}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom mini stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {[
            { value: String(edu.coursework.length), label: "Courses" },
            { value: String(edu.achievements.length), label: "Achievements" },
            { value: String(edu.projects.length), label: "Projects" },
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

      {/* Education Detail Modal */}
      <EducationDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        education={selectedEducation}
      />
    </div>
  );
}
