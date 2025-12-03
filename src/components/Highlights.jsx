"use client"

import { useEffect, useRef } from "react"

/* ===================================
   HIGHLIGHTS COMPONENT
   Achievements and qualities (platonic framing)
   KEEP COPY PLATONIC — no hearts
   =================================== */

export default function Highlights() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const highlights = [
    {
      title: "Collaborative Spirit",
      description: "Brings people together and amplifies the best in group dynamics.",
    },
    {
      title: "Creative Problem-Solver",
      description: "Finds novel solutions to challenging problems with elegance and clarity.",
    },
    {
      title: "Lifelong Learner",
      description: "Endlessly curious — always exploring new tools, ideas, and perspectives.",
    },
    {
      title: "Generous Mentor",
      description: "Takes genuine joy in helping others grow and sharing knowledge freely.",
    },
    {
      title: "Visual Communicator",
      description: "Translates complex ideas into compelling, accessible visuals and designs.",
    },
    {
      title: "Authentic & Grounded",
      description: "Stays true to their values while maintaining humility and humor.",
    },
  ]

  return (
    <section ref={sectionRef} className="mb-24 md:mb-32 space-y-6 md:space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">Highlights</h2>
      <div className="divider-accent w-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-white">{highlight.title}</h3>
            <p className="text-base md:text-lg text-gray-400">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
