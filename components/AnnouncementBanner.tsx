'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Gamepad2, Cpu, X } from 'lucide-react'

const announcements = [
  { icon: Sparkles, text: "NEW STOCK JUST IN", highlight: "Check out this week's arrivals!" },
  { icon: Gamepad2, text: "GAMING GEAR", highlight: "PS5, Xbox, Nintendo & more" },
  { icon: Cpu, text: "RETRO TECH", highlight: "Classic consoles & vintage electronics" },
]

export function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  const current = announcements[currentIndex]
  const Icon = current.icon

  return (
    <div className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="section-padding py-2 relative">
        <div className="flex items-center justify-center gap-3">
          <Icon className="w-4 h-4 animate-pulse" />
          <div className="flex items-center gap-2 font-barlow-condensed text-sm sm:text-base">
            <span className="font-bold tracking-wider">{current.text}</span>
            <span className="hidden sm:inline text-white/80">—</span>
            <span className="hidden sm:inline text-white/90">{current.highlight}</span>
          </div>
          <Icon className="w-4 h-4 animate-pulse" />
        </div>
        
        {/* Progress dots */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
          {announcements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-3' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
