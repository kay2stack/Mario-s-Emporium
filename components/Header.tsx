'use client'

import { useState } from 'react'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navigation = [
    { name: 'Gaming & Consoles', href: '/shop?category=gaming' },
    { name: 'Electronics', href: '/shop?category=electronics' },
    { name: 'Retro Tech', href: '/shop?category=retro' },
    { name: 'Workwear & PPE', href: '/shop?category=workwear' },
    { name: 'All Categories', href: '/shop' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
    }
  }

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
          <div className="flex items-center space-x-2">
            {/* Search Toggle */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Search className="w-5 h-5 text-secondary" />
            </button>
            
            {/* Cart Link */}
            <Link href="/cart" className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-secondary" />
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-3 border-t">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search gaming gear, retro tech, electronics..."
                  className="input-field pl-10 w-full"
                  autoFocus
                />
              </div>
              <button type="submit" className="btn-primary px-6">
                SEARCH
              </button>
            </form>
          </div>
        )}

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
                <Link href="/cart" className="flex items-center gap-2 py-2 px-4 text-secondary hover:text-primary font-barlow-condensed font-bold">
                  <ShoppingBag className="w-5 h-5" />
                  View Cart
                </Link>
                <Link href="/contact" className="flex items-center gap-2 py-2 px-4 text-secondary hover:text-primary font-barlow-condensed font-bold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}