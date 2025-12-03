"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import Hero from "@/components/siddhi/hero"
import About from "@/components/siddhi/about"
import Highlights from "@/components/siddhi/highlights"
import Gallery from "@/components/siddhi/gallery"
import Footer from "@/components/siddhi/footer"
/* ===================================
   SIDDHI SUAR TRIBUTE PAGE (Next.js App Router)
   Minimalist, dark theme with smooth scrolling & mesh pattern background
   KEEP COPY PLATONIC — no hearts
   =================================== */

export default function Page() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, // Reduced from 1.2 for faster response
      easing: (t: number) => t, // Linear easing for predictable smoothness
      direction: "vertical" as const,
      gestureDirection: "vertical" as const,
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1, // Reduced from 2 to avoid overshooting
    })

    lenisRef.current = lenis

    // RAF loop with timestamp - critical for smooth animation
    let lastTime = performance.now()
    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      lenis.raf(time)
      requestAnimationFrame(animate)
    }

    const animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen bg-[#0b0b0d] text-[#e8e8eb] relative overflow-hidden mesh-background">

      {/* Left column: content (100% on mobile, 75% on desktop) */}
      <main className="w-full md:w-3/4 px-6 md:px-12 py-16 md:py-24 max-w-3xl relative z-10">
        <Hero />
        <About />
        <Highlights />
        <Gallery />
        <Footer />
      </main>

      {/* Right column: fixed sticky portrait (hidden on mobile) */}
      <aside className="hidden md:block fixed right-0 top-0 h-screen w-1/4 z-0 pointer-events-none">
        <div className="sticky top-0 h-screen flex items-center justify-center pr-4">
          <div className="h-screen w-full flex items-center justify-end">
            <img
              src="/images/whatsapp-image-2025-12-02-at-17.png"
              alt="Siddhi — portrait of our friend"
              className="h-[200vh] w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </aside>
    </div>
  )
}
