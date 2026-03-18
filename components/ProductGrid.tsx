'use client'

import { Star, Eye, TrendingUp } from 'lucide-react'
import { useState, useMemo } from 'react'
import Link from 'next/link'

interface ProductGridProps {
  category?: string | null
  searchQuery?: string | null
}

const categoryMap: Record<string, string[]> = {
  gaming: ['Gaming'],
  retro: ['Retro Tech'],
  workwear: ['Workwear'],
  electronics: ['Electronics'],
  audio: ['Audio'],
  pc: ['PC'],
}

export function ProductGrid({ category, searchQuery }: ProductGridProps) {
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

  const products = useMemo(() => {
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

    return filtered
  }, [category, searchQuery])

  if (products.length === 0) {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="card group relative overflow-hidden"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          {/* Product Image */}
          <Link href={`/product/${product.id}`} className="block relative mb-6">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className={`badge ${
                product.badge === 'JUST IN' || product.badge === 'NEW' ? 'badge-new' :
                product.badge === 'RARE FIND' || product.badge === 'COLLECTOR' ? 'badge-retro' :
                'badge-stock'
              }`}>
                {product.badge}
              </span>
            </div>
            
            {/* Stock Indicator */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className={`w-2 h-2 rounded-full ${
                  product.stock > 20 ? 'bg-green-500' :
                  product.stock > 10 ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm font-barlow font-bold text-secondary">
                  {product.stock} left
                </span>
              </div>
            </div>
            
            {/* Quick View on Hover */}
            <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="bg-white px-4 py-2 rounded-full shadow-lg font-barlow-condensed font-bold text-secondary flex items-center gap-2">
                <Eye className="w-4 h-4" />
                VIEW DETAILS
              </span>
            </div>
          </Link>

          {/* Product Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 font-barlow">{product.category}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-barlow font-bold text-secondary">{product.rating}</span>
                <span className="text-gray-400 text-sm">({product.reviewCount})</span>
              </div>
            </div>
            
            <Link href={`/product/${product.id}`}>
              <h3 className="font-bebas text-xl text-secondary group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <div className="font-bebas text-2xl text-secondary">£{product.price.toFixed(2)}</div>
                <div className="text-sm text-gray-400 font-barlow line-through">
                  £{product.originalPrice.toFixed(2)}
                </div>
              </div>
              
              <Link 
                href={`/product/${product.id}`}
                className="btn-primary px-6 py-2 text-sm"
              >
                VIEW ITEM
              </Link>
            </div>
          </div>

          {/* Trending Badge */}
          {product.id <= 3 && (
            <div className="absolute -top-2 -right-2">
              <div className="flex items-center gap-1 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs font-barlow-condensed font-bold">TRENDING</span>
              </div>
            </div>
          )}

          {/* Hover Effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-300 pointer-events-none"></div>
        </div>
      ))}
    </div>
  )
}