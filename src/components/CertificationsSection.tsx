import { ExternalLink, Award, Calendar, Shield, ChevronDown, ChevronUp, Sparkles, Trophy, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { TechTag } from "./TechTag";
import { useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
  skills: string[];
  description?: string;
  highlights?: string[];
  category: "development" | "ai" | "cloud" | "database" | "security" | "achievement";
  featured?: boolean;
}

const certifications: Certification[] = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    issuedDate: "Jul 2025",
    credentialId: "6321D67094DA",
    url: "#",
    skills: ["React.js", "JavaScript", "Frontend Development"],
    description: "Recognizes successful completion of the HackerRank Frontend Developer (React) certification assessment. The test evaluated practical knowledge and coding skills essential for building dynamic, component-based user interfaces using React.",
    highlights: [
      "React component creation (functional & class-based)",
      "State and props management", 
      "React hooks (useState, useEffect)",
      "Event handling and forms",
      "Conditional rendering and dynamic UI updates"
    ],
    category: "development",
    featured: true
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank", 
    issuedDate: "Jul 2025",
    credentialId: "77D3AC0C7864",
    url: "#",
    skills: ["SQL", "Software Engineering"],
    category: "development"
  },
  {
    title: "From Relational Model (SQL) to MongoDB's Document Model",
    issuer: "MongoDB",
    issuedDate: "Apr 2025",
    url: "#",
    skills: ["MongoDB", "Database Design", "NoSQL"],
    category: "database"
  },
  {
    title: "MongoDB Schema Design Patterns and Antipatterns",
    issuer: "MongoDB",
    issuedDate: "Apr 2025", 
    url: "#",
    skills: ["MongoDB", "Schema Design", "Database Optimization"],
    category: "database"
  },
  {
    title: "NMIT HACKS 2025",
    issuer: "NMIT Hacks",
    issuedDate: "Apr 2025",
    credentialId: "fabe55ca-c7fd-4dca-b0e5-d0f2d7ce3263",
    url: "#",
    skills: ["Hackathon", "Problem Solving", "Innovation"],
    category: "achievement"
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    issuedDate: "Feb 2025",
    credentialId: "EQA4TXL52166",
    url: "#",
    skills: ["Artificial Intelligence", "Responsible AI", "Prompt Engineering", "Machine Learning", "Generative AI"],
    description: "Validates expertise in generative AI, productivity enhancement, prompt engineering, responsible AI use, and emerging trends. Gain hands-on experience, ethical AI insights, and a Google-recognized certification for career growth.",
    category: "ai",
    featured: true
  },
  {
    title: "Google AI Essentials Honor Badge", 
    issuer: "Coursera",
    issuedDate: "Feb 2025",
    url: "#",
    skills: ["AI", "Machine Learning"],
    category: "ai"
  },
  {
    title: "Smart India Hackathon 2024 - FINALIST",
    issuer: "Smart India Hackathon",
    issuedDate: "Dec 2024",
    url: "#",
    skills: ["Team Leadership", "Team Management", "Cybersecurity", "Fuzzing"],
    description: "Worked on a Cybersecurity project using the Software Fuzzing method, enhancing problem-solving, teamwork, and adaptability.",
    category: "achievement",
    featured: true
  },
  {
    title: "AI 900 Training Empowering Student Innovators with AI",
    issuer: "Microsoft Learn Student Ambassadors",
    issuedDate: "Apr 2024",
    url: "#",
    skills: ["Microsoft Azure", "Artificial Intelligence"],
    category: "cloud"
  },
  {
    title: "API 101 using Postman",
    issuer: "United Latino Students Association", 
    issuedDate: "Mar 2024",
    credentialId: "f2ee391a-8324-4238-8a4c-d3599c17908f",
    url: "#",
    skills: ["Postman API", "API Development"],
    category: "development"
  },
  {
    title: "Fundamentals of AI and DATA Skills",
    issuer: "YBI Foundation",
    issuedDate: "Mar 2024", 
    credentialId: "SPUNYOBGIPTTL",
    url: "#",
    skills: ["Artificial Intelligence", "Data Processing"],
    category: "ai"
  },
  {
    title: "Create an intelligent document processing solution with Azure AI",
    issuer: "Microsoft",
    issuedDate: "Feb 2024",
    credentialId: "470DF8CD40749E1F", 
    url: "#",
    skills: ["Azure AI", "Document Intelligence", "Microsoft Azure"],
    category: "cloud"
  },
  {
    title: "UX Design with Figma",
    issuer: "GrowthSchool",
    issuedDate: "Feb 2024",
    credentialId: "a029ff16-eb44-4846-9fb5-612de572cd58",
    url: "#", 
    skills: ["UX Design", "Figma", "Design Thinking"],
    category: "development"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Canvas Credentials (Badgr)",
    issuedDate: "Dec 2023",
    credentialId: "658b6a846e566a0af1faea7c",
    url: "#",
    skills: ["Postman API", "Web Services API", "API Testing"],
    description: "This badge was awarded for demonstrating proficiency with APIs and Postman by completing foundational tasks in Postman and passing all tests with a submitted Postman Collection.",
    category: "development"
  },
  {
    title: "Web Developer (CIW)",
    issuer: "Internshala Trainings", 
    issuedDate: "Dec 2023",
    expiryDate: "Jan 2024",
    credentialId: "bf1eyxuuw5_",
    url: "#",
    skills: ["React.js", "HTML5", "PHP", "JavaScript", "SQL", "MySQL", "CSS", "Bootstrap", "Web Development"],
    description: "Successfully completed the Web Development training from Internshala Trainings consisting of HTML, CSS, Bootstrap, DBMS, PHP, JS, React, and Final Project modules.",
    category: "development"
  },
  {
    title: "Certificate of Achievement",
    issuer: "Tata Consultancy Services",
    issuedDate: "2023",
    url: "#",
    skills: ["Communication", "Professional Development"], 
    category: "achievement"
  }
];

const categories = [
  { key: "all", label: "All Certifications", icon: Award },
  { key: "featured", label: "Featured", icon: Star },
  { key: "development", label: "Development", icon: Shield },
  { key: "ai", label: "AI & ML", icon: Sparkles },
  { key: "cloud", label: "Cloud", icon: Calendar },
  { key: "achievement", label: "Achievements", icon: Trophy }
];

export function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCerts, setExpandedCerts] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleCertDetails = (index: number) => {
    const newExpanded = new Set(expandedCerts);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCerts(newExpanded);
  };

  const filteredCertifications = certifications.filter(cert => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "featured") return cert.featured;
    return cert.category === selectedCategory;
  });

  const displayedCerts = showAll ? filteredCertifications : filteredCertifications.slice(0, 8);

  const getCategoryColor = (category: string) => {
    const colors = {
      development: "from-blue-500 to-purple-600",
      ai: "from-purple-500 to-pink-600",
      cloud: "from-cyan-500 to-blue-600", 
      database: "from-green-500 to-teal-600",
      security: "from-red-500 to-orange-600",
      achievement: "from-yellow-500 to-orange-600"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="certifications" className="container max-w-screen-2xl px-6 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-l from-accent/5 via-transparent to-primary/5 blur-3xl" />
      
      <div className="space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Licenses & Certifications
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Professional Recognition
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications and achievements spanning development, AI, cloud technologies, 
            and competitive programming. Each certification validates expertise and continuous learning.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = selectedCategory === category.key;
            const count = category.key === "all" 
              ? certifications.length 
              : category.key === "featured"
              ? certifications.filter(c => c.featured).length
              : certifications.filter(c => c.category === category.key).length;

            return (
              <Button
                key={category.key}
                variant={isActive ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.key)}
                className={`group transition-all duration-300 hover:scale-105 ${
                  isActive 
                    ? "bg-accent text-background shadow-lg shadow-accent/25" 
                    : "border-border/50 hover:border-accent/30 hover:bg-accent/10"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {category.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {count}
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedCerts.map((cert, index) => {
            const isExpanded = expandedCerts.has(index);
            
            return (
              <div
                key={`${cert.title}-${index}`}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02] animate-scale-in ${
                  cert.featured 
                    ? "bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 shadow-lg shadow-accent/10" 
                    : "bg-gradient-to-br from-card/50 to-card border-border/50 hover:border-accent/30"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured badge */}
                {cert.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Star className="w-5 h-5 text-accent fill-current" />
                  </div>
                )}

                {/* Category gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(cert.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-accent">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {cert.issuedDate}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, isExpanded ? cert.skills.length : 3).map((skill) => (
                      <TechTag key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </TechTag>
                    ))}
                    {!isExpanded && cert.skills.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Description and Details */}
                  {isExpanded && (cert.description || cert.highlights || cert.credentialId) && (
                    <div className="space-y-3 animate-fade-in border-t border-border/50 pt-4">
                      {cert.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      )}
                      
                      {cert.highlights && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-accent">Key Skills Tested:</h4>
                          <div className="space-y-1">
                            {cert.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <Sparkles className="w-3 h-3 mt-0.5 text-accent/60 flex-shrink-0" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {cert.credentialId && (
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-muted-foreground">Credential ID:</span>
                          <Badge variant="outline" className="font-mono text-xs">
                            {cert.credentialId}
                          </Badge>
                        </div>
                      )}
                      
                      {cert.expiryDate && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>Expired: {cert.expiryDate}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {cert.url && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
                      >
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-3 w-3" />
                          View Credential
                        </a>
                      </Button>
                    )}
                    
                    {(cert.description || cert.highlights || cert.credentialId) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCertDetails(index)}
                        className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-3 w-3" />
                        ) : (
                          <ChevronDown className="h-3 w-3" />
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {filteredCertifications.length > 8 && (
          <div className="text-center space-y-6 pt-8 animate-fade-in">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group border-accent/20 hover:border-accent/50 hover:bg-accent/10 px-8 py-3"
            >
              {showAll ? "Show Less" : `View All ${filteredCertifications.length} Certifications`}
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
            <div className="text-3xl font-bold text-accent mb-2">{certifications.length}</div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">{certifications.filter(c => c.featured).length}</div>
            <div className="text-sm text-muted-foreground">Featured</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">{new Set(certifications.map(c => c.issuer)).size}</div>
            <div className="text-sm text-muted-foreground">Institutions</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">2025</div>
            <div className="text-sm text-muted-foreground">Latest Year</div>
          </div>
        </div>
      </div>
    </section>
  );
}
