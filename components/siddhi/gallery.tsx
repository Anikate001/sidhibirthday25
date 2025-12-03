"use client"

import { useEffect, useRef, useState } from "react"

export default function Gallery() {
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

  const galleryImages = [
    {
      src: "/images/whatsapp-20image-202025-12-02-20at-2017.jpg",
      alt: "Siddhi — close-up portrait with glasses in neon venue",
    },
    {
      src: "/images/snapchat-1830186960.jpg",
      alt: "Siddhi — candid moment with teddy bear overlays",
    },
    {
      src: "/images/snapchat-2019232295.jpg",
      alt: "Siddhi — eating moment in red checkered shirt",
    },
    {
      src: "/images/snapchat-869939795.jpg",
      alt: "Siddhi — mall day with peace sign and smile",
    },
    {
      src: "/images/snapchat-1153390395.jpg",
      alt: "Siddhi — outdoors by trees in traditional outfit",
    },
    {
      src: "/images/snapchat-2126657309.jpg",
      alt: "Siddhi — gym moment",
    },
    {
      src: "/images/snapchat-608652186.jpg",
      alt: "Siddhi — upside-down candid with friend",
    },
    {
      src: "/images/snapchat-1978746275.jpg",
      alt: "Siddhi — outdoor selfie with friend under trees",
    },
    {
      src: "/images/snapchat-1579768432.jpg",
      alt: "Siddhi — mall moment in pink fuzzy jacket",
    },
    {
      src: "/images/snapchat-1248966038.jpg",
      alt: "Siddhi — shopping for sparkly dress",
    },
    {
      src: "/images/snapchat-1573252557.jpg",
      alt: "Siddhi — bus moment with beanie and pink jacket",
    },
    {
      src: "/images/snapchat-1223199076.jpg",
      alt: "Siddhi — park day in traditional salwar kameez",
    },
    {
      src: "/images/snapchat-1226149797.jpg",
      alt: "Siddhi — car moment with beanie and peace sign",
    },
    {
      src: "/images/snapchat-1422448030.jpg",
      alt: "Siddhi — mall moment showing off rings",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`mb-24 md:mb-32 space-y-6 md:space-y-8 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white">Moments</h2>
      <div className="h-px bg-gradient-to-r from-[#0ea5ff] to-transparent w-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {galleryImages.map((image, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[3/4] bg-gray-800"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
