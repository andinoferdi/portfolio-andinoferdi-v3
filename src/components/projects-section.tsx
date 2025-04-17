"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart functionality and payment integration",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and team collaboration",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application displaying forecasts and historical data",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Chart.js", "Weather API"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (!cardRefs.current[index]) return;

    const card = cardRefs.current[index];
    const rect = card!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card!.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (index: number) => {
    if (!cardRefs.current[index]) return;
    const card = cardRefs.current[index];
    card!.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  };

  return (
    <section id="projects" className="container py-12 md:py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
            My Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            Check out some of my recent work
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos={isMobile ? "fade-in" : "fade-up"}
              data-aos-delay={isMobile ? 0 : index * 100}
              ref={(el: HTMLDivElement | null): void => {
                cardRefs.current[index] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseOut={() => setActiveIndex(null)}
              className="transition-all duration-300"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.3s ease",
              }}
            >
              <Card
                className="overflow-hidden border border-white/10 shadow-xl bg-card/80 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-10" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
                </div>
                <CardHeader>
                  <CardTitle
                    className="relative"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription style={{ transform: "translateZ(30px)" }}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent style={{ transform: "translateZ(40px)" }}>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter
                  className="flex gap-2"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`transition-all duration-300 ${
                      activeIndex === index ? "bg-primary/10" : ""
                    }`}
                  >
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`transition-all duration-300 ${
                      activeIndex === index ? "bg-primary/10" : ""
                    }`}
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
