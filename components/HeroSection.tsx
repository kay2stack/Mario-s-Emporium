'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const [coinPop, setCoinPop] = useState<number | null>(null)

  const handleBlockClick = (blockId: number) => {
    setCoinPop(blockId)
    setTimeout(() => setCoinPop(null), 600)
  }

  return (
    <section className="relative overflow-hidden min-h-[520px] flex items-center justify-center py-12 px-8"
      style={{
        background: 'linear-gradient(180deg, #5db8f5 0%, #87ceeb 60%, #c8851a 60%, #a06010 63.5%, #c8851a 63.5%)'
      }}
    >
      {/* Floating Clouds */}
      <div className="cloud absolute w-32 h-10 top-[15%]" style={{ animationDuration: '35s', left: '-100px' }}>
        <div className="absolute bg-white rounded-full w-12 h-12 -top-4 left-4"></div>
        <div className="absolute bg-white rounded-full w-8 h-8 -top-2 left-14"></div>
      </div>
      <div className="cloud absolute w-24 h-8 top-[30%]" style={{ animationDuration: '28s', animationDelay: '5s', left: '-100px' }}>
        <div className="absolute bg-white rounded-full w-10 h-10 -top-4 left-2"></div>
        <div className="absolute bg-white rounded-full w-6 h-6 -top-1 left-10"></div>
      </div>
      <div className="cloud absolute w-28 h-9 top-[8%]" style={{ animationDuration: '40s', animationDelay: '10s', left: '-100px' }}>
        <div className="absolute bg-white rounded-full w-11 h-11 -top-4 left-3"></div>
        <div className="absolute bg-white rounded-full w-7 h-7 -top-2 left-12"></div>
      </div>

      {/* Pipes */}
      <div className="pipe absolute bottom-[60px] left-8 hidden md:flex">
        <div className="pipe-head"></div>
        <div className="pipe-body"></div>
      </div>
      <div className="pipe absolute bottom-[60px] right-8 hidden md:flex">
        <div className="pipe-head"></div>
        <div className="pipe-body"></div>
      </div>

      {/* Question Blocks */}
      <div 
        className="q-block absolute top-[25%] left-[15%] hidden md:flex"
        onClick={() => handleBlockClick(1)}
      >
        ?
        {coinPop === 1 && <span className="absolute -top-8 text-2xl animate-bounce">🪙</span>}
      </div>
      <div 
        className="q-block absolute top-[35%] right-[18%] hidden md:flex"
        style={{ animationDelay: '0.5s' }}
        onClick={() => handleBlockClick(2)}
      >
        ?
        {coinPop === 2 && <span className="absolute -top-8 text-2xl animate-bounce">🪙</span>}
      </div>
      <div 
        className="q-block absolute top-[20%] right-[30%] hidden lg:flex"
        style={{ animationDelay: '1s' }}
        onClick={() => handleBlockClick(3)}
      >
        ?
        {coinPop === 3 && <span className="absolute -top-8 text-2xl animate-bounce">🪙</span>}
      </div>

      {/* Floating Coins & Stars */}
      <span className="float-coin absolute top-[18%] left-[25%] hidden md:block">🪙</span>
      <span className="float-coin absolute top-[28%] right-[25%] hidden md:block" style={{ animationDelay: '1s' }}>⭐</span>
      <span className="float-coin absolute top-[40%] left-[10%] hidden lg:block" style={{ animationDelay: '2s' }}>🪙</span>

      {/* Ground Blocks */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="ground-block"></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto" style={{ animation: 'popIn 0.6s 0.2s both cubic-bezier(0.17, 0.67, 0.35, 1.5)' }}>
        {/* Mushrooms */}
        <div className="flex justify-center gap-4 mb-4">
          <span className="text-6xl md:text-7xl cursor-pointer hover:scale-125 hover:-rotate-12 transition-transform drop-shadow-lg">🍄</span>
          <span className="text-6xl md:text-7xl cursor-pointer hover:scale-125 hover:rotate-12 transition-transform drop-shadow-lg" style={{ filter: 'hue-rotate(180deg)' }}>🍄</span>
        </div>

        {/* Title */}
        <h1 className="font-fredoka text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-4"
          style={{ textShadow: '4px 4px 0 #b5100e, 8px 8px 0 rgba(0,0,0,0.1)' }}
        >
          MARIO&apos;S <span className="text-mario-yellow" style={{ textShadow: '4px 4px 0 #c9a000, 8px 8px 0 rgba(0,0,0,0.1)' }}>EMPORIUM</span>
        </h1>

        {/* Subtitle */}
        <div className="bg-white/90 rounded-2xl px-6 py-4 mx-auto max-w-xl mb-6 border-[3px] border-white"
          style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.08)', animation: 'popIn 0.6s 0.55s both cubic-bezier(0.17, 0.67, 0.35, 1.5)' }}
        >
          <p className="font-nunito font-bold text-gray-700 text-lg">
            Power up your finds! 🎮 Gaming gear, retro tech, workwear & hidden gems. 
            <span className="text-mario-red"> New stock drops weekly!</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap" style={{ animation: 'popIn 0.6s 0.7s both cubic-bezier(0.17, 0.67, 0.35, 1.5)' }}>
          <Link href="/shop" className="btn-mario-red text-lg">
            🛍️ BROWSE STOCK
          </Link>
          <Link href="/about" className="btn-mario-blue text-lg">
            ℹ️ ABOUT US
          </Link>
        </div>
      </div>

      {/* Score Band */}
      <div className="absolute bottom-[60px] left-0 right-0 bg-[#1a0a00] py-3 px-8 flex justify-center gap-8 md:gap-16 flex-wrap border-b-4 border-[#333] z-20">
        <div className="text-center">
          <span className="font-fredoka text-[0.7rem] tracking-widest text-mario-yellow block">ITEMS</span>
          <span className="font-fredoka text-2xl text-white">100+</span>
        </div>
        <div className="text-center">
          <span className="font-fredoka text-[0.7rem] tracking-widest text-mario-yellow block">HAPPY BUYERS</span>
          <span className="font-fredoka text-2xl text-white">500+</span>
        </div>
        <div className="text-center">
          <span className="font-fredoka text-[0.7rem] tracking-widest text-mario-yellow block">NEW STOCK</span>
          <span className="font-fredoka text-2xl text-white">WEEKLY</span>
        </div>
        <div className="text-center">
          <span className="font-fredoka text-[0.7rem] tracking-widest text-mario-yellow block">SHIPPING</span>
          <span className="font-fredoka text-2xl text-white">🇬🇧 UK</span>
        </div>
      </div>
    </section>
  )
}