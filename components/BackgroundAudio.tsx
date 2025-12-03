"use client"

import { useEffect, useRef } from "react"

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set desired volume (80%)
    audio.volume = 0.8

    // Try to start playback; browsers may require a user gesture
    const playPromise = audio.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay is blocked, we just fail silently.
        // The user can start audio via any future interaction.
      })
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/images/5 Minutes of Peaceful Piano Music, Relaxing Mind Clearing Music, Quick Piano Music, Relaxing Music - Deep Sleep & Relaxing Music Channel (1).mp3"
      autoPlay
      loop
      preload="auto"
      playsInline
    />
  )
}


