"use client"

import type React from "react"

import { useEffect } from "react"
import AOS from "aos"

export default function ParallaxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    })

    // Add parallax effect to elements with data-parallax attribute
    const handleParallax = () => {
      const elements = document.querySelectorAll("[data-parallax]")
      elements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-parallax") || "0.1")
        const yPos = -(window.scrollY * speed)
        element.setAttribute("style", `transform: translate3d(0, ${yPos}px, 0)`)
      })
    }

    window.addEventListener("scroll", handleParallax)
    window.addEventListener("resize", AOS.refresh)

    return () => {
      window.removeEventListener("scroll", handleParallax)
      window.removeEventListener("resize", AOS.refresh)
    }
  }, [])

  return <>{children}</>
}
