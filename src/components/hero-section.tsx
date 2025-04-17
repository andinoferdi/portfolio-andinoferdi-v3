"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
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

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!title || !subtitle) return;

    // Only apply complex animations on desktop
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        title.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
        subtitle.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center gap-8 py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container flex max-w-[980px] flex-col items-center gap-6 text-center z-10">
        <h1
          ref={titleRef}
          className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl"
          data-aos="fade-in"
          data-aos-delay={isMobile ? 0 : 100}
        >
          Hello, I&apos;m{" "}
          <span className="gradient-text font-extrabold">Andino Ferdi</span>
        </h1>
        <p
          ref={subtitleRef}
          className="max-w-[700px] text-lg text-muted-foreground md:text-xl"
          data-aos="fade-in"
          data-aos-delay={isMobile ? 0 : 300}
        >
          A passionate developer crafting beautiful digital experiences
        </p>

        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70 blur"></div>
          <div
            className="flex gap-4 relative"
            data-aos="fade-in"
            data-aos-delay={isMobile ? 0 : 500}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0 shine"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="backdrop-blur-sm bg-background/50 border-white/20"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="mt-12 floating"
        data-aos="fade-in"
        data-aos-delay={isMobile ? 0 : 700}
      >
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-white/20 shadow-lg"
        >
          <ArrowDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}
