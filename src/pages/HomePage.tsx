import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Twitter,
  MapPin, 
  Calendar,
  Building2,
  GraduationCap,
  Trophy,
  Code2,
  ExternalLink,
  Star,
  Sparkles,
  Award,
  Phone,
  Download
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TechTag } from "@/components/TechTag";
import { ResumeDownload } from "@/components/ResumeDownload";

export function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  });

  // Recent data for sections
  const recentExperience = {
    title: "Full Stack Developer Intern",
    company: "Kroolo",
    period: "Jan 2025 - Present",
    note: "Joined through Kroolo x The Generative Beings Hackathon!"
  };

  const topSkills = ["React", "Node.js", "TypeScript", "Python", "MongoDB", "TailwindCSS"];
  
  const featuredAchievements = [
    "Kroolo x The Generative Beings Hackathon Winner",
    "Smart India Hackathon 2024 Finalist",
    "Winner – First Ever Hackathon (PoliGap)"
  ];

  const featuredProjects = [
    { name: "PoliGap", description: "Decentralized political transparency platform", tech: ["React", "Solidity", "Web3"] },
    { name: "SocialSpark", description: "Social media platform with real-time features", tech: ["React", "Node.js", "MongoDB"] },
    { name: "ZeroHack", description: "Cybersecurity toolkit for penetration testing", tech: ["Python", "Security", "AI"] }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 space-y-8 md:space-y-12 lg:space-y-16">

        {/* Resume Download Section */}
        <ResumeDownload />

        {/* Hero Section */}
        <section className="space-y-6 md:space-y-8">
          <div className="space-y-6">
            {/* Profile Info */}
            <div className="flex items-start gap-4 md:gap-6">
              <Avatar className="w-20 h-20 md:w-28 md:h-28 ring-2 ring-accent/20 flex-shrink-0">
                <AvatarImage
                  src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png"
                  alt="Deekshith B Gowda"
                  className="object-cover"
                />
                <AvatarFallback className="text-xl md:text-2xl font-bold bg-gradient-to-br from-accent to-primary text-background">
                  DG
                </AvatarFallback>
              </Avatar>

              <div className="space-y-3 flex-1 min-w-0">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    Deekshith B Gowda
                  </h1>
                  <p className="text-lg md:text-xl text-accent font-medium">Full Stack Developer</p>
                  <p className="text-sm md:text-base text-muted-foreground">CS Engineering Student</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{timeString}</span>
                  </div>
                </div>

                <Badge variant="outline" className="bg-accent/10 border-accent/20 text-accent w-fit text-xs md:text-sm">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full mr-1.5 md:mr-2" />
                  Available for opportunities
                </Badge>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Building <span className="text-accent font-medium">innovative solutions</span> with modern technologies.
              Passionate about <span className="text-accent font-medium">AI, Full-Stack Development,</span> and <span className="text-accent font-medium">problem-solving</span>.
            </p>
          </div>
        </section>

        {/* Current Experience */}
        <section className="space-y-4 md:space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Building2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              Current Role
            </h2>
            <Link to="/experience">
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 text-xs md:text-sm w-fit">
                View All <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-semibold">{recentExperience.title}</h3>
                    <p className="text-accent font-medium text-sm md:text-base">{recentExperience.company}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{recentExperience.period}</p>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 text-xs w-fit">
                    Current
                  </Badge>
                </div>
                <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/30 w-fit text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  <span className="break-words">{recentExperience.note}</span>
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Skills */}
        <section className="space-y-4 md:space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Code2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              Top Skills
            </h2>
            <Link to="/skills">
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 text-xs md:text-sm w-fit">
                View All <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {topSkills.map((skill) => (
              <TechTag key={skill} className="hover:bg-accent/20 hover:text-accent transition-all duration-300 hover:scale-105 text-xs md:text-sm">
                {skill}
              </TechTag>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-4 md:space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              Featured Projects
            </h2>
            <Link to="/projects">
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 text-xs md:text-sm w-fit">
                View All <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.name} className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">{project.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((tech) => (
                      <TechTag key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </TechTag>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Achievements */}
        <section className="space-y-4 md:space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Trophy className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              Recent Achievements
            </h2>
            <Link to="/achievements">
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 text-xs md:text-sm w-fit">
                View All <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="space-y-2 md:space-y-3">
            {featuredAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 md:p-4 rounded-lg border border-border/50 bg-card/50">
                <Trophy className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Connect with Me */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            Connect with Me
          </h2>

          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-4 md:p-6 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm md:text-base">Get in Touch</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:deekshithb.22CS038.nc@cambridge.edu.in"
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10 text-sm md:text-base"
                    >
                      <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="break-all">deekshithb.22CS038.nc@cambridge.edu.in</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground p-2 text-sm md:text-base">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span>Karnataka, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground p-2 text-sm md:text-base">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span>Available for new opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm md:text-base">Social Media</h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/deekshith-b48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10 text-sm md:text-base"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span>GitHub Profile</span>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-auto flex-shrink-0" />
                    </a>
                    <a
                      href="https://linkedin.com/in/deekshithb48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10 text-sm md:text-base"
                    >
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-auto flex-shrink-0" />
                    </a>
                    <a
                      href="https://x.com/deekshith_b48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10 text-sm md:text-base"
                    >
                      <Twitter className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span>Twitter Profile</span>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-auto flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 border-t border-border/50">
                <Button
                  asChild
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground text-sm md:text-base"
                >
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 border-accent/30 hover:border-accent/50 hover:bg-accent/10 text-sm md:text-base"
                >
                  <a
                    href="/Deekshith_B_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
