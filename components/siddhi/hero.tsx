"use client"

import { useEffect, useState } from "react"
import CountdownToDec4 from "./countdown"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className={`mb-24 md:mb-32 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-cyan-500/10 px-6 py-8 md:px-10 md:py-12 shadow-[0_0_60px_rgba(14,165,255,0.18)] backdrop-blur-md">
        <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen">
          <div className="absolute -top-32 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl" />
        </div>

        <div className="relative space-y-5 md:space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/40 px-3 py-1 text-xs tracking-[0.2em] uppercase text-cyan-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Birthday edition · For Siddhi</span>
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white drop-shadow-[0_0_25px_rgba(15,23,42,0.9)]">
              Siddhi Suar
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-cyan-100/80">
              Friend, creator, and the star of 4th December.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-cyan-400 via-amber-300/70 to-transparent my-6 md:my-8 w-32" />

          <p className="text-sm md:text-base text-gray-200/90 max-w-2xl leading-relaxed">
          
          </p>

          <CountdownToDec4 />
        </div>
      </div>
    </section>
  )
}
