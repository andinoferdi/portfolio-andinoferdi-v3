"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>(0)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: getRandomColor(0.5),
        })
      }
    }

    const getRandomColor = (opacity: number) => {
      const colors = [
        `rgba(238, 119, 82, ${opacity})`,
        `rgba(231, 60, 126, ${opacity})`,
        `rgba(35, 166, 213, ${opacity})`,
        `rgba(35, 213, 171, ${opacity})`,
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      // Connect particles with lines if they're close enough
      connectParticles(ctx)

      animationFrameId.current = requestAnimationFrame(drawParticles)
    }

    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 150
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            const opacity = 1 - distance / maxDistance
            const isDark = theme === "dark"
            
            // Efek neon untuk kedua mode
            if (isDark) {
              ctx.shadowBlur = 5
              ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            } else {
              ctx.shadowBlur = 5
              ctx.shadowColor = "rgba(255, 192, 203, 0.7)"
              ctx.strokeStyle = `rgba(255, 192, 203, ${opacity})`
            }
            ctx.lineWidth = 0.5
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
            
            // Reset shadow effect
            ctx.shadowBlur = 0
          }
        }
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30 dark:opacity-20" />
}
