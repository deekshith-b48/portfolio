import { ExternalLink, Trophy, Users, Code2, Star, Calendar, Github, ChevronDown, ChevronUp, Sparkles, Award, Target } from "lucide-react";
import { TechTag } from "@/components/TechTag";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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

const achievements: Achievement[] = [
  {
    id: "kroolo-hackathon",
    title: "Kroolo x The Generative Beings Hackathon Winner",
    organization: "Kroolo & The Generative Beings",
    type: "hackathon",
    date: "Dec 2024",
    status: "Winner",
    description: "Won the Kroolo x The Generative Beings Hackathon and earned a position as Full Stack Developer at Kroolo.",
    detailedDescription: "Successfully won the competitive Kroolo x The Generative Beings Hackathon by developing an innovative solution that impressed the judges. This victory led to being offered a Full Stack Developer position at Kroolo, where I now contribute to building cutting-edge productivity and collaboration tools.",
    technologies: ["React", "Node.js", "TypeScript", "JavaScript", "MongoDB", "TailwindCSS", "API Development"],
    links: [
      { label: "Kroolo Website", url: "https://kroolo.com/" }
    ],
    highlights: [
      "🥇 First place winner in competitive hackathon",
      "💼 Earned full-time position at Kroolo as a result",
      "🚀 Developed innovative productivity solution",
      "👥 Impressed panel of industry expert judges",
      "⚡ Built scalable full-stack application in limited time"
    ],
    impact: [
      "Secured position at leading productivity platform company",
      "Demonstrated full-stack development capabilities",
      "Created innovative solution for team collaboration",
      "Launched professional career in tech industry"
    ],
    icon: "🏆",
    featured: true
  },
  {
    id: "poligap-winner",
    title: "Winner – First Ever Hackathon",
    organization: "Hackathon Competition",
    type: "hackathon",
    date: "Jan 2025",
    status: "Winner",
    description: "Developed PoliGap, a decentralized political transparency platform using blockchain.",
    detailedDescription: "Won the first-place prize by developing PoliGap, an innovative Web3 platform that bridges the communication gap between politicians and citizens. The platform leverages blockchain technology to ensure transparency, accountability, and direct democratic participation.",
    technologies: ["React", "Node.js", "Solidity", "Web3.js", "Ethereum", "MongoDB", "TailwindCSS"],
    links: [
      { label: "Live Demo", url: "https://poligap.vercel.app" },
      { label: "GitHub", url: "https://github.com/deekshith-b48/PoliGap" }
    ],
    highlights: [
      "🥇 First place winner among 50+ teams",
      "🔗 Implemented blockchain-based transparency mechanisms",
      "🗳️ Created secure voting and feedback systems",
      "👥 Built real-time citizen-politician communication features",
      "🏆 Recognized for innovation in political technology"
    ],
    impact: [
      "Pioneered political transparency through technology",
      "Created platform for direct democratic participation",
      "Demonstrated practical blockchain implementation",
      "Inspired political technology innovation"
    ],
    icon: "🥇",
    featured: true
  },
  {
    id: "sih-2024",
    title: "Smart India Hackathon 2024 Finalist",
    organization: "Government of India",
    type: "hackathon",
    date: "Dec 2024",
    status: "Finalist",
    description: "Selected for the national round with PDF FuzzSec — an adaptive fuzzing tool for PDF reader security.",
    detailedDescription: "Among the top teams selected for the national finals of India's largest hackathon. Developed PDF FuzzSec, an innovative adaptive fuzzing tool designed to enhance the security of open-source PDF readers through automated vulnerability detection and crash analysis.",
    technologies: ["Python", "C++", "Fuzzing", "Security Analysis", "Crash Triaging", "Code Coverage"],
    links: [
      { label: "Project Details", url: "https://github.com/deekshith-b48/ZeroHack" }
    ],
    highlights: [
      "🏆 National finalist among 10,000+ participants",
      "��� Enhanced PDF reader security through fuzzing",
      "📊 Achieved 85% code coverage in testing",
      "🛡️ Identified critical security vulnerabilities",
      "👨‍💻 Collaborated with cybersecurity experts"
    ],
    impact: [
      "Enhanced open-source software security",
      "Contributed to national cybersecurity initiatives",
      "Advanced fuzzing techniques development",
      "Promoted security-first development practices"
    ],
    icon: "🏆",
    featured: true
  },
  {
    id: "onehack-healthcare",
    title: "OneHack Hackathon – Healthcare Track",
    organization: "OneHack",
    type: "hackathon",
    date: "Nov 2024",
    status: "Participant",
    description: "Built an AI-powered, decentralized patient data exchange system combining smart contracts and medical NLP.",
    detailedDescription: "Developed an innovative healthcare solution that combines artificial intelligence with blockchain technology to create a secure, decentralized patient data exchange system. The platform ensures patient privacy while enabling seamless data sharing between healthcare providers.",
    technologies: ["React", "Python", "TensorFlow", "Solidity", "IPFS", "Natural Language Processing", "Smart Contracts"],
    links: [],
    highlights: [
      "🏥 Created secure patient data exchange platform",
      "🤖 Integrated AI for medical data processing",
      "🔐 Implemented blockchain for data security",
      "📊 Built NLP models for medical text analysis",
      "🌐 Designed decentralized architecture"
    ],
    impact: [
      "Advanced healthcare data security",
      "Improved patient data interoperability",
      "Demonstrated AI-blockchain integration",
      "Contributed to healthcare innovation"
    ],
    icon: "🏥"
  },
  {
    id: "hacknight-2025",
    title: "HackNight '25 – Multi-Agent AI Challenge",
    organization: "HackNight",
    type: "hackathon",
    date: "Jan 2025",
    status: "Participant",
    description: "Created a collaborative multi-agent inventory management system for retail supply chains.",
    detailedDescription: "Developed an advanced multi-agent AI system for optimizing inventory management across retail networks. The system uses collaborative AI agents to predict demand, optimize stock levels, and coordinate supply chain operations in real-time.",
    technologies: ["Python", "Multi-Agent Systems", "Machine Learning", "React", "Node.js", "TensorFlow", "Supply Chain Analytics"],
    links: [],
    highlights: [
      "🤖 Built multi-agent collaborative system",
      "📦 Optimized supply chain management",
      "📈 Improved inventory efficiency by 30%",
      "🔄 Implemented real-time coordination",
      "🧠 Advanced AI algorithm development"
    ],
    impact: [
      "Revolutionized retail inventory management",
      "Reduced supply chain inefficiencies",
      "Advanced multi-agent AI research",
      "Demonstrated practical AI applications"
    ],
    icon: "📦"
  },
  {
    id: "gssoc-2024",
    title: "GirlScript Summer of Code (GSSoC) 2024",
    organization: "GirlScript Foundation",
    type: "opensource",
    date: "Jun 2024 - Sep 2024",
    status: "Contributor",
    description: "Contributed to multiple GitHub projects, mentored beginners, and promoted open-source development.",
    detailedDescription: "Active participant in one of India's largest open-source programs. Contributed to various projects, mentored newcomers to open-source development, and helped build a strong community of developers in my college and beyond.",
    technologies: ["JavaScript", "Python", "React", "Node.js", "Git", "Open Source", "Community Building"],
    links: [],
    highlights: [
      "👩‍💻 Contributed to 15+ open-source projects",
      "🎓 Mentored 25+ beginners in open-source",
      "🚀 Merged 30+ pull requests",
      "🌟 Promoted open-source culture in college",
      "📚 Conducted workshops on Git and GitHub"
    ],
    impact: [
      "Enhanced multiple open-source projects",
      "Grew open-source community participation",
      "Mentored next generation of developers",
      "Promoted collaborative development culture"
    ],
    icon: "👩‍💻",
    featured: true
  },
  {
    id: "security-contributions",
    title: "Security Contributions to Open Source",
    organization: "Open Source Community",
    type: "contribution",
    date: "2024 - Present",
    status: "Contributor",
    description: "Focused on improving SumatraPDF security using fuzzing techniques and crash triaging.",
    detailedDescription: "Dedicated efforts to enhance the security of open-source software, particularly focusing on SumatraPDF. Utilized advanced fuzzing techniques, crash analysis, and code coverage feedback to identify and help resolve security vulnerabilities.",
    technologies: ["C++", "Fuzzing", "Security Analysis", "Crash Triaging", "Code Coverage", "Vulnerability Assessment"],
    links: [],
    highlights: [
      "🔒 Identified 10+ security vulnerabilities",
      "🧪 Developed advanced fuzzing techniques",
      "📊 Improved code coverage by 25%",
      "🛡️ Enhanced software security standards",
      "📝 Documented security best practices"
    ],
    impact: [
      "Improved open-source software security",
      "Advanced security testing methodologies",
      "Contributed to safer software ecosystem",
      "Promoted security-conscious development"
    ],
    icon: "🛡️"
  },
  {
    id: "opensource-tools",
    title: "Open Source Tools Creation",
    organization: "Personal Projects",
    type: "opensource",
    date: "2024 - Present",
    status: "Contributor",
    description: "Released full-stack projects including ZeroHack (AI + Blockchain Cybersecurity) and PoliGap.",
    detailedDescription: "Created and maintained several open-source tools and platforms that combine cutting-edge technologies like AI, blockchain, and cybersecurity. These projects serve as learning resources and practical tools for the developer community.",
    technologies: ["Python", "JavaScript", "React", "Solidity", "AI/ML", "Blockchain", "Cybersecurity"],
    links: [
      { label: "ZeroHack", url: "https://github.com/deekshith-b48/ZeroHack" },
      { label: "PoliGap", url: "https://github.com/deekshith-b48/PoliGap" }
    ],
    highlights: [
      "🚀 Released 20+ open-source projects",
      "⭐ Accumulated 150+ GitHub stars",
      "🔧 Built practical developer tools",
      "💡 Shared innovative tech combinations",
      "📖 Provided comprehensive documentation"
    ],
    impact: [
      "Enabled developers with powerful tools",
      "Demonstrated innovative tech integration",
      "Fostered open-source contribution culture",
      "Advanced practical AI and blockchain applications"
    ],
    icon: "🔧",
    featured: true
  }
];

export function AchievementsPage() {
  const [selectedType, setSelectedType] = useState<"all" | "hackathon" | "opensource" | "contribution">("all");
  const [expandedAchievements, setExpandedAchievements] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleAchievement = (id: string) => {
    const newExpanded = new Set(expandedAchievements);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedAchievements(newExpanded);
  };

  const filteredAchievements = achievements.filter(achievement => {
    if (selectedType === "all") return true;
    return achievement.type === selectedType;
  });

  const displayedAchievements = showAll ? filteredAchievements : filteredAchievements.slice(0, 6);

  const typeStats = {
    hackathon: achievements.filter(a => a.type === "hackathon").length,
    opensource: achievements.filter(a => a.type === "opensource").length,
    contribution: achievements.filter(a => a.type === "contribution").length
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Winner":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Finalist":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Contributor":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-accent/20 text-accent border-accent/30";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hackathon":
        return Trophy;
      case "opensource":
        return Code2;
      case "contribution":
        return Users;
      default:
        return Star;
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Achievements & Contributions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Recognition & Impact
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hackathon victories, open-source contributions, and community building efforts that showcase 
            innovation, collaboration, and commitment to technological advancement.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
          {[
            { key: "all", label: "All Achievements", count: achievements.length },
            { key: "hackathon", label: "Hackathon Wins", count: typeStats.hackathon },
            { key: "opensource", label: "Open Source", count: typeStats.opensource },
            { key: "contribution", label: "Contributions", count: typeStats.contribution }
          ].map((category) => {
            const isActive = selectedType === category.key;
            
            return (
              <Button
                key={category.key}
                variant={isActive ? "default" : "outline"}
                onClick={() => setSelectedType(category.key as any)}
                className={`group transition-all duration-300 hover:scale-105 ${
                  isActive 
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25" 
                    : "border-border/50 hover:border-accent/30 hover:bg-accent/10"
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedAchievements.map((achievement, index) => {
            const isExpanded = expandedAchievements.has(achievement.id);
            const TypeIcon = getTypeIcon(achievement.type);
            
            return (
              <div
                key={achievement.id}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] animate-scale-in ${
                  achievement.featured 
                    ? "bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 shadow-lg shadow-accent/10" 
                    : "bg-gradient-to-br from-card/50 to-card border-border/50 hover:border-accent/30"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured badge */}
                {achievement.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Star className="w-5 h-5 text-accent fill-current" />
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TypeIcon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-semibold text-accent">
                            {achievement.organization}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {achievement.date}
                        </div>
                      </div>
                      <Badge variant="outline" className={`${getStatusColor(achievement.status)} w-fit text-xs`}>
                        {achievement.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {achievement.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {achievement.technologies.slice(0, isExpanded ? achievement.technologies.length : 3).map((tech) => (
                      <TechTag key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </TechTag>
                    ))}
                    {!isExpanded && achievement.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{achievement.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="space-y-4 animate-fade-in border-t border-border/50 pt-4">
                      {/* Detailed Description */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-accent">Details</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.detailedDescription}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-accent">Key Highlights</h4>
                        <div className="space-y-1">
                          {achievement.highlights.map((highlight, idx) => (
                            <div key={idx} className="text-xs text-muted-foreground">
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-accent flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          Impact
                        </h4>
                        <div className="grid grid-cols-1 gap-1">
                          {achievement.impact.map((impact, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <Sparkles className="w-3 h-3 mt-0.5 text-accent/60 flex-shrink-0" />
                              <span>{impact}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      {achievement.links && achievement.links.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {achievement.links.map((link, linkIndex) => (
                            <Button
                              key={linkIndex}
                              variant="outline"
                              size="sm"
                              asChild
                              className="hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 text-xs h-7"
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1"
                              >
                                <ExternalLink className="h-3 w-3" />
                                {link.label}
                              </a>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Know More Button */}
                  <div className="pt-2 border-t border-border/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleAchievement(achievement.id)}
                      className="w-full group/btn hover:bg-accent/10 hover:text-accent transition-all duration-300 text-xs h-8"
                    >
                      <span className="mr-2">
                        {isExpanded ? "Show Less" : "Know More"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {filteredAchievements.length > 6 && (
          <div className="text-center space-y-6 pt-8 animate-fade-in">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group border-accent/20 hover:border-accent/50 hover:bg-accent/10 px-8 py-3"
            >
              {showAll ? "Show Less" : `View All ${filteredAchievements.length} Achievements`}
              {showAll ? (
                <ChevronUp className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <ChevronDown className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              )}
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4 animate-fade-in">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">{achievements.length}</div>
            <div className="text-sm text-muted-foreground">Total Achievements</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">{typeStats.hackathon}</div>
            <div className="text-sm text-muted-foreground">Hackathon Wins</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">{typeStats.opensource}</div>
            <div className="text-sm text-muted-foreground">Open Source</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">150+</div>
            <div className="text-sm text-muted-foreground">GitHub Stars</div>
          </div>
        </div>
      </div>
    </div>
  );
}
