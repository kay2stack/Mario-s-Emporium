'use client'

import { useState } from 'react'
import { Menu, X, ShoppingBag, Search, Heart } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { name: 'All', href: '/shop' },
    { name: '🎮 Gaming', href: '/shop?category=gaming' },
    { name: '📺 Retro Tech', href: '/shop?category=retro' },
    { name: '👷 Workwear', href: '/shop?category=workwear' },
    { name: '🔌 Electronics', href: '/shop?category=electronics' },
    { name: '🎧 Audio', href: '/shop?category=audio' },
    { name: '💻 PC', href: '/shop?category=pc' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Main Nav - Mario Red */}
      <nav className="bg-mario-red border-b-[5px] border-mario-red-dark px-4 md:px-8 py-3 flex items-center gap-4" style={{ boxShadow: '0 4px 0 #b5100e' }}>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/10 border-2 border-white/30 text-white"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo with Mushroom */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-3xl">🍄</span>
          <span className="font-fredoka text-xl md:text-2xl text-white hidden sm:block" style={{ textShadow: '2px 2px 0 #b5100e' }}>
            Mario&apos;s <span className="text-mario-yellow">Emporium</span>
          </span>
        </Link>

        {/* Search Bar - Yellow Border */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search gaming gear, retro tech..."
            className="flex-1 border-[3px] border-mario-yellow border-r-0 rounded-l-3xl px-4 py-2 font-nunito font-semibold text-sm outline-none focus:border-mario-yellow-dark"
          />
          <button 
            type="submit"
            className="bg-mario-yellow border-[3px] border-mario-yellow-dark border-l-0 rounded-r-3xl px-4 hover:bg-white transition-colors"
          >
            <Search className="w-5 h-5 text-gray-800" />
          </button>
        </form>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 ml-auto">
          <Link 
            href="/shop" 
            className="hidden sm:flex items-center gap-1 bg-mario-yellow text-gray-900 font-fredoka text-sm px-4 py-2 rounded-full border-[3px] border-mario-yellow-dark hover:bg-white transition-colors"
            style={{ boxShadow: '0 3px 0 #c9a000' }}
          >
            🛍️ SHOP
          </Link>
          <Link 
            href="/cart" 
            className="flex items-center gap-1 bg-white/15 text-white font-fredoka text-sm px-3 py-2 rounded-full border-2 border-white/30 hover:bg-white/25 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="bg-mario-blue text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-fredoka ml-1">0</span>
          </Link>
        </div>
      </nav>

      {/* Category Strip - Darker Red */}
      <div className="bg-mario-red-dark px-4 md:px-8 py-2 flex gap-4 overflow-x-auto border-b-[3px] border-[#8a0c0e] scrollbar-hide">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="font-fredoka text-sm text-white/80 hover:text-mario-yellow hover:bg-white/10 px-3 py-1 rounded-lg whitespace-nowrap transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Mobile Search */}
      <div className="md:hidden bg-mario-red-dark px-4 py-2 border-b-[3px] border-[#8a0c0e]">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 border-[3px] border-mario-yellow border-r-0 rounded-l-3xl px-4 py-2 font-nunito font-semibold text-sm outline-none"
          />
          <button 
            type="submit"
            className="bg-mario-yellow border-[3px] border-mario-yellow-dark border-l-0 rounded-r-3xl px-4"
          >
            <Search className="w-5 h-5 text-gray-800" />
          </button>
        </form>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b-4 border-gray-200 py-4 px-4">
          <div className="flex flex-col space-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="font-fredoka text-gray-800 hover:text-mario-red transition-colors py-3 px-4 rounded-xl hover:bg-mario-cream"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <div className="pt-4 border-t-2 border-dashed border-gray-200 mt-2">
              <Link href="/cart" className="flex items-center gap-2 py-3 px-4 text-gray-800 hover:text-mario-red font-fredoka rounded-xl hover:bg-mario-cream">
                <ShoppingBag className="w-5 h-5" />
                View Cart
              </Link>
              <Link href="/contact" className="flex items-center gap-2 py-3 px-4 text-gray-800 hover:text-mario-red font-fredoka rounded-xl hover:bg-mario-cream">
                📞 Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}