import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  experience: string;
  projects?: number;
  icon?: any;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  icon: any;
  accentColor: string;
  bgColor: string;
  description: string;
}

interface SkillDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: SkillCategory | null;
}

export function SkillDetailModal({ isOpen, onClose, category }: SkillDetailModalProps) {
  if (!category) return null;

  const IconComponent = category.icon;

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const getSkillTextColor = (level: number) => {
    if (level >= 90) return "text-green-400";
    if (level >= 80) return "text-blue-400";
    if (level >= 70) return "text-yellow-400";
    return "text-orange-400";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl border" style={{ background: category.bgColor, borderColor: category.accentColor + "33" }}>
              <IconComponent className="w-6 h-6" style={{ color: category.accentColor }} />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-xl font-bold text-left">
                {category.title}
              </DialogTitle>
              <p className="text-sm text-muted-foreground text-left">
                {category.description}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {category.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="space-y-3 p-4 rounded-lg bg-card/50 border border-border/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {skill.icon && (
                    <div className="p-1.5 rounded-md" style={{ background: category.bgColor }}>
                      <skill.icon className="w-4 h-4" style={{ color: category.accentColor }} />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-sm">{skill.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {skill.experience}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-sm font-bold ${getSkillTextColor(skill.level)}`}>
                    {skill.level}%
                  </span>
                  {skill.projects && (
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      {skill.projects} projects
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Progress value={skill.level} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Proficiency</span>
                  <span>{skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
          <div className="text-sm text-accent font-medium mb-2">Category Summary</div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-muted-foreground">Technologies:</span>
              <div className="font-medium">{category.skills.length}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Avg. Level:</span>
              <div className="font-medium">
                {Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length)}%
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
