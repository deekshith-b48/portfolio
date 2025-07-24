import { TechTag } from "@/components/TechTag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Zap
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
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(selectedCategory === index ? null : index);
  };

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
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Technical Expertise
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and expertise across various domains 
            of software development and emerging technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === index;
            
            return (
              <div
                key={category.title}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer animate-scale-in ${
                  isSelected 
                    ? "bg-gradient-to-br from-accent/20 to-primary/20 border-accent/50 shadow-2xl shadow-accent/20 scale-105" 
                    : "bg-gradient-to-br from-card/50 to-card border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:scale-105"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCategoryClick(index)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {category.description}
                  </p>

                  {/* Skills Preview or Detailed View */}
                  {isSelected ? (
                    <div className="space-y-4 animate-fade-in">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="space-y-3 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-accent/30 transition-all duration-300 group/skill"
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {skill.logo && (
                                <span className="text-2xl group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-all duration-300">
                                  {skill.logo}
                                </span>
                              )}
                              <span className="text-sm font-medium group-hover/skill:text-accent transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-bold ${getSkillTextColor(skill.level)} group-hover/skill:scale-110 transition-transform duration-300`}>
                                {skill.level}%
                              </span>
                              {skill.projects && (
                                <Badge variant="outline" className="text-xs px-2 py-0 group-hover/skill:border-accent/50 transition-colors duration-300">
                                  {skill.projects} projects
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="relative">
                            <Progress 
                              value={hoveredSkill === skill.name ? skill.level : 0} 
                              className="h-2"
                            />
                            <div 
                              className="absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                                background: `linear-gradient(90deg, ${category.color.includes('pink') ? '#ec4899' : 
                                  category.color.includes('green') ? '#10b981' :
                                  category.color.includes('blue') ? '#3b82f6' :
                                  category.color.includes('orange') ? '#f97316' :
                                  category.color.includes('yellow') ? '#eab308' :
                                  category.color.includes('purple') ? '#8b5cf6' : '#06b6d4'}, ${category.color.includes('pink') ? '#f43f5e' : 
                                  category.color.includes('green') ? '#059669' :
                                  category.color.includes('blue') ? '#1d4ed8' :
                                  category.color.includes('orange') ? '#ea580c' :
                                  category.color.includes('yellow') ? '#ca8a04' :
                                  category.color.includes('purple') ? '#7c3aed' : '#0891b2'})`
                              }}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground group-hover/skill:text-foreground/80 transition-colors duration-300">
                            {skill.experience}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {/* Skill tags preview with logos */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.slice(0, 3).map((skill) => (
                          <div 
                            key={skill.name} 
                            className="group/tag inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-105"
                          >
                            {skill.logo && (
                              <span className="text-sm group-hover/tag:scale-125 group-hover/tag:rotate-12 transition-all duration-300">
                                {skill.logo}
                              </span>
                            )}
                            <span className="text-xs font-medium group-hover/tag:text-accent transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                        {category.skills.length > 3 && (
                          <span className="text-xs text-muted-foreground px-2 py-1">
                            +{category.skills.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{category.skills.length} technologies</span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Advanced
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Click indicator */}
                  <div className="text-center pt-2">
                    <span className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                      {isSelected ? (
                        <>
                          <ChevronUp className="w-3 h-3" />
                          Click to collapse
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3 h-3" />
                          Click to expand
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodologies */}
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Development Methodologies
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Best Practices & Approaches</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Following industry standards and proven methodologies to deliver high-quality software solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {methodologies.map((method, index) => (
              <div
                key={method}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-card to-card/50 border border-border/50 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-105 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium group-hover:text-accent transition-colors duration-300">
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="grid gap-6 md:grid-cols-3 animate-fade-in">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
