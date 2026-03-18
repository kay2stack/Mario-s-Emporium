'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const tickerItems = [
  "🎮 NEW PS5 BUNDLES JUST DROPPED",
  "🕹️ RETRO CONSOLES IN STOCK",
  "👷 WORKWEAR ESSENTIALS 50% OFF",
  "🔌 TECH GADGETS WEEKLY DEALS",
  "⭐ FREE UK SHIPPING OVER £50",
  "🪙 RARE COLLECTIBLES AVAILABLE",
]

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const tickerContent = tickerItems.join('     •     ')

  return (
    <div className="bg-mario-red border-b-4 border-mario-red-dark overflow-hidden whitespace-nowrap py-2 relative z-[200]">
      <div 
        className="inline-block animate-ticker"
        style={{ animation: 'ticker 30s linear infinite' }}
      >
        {/* Double the content for seamless loop */}
        {[1, 2].map((_, i) => (
          <span key={i} className="font-fredoka text-sm text-white px-8">
            {tickerItems.map((item, idx) => (
              <span key={idx} className="mx-6">
                🍄 {item}
              </span>
            ))}
          </span>
        ))}
      </div>
      
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors bg-mario-red-dark/50"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4 text-white" />
      </button>
    </div>
  )
}
