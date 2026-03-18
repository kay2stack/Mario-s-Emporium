'use client'

import { useState } from 'react'
import { Menu, X, ShoppingBag, Bell, Search } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Gaming & Consoles', href: '/shop/gaming' },
    { name: 'Electronics', href: '/shop/electronics' },
    { name: 'Retro Tech', href: '/shop/retro-tech' },
    { name: 'Workwear & PPE', href: '/shop/workwear' },
    { name: 'All Categories', href: '/shop' },
  ]

  return (
    <header className="sticky top-0 z-50 glass-effect border-b">
      <div className="section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-secondary" />
              ) : (
                <Menu className="w-6 h-6 text-secondary" />
              )}
            </button>
            
            <Link href="/" className="ml-2 lg:ml-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bebas text-lg">M</span>
                </div>
                <span className="font-bebas text-2xl text-gradient">
                  Super Mario&apos;s<span className="text-secondary">Emporium</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-barlow-condensed font-bold text-secondary hover:text-primary transition-colors text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors hidden sm:block">
              <Search className="w-5 h-5 text-secondary" />
            </button>
            
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <Bell className="w-5 h-5 text-secondary" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-secondary" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-barlow-condensed font-bold">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-barlow-condensed font-bold text-secondary hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="input-field pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}