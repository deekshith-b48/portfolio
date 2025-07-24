import { TechTag } from "@/components/TechTag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { SkillDetailModal } from "@/components/SkillDetailModal";
import { ResumeDownload } from "@/components/ResumeDownload";
import { useState } from "react";
import { 
  Code2, 
  Palette, 
  Server, 
  Database, 
  Wrench, 
  Cloud, 
  Brain,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Zap,
  BarChart3,
  Layers,
  Settings
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  icon: any;
  color: string;
  description: string;
  logo?: string;
}

interface SkillItem {
  name: string;
  level: number;
  experience: string;
  projects?: number;
  logo?: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Modern UI/UX with responsive design",
    skills: [
      { name: "React.js", level: 95, experience: "2+ years", projects: 15, logo: "⚛️" },
      { name: "Next.js", level: 85, experience: "1+ year", projects: 8, logo: "▲" },
      { name: "TypeScript", level: 90, experience: "1.5+ years", projects: 12, logo: "📘" },
      { name: "TailwindCSS", level: 90, experience: "1.5+ years", projects: 12, logo: "🎨" },
      { name: "HTML5", level: 95, experience: "2+ years", projects: 20, logo: "🌐" },
      { name: "CSS3", level: 90, experience: "2+ years", projects: 18, logo: "🎯" }
    ],
    icon: Palette,
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Backend Development",
    description: "Scalable server-side solutions",
    skills: [
      { name: "Node.js", level: 88, experience: "1.5+ years", projects: 10, logo: "🟢" },
      { name: "Express.js", level: 85, experience: "1.5+ years", projects: 8, logo: "🚀" },
      { name: "Python", level: 85, experience: "1.5+ years", projects: 8, logo: "🐍" },
      { name: "Flask", level: 75, experience: "1+ year", projects: 5, logo: "🌶️" },
      { name: "RESTful APIs", level: 90, experience: "1.5+ years", projects: 12, logo: "🔗" },
      { name: "GraphQL", level: 65, experience: "6+ months", projects: 3, logo: "📊" }
    ],
    icon: Server,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Programming Languages",
    description: "Core programming languages mastery",
    skills: [
      { name: "JavaScript", level: 90, experience: "2+ years", projects: 12, logo: "🟨" },
      { name: "Python", level: 85, experience: "1.5+ years", projects: 8, logo: "🐍" },
      { name: "C++", level: 75, experience: "1+ year", projects: 5, logo: "⚡" },
      { name: "C", level: 70, experience: "1+ year", projects: 3, logo: "🔧" },
      { name: "SQL", level: 80, experience: "1+ year", projects: 10, logo: "🗃️" }
    ],
    icon: Code2,
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Databases & Storage",
    description: "Data management and optimization",
    skills: [
      { name: "MongoDB", level: 85, experience: "1+ year", projects: 8, logo: "🍃" },
      { name: "MySQL", level: 80, experience: "1+ year", projects: 6, logo: "🐬" },
      { name: "PostgreSQL", level: 75, experience: "8+ months", projects: 4, logo: "🐘" },
      { name: "Redis", level: 70, experience: "6+ months", projects: 3, logo: "🔴" }
    ],
    icon: Database,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Tools & Technologies",
    description: "Development tools and workflow optimization",
    skills: [
      { name: "Git", level: 90, experience: "2+ years", projects: 25, logo: "🔀" },
      { name: "Docker", level: 75, experience: "8+ months", projects: 5, logo: "🐳" },
      { name: "Postman", level: 85, experience: "1+ year", projects: 15, logo: "📮" },
      { name: "Figma", level: 70, experience: "1+ year", projects: 8, logo: "🎨" },
      { name: "VS Code", level: 95, experience: "2+ years", projects: 30, logo: "💙" }
    ],
    icon: Wrench,
    color: "from-yellow-500 to-amber-600"
  },
  {
    title: "AI & Machine Learning",
    description: "Artificial Intelligence and Machine Learning technologies",
    skills: [
      { name: "TensorFlow", level: 80, experience: "8+ months", projects: 4, logo: "🧠" },
      { name: "Keras", level: 75, experience: "8+ months", projects: 3, logo: "🤖" },
      { name: "Deep Learning", level: 78, experience: "8+ months", projects: 3, logo: "🔬" },
      { name: "OpenAI API", level: 85, experience: "6+ months", projects: 5, logo: "🤖" }
    ],
    icon: Brain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud platforms and deployment strategies",
    skills: [
      { name: "AWS", level: 70, experience: "6+ months", projects: 3, logo: "☁️" },
      { name: "Vercel", level: 85, experience: "1+ year", projects: 10, logo: "▲" },
      { name: "Netlify", level: 80, experience: "8+ months", projects: 6, logo: "🌐" },
      { name: "CI/CD", level: 65, experience: "4+ months", projects: 3, logo: "🔄" }
    ],
    icon: Cloud,
    color: "from-cyan-500 to-blue-600"
  }
];

const methodologies = [
  "Agile Development",
  "Scrum Framework", 
  "Test-Driven Development",
  "Clean Code Principles",
  "RESTful Design",
  "Responsive Design"
];

export function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category: SkillCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const getTopSkills = (category: SkillCategory, count: number = 3) => {
    return category.skills
      .sort((a, b) => b.level - a.level)
      .slice(0, count);
  };

  const getAverageLevel = (category: SkillCategory) => {
    return Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-6 md:space-y-12">
        
        {/* Resume Download Section */}
        <ResumeDownload />
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
            <Zap className="w-3 h-3 md:w-4 md:h-4" />
            Technical Expertise
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills across various domains of software development.
          </p>
        </div>

        {/* Mobile-Optimized Skills Grid */}
        <div className="grid gap-3 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const topSkills = getTopSkills(category);
            const avgLevel = getAverageLevel(category);
            
            return (
              <Card
                key={category.title}
                className="group cursor-pointer border-border/50 bg-card/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base font-bold group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Top Skills Preview */}
                  <div className="space-y-2">
                    {topSkills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          {skill.logo && (
                            <span className="text-sm flex-shrink-0">{skill.logo}</span>
                          )}
                          <span className="text-xs md:text-sm font-medium truncate">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="w-12 md:w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-accent w-8 text-right">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        {category.skills.length}
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" />
                        {avgLevel}%
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      {category.skills.reduce((sum, skill) => sum + (skill.projects || 0), 0)} projects
                    </Badge>
                  </div>

                  {/* View More Indicator */}
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors duration-300">
                      Tap to view details
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compact Methodologies */}
        <div className="space-y-4 md:space-y-6">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
              <Settings className="w-3 h-3 md:w-4 md:h-4" />
              Development Methodologies
            </div>
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">Best Practices</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {methodologies.map((method, index) => (
              <div
                key={method}
                className="px-3 py-2 md:px-4 md:py-3 rounded-lg bg-card/50 border border-border/50 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-105 group text-center"
              >
                <span className="text-xs md:text-sm font-medium group-hover:text-accent transition-colors duration-300">
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-Optimized Skills Summary */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">30+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">100+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Projects</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">2+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skill Detail Modal */}
      <SkillDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        category={selectedCategory}
      />
    </div>
  );
}
