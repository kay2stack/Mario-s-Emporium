'use client'

import { Gamepad2, Cpu, Shield, Zap, TrendingUp, Clock } from 'lucide-react'
import Link from 'next/link'

export function StockHighlights() {
  const highlights = [
    {
      icon: Gamepad2,
      title: 'Gaming Gear',
      description: 'Latest consoles, accessories, and gaming peripherals',
      count: '42 new items',
      color: 'from-primary to-primary/80',
      badge: 'HOT',
      href: '/shop?category=gaming',
    },
    {
      icon: Cpu,
      title: 'Retro Tech',
      description: 'Vintage computers, classic consoles, and nostalgic tech',
      count: '18 rare finds',
      color: 'from-accent to-accent/80',
      badge: 'RARE',
      href: '/shop?category=retro',
    },
    {
      icon: Shield,
      title: 'Workwear & PPE',
      description: 'Professional gear and safety equipment',
      count: '56 in stock',
      color: 'from-green-500 to-green-400',
      badge: 'ESSENTIAL',
      href: '/shop?category=workwear',
    },
    {
      icon: Zap,
      title: 'Electronics',
      description: 'Smart devices, components, and tech gadgets',
      count: '89 products',
      color: 'from-purple-500 to-purple-400',
      badge: 'NEW',
      href: '/shop?category=electronics',
    },
  ]

  const stats = [
    { icon: TrendingUp, label: 'Stock Turnover', value: '48h', description: 'Average sell time' },
    { icon: Clock, label: 'Next Drop', value: '12:00', description: 'Today at noon' },
  ]

  return (
    <section className="section-padding py-16">
      <div className="text-center mb-12">
        <h2 className="font-bebas text-4xl md:text-5xl text-secondary mb-4">
          BROWSE <span className="text-gradient">STOCK</span>
        </h2>
        <p className="text-gray-600 font-barlow text-lg max-w-2xl mx-auto">
          Our inventory changes daily. Here&apos;s what&apos;s hot right now across all categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {highlights.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            className="card group hover:scale-[1.02] transition-transform duration-300 block"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`badge ${item.badge === 'HOT' ? 'bg-red-100 text-red-700' : 
                item.badge === 'RARE' ? 'bg-purple-100 text-purple-700' :
                item.badge === 'ESSENTIAL' ? 'bg-green-100 text-green-700' :
                'bg-blue-100 text-blue-700'}`}>
                {item.badge}
              </span>
            </div>
            
            <h3 className="font-bebas text-2xl text-secondary mb-2">{item.title}</h3>
            <p className="text-gray-600 font-barlow mb-4">{item.description}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="font-barlow-condensed font-bold text-secondary">{item.count}</span>
              <span className="text-primary hover:text-primary-dark font-barlow-condensed font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                View All →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Live Stats */}
      <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bebas text-3xl mb-2">LIVE STOCK TRACKER</h3>
            <p className="text-gray-300 font-barlow">
              Real-time updates on what&apos;s available and what&apos;s selling fast.
            </p>
          </div>
          
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bebas text-4xl">{stat.value}</div>
                  <div className="font-barlow-condensed font-bold text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-barlow">{stat.description}</p>
            </div>
          ))}
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-barlow-condensed font-bold">LIVE UPDATES</span>
            </div>
            <p className="text-sm text-gray-400 font-barlow mt-2">Refreshing every 5 minutes</p>
          </div>
        </div>
      </div>
    </section>
  )
}