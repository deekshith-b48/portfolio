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
    description: "SIH 2024 🏆 | Participation Certificate 🎓 - Worked on a Cybersecurity project using the Software Fuzzing method, enhancing problem-solving skills and teamwork capabilities.",
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

interface CertificationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: Certification | null;
}

function CertificationDetailModal({ isOpen, onClose, certification }: CertificationDetailModalProps) {
  if (!certification) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "ai":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "cloud":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "database":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "security":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🏆</div>
            <div className="flex-1 space-y-2">
              <DialogTitle className="text-lg font-bold text-left leading-tight">
                {certification.title}
              </DialogTitle>
              
              <div className="space-y-2">
                <div className="text-accent font-medium">
                  {certification.issuer}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={getCategoryColor(certification.category)}>
                    {certification.category}
                  </Badge>
                  {certification.featured && (
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {certification.issuedDate}
                  </div>
                </div>
                {certification.credentialId && (
                  <div className="text-xs text-muted-foreground">
                    ID: {certification.credentialId}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Description */}
          {certification.description && (
            <div>
              <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Overview
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {certification.description}
              </p>
            </div>
          )}

          {/* Skills */}
          <div>
            <h4 className="font-semibold text-accent mb-3">Skills Covered</h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill) => (
                <TechTag key={skill} variant="secondary" className="text-xs">
                  {skill}
                </TechTag>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {certification.highlights && certification.highlights.length > 0 && (
            <div>
              <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Key Topics Covered
              </h4>
              <div className="space-y-2">
                {certification.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm p-3 rounded-lg bg-card/50 border border-border/50">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certification Details */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
            <div>
              <div className="text-xs text-muted-foreground">Issued Date</div>
              <div className="text-sm font-medium">{certification.issuedDate}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Category</div>
              <div className="text-sm font-medium capitalize">{certification.category}</div>
            </div>
            {certification.credentialId && (
              <div className="col-span-2">
                <div className="text-xs text-muted-foreground">Credential ID</div>
                <div className="text-sm font-medium font-mono">{certification.credentialId}</div>
              </div>
            )}
          </div>

          {/* View Certificate */}
          {certification.url && (
            <div>
              <Button
                variant="outline"
                asChild
                className="w-full hover:bg-accent hover:text-background hover:border-accent"
              >
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Certificate
                </a>
              </Button>
            </div>
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "ai":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "cloud":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "database":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "security":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-6 md:space-y-12">
        
        {/* Resume Download Section */}
        <ResumeDownload />
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
            <Award className="w-3 h-3 md:w-4 md:h-4" />
            Professional Credentials
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Certifications
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional certifications and credentials that validate my technical expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <Card
              key={certification.title + certification.issuer}
              className="group cursor-pointer border-border/50 bg-card/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:scale-[1.02]"
              onClick={() => handleCertificationClick(certification)}
            >
              <CardContent className="p-4 md:p-6 space-y-4">
                
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="text-xl md:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    🏆
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm md:text-base font-bold group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {certification.title}
                      </h3>
                      {certification.featured && (
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-accent font-medium text-sm">
                        {certification.issuer}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className={getCategoryColor(certification.category)}>
                          {certification.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {certification.issuedDate}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>

                {/* Description */}
                {certification.description && (
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                    {certification.description}
                  </p>
                )}

                {/* Skills Preview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-accent">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {certification.skills.slice(0, 3).map((skill) => (
                      <TechTag key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </TechTag>
                    ))}
                    {certification.skills.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{certification.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="text-xs text-muted-foreground">
                    {certification.credentialId ? `ID: ${certification.credentialId.slice(0, 8)}...` : 'Professional Certificate'}
                  </div>
                  {certification.url && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-xs h-6 px-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={certification.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                {certifications.length}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Certificates</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                {certifications.filter(c => c.featured).length}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Featured</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                {new Set(certifications.flatMap(c => c.skills)).size}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Skills</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Certification Detail Modal */}
      <CertificationDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        certification={selectedCertification}
      />
    </div>
  );
}
