import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Trophy, Target, Star, Sparkles } from "lucide-react";
import { TechTag } from "@/components/TechTag";

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

interface AchievementDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  achievement: Achievement | null;
}

export function AchievementDetailModal({ isOpen, onClose, achievement }: AchievementDetailModalProps) {
  if (!achievement) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Winner":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Finalist":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Participant":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "hackathon":
        return "Hackathon";
      case "opensource":
        return "Open Source";
      case "contribution":
        return "Contribution";
      default:
        return type;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">{achievement.icon}</div>
            <div className="flex-1 space-y-2">
              <DialogTitle className="text-lg font-bold text-left leading-tight">
                {achievement.title}
              </DialogTitle>
              
              <div className="space-y-2">
                <div className="text-accent font-medium">
                  {achievement.organization}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={getStatusColor(achievement.status)}>
                    {achievement.status}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {getTypeLabel(achievement.type)}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {achievement.date}
                  </div>
                  {achievement.featured && (
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
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
              {achievement.detailedDescription}
            </p>
          </div>

          {/* Technologies */}
          {achievement.technologies.length > 0 && (
            <div>
              <h4 className="font-semibold text-accent mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.technologies.map((tech) => (
                  <TechTag key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </TechTag>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div>
            <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Key Highlights
            </h4>
            <div className="space-y-2">
              {achievement.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2 text-sm p-3 rounded-lg bg-card/50 border border-border/50">
                  <span className="text-muted-foreground">{highlight}</span>
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
              {achievement.impact.map((impact, index) => (
                <div key={index} className="flex items-start gap-2 text-sm p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{impact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {achievement.links && achievement.links.length > 0 && (
            <div>
              <h4 className="font-semibold text-accent mb-3">Related Links</h4>
              <div className="flex flex-wrap gap-2">
                {achievement.links.map((link) => (
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
