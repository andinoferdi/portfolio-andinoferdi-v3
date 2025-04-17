"use client";

import type React from "react";

import { useEffect, useState } from "react";
import AOS from "aos";

export default function ParallaxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Initialize AOS with settings optimized for mobile
    AOS.init({
      duration: isMobile ? 600 : 800,
      once: true, // Only animate once to avoid issues on mobile
      mirror: false, // Disable mirror effect on mobile
      easing: "ease-out",
      offset: 50, // Smaller offset for triggering animations
      disable: function () {
        // Disable AOS on very low-end mobile devices
        const maxWidth = 768;
        return (
          window.innerWidth < maxWidth &&
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) &&
          "ontouchstart" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches
        );
      },
      // Fix for mobile scrolling issues
      startEvent: "DOMContentLoaded",
    });

    // Add parallax effect to elements with data-parallax attribute
    // Use RAF for smoother performance
    let ticking = false;
    const handleParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only apply parallax on non-mobile devices
          if (!isMobile) {
            const elements = document.querySelectorAll("[data-parallax]");
            elements.forEach((element) => {
              const speed = Number.parseFloat(
                element.getAttribute("data-parallax") || "0.1"
              );
              const yPos = -(window.scrollY * speed);
              element.setAttribute(
                "style",
                `transform: translate3d(0, ${yPos}px, 0)`
              );
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleParallax);

    // When orientation changes or window resizes, refresh AOS
    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });

    return () => {
      window.removeEventListener("scroll", handleParallax);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", AOS.refresh);
      window.removeEventListener("orientationchange", AOS.refresh);
    };
  }, [isMobile]);

  return <>{children}</>;
}
