import { GraduationCap, Calendar, MapPin, ChevronRight, BookOpen, Trophy, Target, Sparkles } from "lucide-react";
import { TechTag } from "@/components/TechTag";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
      "Maintained CGPA of 8.4+ throughout the program",
      "Smart India Hackathon 2024 Finalist",
      "NMIT Hacks 2025 Participant",
      "Samsung Innovation Lab Core Member",
      "Active member of coding and technical clubs",
      "Regular participant in technical workshops and seminars"
    ],
    projects: [
      "ZeroHack - Cybersecurity Toolkit",
      "PoliGap - Political Transparency Platform", 
      "CodeWhisperer - AI Developer Assistant",
      "SocialSpark - Social Media Platform",
      "Sentiment Analysis Web Application",
      "Real-time Product Operating System"
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
              <DialogTitle className="text-xl font-bold text-left leading-tight">
                {education.degree}
              </DialogTitle>
              
              <div className="space-y-1">
                <div className="text-accent font-medium">
                  {education.institution}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {education.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {education.location}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    CGPA: {education.cgpa}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={education.status === "Current" 
                      ? "bg-green-500/20 text-green-400 border-green-500/30" 
                      : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                    }
                  >
                    {education.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Detailed Description */}
          <div>
            <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Overview
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {education.detailedDescription}
            </p>
          </div>

          {/* Coursework */}
          <div>
            <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Relevant Coursework
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {education.coursework.map((course, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-card/50 border border-border/50">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Academic Achievements
            </h4>
            <div className="space-y-2">
              {education.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 text-sm p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Academic Projects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {education.projects.map((project, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-card/50 border border-border/50">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>{project}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div>
            <h4 className="font-semibold text-accent mb-3">Skills Developed</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {education.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
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

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-6 md:space-y-12">
        
        {/* Resume Download Section */}
        <ResumeDownload />
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
            <GraduationCap className="w-3 h-3 md:w-4 md:h-4" />
            Academic Background
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Education
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey in Computer Science, building strong foundations in technology and innovation.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-4 md:space-y-6">
          {educationData.map((education, index) => (
            <Card
              key={education.institution}
              className="group cursor-pointer border-border/50 bg-card/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:scale-[1.01]"
              onClick={() => handleEducationClick(education)}
            >
              <CardContent className="p-4 md:p-6 space-y-4">
                
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="text-xl md:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {education.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base md:text-xl font-bold group-hover:text-accent transition-colors duration-300">
                        {education.degree}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={education.status === "Current" 
                          ? "bg-green-500/20 text-green-400 border-green-500/30" 
                          : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        }
                      >
                        {education.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-accent font-medium text-sm md:text-base">
                        {education.institution}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {education.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {education.location}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          CGPA: {education.cgpa}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 line-clamp-2">
                  {education.description}
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-border/50">
                  <div className="text-center p-3 rounded-lg bg-accent/5">
                    <div className="text-lg font-bold text-accent">{education.coursework.length}</div>
                    <div className="text-xs text-muted-foreground">Courses</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-accent/5">
                    <div className="text-lg font-bold text-accent">{education.achievements.length}</div>
                    <div className="text-xs text-muted-foreground">Achievements</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-accent/5">
                    <div className="text-lg font-bold text-accent">{education.projects.length}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>

                {/* View Details */}
                <div className="text-center">
                  <span className="text-xs text-accent group-hover:underline">
                    Tap to view details
                  </span>
                </div>
              </CardContent>
            </Card>
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
