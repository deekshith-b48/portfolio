import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { TechTag } from "./TechTag";

export function EducationSection() {
  return (
    <section id="education" className="container max-w-screen-2xl px-6 py-16">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in Computer Science Engineering with focus on software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="education-card slide-up">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🎓</div>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Bachelor of Engineering – Computer Science</h3>
                    <p className="text-lg text-accent">Cambridge Institute of Technology</p>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Bengaluru, Karnataka
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Aug 2022 - May 2026
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                      CGPA: 8.4 / 10.0
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Pursuing comprehensive education in Computer Science with hands-on experience in software development,
                  algorithms, and modern web technologies.
                </p>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "Database Management Systems", "Software Engineering", "Web Technologies"].map((course) => (
                      <TechTag key={course} variant="default">{course}</TechTag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}