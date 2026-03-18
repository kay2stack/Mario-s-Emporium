'use client'

import { Gamepad2, Cpu, Wrench, Smartphone, Headphones, Monitor } from 'lucide-react'
import Link from 'next/link'

export function CategoriesGrid() {
  const categories = [
    {
      icon: Gamepad2,
      title: 'Gaming & Consoles',
      description: 'PS5, Xbox, Nintendo, accessories & more',
      count: '142 products',
      color: 'from-primary to-primary-dark',
      href: '/shop/gaming',
    },
    {
      icon: Cpu,
      title: 'Retro Tech',
      description: 'Classic computers, vintage consoles, nostalgic gear',
      count: '67 rare items',
      color: 'from-purple-500 to-purple-600',
      href: '/shop/retro-tech',
    },
    {
      icon: Wrench,
      title: 'Workwear & PPE',
      description: 'Safety gear, tools, and professional equipment',
      count: '89 essentials',
      color: 'from-green-500 to-green-600',
      href: '/shop/workwear',
    },
    {
      icon: Smartphone,
      title: 'Electronics',
      description: 'Smart devices, components, and gadgets',
      count: '203 products',
      color: 'from-blue-500 to-blue-600',
      href: '/shop/electronics',
    },
    {
      icon: Headphones,
      title: 'Audio Gear',
      description: 'Headphones, speakers, and audio equipment',
      count: '56 items',
      color: 'from-pink-500 to-pink-600',
      href: '/shop/audio',
    },
    {
      icon: Monitor,
      title: 'PC & Peripherals',
      description: 'Components, monitors, keyboards, and mice',
      count: '94 products',
      color: 'from-orange-500 to-orange-600',
      href: '/shop/pc',
    },
  ]

  return (
    <section className="section-padding py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="font-bebas text-4xl md:text-5xl text-secondary mb-4">
          SHOP BY <span className="text-gradient">CATEGORY</span>
        </h2>
        <p className="text-gray-600 font-barlow text-lg max-w-2xl mx-auto">
          Browse our constantly changing inventory across all major categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            key={category.title}
            href={category.href}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Content */}
            <div className="relative p-8">
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-bebas text-3xl text-gray-200 group-hover:text-gray-300 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="font-bebas text-2xl text-secondary mb-3">{category.title}</h3>
              <p className="text-gray-600 font-barlow mb-6">{category.description}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <span className="font-barlow-condensed font-bold text-secondary">{category.count}</span>
                <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                  <span className="font-barlow-condensed font-bold">Browse</span>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300"></div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 btn-secondary px-8 py-4 text-lg"
        >
          <span>VIEW ALL CATEGORIES</span>
          <span className="text-xl">→</span>
        </Link>
        <p className="text-gray-500 font-barlow mt-4">
          Can&apos;t find what you&apos;re looking for? Check back soon – new stock arrives daily!
        </p>
      </div>
    </section>
  )
}