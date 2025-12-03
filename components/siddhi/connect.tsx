"use client"

import { useEffect, useRef, useState } from "react"

export default function Connect() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section
      ref={sectionRef}
      className={`mb-24 md:mb-32 space-y-6 md:space-y-8 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white">Connect</h2>
      <div className="h-px bg-gradient-to-r from-[#0ea5ff] to-transparent w-16"></div>

      <p className="text-base md:text-lg text-gray-400 max-w-2xl">
        Want to collaborate, chat about ideas, or just say hello? Siddhi is always open to meaningful conversations and
        new connections.
      </p>

      <div className="space-y-6 mt-8">
        {/* Social links section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Social & Links</h3>
          <ul className="space-y-3 text-base md:text-lg">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0ea5ff] hover:text-[#06b6f5] transition"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0ea5ff] hover:text-[#06b6f5] transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0ea5ff] hover:text-[#06b6f5] transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0ea5ff] hover:text-[#06b6f5] transition"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Email section */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Email</h3>
          <a
            href="mailto:hello@siddhi.com"
            className="text-[#0ea5ff] hover:text-[#06b6f5] transition text-base md:text-lg"
          >
            hello@siddhi.com
          </a>
        </div>
      </div>
    </section>
  )
}
