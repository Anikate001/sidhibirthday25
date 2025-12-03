"use client"

import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import Hero from "./components/Hero"
import About from "./components/About"
import Highlights from "./components/Highlights"
import Connect from "./components/Connect"
import Footer from "./components/Footer"
import "./App.css"

/* ===================================
   MAIN APP COMPONENT
   Initializes Lenis smooth scrolling
   Manages layout: 75% left content + 25% right sticky portrait
   KEEP COPY PLATONIC — no hearts
   =================================== */

function App() {
  const lenisRef = useRef(null)
  const portraitRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    // Animation loop
    let lastTime = Date.now()
    const onAnimationFrame = (time) => {
      const deltaTime = time - lastTime
      lastTime = time
      lenis.raf(deltaTime)
      requestAnimationFrame(onAnimationFrame)
    }

    const animationFrameId = requestAnimationFrame(onAnimationFrame)

    // Optional: disable Lenis on mobile for better native feel
    const handleResize = () => {
      if (window.innerWidth < 768) {
        lenis.destroy()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="flex min-h-screen bg-black text-gray-200">
      {/* Left column: 75% on desktop, 100% on mobile */}
      <main className="w-full px-6 md:px-12 md:w-3/4 py-16 md:py-24 max-w-3xl mx-auto md:mx-0">
        <Hero />
        <About />
        <Highlights />
        <Connect />
        <Footer />
      </main>

      {/* Right column: 25% sticky portrait (hidden on mobile) */}
      <aside ref={portraitRef} className="hidden md:flex md:w-1/4 items-start justify-end md:px-8">
        <div className="portrait-container">
          {/* 
            PORTRAIT IMAGE PLACEHOLDER:
            Replace 'portrait.jpg' with your actual image file.
            Recommended size: 1200×1800px (3:2 aspect ratio, vertical orientation)
            Place the image in public/images/siddhi-portrait.jpg
            Update the src path below accordingly.
            
            For accessibility: alt text should briefly describe the person (e.g., "Siddhi, smiling at the camera")
          */}
          <img
            src="/images/siddhi-portrait.jpg"
            alt="Siddhi — a portrait of our friend"
            className="portrait-image w-72 h-auto"
            loading="lazy"
          />
        </div>
      </aside>
    </div>
  )
}

export default App
