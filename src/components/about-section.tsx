"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return

      const scrollY = window.scrollY
      const element = imageRef.current
      const elementPosition = element.getBoundingClientRect().top + scrollY
      const offset = scrollY - elementPosition

      // Apply rotation based on scroll position
      if (offset > -500 && offset < 500) {
        const rotation = offset * 0.05
        element.style.transform = `rotate(${rotation}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="container py-12 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 relative z-10">
        <div className="flex justify-center md:order-last" data-aos="fade-left" data-aos-duration="1000">
          <div ref={imageRef} className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary glow" style={{ boxShadow: '0 0 20px 5px rgba(255, 20, 147, 0.5)', filter: 'drop-shadow(0 0 10px rgba(255, 20, 147, 0.7)', borderColor: 'pink' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20 z-10" />
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Andino Ferdi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-4" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">About Me</h2>
          <p className="text-muted-foreground">
            I&apos;m a passionate developer with a strong focus on creating clean, efficient, and user-friendly
            applications. With years of experience in web development, I specialize in building modern websites and
            applications using the latest technologies.
          </p>
          <p className="text-muted-foreground">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying outdoor activities.
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
            <Button variant="outline" asChild className="backdrop-blur-sm bg-background/50 border-white/20">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
