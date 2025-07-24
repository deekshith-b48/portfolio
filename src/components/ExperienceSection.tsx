import { ExternalLink, Calendar, MapPin, Building2, Clock, Sparkles, TrendingUp } from "lucide-react";
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
  technologies: string[];
  achievements: string[];
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
    type: "Internship",
    description: "A global initiative by Samsung focused on skill development in AI, IoT, and Deep Learning. Leading innovative projects that combine cutting-edge technology with practical applications.",
    achievements: [
      "Tumor Detection using Deep Learning - 92% accuracy with 15% reduction in false positives",
      "AI-Based Employee Safety Monitoring System - 90% accuracy in detecting unsafe actions",
      "40% faster emergency response time implementation",
      "Collaborated with international teams on IoT solutions"
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
    description: "Developed dynamic web applications using modern web technologies with a focus on performance optimization and user experience enhancement.",
    achievements: [
      "Improved mobile user engagement by 20%",
      "Increased mobile traffic by 25%",
      "Reduced website load times by 15%",
      "Enhanced backend efficiency by 15% through API optimization"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "RESTful APIs", "Responsive Design"],
    links: [
      { label: "Certificate", url: "https://trainings.internshala.com/s/v/3229789/ea9497ac" }
    ],
    icon: "💻"
  }
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="container max-w-screen-2xl px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-l from-accent/5 via-transparent to-primary/5 blur-3xl" />
      
      <div className="space-y-16 relative z-10">
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
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block animate-pulse-soft" />
                
                <div className="md:ml-20">
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 backdrop-blur-sm transition-all duration-700 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02]">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-8 space-y-6">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            {experience.icon}
                          </div>
                          
                          <div className="space-y-2 flex-1">
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

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-accent" />
                          <h4 className="font-semibold text-accent">Key Achievements</h4>
                        </div>
                        
                        <div className={`space-y-2 transition-all duration-300 ${
                          expandedIndex === index ? "max-h-none" : "max-h-16 overflow-hidden"
                        }`}>
                          {experience.achievements.map((achievement, achIndex) => (
                            <div 
                              key={achIndex} 
                              className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                            >
                              <Sparkles className="w-4 h-4 mt-0.5 text-accent/60 flex-shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                        
                        {experience.achievements.length > 2 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(index)}
                            className="text-accent hover:text-accent/80 p-0 h-auto text-sm"
                          >
                            {expandedIndex === index ? "Show less" : "Show more achievements"}
                          </Button>
                        )}
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-accent flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Technologies Used
                        </h4>
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

                      {/* Links */}
                      {experience.links && experience.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-2">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center space-y-6 pt-8 animate-fade-in">
          <p className="text-lg text-muted-foreground">
            Interested in working together? Let's discuss opportunities.
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group border-accent/20 hover:border-accent/50 hover:bg-accent/10 px-8 py-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2"
            >
              <Building2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Let's Connect
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
