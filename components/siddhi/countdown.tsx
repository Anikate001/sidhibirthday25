"use client"

import { useEffect, useState } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000 // UTC+5:30

function getTimeLeftToNextDec4IST(): TimeLeft {
  const nowUtcMs = Date.now()

  // Convert "now" into IST by shifting and then reading UTC parts
  const nowIST = new Date(nowUtcMs + IST_OFFSET_MS)
  const istYear = nowIST.getUTCFullYear()
  const istMonth = nowIST.getUTCMonth() // 0-based
  const istDate = nowIST.getUTCDate()

  // If it's December 4th in IST, show all zeros for the whole day
  if (istMonth === 11 && istDate === 4) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  // Decide which year's Dec 4th (00:00 IST) we are counting towards
  let targetYear = istYear
  if (istMonth > 11 || (istMonth === 11 && istDate > 4)) {
    targetYear = istYear + 1
  }

  // December 4th, 00:00 IST corresponds to Dec 3rd, 18:30 UTC
  const targetUtcMs = Date.UTC(targetYear, 11, 3, 18, 30, 0)

  let diffMs = targetUtcMs - nowUtcMs
  if (diffMs < 0) diffMs = 0

  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / (24 * 60 * 60))
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function pad(num: number) {
  return num.toString().padStart(2, "0")
}

export default function CountdownToDec4() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeftToNextDec4IST())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeftToNextDec4IST())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-8 inline-flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_0_40px_rgba(14,165,255,0.12)] backdrop-blur-sm">
      <span className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">
        Countdown to your next 4th December (IST)
      </span>
      <div className="flex items-baseline gap-3 font-mono text-2xl md:text-3xl text-cyan-100">
        <span className="tabular-nums">
          {pad(timeLeft.days)}:{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
      </div>
      <span className="text-[11px] text-cyan-100/60">
        Format — days:hours:minutes:seconds · 24-hour time · based on India Standard Time
      </span>
    </div>
  )
}


