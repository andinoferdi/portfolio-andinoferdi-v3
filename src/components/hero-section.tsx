"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { useEffect, useRef } from "react"
import Particles from "@/components/particles"

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current || !subtitleRef.current) return

      if (timeoutId) clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight

        titleRef.current!.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`
        subtitleRef.current!.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px)`
      }, 10)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center gap-8 py-20 md:py-32 overflow-hidden"
    >
      <Particles />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container flex max-w-[980px] flex-col items-center gap-6 text-center z-10">
        <h1
          ref={titleRef}
          className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Hello, I&apos;m <span className="gradient-text font-extrabold">Andino Ferdi</span>
        </h1>
        <p
          ref={subtitleRef}
          className="max-w-[700px] text-lg text-muted-foreground md:text-xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          A passionate developer crafting beautiful digital experiences
        </p>

        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70 blur"></div>
          <div className="flex gap-4 relative" data-aos="fade-up" data-aos-delay="500">
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0 shine"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild className="backdrop-blur-sm bg-background/50 border-white/20">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 floating" data-aos="fade-up" data-aos-delay="700">
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-white/20 shadow-lg"
        >
          <ArrowDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  )
}
