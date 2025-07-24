import { ExternalLink, Calendar, MapPin, Building2, ChevronDown, ChevronUp, Sparkles, TrendingUp, Users, Target } from "lucide-react";
import { TechTag } from "./TechTag";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
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
}

const experiences: ExperienceItem[] = [
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

export function ExperienceSection() {
  const [expandedExperiences, setExpandedExperiences] = useState<Set<number>>(new Set());

  const toggleExperience = (index: number) => {
    const newExpanded = new Set(expandedExperiences);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedExperiences(newExpanded);
  };

  return (
    <section id="experience" className="container max-w-screen-2xl px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-l from-accent/5 via-transparent to-primary/5 blur-3xl" />
      
      <div className="space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in technology, from innovative AI projects to full-stack development, 
            showcasing continuous growth and impactful contributions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isExpanded = expandedExperiences.has(index);
              
              return (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block animate-pulse-soft" />
                  
                  <div className="md:ml-20">
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 backdrop-blur-sm transition-all duration-700 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative p-8 space-y-6">
                        {/* Header - Always Visible */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              {experience.icon}
                            </div>
                            
                            <div className="space-y-3 flex-1">
                              <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                                  {experience.title}
                                </h3>
                                <Badge 
                                  variant="outline" 
                                  className={`${experience.status === "Current" 
                                    ? "bg-green-500/20 text-green-400 border-green-500/30" 
                                    : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                  } text-xs font-medium`}
                                >
                                  {experience.status}
                                </Badge>
                              </div>
                              
                              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Building2 className="w-4 h-4" />
                                  <span className="font-semibold text-accent">{experience.company}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{experience.period}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  <span>{experience.location}</span>
                                </div>
                              </div>
                              
                              <Badge variant="secondary" className="w-fit text-xs">
                                {experience.type}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Basic Description - Always Visible */}
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {experience.description}
                        </p>

                        {/* Key Technologies Preview */}
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.slice(0, 6).map((tech) => (
                            <TechTag 
                              key={tech} 
                              variant="secondary" 
                              className="hover:bg-accent/20 hover:text-accent transition-all duration-300 hover:scale-105"
                            >
                              {tech}
                            </TechTag>
                          ))}
                          {experience.technologies.length > 6 && !isExpanded && (
                            <span className="text-sm text-muted-foreground px-2 py-1">
                              +{experience.technologies.length - 6} more
                            </span>
                          )}
                        </div>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="space-y-6 animate-fade-in border-t border-border/50 pt-6">
                            {/* Detailed Description */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-accent flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                Detailed Overview
                              </h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {experience.detailedDescription}
                              </p>
                            </div>

                            {/* All Technologies */}
                            {experience.technologies.length > 6 && (
                              <div className="space-y-3">
                                <h4 className="font-semibold text-sm text-accent">All Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                  {experience.technologies.map((tech) => (
                                    <TechTag 
                                      key={tech} 
                                      variant="secondary" 
                                      className="hover:bg-accent/20 hover:text-accent transition-all duration-300 hover:scale-105"
                                    >
                                      {tech}
                                    </TechTag>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Achievements */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-accent flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                Key Achievements
                              </h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {experience.achievements.map((achievement, achIndex) => (
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

                            {/* Skills Developed */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-accent flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Skills Developed
                              </h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {experience.skills.map((skill, skillIndex) => (
                                  <div key={skillIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-2 h-2 bg-accent rounded-full" />
                                    <span>{skill}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Impact */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-accent flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Impact & Results
                              </h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {experience.impact.map((impact, impactIndex) => (
                                  <div 
                                    key={impactIndex} 
                                    className="flex items-start gap-3 text-sm text-muted-foreground p-3 rounded-lg bg-accent/5 border border-accent/20"
                                  >
                                    <TrendingUp className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                                    <span>{impact}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Links */}
                            {experience.links && experience.links.length > 0 && (
                              <div className="flex flex-wrap gap-3">
                                {experience.links.map((link) => (
                                  <Button
                                    key={link.label}
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="group/btn hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 hover:scale-105"
                                  >
                                    <a
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2"
                                    >
                                      {link.label}
                                      <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                                    </a>
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Know More Button */}
                        <div className="pt-4 border-t border-border/50">
                          <Button
                            variant="ghost"
                            onClick={() => toggleExperience(index)}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center space-y-6 pt-8 animate-fade-in">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Ready for New Opportunities</h3>
            <p className="text-muted-foreground mb-4">
              Looking to bring my expertise in AI, full-stack development, and innovation to impactful projects.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-background px-8 py-3"
            >
              <a href="#contact" className="inline-flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Let's Connect
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
