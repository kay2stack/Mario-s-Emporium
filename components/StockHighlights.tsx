'use client'

import { Gamepad2, Cpu, Shield, Zap, TrendingUp, Clock } from 'lucide-react'
import Link from 'next/link'

export function StockHighlights() {
  const highlights = [
    {
      icon: Gamepad2,
      title: 'Gaming Gear',
      description: 'Consoles, accessories & peripherals',
      count: '42 items',
      emoji: '🎮',
      badge: 'HOT',
      badgeColor: 'bg-mario-red text-white',
      href: '/shop?category=gaming',
    },
    {
      icon: Cpu,
      title: 'Retro Tech',
      description: 'Vintage computers & classic consoles',
      count: '18 finds',
      emoji: '📺',
      badge: 'RARE',
      badgeColor: 'bg-mario-yellow text-gray-900',
      href: '/shop?category=retro',
    },
    {
      icon: Shield,
      title: 'Workwear',
      description: 'Professional gear & safety equipment',
      count: '56 in stock',
      emoji: '👷',
      badge: 'ESSENTIAL',
      badgeColor: 'bg-mario-green text-white',
      href: '/shop?category=workwear',
    },
    {
      icon: Zap,
      title: 'Electronics',
      description: 'Smart devices & tech gadgets',
      count: '89 products',
      emoji: '🔌',
      badge: 'NEW',
      badgeColor: 'bg-mario-blue text-white',
      href: '/shop?category=electronics',
    },
  ]

  const stats = [
    { icon: TrendingUp, label: 'Avg Sell Time', value: '48h' },
    { icon: Clock, label: 'Next Drop', value: '12:00' },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-fredoka text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-2 sm:mb-3">
          🏪 BROWSE <span className="text-mario-red">STOCK</span>
        </h2>
        <p className="text-gray-600 font-nunito text-sm sm:text-base max-w-xl mx-auto">
          Our inventory changes daily. Here&apos;s what&apos;s hot right now!
        </p>
      </div>

      {/* Category Cards - 2 cols on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
        {highlights.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 border-2 border-gray-100 hover:border-mario-red/30 group block"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <span className="text-2xl sm:text-3xl">{item.emoji}</span>
              <span className={`text-[9px] sm:text-xs font-fredoka px-1.5 sm:px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                {item.badge}
              </span>
            </div>
            
            {/* Content */}
            <h3 className="font-fredoka text-sm sm:text-lg text-gray-900 mb-1 group-hover:text-mario-red transition-colors">{item.title}</h3>
            <p className="text-gray-500 font-nunito text-[11px] sm:text-sm mb-2 sm:mb-3 line-clamp-2 leading-snug">{item.description}</p>
            
            {/* Footer */}
            <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
              <span className="font-fredoka text-[10px] sm:text-sm text-gray-700">{item.count}</span>
              <span className="text-mario-red font-fredoka text-[10px] sm:text-sm flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                Shop →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Live Stats - simplified for mobile */}
      <div className="bg-[#1a0a00] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-fredoka text-lg sm:text-xl text-mario-yellow mb-1">🔴 LIVE STOCK</h3>
            <p className="text-gray-400 font-nunito text-xs sm:text-sm">
              Real-time updates on availability
            </p>
          </div>
          
          <div className="flex items-center gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-fredoka text-xl sm:text-2xl text-white">{stat.value}</div>
                <div className="font-nunito text-[10px] sm:text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-mario-green/20 rounded-full border border-mario-green/40">
            <div className="w-2 h-2 bg-mario-green rounded-full animate-pulse"></div>
            <span className="font-fredoka text-xs text-mario-green">LIVE</span>
          </div>
        </div>
      </div>
    </section>
  )
}