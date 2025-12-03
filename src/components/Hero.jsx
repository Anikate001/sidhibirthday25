"use client"

import { useEffect, useState } from "react"

/* ===================================
   HERO COMPONENT
   Opening section with name and tagline
   KEEP COPY PLATONIC — no hearts
   =================================== */

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation on mount
    setIsVisible(true)
  }, [])

  return (
    <section className={`mb-24 md:mb-32 ${isVisible ? "fade-in" : "opacity-0"}`}>
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Siddhi</h1>
        <p className="text-xl md:text-2xl text-gray-400">Friend, creator, curious mind.</p>
        <div className="divider-accent my-8 md:my-12 w-24"></div>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          A celebration of collaboration, creativity, and the joy of building things together. From brainstorming
          late-night ideas to bringing bold visions to life — Siddhi brings energy, thoughtfulness, and an infectious
          curiosity to everything they touch.
        </p>
      </div>
    </section>
  )
}
