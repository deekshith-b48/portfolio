import { TechTag } from "./TechTag";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
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
  TrendingUp,
  Zap
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  icon: any;
  color: string;
  description: string;
}

interface SkillItem {
  name: string;
  level: number;
  experience: string;
  projects?: number;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core programming languages I work with daily",
    skills: [
      { name: "JavaScript", level: 90, experience: "2+ years", projects: 12 },
      { name: "Python", level: 85, experience: "1.5+ years", projects: 8 },
      { name: "C++", level: 75, experience: "1+ year", projects: 5 },
      { name: "C", level: 70, experience: "1+ year", projects: 3 },
      { name: "SQL", level: 80, experience: "1+ year", projects: 10 }
    ],
    icon: Code2,
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Frontend Development",
    description: "Creating beautiful and responsive user interfaces",
    skills: [
      { name: "React.js", level: 95, experience: "2+ years", projects: 15 },
      { name: "Next.js", level: 85, experience: "1+ year", projects: 8 },
      { name: "TailwindCSS", level: 90, experience: "1.5+ years", projects: 12 },
      { name: "HTML5", level: 95, experience: "2+ years", projects: 20 },
      { name: "CSS3", level: 90, experience: "2+ years", projects: 18 },
      { name: "Bootstrap", level: 80, experience: "1+ year", projects: 10 }
    ],
    icon: Palette,
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Backend Development",
    description: "Building robust and scalable server-side applications",
    skills: [
      { name: "Node.js", level: 88, experience: "1.5+ years", projects: 10 },
      { name: "Express.js", level: 85, experience: "1.5+ years", projects: 8 },
      { name: "Flask", level: 75, experience: "1+ year", projects: 5 },
      { name: "RESTful APIs", level: 90, experience: "1.5+ years", projects: 12 },
      { name: "GraphQL", level: 65, experience: "6+ months", projects: 3 }
    ],
    icon: Server,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Databases",
    description: "Data management and database optimization",
    skills: [
      { name: "MongoDB", level: 85, experience: "1+ year", projects: 8 },
      { name: "MySQL", level: 80, experience: "1+ year", projects: 6 },
      { name: "PostgreSQL", level: 75, experience: "8+ months", projects: 4 },
      { name: "Redis", level: 70, experience: "6+ months", projects: 3 }
    ],
    icon: Database,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Tools & Technologies",
    description: "Development tools and workflow optimization",
    skills: [
      { name: "Git", level: 90, experience: "2+ years", projects: 25 },
      { name: "Docker", level: 75, experience: "8+ months", projects: 5 },
      { name: "Postman", level: 85, experience: "1+ year", projects: 15 },
      { name: "Figma", level: 70, experience: "1+ year", projects: 8 },
      { name: "Jupyter Notebook", level: 80, experience: "1+ year", projects: 6 }
    ],
    icon: Wrench,
    color: "from-yellow-500 to-amber-600"
  },
  {
    title: "AI & Machine Learning",
    description: "Artificial Intelligence and Machine Learning technologies",
    skills: [
      { name: "TensorFlow", level: 80, experience: "8+ months", projects: 4 },
      { name: "Keras", level: 75, experience: "8+ months", projects: 3 },
      { name: "Deep Learning", level: 78, experience: "8+ months", projects: 3 },
      { name: "IoT", level: 70, experience: "6+ months", projects: 2 }
    ],
    icon: Brain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud platforms and deployment strategies",
    skills: [
      { name: "AWS", level: 70, experience: "6+ months", projects: 3 },
      { name: "Azure", level: 65, experience: "4+ months", projects: 2 },
      { name: "Vercel", level: 85, experience: "1+ year", projects: 10 },
      { name: "Render", level: 80, experience: "8+ months", projects: 6 },
      { name: "CI/CD", level: 65, experience: "4+ months", projects: 3 }
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

export function SkillsSection() {
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
    <section id="skills" className="container max-w-screen-2xl px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-3xl" />
      
      <div className="space-y-16 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and expertise across various domains 
            of software development and emerging technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                    <div className="space-y-3 animate-fade-in">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="space-y-2 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-accent/30 transition-all duration-300"
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-bold ${getSkillTextColor(skill.level)}`}>
                                {skill.level}%
                              </span>
                              {skill.projects && (
                                <Badge variant="outline" className="text-xs px-2 py-0">
                                  {skill.projects} projects
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Progress 
                            value={hoveredSkill === skill.name ? skill.level : 0} 
                            className="h-2"
                          />
                          <div className="text-xs text-muted-foreground">
                            {skill.experience}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {/* Skill tags preview */}
                      <div className="flex flex-wrap gap-1">
                        {category.skills.slice(0, 3).map((skill) => (
                          <TechTag key={skill.name} variant="secondary" className="text-xs">
                            {skill.name}
                          </TechTag>
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
                    <span className="text-xs text-muted-foreground">
                      {isSelected ? "Click to collapse" : "Click to expand"}
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
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
