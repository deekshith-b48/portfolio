import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building2, ExternalLink, Target, TrendingUp, Users, Sparkles } from "lucide-react";
import { TechTag } from "@/components/TechTag";

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

interface ExperienceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: ExperienceItem | null;
}

export function ExperienceDetailModal({ isOpen, onClose, experience }: ExperienceDetailModalProps) {
  if (!experience) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-3">
            {experience.icon && (
              <div className="text-2xl">{experience.icon}</div>
            )}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <DialogTitle className="text-xl font-bold text-left">
                  {experience.title}
                </DialogTitle>
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
                <div className="flex items-center gap-2 text-accent font-medium">
                  <Building2 className="w-4 h-4" />
                  {experience.company}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
              {experience.detailedDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-accent mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <TechTag key={tech} variant="secondary" className="text-xs">
                  {tech}
                </TechTag>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Key Achievements
            </h4>
            <div className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div>
            <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Skills Developed
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {experience.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div>
            <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Impact & Results
            </h4>
            <div className="space-y-2">
              {experience.impact.map((impact, index) => (
                <div key={index} className="flex items-start gap-2 text-sm p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{impact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {experience.links && experience.links.length > 0 && (
            <div>
              <h4 className="font-semibold text-accent mb-3">Related Links</h4>
              <div className="flex flex-wrap gap-2">
                {experience.links.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-accent hover:text-background hover:border-accent"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
