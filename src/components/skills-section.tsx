"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Palette, Server } from "lucide-react"
import { useRef, useEffect } from "react"

const skills = [
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with modern frameworks",
    icon: <Globe className="h-8 w-8" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications and APIs",
    icon: <Server className="h-8 w-8" />,
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and aesthetically pleasing user experiences",
    icon: <Palette className="h-8 w-8" />,
    technologies: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping"],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Other Skills",
    description: "Additional technical skills and tools",
    icon: <Code className="h-8 w-8" />,
    technologies: ["Git", "Docker", "CI/CD", "Testing", "Performance Optimization"],
    color: "from-amber-500 to-orange-400",
  },
]

export default function SkillsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        // Only apply the effect when mouse is over the card
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          card.style.transition = "transform 0.1s"
        } else {
          card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
          card.style.transition = "transform 0.5s"
        }
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="skills" className="container py-12 md:py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">My Skills</h2>
          <p className="mt-4 text-muted-foreground">Here are some of the technologies and tools I work with</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              ref={(el: HTMLDivElement | null) => {
                cardsRef.current[index] = el;
                return undefined;
              }}
              className="card-3d"
            >
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10`} />
                <CardContent className="p-6 relative">
                  <div className="mb-4 flex items-center gap-4">
                    <div className={`rounded-full bg-gradient-to-br ${skill.color} p-2 text-white`}>{skill.icon}</div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                  </div>
                  <p className="mb-4 text-muted-foreground">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`rounded-full bg-gradient-to-r ${skill.color} bg-opacity-10 px-3 py-1 text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
