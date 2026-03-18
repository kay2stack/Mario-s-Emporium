'use client'

import { Star, ShoppingBag, Eye, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: 'Limited Edition Gaming Console',
      category: 'Gaming',
      price: 499.99,
      originalPrice: 599.99,
      rating: 4.8,
      reviewCount: 142,
      imageColor: 'from-primary to-primary-dark',
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
      imageColor: 'from-purple-500 to-purple-600',
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
      imageColor: 'from-green-500 to-green-600',
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
      imageColor: 'from-blue-500 to-blue-600',
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
      imageColor: 'from-pink-500 to-pink-600',
      badge: 'POPULAR',
      stock: 42,
      tags: ['Audio', 'Gaming', 'Wireless'],
    },
    {
      id: 6,
      name: 'Mechanical Keyboard',
      category: 'PC',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviewCount: 189,
      imageColor: 'from-orange-500 to-orange-600',
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
      imageColor: 'from-purple-500 to-purple-600',
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
      imageColor: 'from-green-500 to-green-600',
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
      imageColor: 'from-blue-500 to-blue-600',
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
      imageColor: 'from-pink-500 to-pink-600',
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
      imageColor: 'from-primary to-primary-dark',
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
      imageColor: 'from-blue-500 to-blue-600',
      badge: 'SMART',
      stock: 31,
      tags: ['Smart', 'Home', 'Hub'],
    },
  ]

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
            <div className={`aspect-square rounded-xl bg-gradient-to-br ${product.imageColor} overflow-hidden`}>
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <span className="font-bebas text-2xl text-secondary">M</span>
                    </div>
                  </div>
                  <div className="text-white font-barlow-condensed font-bold text-lg">
                    {product.category.toUpperCase()}
                  </div>
                </div>
              </div>
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
            
            {/* Quick Actions */}
            <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 transition-all duration-300 ${
              hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Eye className="w-5 h-5 text-secondary" />
              </button>
              <button 
                onClick={() => addToCart(product.id)}
                className="p-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-primary-dark"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
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