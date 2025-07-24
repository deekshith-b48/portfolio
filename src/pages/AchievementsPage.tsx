import { ExternalLink, Trophy, Users, Code2, Star, Calendar, Github, Sparkles, Award, Target, ChevronRight } from "lucide-react";
import { TechTag } from "@/components/TechTag";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AchievementDetailModal } from "@/components/AchievementDetailModal";
import { ResumeDownload } from "@/components/ResumeDownload";
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
    description: "Won the Kroolo x The Generative Beings Hackathon (first ever hackathon win) and earned a position as Full Stack Developer at Kroolo. Also developed PoliGap, a decentralized political transparency platform.",
    detailedDescription: "Successfully won the competitive Kroolo x The Generative Beings Hackathon by developing innovative solutions that impressed the judges. This was my first ever hackathon win, where I developed PoliGap - an innovative Web3 platform that bridges the communication gap between politicians and citizens using blockchain technology. This victory led to being offered a Full Stack Developer position at Kroolo, where I now contribute to building cutting-edge productivity and collaboration tools.",
    technologies: ["React", "Node.js", "TypeScript", "JavaScript", "MongoDB", "TailwindCSS", "API Development", "Solidity", "Web3.js", "Ethereum"],
    links: [
      { label: "Kroolo Website", url: "https://kroolo.com/" },
      { label: "PoliGap Live Demo", url: "https://poligap.vercel.app" },
      { label: "PoliGap GitHub", url: "https://github.com/deekshith-b48/PoliGap" }
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
      "🔒 Enhanced PDF reader security through fuzzing",
      "📊 Achieved 85% code coverage in testing",
      "🤝 Collaborated with diverse team of security experts",
      "📈 Improved vulnerability detection by 40%"
    ],
    impact: [
      "Enhanced open-source PDF reader security",
      "Contributed to cybersecurity research",
      "Demonstrated advanced security testing skills",
      "Participated in national-level innovation"
    ],
    icon: "🇮🇳",
    featured: true
  },
  {
    id: "gssoc-2024",
    title: "Active Contributor - GirlScript Summer of Code 2024",
    organization: "GirlScript Foundation",
    type: "opensource",
    date: "May - Aug 2024",
    status: "Contributor",
    description: "Active contributor to various open-source projects with 15+ merged pull requests.",
    detailedDescription: "Participated in one of India's largest open-source programs, contributing to multiple repositories across different domains. Focused on improving code quality, adding new features, and helping maintain community projects.",
    technologies: ["JavaScript", "React", "Python", "HTML/CSS", "Git", "Open Source"],
    links: [
      { label: "GSSoC Profile", url: "https://gssoc.girlscript.tech/" }
    ],
    highlights: [
      "📝 Contributed 15+ merged pull requests",
      "🌟 Maintained 95% code review approval rate",
      "👥 Collaborated with 50+ contributors globally",
      "🔧 Fixed critical bugs in popular repositories",
      "📚 Improved documentation for better accessibility"
    ],
    impact: [
      "Improved multiple open-source projects",
      "Enhanced code quality and documentation",
      "Helped maintainers resolve technical debt",
      "Contributed to global developer community"
    ],
    icon: "👩‍💻"
  },
  {
    id: "competitive-programming",
    title: "5-Star Programmer - HackerRank",
    organization: "HackerRank",
    type: "contribution",
    date: "Ongoing",
    status: "Contributor",
    description: "Achieved 5-star rating on HackerRank with 500+ problems solved on LeetCode.",
    detailedDescription: "Demonstrated strong problem-solving skills and algorithmic thinking through consistent performance on competitive programming platforms. Maintained high accuracy rates and solved complex data structure and algorithm problems.",
    technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms", "Problem Solving"],
    links: [
      { label: "HackerRank Profile", url: "https://www.hackerrank.com/" },
      { label: "LeetCode Profile", url: "https://leetcode.com/" }
    ],
    highlights: [
      "⭐ 5-star rating on HackerRank",
      "💯 500+ problems solved on LeetCode",
      "🏅 Top 10% in multiple contests",
      "🧠 Strong in dynamic programming and graph algorithms",
      "📈 Consistent daily coding practice"
    ],
    impact: [
      "Developed strong algorithmic thinking",
      "Improved problem-solving efficiency",
      "Enhanced coding interview preparation",
      "Built systematic approach to complex problems"
    ],
    icon: "💻"
  }
];

export function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

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

  const getTopTechnologies = (achievement: Achievement, count: number = 4) => {
    return achievement.technologies.slice(0, count);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-6 md:space-y-12">
        
        {/* Resume Download Section */}
        <ResumeDownload />
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
            <Trophy className="w-3 h-3 md:w-4 md:h-4" />
            Recognition & Awards
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Achievements
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition and awards from hackathons, competitions, and open-source contributions.
          </p>
        </div>

        {/* Mobile-Optimized Achievement Cards */}
        <div className="space-y-4 md:space-y-6">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.id}
              className="group cursor-pointer border-border/50 bg-card/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:scale-[1.01]"
              onClick={() => handleAchievementClick(achievement)}
            >
              <CardContent className="p-4 md:p-6 space-y-4">
                
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="text-xl md:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base md:text-lg font-bold group-hover:text-accent transition-colors duration-300 line-clamp-1">
                        {achievement.title}
                      </h3>
                      {achievement.featured && (
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-accent font-medium text-sm">
                        {achievement.organization}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className={getStatusColor(achievement.status)}>
                          {achievement.status}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {getTypeLabel(achievement.type)}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 line-clamp-2">
                  {achievement.description}
                </p>

                {/* Key Technologies Preview */}
                {achievement.technologies.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-accent">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {getTopTechnologies(achievement).map((tech) => (
                        <TechTag key={tech} variant="secondary" className="text-xs hover:bg-accent/20 hover:text-accent transition-all duration-300">
                          {tech}
                        </TechTag>
                      ))}
                      {achievement.technologies.length > 4 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{achievement.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Quick Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {achievement.highlights.length} highlights
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {achievement.impact.length} impacts
                    </span>
                  </div>
                  <span className="text-accent group-hover:underline">
                    View Details
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                {achievements.filter(a => a.status === "Winner").length}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Wins</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                {achievements.filter(a => a.type === "hackathon").length}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Hackathons</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
                {achievements.filter(a => a.featured).length}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Featured</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Achievement Detail Modal */}
      <AchievementDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        achievement={selectedAchievement}
      />
    </div>
  );
}
