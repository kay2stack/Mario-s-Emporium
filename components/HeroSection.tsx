'use client'

import { useState } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const [coinPop, setCoinPop] = useState<number | null>(null)

  const handleBlockClick = (blockId: number) => {
    setCoinPop(blockId)
    setTimeout(() => setCoinPop(null), 600)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Sky + Ground Background */}
      <div 
        className="min-h-[480px] sm:min-h-[520px] md:min-h-[560px] flex items-center justify-center pt-6 pb-32 sm:pb-36 px-4 sm:px-8"
        style={{
          background: 'linear-gradient(180deg, #5db8f5 0%, #87ceeb 70%, #c8851a 70%)'
        }}
      >
        {/* Floating Clouds - hidden on mobile */}
        <div className="cloud absolute w-24 sm:w-32 h-8 sm:h-10 top-[12%] hidden sm:block" style={{ animationDuration: '35s', left: '-100px' }}>
          <div className="absolute bg-white rounded-full w-10 sm:w-12 h-10 sm:h-12 -top-4 left-4"></div>
          <div className="absolute bg-white rounded-full w-6 sm:w-8 h-6 sm:h-8 -top-2 left-12 sm:left-14"></div>
        </div>
        <div className="cloud absolute w-20 sm:w-24 h-6 sm:h-8 top-[25%] hidden sm:block" style={{ animationDuration: '28s', animationDelay: '5s', left: '-100px' }}>
          <div className="absolute bg-white rounded-full w-8 sm:w-10 h-8 sm:h-10 -top-4 left-2"></div>
          <div className="absolute bg-white rounded-full w-5 sm:w-6 h-5 sm:h-6 -top-1 left-8 sm:left-10"></div>
        </div>

        {/* Pipes - only on larger screens */}
        <div className="pipe absolute bottom-24 left-4 lg:left-8 hidden lg:flex">
          <div className="pipe-head"></div>
          <div className="pipe-body"></div>
        </div>
        <div className="pipe absolute bottom-24 right-4 lg:right-8 hidden lg:flex">
          <div className="pipe-head"></div>
          <div className="pipe-body"></div>
        </div>

        {/* Question Blocks - only on larger screens */}
        <div 
          className="q-block absolute top-[20%] left-[12%] hidden lg:flex cursor-pointer"
          onClick={() => handleBlockClick(1)}
        >
          ?
          {coinPop === 1 && <span className="absolute -top-8 text-2xl animate-bounce">🪙</span>}
        </div>
        <div 
          className="q-block absolute top-[30%] right-[15%] hidden lg:flex cursor-pointer"
          style={{ animationDelay: '0.5s' }}
          onClick={() => handleBlockClick(2)}
        >
          ?
          {coinPop === 2 && <span className="absolute -top-8 text-2xl animate-bounce">🪙</span>}
        </div>

        {/* Floating decorations - only on larger screens */}
        <span className="float-coin absolute top-[15%] left-[20%] hidden lg:block text-2xl">🪙</span>
        <span className="float-coin absolute top-[25%] right-[22%] hidden lg:block text-2xl" style={{ animationDelay: '1s' }}>⭐</span>

        {/* Hero Content */}
        <div className="relative z-10 text-center w-full max-w-3xl mx-auto px-2" style={{ animation: 'popIn 0.6s 0.2s both cubic-bezier(0.17, 0.67, 0.35, 1.5)' }}>
          {/* Mushrooms */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="text-4xl sm:text-5xl md:text-6xl cursor-pointer hover:scale-125 hover:-rotate-12 transition-transform drop-shadow-lg">🍄</span>
            <span className="text-4xl sm:text-5xl md:text-6xl cursor-pointer hover:scale-125 hover:rotate-12 transition-transform drop-shadow-lg" style={{ filter: 'hue-rotate(180deg)' }}>🍄</span>
          </div>

          {/* Title - responsive sizing */}
          <h1 className="font-fredoka text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight sm:leading-none mb-3 sm:mb-4"
            style={{ textShadow: '3px 3px 0 #b5100e, 5px 5px 0 rgba(0,0,0,0.1)' }}
          >
            MARIO&apos;S<br className="sm:hidden" /> <span className="text-mario-yellow" style={{ textShadow: '3px 3px 0 #c9a000, 5px 5px 0 rgba(0,0,0,0.1)' }}>EMPORIUM</span>
          </h1>

          {/* Subtitle - responsive padding */}
          <div className="bg-white/95 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 mx-auto max-w-sm sm:max-w-lg mb-4 sm:mb-6 border-2 sm:border-[3px] border-white"
            style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.08)', animation: 'popIn 0.6s 0.55s both cubic-bezier(0.17, 0.67, 0.35, 1.5)' }}
          >
            <p className="font-nunito font-bold text-gray-700 text-sm sm:text-base md:text-lg leading-snug">
              Power up your finds! 🎮 Gaming gear, retro tech, workwear & hidden gems.
              <span className="text-mario-red block sm:inline"> New stock drops weekly!</span>
            </p>
          </div>

          {/* CTA Buttons - stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center" style={{ animation: 'popIn 0.6s 0.7s both cubic-bezier(0.17, 0.67, 0.35, 1.5)' }}>
            <Link href="/shop" className="btn-mario-red text-base sm:text-lg w-full sm:w-auto">
              🛍️ BROWSE STOCK
            </Link>
            <Link href="/about" className="btn-mario-blue text-base sm:text-lg w-full sm:w-auto">
              ℹ️ ABOUT US
            </Link>
          </div>
        </div>
      </div>

      {/* Score Band - positioned below sky section */}
      <div className="bg-[#1a0a00] py-3 sm:py-4 px-4 sm:px-8">
        <div className="flex justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 flex-wrap">
          <div className="text-center min-w-[60px]">
            <span className="font-fredoka text-[0.6rem] sm:text-[0.7rem] tracking-wider text-mario-yellow block">ITEMS</span>
            <span className="font-fredoka text-lg sm:text-xl md:text-2xl text-white">100+</span>
          </div>
          <div className="text-center min-w-[70px]">
            <span className="font-fredoka text-[0.6rem] sm:text-[0.7rem] tracking-wider text-mario-yellow block">BUYERS</span>
            <span className="font-fredoka text-lg sm:text-xl md:text-2xl text-white">500+</span>
          </div>
          <div className="text-center min-w-[60px]">
            <span className="font-fredoka text-[0.6rem] sm:text-[0.7rem] tracking-wider text-mario-yellow block">NEW STOCK</span>
            <span className="font-fredoka text-lg sm:text-xl md:text-2xl text-white">WEEKLY</span>
          </div>
          <div className="text-center min-w-[50px]">
            <span className="font-fredoka text-[0.6rem] sm:text-[0.7rem] tracking-wider text-mario-yellow block">SHIPPING</span>
            <span className="font-fredoka text-lg sm:text-xl md:text-2xl text-white">🇬🇧 UK</span>
          </div>
        </div>
      </div>

      {/* Ground Blocks */}
      <div className="h-[40px] sm:h-[50px] flex bg-mario-ground">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="flex-1 border-t-2 border-[#e09820] border-r border-[#8a4e08]"></div>
        ))}
      </div>
    </section>
  )
}