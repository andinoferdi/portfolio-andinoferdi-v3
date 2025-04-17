import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Palette, Server } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces with modern frameworks",
    icon: <Globe className="h-8 w-8" />,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications and APIs",
    icon: <Server className="h-8 w-8" />,
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and aesthetically pleasing user experiences",
    icon: <Palette className="h-8 w-8" />,
    technologies: [
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    title: "Other Skills",
    description: "Additional technical skills and tools",
    icon: <Code className="h-8 w-8" />,
    technologies: [
      "Git",
      "Docker",
      "CI/CD",
      "Testing",
      "Performance Optimization",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="container py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 text-muted-foreground">
            Here are some of the technologies and tools I work with
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-secondary px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
