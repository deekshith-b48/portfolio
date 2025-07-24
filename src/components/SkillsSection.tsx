import { TechTag } from "./TechTag";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
  Coins,
  Shield,
  Globe
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: any;
  color: string;
  description: string;
  details: string;
  highlights: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Modern UI/UX with responsive design",
    details: "Specializing in React ecosystem with advanced state management, modern CSS frameworks, and performance optimization techniques for building scalable user interfaces.",
    skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "HTML5", "CSS3", "JavaScript", "Redux", "Zustand", "Framer Motion"],
    highlights: ["Component Architecture", "State Management", "Performance Optimization", "Responsive Design"],
    icon: Palette,
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Backend Development",
    description: "Scalable server-side solutions",
    details: "Building robust APIs and microservices with Node.js ecosystem, implementing authentication, database optimization, and scalable architecture patterns.",
    skills: ["Node.js", "Express.js", "Python", "Flask", "FastAPI", "RESTful APIs", "GraphQL", "Microservices", "JWT", "OAuth"],
    highlights: ["API Design", "Authentication", "Microservices", "Performance Tuning"],
    icon: Server,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Web3 & Blockchain",
    description: "Decentralized application development",
    details: "Creating DApps with smart contracts, implementing Web3 integrations, and building decentralized solutions using modern blockchain technologies.",
    skills: ["Solidity", "Web3.js", "Ethers.js", "MetaMask", "IPFS", "Smart Contracts", "DeFi", "NFTs", "Ethereum", "Polygon"],
    highlights: ["Smart Contract Development", "DApp Architecture", "Wallet Integration", "DeFi Protocols"],
    icon: Coins,
    color: "from-yellow-500 to-amber-600"
  },
  {
    title: "Databases & Storage",
    description: "Data management and optimization",
    details: "Working with both SQL and NoSQL databases, implementing efficient data models, optimization strategies, and modern caching solutions.",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Prisma", "Mongoose", "Database Design"],
    highlights: ["Schema Design", "Query Optimization", "Data Modeling", "Caching Strategies"],
    icon: Database,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions and automation",
    details: "Implementing AI-powered features, building ML models for various applications, and integrating modern AI tools into web applications.",
    skills: ["TensorFlow", "Keras", "Python", "OpenAI API", "Computer Vision", "NLP", "Deep Learning", "scikit-learn", "Pandas", "NumPy"],
    highlights: ["Model Development", "AI Integration", "Data Analysis", "Automation"],
    icon: Brain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "DevOps & Cloud",
    description: "Deployment and infrastructure management",
    details: "Managing cloud infrastructure, implementing CI/CD pipelines, containerization, and ensuring scalable deployment strategies.",
    skills: ["Docker", "AWS", "Azure", "Vercel", "Netlify", "GitHub Actions", "CI/CD", "Linux", "Nginx"],
    highlights: ["Container Orchestration", "Cloud Architecture", "Automation", "Monitoring"],
    icon: Cloud,
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Security & Tools",
    description: "Security best practices and development tools",
    details: "Implementing security best practices, vulnerability assessment, and using modern development tools for efficient workflow.",
    skills: ["Cybersecurity", "Penetration Testing", "Git", "Postman", "VS Code", "Figma", "OWASP", "Security Auditing"],
    highlights: ["Security Assessment", "Vulnerability Testing", "Code Review", "Tool Optimization"],
    icon: Shield,
    color: "from-red-500 to-pink-600"
  }
];

const certifications = [
  "HackerRank Frontend Developer (React)",
  "Google AI Essentials",
  "MongoDB Schema Design",
  "Smart India Hackathon Finalist",
  "Microsoft Azure AI",
  "Postman API Expert"
];

export function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [showAllCerts, setShowAllCerts] = useState(false);

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <section id="skills" className="container max-w-screen-2xl px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-3xl" />
      
      <div className="space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive portfolio of modern technologies, from traditional web development to cutting-edge Web3 and AI solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isExpanded = expandedCategories.has(index);
            
            return (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, isExpanded ? category.skills.length : 4).map((skill) => (
                      <TechTag key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </TechTag>
                    ))}
                    {!isExpanded && category.skills.length > 4 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{category.skills.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.details}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-accent">Key Highlights:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Sparkles className="w-3 h-3 text-accent/60" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Know More Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleCategory(index)}
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
            );
          })}
        </div>

        {/* Certifications Preview */}
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <Globe className="w-4 h-4" />
              Certifications & Achievements
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Professional Recognition</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise across various technologies and platforms.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.slice(0, showAllCerts ? certifications.length : 6).map((cert, index) => (
              <div
                key={cert}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-card to-card/50 border border-border/50 hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-105 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium group-hover:text-accent transition-colors duration-300">
                  {cert}
                </span>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setShowAllCerts(!showAllCerts)}
            className="group border-accent/20 hover:border-accent/50 hover:bg-accent/10"
          >
            {showAllCerts ? "Show Less" : "View All Certifications"}
            {showAllCerts ? (
              <ChevronUp className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <ChevronDown className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Skills Summary */}
        <div className="grid gap-6 md:grid-cols-4 animate-fade-in">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
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
