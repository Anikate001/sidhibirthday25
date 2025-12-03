"use client"

import { useEffect, useRef } from "react"

/* ===================================
   ABOUT COMPONENT
   Biographical section
   KEEP COPY PLATONIC — no hearts
   =================================== */

export default function About() {
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

  return (
    <section ref={sectionRef} className="mb-24 md:mb-32 space-y-6 md:space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">About</h2>
      <div className="divider-accent w-16"></div>

      <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-300 leading-relaxed">
        <p>
          Siddhi is a multidisciplinary creator who thrives at the intersection of design, technology, and storytelling.
          With a passion for solving complex problems through elegant, user-centered solutions, Siddhi approaches every
          project with both strategic thinking and artistic sensibility.
        </p>

        <p>
          Whether working on digital products, visual design, or collaborative projects, Siddhi brings a blend of
          technical rigor and creative exploration. Their work reflects a commitment to clarity, innovation, and
          meaningful impact.
        </p>

        <p>
          Beyond work, Siddhi is known for their generosity with knowledge, genuine interest in others' ideas, and an
          uncanny ability to make everyone feel heard and valued. They approach life with infectious optimism and an
          ever-present sense of humor.
        </p>
      </div>
    </section>
  )
}
