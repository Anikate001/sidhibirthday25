"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={`mb-24 md:mb-32 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">Siddhi Suar</h1>
        <p className="text-xl md:text-2xl text-gray-400">Friend, creator, curious mind.</p>
        <div className="h-px bg-gradient-to-r from-[#0ea5ff] to-transparent my-8 md:my-12 w-24"></div>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
          A special birthday website made just for you, Siddhi! This site is a tribute to your amazing personality, our friendship, and all the wonderful moments we've shared. From your infectious laughter to your creative spirit, this site celebrates everything that makes you so special. Happy Birthday, Siddhi! May this year bring you endless joy, success, and unforgettable memories.
        </p>
      </div>
    </section>
  )
}
