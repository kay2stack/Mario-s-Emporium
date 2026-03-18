'use client'

import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Sky Background */}
      <div 
        className="py-8 sm:py-12 md:py-16 px-4 sm:px-8"
        style={{
          background: 'linear-gradient(180deg, #5db8f5 0%, #87ceeb 100%)'
        }}
      >
        {/* Hero Content */}
        <div className="relative z-10 text-center w-full max-w-3xl mx-auto">
          {/* Mushrooms - smaller on mobile */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
            <span className="text-3xl sm:text-5xl md:text-6xl">🍄</span>
            <span className="text-3xl sm:text-5xl md:text-6xl" style={{ filter: 'hue-rotate(180deg)' }}>🍄</span>
          </div>

          {/* Title */}
          <h1 className="font-fredoka text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-2 sm:mb-4"
            style={{ textShadow: '2px 2px 0 #b5100e, 4px 4px 0 rgba(0,0,0,0.1)' }}
          >
            MARIO&apos;S <span className="text-mario-yellow" style={{ textShadow: '2px 2px 0 #c9a000, 4px 4px 0 rgba(0,0,0,0.1)' }}>EMPORIUM</span>
          </h1>

          {/* Subtitle */}
          <div className="bg-white/95 rounded-xl px-3 sm:px-6 py-2 sm:py-4 mx-auto max-w-xs sm:max-w-lg mb-3 sm:mb-6 border-2 border-white"
            style={{ boxShadow: '0 3px 0 rgba(0,0,0,0.08)' }}
          >
            <p className="font-nunito font-bold text-gray-700 text-xs sm:text-base md:text-lg leading-snug">
              🎮 Gaming gear, retro tech, workwear & hidden gems.
              <span className="text-mario-red"> New stock weekly!</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2 sm:gap-4 justify-center">
            <Link href="/shop" className="btn-mario-red text-sm sm:text-lg px-4 sm:px-6">
              🛍️ SHOP
            </Link>
            <Link href="/about" className="btn-mario-blue text-sm sm:text-lg px-4 sm:px-6">
              ℹ️ ABOUT
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Strip - single line, no wrap */}
      <div className="bg-[#1a0a00] py-2 sm:py-3 px-2 overflow-x-auto">
        <div className="flex justify-center gap-3 sm:gap-8 md:gap-12 min-w-max mx-auto">
          <div className="text-center">
            <span className="font-fredoka text-base sm:text-xl text-white">100+</span>
            <span className="font-nunito text-[10px] sm:text-xs text-mario-yellow ml-1">items</span>
          </div>
          <div className="text-center">
            <span className="font-fredoka text-base sm:text-xl text-white">500+</span>
            <span className="font-nunito text-[10px] sm:text-xs text-mario-yellow ml-1">buyers</span>
          </div>
          <div className="text-center">
            <span className="font-fredoka text-base sm:text-xl text-white">🇬🇧</span>
            <span className="font-nunito text-[10px] sm:text-xs text-mario-yellow ml-1">UK shipping</span>
          </div>
        </div>
      </div>

      {/* Ground strip */}
      <div className="h-3 sm:h-4 bg-mario-ground border-t-2 border-[#e09820]"></div>
    </section>
  )
}