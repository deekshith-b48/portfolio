import { ExternalLink, Award, Calendar, Shield, Sparkles, Trophy, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { TechTag } from "@/components/TechTag";
import { ResumeDownload } from "@/components/ResumeDownload";
import { useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
  skills: string[];
  description?: string;
  highlights?: string[];
  category: "development" | "ai" | "cloud" | "database" | "security" | "achievement";
  featured?: boolean;
}

const certifications: Certification[] = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    issuedDate: "Jul 2025",
    credentialId: "6321D67094DA",
    url: "https://www.hackerrank.com/certificates/6321d67094da",
    skills: ["React.js", "JavaScript", "Frontend Development"],
    description: "Recognizes successful completion of the HackerRank Frontend Developer (React) certification assessment. The test evaluated practical knowledge and coding skills essential for building dynamic, component-based user interfaces using React.",
    highlights: [
      "React component creation (functional & class-based)",
      "State and props management",
      "React hooks (useState, useEffect)",
      "Event handling and forms",
      "Conditional rendering and dynamic UI updates"
    ],
    category: "development",
    featured: true
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    issuedDate: "Jul 2025",
    credentialId: "77D3AC0C7864",
    url: "https://www.hackerrank.com/certificates/77d3ac0c7864",
    skills: ["SQL", "Software Engineering"],
    description: "Certification demonstrating proficiency in software engineering fundamentals including SQL database management and software development principles.",
    category: "development"
  },
  {
    title: "Certified Web Developer",
    issuer: "Internshala",
    issuedDate: "Dec 2023",
    url: "https://trainings.internshala.com/s/v/3229789/ea9497ac",
    skills: ["HTML5", "CSS3", "JavaScript", "Web Development"],
    description: "Comprehensive web development certification covering full-stack web development skills including frontend and backend technologies.",
    highlights: [
      "Responsive web design principles",
      "JavaScript fundamentals and DOM manipulation",
      "Backend development with Node.js",
      "Database integration and API development",
      "Project-based learning approach"
    ],
    category: "development",
    featured: true
  },
  {
    title: "UI/UX Design with Figma",
    issuer: "Design Institute",
    issuedDate: "Jun 2024",
    url: "https://design-institute.com/certificates/uiux-figma",
    skills: ["Figma", "UI/UX Design", "Prototyping"],
    description: "User interface and user experience design certification focusing on modern design principles and Figma tool proficiency.",
    highlights: [
      "Design thinking and user research",
      "Wireframing and prototyping",
      "Design systems and component libraries",
      "Collaboration and handoff workflows"
    ],
    category: "development"
  },
  {
    title: "Postman API Fundamentals Expert",
    issuer: "Postman",
    issuedDate: "Aug 2023",
    url: "https://api.postman.com/certificates/api-fundamentals-expert",
    skills: ["API Testing", "Postman", "REST APIs"],
    description: "Expert-level certification in API testing and development using Postman, covering advanced testing techniques and API workflows.",
    highlights: [
      "API testing methodologies",
      "Automated testing workflows",
      "Environment and variable management",
      "Advanced scripting and assertions"
    ],
    category: "development"
  },
  {
    title: "Samsung Innovation Lab Completion",
    issuer: "Samsung",
    issuedDate: "Ongoing",
    url: "https://samsung.com/innovation-campus/certificates",
    skills: ["AI", "IoT", "Innovation", "Deep Learning"],
    description: "Ongoing participation in Samsung's global innovation program focusing on cutting-edge AI and IoT technologies.",
    category: "ai",
    featured: true
  },
  {
    title: "From Relational Model (SQL) to MongoDB's Document Model",
    issuer: "MongoDB",
    issuedDate: "Apr 2025",
    skills: ["MongoDB", "NoSQL", "Database Design", "Document Model"],
    description: "MongoDB certification covering the transition from relational databases to document-based data models.",
    highlights: [
      "Understanding document-based data modeling",
      "Migration strategies from SQL to MongoDB",
      "Schema design principles for NoSQL",
      "Performance optimization techniques"
    ],
    category: "database",
    featured: true
  },
  {
    title: "MongoDB Schema Design Patterns and Antipatterns",
    issuer: "MongoDB",
    issuedDate: "Apr 2025",
    skills: ["MongoDB", "Schema Design", "Database Architecture", "Performance"],
    description: "Advanced MongoDB certification focusing on schema design patterns and best practices to avoid common antipatterns.",
    highlights: [
      "Advanced schema design patterns",
      "Identifying and avoiding antipatterns",
      "Performance optimization strategies",
      "Scalability considerations"
    ],
    category: "database",
    featured: true
  },
  {
    title: "NMIT HACKS 2025",
    issuer: "NMIT Hacks",
    issuedDate: "Apr 2025",
    credentialId: "fabe55ca-c7fd-4dca-b0e5-d0f2d7ce3263",
    skills: ["Hackathon", "Innovation", "Team Collaboration", "Problem Solving"],
    description: "Participation certificate for NMIT HACKS 2025 hackathon competition.",
    category: "achievement"
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    issuedDate: "Feb 2025",
    credentialId: "EQA4TXL52166",
    skills: ["Artificial Intelligence (AI)", "Responsible AI", "Prompt Engineering", "Machine Learning", "Generative AI Tools"],
    description: "Validates expertise in generative AI, productivity enhancement, prompt engineering, responsible AI use, and emerging trends. Gain hands-on experience, ethical AI insights, and a Google-recognized certification for career growth.",
    highlights: [
      "Generative AI fundamentals and applications",
      "Responsible AI principles and ethics",
      "Advanced prompt engineering techniques",
      "Machine learning concepts and tools",
      "Productivity enhancement with AI"
    ],
    category: "ai",
    featured: true
  },
  {
    title: "Google AI Essentials | Honor Badge",
    issuer: "Coursera",
    issuedDate: "Feb 2025",
    skills: ["AI", "Machine Learning", "Coursera", "Google Certification"],
    description: "Honor badge recognizing exceptional performance in the Google AI Essentials course on Coursera.",
    category: "ai"
  },
  {
    title: "Smart India Hackothon 2024 - FINALIST",
    issuer: "Smart India Hackathon",
    issuedDate: "Dec 2024",
    skills: ["Team Leadership", "Team Management", "Teamwork", "Cybersecurity Tools", "Cyber Security Risk", "Fuzzing"],
    description: "SIH 2024 | Participation Certificate — Worked on a Cybersecurity project using the Software Fuzzing method, enhancing problem-solving skills and teamwork capabilities.",
    highlights: [
      "National-level hackathon finalist",
      "Cybersecurity project development",
      "Software fuzzing implementation",
      "Team leadership and collaboration",
      "Advanced problem-solving methodologies"
    ],
    category: "achievement",
    featured: true
  }
];

const categoryMeta: Record<string, { label: string; color: string; dot: string }> = {
  development: { label: "Development", color: "bg-blue-500/15 text-blue-400 border-blue-500/25", dot: "bg-blue-400" },
  ai:          { label: "Artificial Intelligence", color: "bg-purple-500/15 text-purple-400 border-purple-500/25", dot: "bg-purple-400" },
  cloud:       { label: "Cloud", color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25", dot: "bg-cyan-400" },
  database:    { label: "Database", color: "bg-green-500/15 text-green-400 border-green-500/25", dot: "bg-green-400" },
  security:    { label: "Security", color: "bg-red-500/15 text-red-400 border-red-500/25", dot: "bg-red-400" },
  achievement: { label: "Achievements", color: "bg-orange-500/15 text-orange-400 border-orange-500/25", dot: "bg-orange-400" },
};

const categoryOrder: Array<Certification["category"]> = ["development", "ai", "database", "achievement", "cloud", "security"];

interface CertificationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: Certification | null;
}

function CertificationDetailModal({ isOpen, onClose, certification }: CertificationDetailModalProps) {
  if (!certification) return null;

  const meta = categoryMeta[certification.category] ?? categoryMeta.achievement;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4 max-h-[90vh] overflow-y-auto border border-white/[0.09] bg-card/80 backdrop-blur-xl">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-4">
            {/* Icon box */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(258 90% 78% / 0.25), hsl(200 90% 68% / 0.15))", border: "1px solid hsl(258 90% 78% / 0.2)" }}>
              <Award className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0 space-y-2">
              <DialogTitle className="font-bitcount text-lg font-bold text-left leading-tight text-foreground">
                {certification.title}
              </DialogTitle>
              <div className="font-bitcount text-sm font-semibold text-accent">{certification.issuer}</div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className={`font-space text-[10px] ${meta.color}`}>
                  {meta.label}
                </Badge>
                {certification.featured && (
                  <Badge variant="outline" className="font-space text-[10px] bg-accent/10 text-accent border-accent/20">
                    <Star className="w-2.5 h-2.5 mr-1" />
                    Featured
                  </Badge>
                )}
                <span className="font-doto text-xs text-muted-foreground/70 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {certification.issuedDate}
                </span>
              </div>
              {certification.credentialId && (
                <p className="font-doto text-[10px] text-muted-foreground/60 tracking-wide">
                  ID: {certification.credentialId}
                </p>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 mt-4">
          {certification.description && (
            <div className="space-y-2">
              <h4 className="font-bitcount text-xs font-semibold text-accent flex items-center gap-2 uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                Overview
              </h4>
              <p className="font-space text-xs text-muted-foreground leading-relaxed">
                {certification.description}
              </p>
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-bitcount text-xs font-semibold text-accent uppercase tracking-wide">Skills Covered</h4>
            <div className="flex flex-wrap gap-1.5">
              {certification.skills.map((skill) => (
                <TechTag key={skill} variant="secondary" className="font-space text-xs">
                  {skill}
                </TechTag>
              ))}
            </div>
          </div>

          {certification.highlights && certification.highlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-bitcount text-xs font-semibold text-accent flex items-center gap-2 uppercase tracking-wide">
                <Trophy className="w-3.5 h-3.5" />
                Key Topics
              </h4>
              <div className="space-y-1.5">
                {certification.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span className="font-space text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div>
              <p className="font-space text-[10px] text-muted-foreground/60 uppercase tracking-wide mb-0.5">Issued</p>
              <p className="font-doto text-xs text-foreground">{certification.issuedDate}</p>
            </div>
            <div>
              <p className="font-space text-[10px] text-muted-foreground/60 uppercase tracking-wide mb-0.5">Category</p>
              <p className="font-bitcount text-xs text-foreground capitalize">{certification.category}</p>
            </div>
            {certification.credentialId && (
              <div className="col-span-2">
                <p className="font-space text-[10px] text-muted-foreground/60 uppercase tracking-wide mb-0.5">Credential ID</p>
                <p className="font-doto text-xs text-foreground font-mono">{certification.credentialId}</p>
              </div>
            )}
          </div>

          {certification.url && (
            <Button
              variant="outline"
              asChild
              className="w-full font-space text-xs border-accent/30 hover:bg-accent hover:text-background hover:border-accent transition-all duration-200"
            >
              <a href={certification.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                <ExternalLink className="h-3.5 w-3.5" />
                View Certificate
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CertificationsPage() {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificationClick = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
  };

  // Group certifications by category, preserving categoryOrder
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      items: certifications.filter((c) => c.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-10 md:space-y-14">

        {/* Resume Download */}
        <ResumeDownload />

        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">01 —</span>
            <span className="section-badge">
              <Award className="w-3 h-3" />
              Professional Credentials
            </span>
          </div>
          <h1 className="font-bitcount page-heading">Certifications</h1>
          <p className="font-space text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Verified credentials across full-stack development, AI, databases, and design.
          </p>
        </div>

        {/* Category Groups */}
        <div className="space-y-10">
          {grouped.map(({ category, items }) => {
            const meta = categoryMeta[category] ?? categoryMeta.achievement;
            return (
              <div key={category} className="space-y-4">
                {/* Category label */}
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                  <span className={`font-space text-[10px] uppercase tracking-[0.25em] font-semibold px-2 py-0.5 rounded-full border ${meta.color}`}>
                    {meta.label}
                  </span>
                  <div className="flex-1 h-px bg-white/[0.05]" />
                  <span className="font-doto text-[10px] text-muted-foreground/40">{items.length}</span>
                </div>

                {/* Cards grid */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((cert) => (
                    <div
                      key={cert.title + cert.issuer}
                      onClick={() => handleCertificationClick(cert)}
                      className={[
                        "rounded-2xl border bg-card/50 backdrop-blur-sm p-5 transition-all duration-300 group cursor-pointer",
                        cert.featured
                          ? "border-accent/30 shadow-[0_0_24px_-4px_hsl(258_90%_78%_/_0.18)] hover:border-accent/50 hover:shadow-[0_0_32px_-4px_hsl(258_90%_78%_/_0.28)]"
                          : "border-white/[0.07] hover:border-accent/20",
                      ].join(" ")}
                    >
                      {/* Card top row */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          {cert.featured && (
                            <span className="inline-flex items-center gap-1 font-space text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
                              <Star className="w-2 h-2" />
                              Featured
                            </span>
                          )}
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" />
                      </div>

                      {/* Title + issuer */}
                      <h3 className="font-bitcount font-bold text-sm text-foreground leading-snug mb-1 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="font-bitcount text-xs text-accent/80 font-semibold mb-3">{cert.issuer}</p>

                      {/* Description */}
                      {cert.description && (
                        <p className="font-space text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                          {cert.description}
                        </p>
                      )}

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span key={skill} className="font-space text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="font-space text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-muted-foreground/50">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                        <div className="space-y-0.5">
                          <span className="font-doto text-[10px] text-muted-foreground/60 flex items-center gap-1">
                            <Calendar className="w-2.5 h-2.5" />
                            {cert.issuedDate}
                          </span>
                          {cert.credentialId && (
                            <span className="font-doto text-[9px] text-muted-foreground/40 block">
                              {cert.credentialId.length > 12 ? cert.credentialId.slice(0, 12) + "…" : cert.credentialId}
                            </span>
                          )}
                        </div>
                        {cert.url && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-7 w-7 p-0 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a href={cert.url} target="_blank" rel="noopener noreferrer" aria-label="View certificate">
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {[
            { value: certifications.length, label: "Total Certs" },
            { value: certifications.filter((c) => c.featured).length, label: "Featured" },
            { value: new Set(certifications.flatMap((c) => c.skills)).size, label: "Skills" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 text-center hover:border-accent/20 transition-all duration-300"
            >
              <div className="font-doto text-3xl font-bold text-accent mb-1">{value}</div>
              <div className="font-space text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <CertificationDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        certification={selectedCertification}
      />
    </div>
  );
}
