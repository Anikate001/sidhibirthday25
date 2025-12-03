"use client"

import { useEffect, useRef } from "react"

/* ===================================
   CONNECT COMPONENT
   Social links and contact info (platonic framing)
   KEEP COPY PLATONIC — no hearts
   =================================== */

export default function Connect() {
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
      <h2 className="text-3xl md:text-4xl font-bold">Connect</h2>
      <div className="divider-accent w-16"></div>

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
                className="text-accent hover:text-accent-hover transition"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition"
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
            className="text-accent hover:text-accent-hover transition text-base md:text-lg"
          >
            hello@siddhi.com
          </a>
        </div>
      </div>
    </section>
  )
}
