'use client'

import { Star, Eye, TrendingUp } from 'lucide-react'
import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'

interface ProductGridProps {
  category?: string | null
  searchQuery?: string | null
  currentPage?: number
  itemsPerPage?: number
  onTotalPagesChange?: (totalPages: number) => void
}

const categoryMap: Record<string, string[]> = {
  gaming: ['Gaming'],
  retro: ['Retro Tech'],
  workwear: ['Workwear'],
  electronics: ['Electronics'],
  audio: ['Audio'],
  pc: ['PC'],
}

export function ProductGrid({ 
  category, 
  searchQuery, 
  currentPage = 1, 
  itemsPerPage = 12,
  onTotalPagesChange 
}: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const allProducts = [
    {
      id: 1,
      name: 'Limited Edition Gaming Console',
      category: 'Gaming',
      price: 499.99,
      originalPrice: 599.99,
      rating: 4.8,
      reviewCount: 142,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
      badge: 'JUST IN',
      stock: 12,
      tags: ['Limited', 'Gaming', 'Console'],
    },
    {
      id: 2,
      name: 'Vintage Retro Computer',
      category: 'Retro Tech',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop',
      badge: 'RARE FIND',
      stock: 3,
      tags: ['Vintage', 'Rare', 'Collector'],
    },
    {
      id: 3,
      name: 'Professional Work Gear Set',
      category: 'Workwear',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviewCount: 56,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop',
      badge: 'BEST SELLER',
      stock: 24,
      tags: ['Professional', 'Safety', 'Gear'],
    },
    {
      id: 4,
      name: 'Smart Tech Bundle',
      category: 'Electronics',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.6,
      reviewCount: 203,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop',
      badge: 'NEW DROP',
      stock: 18,
      tags: ['Smart', 'Bundle', 'Tech'],
    },
    {
      id: 5,
      name: 'Gaming Headset Pro',
      category: 'Audio',
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.5,
      reviewCount: 312,
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop',
      badge: 'POPULAR',
      stock: 42,
      tags: ['Audio', 'Gaming', 'Wireless'],
    },
    {
      id: 6,
      name: 'Mechanical Keyboard RGB',
      category: 'PC',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviewCount: 189,
      image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop',
      badge: 'HOT',
      stock: 36,
      tags: ['Keyboard', 'Mechanical', 'RGB'],
    },
    {
      id: 7,
      name: 'Retro Game Collection',
      category: 'Retro Tech',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviewCount: 67,
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=400&fit=crop',
      badge: 'COLLECTOR',
      stock: 8,
      tags: ['Retro', 'Games', 'Collection'],
    },
    {
      id: 8,
      name: 'Safety Work Boots',
      category: 'Workwear',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviewCount: 124,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      badge: 'ESSENTIAL',
      stock: 56,
      tags: ['Safety', 'Work', 'Boots'],
    },
    {
      id: 9,
      name: 'Gaming Monitor 27"',
      category: 'PC',
      price: 349.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
      badge: 'NEW',
      stock: 15,
      tags: ['Monitor', 'Gaming', '144Hz'],
    },
    {
      id: 10,
      name: 'Wireless Earbuds',
      category: 'Audio',
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.4,
      reviewCount: 267,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
      badge: 'VALUE',
      stock: 48,
      tags: ['Wireless', 'Audio', 'Portable'],
    },
    {
      id: 11,
      name: 'Gaming Chair Pro',
      category: 'Gaming',
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.7,
      reviewCount: 156,
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop',
      badge: 'COMFORT',
      stock: 22,
      tags: ['Chair', 'Gaming', 'Ergonomic'],
    },
    {
      id: 12,
      name: 'Smart Home Hub',
      category: 'Electronics',
      price: 129.99,
      originalPrice: 149.99,
      rating: 4.5,
      reviewCount: 98,
      image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop',
      badge: 'SMART',
      stock: 31,
      tags: ['Smart', 'Home', 'Hub'],
    },
  ]

  const { filteredProducts, paginatedProducts, totalPages } = useMemo(() => {
    let filtered = allProducts

    if (category && categoryMap[category]) {
      filtered = filtered.filter(p => 
        categoryMap[category].some(cat => 
          p.category.toLowerCase() === cat.toLowerCase()
        )
      )
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    const total = Math.ceil(filtered.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginated = filtered.slice(startIndex, startIndex + itemsPerPage)

    return { 
      filteredProducts: filtered, 
      paginatedProducts: paginated, 
      totalPages: total 
    }
  }, [category, searchQuery, currentPage, itemsPerPage])

  // Notify parent of total pages
  useEffect(() => {
    if (onTotalPagesChange) {
      onTotalPagesChange(totalPages)
    }
  }, [totalPages, onTotalPagesChange])

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-6xl mb-4 block">🍄</span>
        <h3 className="font-fredoka text-2xl text-gray-800 mb-2">No products found</h3>
        <p className="text-gray-500 font-nunito">
          {category ? `No items in this category yet. Check back soon!` : `Try a different search term.`}
        </p>
        <Link href="/shop" className="inline-block mt-6 btn-mario-red">
          View All Products
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
      {paginatedProducts.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-sm hover:shadow-md border-2 border-gray-100 hover:border-mario-red/30 group relative overflow-hidden block transition-all"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          {/* Product Image */}
          <div className="relative mb-2 sm:mb-4">
            <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute top-1.5 sm:top-3 left-1.5 sm:left-3">
              <span className={`text-[9px] sm:text-xs font-fredoka px-1.5 sm:px-2 py-0.5 rounded-full ${
                product.badge === 'JUST IN' || product.badge === 'NEW' ? 'bg-mario-green text-white' :
                product.badge === 'RARE FIND' || product.badge === 'COLLECTOR' ? 'bg-mario-yellow text-gray-900' :
                'bg-mario-red text-white'
              }`}>
                {product.badge}
              </span>
            </div>
            
            {/* Stock Indicator - hidden on small mobile */}
            <div className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 hidden sm:block">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  product.stock > 20 ? 'bg-green-500' :
                  product.stock > 10 ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-[10px] sm:text-xs font-nunito font-bold text-gray-700">
                  {product.stock} left
                </span>
              </div>
            </div>
            
            {/* Quick View on Hover - desktop only */}
            <div className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 transition-all duration-300 hidden sm:block ${
              hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="bg-white px-3 py-1.5 rounded-full shadow-lg font-fredoka text-sm text-gray-800 flex items-center gap-2">
                <Eye className="w-3 h-3" />
                VIEW
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-1 sm:space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs text-gray-500 font-nunito">{product.category}</span>
              <div className="flex items-center gap-0.5">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-mario-yellow fill-current" />
                <span className="font-nunito font-bold text-gray-700 text-xs sm:text-sm">{product.rating}</span>
              </div>
            </div>
            
            <h3 className="font-fredoka text-xs sm:text-base text-gray-900 group-hover:text-mario-red transition-colors line-clamp-2 leading-tight">
              {product.name}
            </h3>
            
            {/* Tags - hidden on mobile */}
            <div className="hidden sm:flex flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Pricing */}
            <div className="flex items-end justify-between pt-2 sm:pt-3 border-t border-gray-100">
              <div>
                <div className="font-fredoka text-base sm:text-xl text-gray-900">£{product.price.toFixed(2)}</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-nunito line-through">
                  £{product.originalPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Trending Badge - simplified for mobile */}
          {product.id <= 3 && (
            <div className="absolute top-1.5 sm:-top-1 right-1.5 sm:-right-1">
              <div className="flex items-center gap-0.5 bg-mario-red text-white px-1.5 sm:px-2 py-0.5 rounded-full">
                <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3" />
                <span className="text-[8px] sm:text-[10px] font-fredoka">HOT</span>
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}