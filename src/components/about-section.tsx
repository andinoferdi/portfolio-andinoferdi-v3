"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
    // Only apply parallax effect on desktop
    if (isMobile) return;

    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      imageRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Toggle images when clicked with animation lock
  const handleSwapImages = () => {
    if (isAnimating) return; // Prevent clicking during animation

    setIsAnimating(true);
    setIsSwapped(!isSwapped);

    // Reset animation lock after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  return (
    <section id="about" className="container py-12 md:py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 md:gap-16 items-center relative z-10">
        <div
          ref={imageRef}
          data-aos={isMobile ? "fade-in" : "fade-right"}
          data-aos-duration={isMobile ? 600 : 1000}
          className="relative h-[350px] md:h-[400px]"
        >
          {/* Main Image Container */}
          <div
            className={`absolute ${
              isSwapped
                ? "-right-4 -bottom-4 w-40 h-40 md:w-48 md:h-48 z-10"
                : "-inset-4 z-5"
            } rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur transition-all ease-in-out`}
            style={{
              transformOrigin: isSwapped ? "bottom right" : "center",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />

          {/* Profile Image Container */}
          <div
            className={`absolute overflow-hidden rounded-lg bg-background border border-white/10 shadow-xl cursor-pointer ${
              isSwapped
                ? "w-40 h-40 md:w-48 md:h-48 -right-4 -bottom-4 z-30"
                : "w-full h-full left-0 top-0 z-10"
            }`}
            onClick={handleSwapImages}
            style={{
              transformOrigin: isSwapped ? "bottom right" : "center",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Andino Ferdi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

            {/* Add experience text to profile image when it's small */}
            {isSwapped && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white"
                style={{
                  transition: "opacity 0.6s ease-in-out",
                }}
              >
                <div className="text-3xl md:text-4xl font-bold">8+</div>
                <div className="text-xs md:text-sm text-center px-1">
                  Projects Completed
                </div>
              </div>
            )}
          </div>

          {/* Secondary Image Container with neon effect */}
          <div
            className={`absolute cursor-pointer overflow-hidden rounded-lg border-2 border-white/30 bg-background/80 backdrop-blur-sm ${
              isSwapped
                ? "w-full h-full left-0 top-0 z-10"
                : "w-40 h-40 md:w-48 md:h-48 -right-4 -bottom-4 z-30"
            }`}
            onClick={handleSwapImages}
            style={{
              boxShadow:
                "0 0 20px 3px rgba(147, 51, 234, 0.6), 0 0 8px 2px rgba(79, 70, 229, 0.4) inset",
              transformOrigin: isSwapped ? "center" : "bottom right",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/experience.jpg"
                alt="Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30" />

              {/* Only show experience text on the small box */}
              {!isSwapped && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white"
                  style={{
                    transition: "opacity 0.6s ease-in-out",
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold">5+</div>
                  <div className="text-xs md:text-sm text-center px-1">
                    Years of Experience
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-4"
          data-aos={isMobile ? "fade-in" : "fade-left"}
          data-aos-duration={isMobile ? 600 : 1000}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I&apos;m a passionate developer with a strong focus on creating
            clean, efficient, and user-friendly applications. With years of
            experience in web development, I specialize in building modern
            websites and applications using the latest technologies.
          </p>
          <p className="text-muted-foreground">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or enjoying
            outdoor activities.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur"></div>
              <Button
                asChild
                className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shine"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
            <Button
              variant="outline"
              asChild
              className="backdrop-blur-sm bg-background/50 border-white/20"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
