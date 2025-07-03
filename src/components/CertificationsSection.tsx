import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: "Certified Web Developer",
    issuer: "Internshala",
    date: "Dec 2023",
    url: "https://trainings.internshala.com/s/v/3229789/ea9497ac",
    icon: "💻"
  },
  {
    title: "UI/UX Design with Figma",
    issuer: "Growth School",
    date: "Jun 2024",
    url: "https://learners.growthschool.io/certificate/a029ff16-eb44-4846-9fb5-612de572cd58",
    icon: "🎨"
  },
  {
    title: "Postman API Fundamentals Expert",
    issuer: "Postman",
    date: "Aug 2023",
    url: "https://api.badgr.io/public/assertions/s8-7WvnFRbijoYelYplVgA",
    icon: "🔧"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="container max-w-screen-2xl px-6 py-16">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications showcasing my expertise in web development and design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="certification-card scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-2xl">{cert.icon}</div>
                  <Award className="h-5 w-5 text-accent" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
                  <p className="text-accent font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full h-8"
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    View Certificate
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}