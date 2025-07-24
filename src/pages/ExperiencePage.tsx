import { ExternalLink, Calendar, MapPin, Building2, Sparkles, TrendingUp, Users, Target, ChevronRight } from "lucide-react";
import { TechTag } from "@/components/TechTag";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Kroolo",
    period: "Jan 2025 - Present",
    status: "Current",
    location: "Remote",
    type: "Full-time",
    note: "Joined through Kroolo x The Generative Beings Hackathon!",
    description: "Building innovative productivity and collaboration solutions at Kroolo, focusing on full-stack development and modern web technologies.",
    detailedDescription: "Currently developing cutting-edge productivity solutions at Kroolo, working with modern web technologies to create scalable applications. Contributing to the development of collaborative tools and productivity platforms that help teams work more efficiently.",
    achievements: [
      "Successfully joined the team through a competitive hackathon process",
      "Developed responsive frontend interfaces with React and modern design patterns",
      "Built scalable backend APIs with Node.js and Express.js",
      "Implemented real-time features for enhanced user collaboration",
      "Contributed to application architecture and technical decision making",
      "Optimized application performance for better user experience"
    ],
    impact: [
      "Enhanced user productivity through intuitive interface design",
      "Improved application performance and scalability",
      "Contributed to team collaboration and development processes",
      "Delivered high-quality features within tight deadlines"
    ],
    skills: [
      "Full-Stack Web Development",
      "Modern JavaScript & TypeScript",
      "React.js & Frontend Development",
      "Node.js & Backend APIs",
      "Database Design & Integration",
      "User Experience Design"
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "TypeScript", "JavaScript", "MongoDB", "TailwindCSS", "Git"],
    links: [
      { label: "Kroolo Website", url: "https://kroolo.com/" }
    ],
    icon: "🚀"
  },
  {
    title: "Trainee - Core Member",
    company: "Samsung Innovation Lab",
    period: "Feb 2024 - Present",
    status: "Current",
    location: "Remote",
    type: "Innovation Program",
    description: "Global initiative focused on AI, IoT, and Deep Learning skill development.",
    detailedDescription: "Selected for Samsung's prestigious global innovation program focusing on cutting-edge technology development. Working on multiple high-impact projects in AI and IoT domains, collaborating with international teams to deliver enterprise-grade solutions.",
    achievements: [
      "Tumor Detection using Deep Learning - 92% accuracy with 15% reduction in false positives",
      "AI-Based Employee Safety Monitoring System - 90% accuracy in detecting unsafe actions",
      "40% faster emergency response time implementation",
      "Collaborated with international teams on IoT solutions",
      "Mentored junior developers on AI implementation best practices"
    ],
    impact: [
      "Improved medical diagnostic accuracy by 15%",
      "Enhanced workplace safety monitoring by 90%",
      "Reduced emergency response time by 40%",
      "Contributed to 3 patent applications"
    ],
    skills: [
      "Deep Learning Architecture Design",
      "IoT System Integration", 
      "Real-time Data Processing",
      "Cross-functional Team Collaboration",
      "Technical Mentorship"
    ],
    technologies: ["TensorFlow", "Keras", "Python", "Flask", "Raspberry Pi", "React.js", "Node.js", "MQTT", "Deep Learning", "IoT"],
    links: [],
    icon: "🏢"
  },
  {
    title: "Web Development Intern",
    company: "Internshala",
    period: "Dec 2023 - Mar 2024",
    status: "Past",
    location: "Remote",
    type: "Internship",
    description: "Full-stack web development with focus on performance and user experience.",
    detailedDescription: "Intensive full-stack development internship where I built dynamic web applications using modern technologies. Focused on mobile-first development, API integration, and performance optimization to deliver exceptional user experiences.",
    achievements: [
      "Improved mobile user engagement by 20%",
      "Increased mobile traffic by 25%",
      "Reduced website load times by 15%",
      "Enhanced backend efficiency by 15% through API optimization",
      "Successfully completed 5 major project modules"
    ],
    impact: [
      "Boosted user retention by 20%",
      "Improved site performance metrics significantly",
      "Streamlined development workflow for team",
      "Contributed to responsive design standards"
    ],
    skills: [
      "Full-Stack Development",
      "API Design and Integration",
      "Performance Optimization",
      "Mobile-First Development",
      "Code Review and Testing"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "RESTful APIs", "Responsive Design"],
    links: [
      { label: "Certificate", url: "https://trainings.internshala.com/s/v/3229789/ea9497ac" }
    ],
    icon: "💻"
  }
];

export function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceClick = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  const getTopTechnologies = (experience: ExperienceItem, count: number = 4) => {
    return experience.technologies.slice(0, count);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-6 md:space-y-12">
        
        {/* Resume Download Section */}
        <ResumeDownload />
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
            <Building2 className="w-3 h-3 md:w-4 md:h-4" />
            Professional Journey
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in technology, from innovative AI projects to full-stack development.
          </p>
        </div>

        {/* Mobile-Optimized Experience Cards */}
        <div className="space-y-4 md:space-y-6">
          {experiences.map((experience, index) => (
            <Card
              key={experience.company + experience.title}
              className="group cursor-pointer border-border/50 bg-card/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:scale-[1.01]"
              onClick={() => handleExperienceClick(experience)}
            >
              <CardContent className="p-4 md:p-6 space-y-4">
                
                {/* Header */}
                <div className="flex items-start gap-3">
                  {experience.icon && (
                    <div className="text-xl md:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {experience.icon}
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base md:text-xl font-bold group-hover:text-accent transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={`${experience.status === "Current" 
                          ? "bg-green-500/20 text-green-400 border-green-500/30" 
                          : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        } text-xs`}
                      >
                        {experience.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-accent font-medium text-sm md:text-base">
                        <Building2 className="w-4 h-4" />
                        {experience.company}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {experience.location}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>

                    {experience.note && (
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30 text-xs">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {experience.note}
                      </Badge>
                    )}
                  </div>

                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 line-clamp-2">
                  {experience.description}
                </p>

                {/* Key Technologies Preview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-accent">Key Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {getTopTechnologies(experience).map((tech) => (
                      <TechTag key={tech} variant="secondary" className="text-xs hover:bg-accent/20 hover:text-accent transition-all duration-300">
                        {tech}
                      </TechTag>
                    ))}
                    {experience.technologies.length > 4 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{experience.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {experience.achievements.length} achievements
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {experience.impact.length} impacts
                    </span>
                  </div>
                  <span className="text-accent group-hover:underline">
                    View Details
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">{experiences.length}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Positions</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">2+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                {experiences.filter(exp => exp.status === "Current").length}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Current</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Experience Detail Modal */}
      <ExperienceDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        experience={selectedExperience}
      />
    </div>
  );
}
