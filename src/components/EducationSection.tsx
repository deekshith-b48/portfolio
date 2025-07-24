import { GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles, Trophy, BookOpen, Target } from "lucide-react";
import { TechTag } from "./TechTag";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
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
      "Consistent performer in semester examinations"
    ],
    projects: [
      "Decentralized NFT Marketplace Platform",
      "AI-Based Employee Safety Monitoring System", 
      "Real-time Product Operating System",
      "SocialSpark - Social Media Platform",
      "Multiple full-stack web applications",
      "Machine learning and AI projects"
    ],
    skills: [
      "Problem Solving & Analytical Thinking",
      "Software Design & Architecture",
      "Team Collaboration & Leadership",
      "Research & Development",
      "Project Management",
      "Technical Documentation"
    ],
    icon: "🎓"
  }
];

export function EducationSection() {
  const [expandedEducation, setExpandedEducation] = useState<Set<number>>(new Set());

  const toggleEducation = (index: number) => {
    const newExpanded = new Set(expandedEducation);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedEducation(newExpanded);
  };

  return (
    <section id="education" className="container max-w-screen-2xl px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-3xl" />
      
      <div className="space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Academic Background
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic foundation in Computer Science Engineering with focus on practical software development, 
            algorithms, and emerging technologies.
          </p>
        </div>

        {/* Education Items */}
        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((education, index) => {
            const isExpanded = expandedEducation.has(index);
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 backdrop-blur-sm transition-all duration-700 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 space-y-6">
                  {/* Header - Always Visible */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {education.icon}
                      </div>
                      
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                            {education.degree}
                          </h3>
                          <Badge 
                            variant="outline" 
                            className={`${education.status === "Current" 
                              ? "bg-green-500/20 text-green-400 border-green-500/30" 
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            } text-xs font-medium`}
                          >
                            {education.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4" />
                            <span className="font-semibold text-accent">{education.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{education.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{education.location}</span>
                          </div>
                        </div>
                        
                        <Badge variant="secondary" className="w-fit bg-accent/10 text-accent">
                          CGPA: {education.cgpa}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Basic Description - Always Visible */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {education.description}
                  </p>

                  {/* Core Coursework Preview */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-accent flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.slice(0, isExpanded ? education.coursework.length : 5).map((course) => (
                        <TechTag 
                          key={course} 
                          variant="secondary" 
                          className="hover:bg-accent/20 hover:text-accent transition-all duration-300 hover:scale-105"
                        >
                          {course}
                        </TechTag>
                      ))}
                      {!isExpanded && education.coursework.length > 5 && (
                        <span className="text-sm text-muted-foreground px-2 py-1">
                          +{education.coursework.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="space-y-6 animate-fade-in border-t border-border/50 pt-6">
                      {/* Detailed Description */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-accent flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Academic Journey
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {education.detailedDescription}
                        </p>
                      </div>

                      {/* Academic Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-accent flex items-center gap-2">
                          <Trophy className="w-4 h-4" />
                          Academic Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {education.achievements.map((achievement, achIndex) => (
                            <div 
                              key={achIndex} 
                              className="flex items-start gap-3 text-sm text-muted-foreground p-3 rounded-lg bg-background/50 border border-border/50"
                            >
                              <Sparkles className="w-4 h-4 mt-0.5 text-accent/60 flex-shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Major Projects */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-accent flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Academic Projects
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {education.projects.map((project, projIndex) => (
                            <div 
                              key={projIndex} 
                              className="flex items-start gap-3 text-sm text-muted-foreground p-3 rounded-lg bg-accent/5 border border-accent/20"
                            >
                              <Target className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                              <span>{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Developed */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-accent">Skills Developed</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {education.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-accent rounded-full" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Know More Button */}
                  <div className="pt-4 border-t border-border/50">
                    <Button
                      variant="ghost"
                      onClick={() => toggleEducation(index)}
                      className="w-full group/btn hover:bg-accent/10 hover:text-accent transition-all duration-300"
                    >
                      <span className="mr-2">
                        {isExpanded ? "Show Less" : "Know More"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Stats */}
        <div className="grid gap-6 md:grid-cols-4 animate-fade-in max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">8.4</div>
            <div className="text-sm text-muted-foreground">CGPA</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">2026</div>
            <div className="text-sm text-muted-foreground">Graduation</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Core Subjects</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
