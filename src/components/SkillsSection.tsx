import { TechTag } from "./TechTag";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "C++", "C", "SQL"],
    icon: "💻"
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"],
    icon: "🎨"
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Flask", "RESTful APIs", "GraphQL"],
    icon: "⚙️"
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    icon: "🗄️"
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "Postman", "Figma", "Jupyter Notebook"],
    icon: "🛠️"
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "CI/CD", "Render", "Vercel"],
    icon: "☁️"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="container max-w-screen-2xl px-6 py-16">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set covering full-stack development, cloud technologies, and modern methodologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="skills-card scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechTag key={skill} variant="default">{skill}</TechTag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
            <span className="text-sm font-medium">Methodologies:</span>
            <span className="text-sm">Agile • Scrum • Test-Driven Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}