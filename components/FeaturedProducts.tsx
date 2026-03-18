'use client'

import { Star, ShoppingBag, Eye, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function FeaturedProducts() {
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
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
      badge: 'JUST IN',
      stock: 12,
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
    },
  ]

  return (
    <section className="section-padding py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="font-bebas text-4xl md:text-5xl text-secondary mb-4">
            FEATURED <span className="text-gradient">PRODUCTS</span>
          </h2>
          <p className="text-gray-600 font-barlow text-lg">
            Check out what&apos;s hot right now. These won&apos;t last long!
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary">
            <TrendingUp className="w-5 h-5" />
            <span className="font-barlow-condensed font-bold">TRENDING NOW</span>
          </div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card group relative overflow-hidden"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Product Image */}
            <Link href={`/product/${product.id}`} className="relative mb-6 block">
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
                  product.badge === 'JUST IN' ? 'badge-new' :
                  product.badge === 'RARE FIND' ? 'badge-retro' :
                  'badge-stock'
                }`}>
                  {product.badge}
                </span>
              </div>
              
              {/* Stock Indicator */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className={`w-2 h-2 rounded-full ${
                    product.stock > 10 ? 'bg-green-500' :
                    product.stock > 5 ? 'bg-yellow-500' : 'bg-red-500'
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
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="space-y-1">
                  <div className="font-bebas text-2xl text-secondary">£{product.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-400 font-barlow line-through">
                    £{product.originalPrice.toFixed(2)}
                  </div>
                </div>
                
                <Link href={`/product/${product.id}`} className="btn-primary px-6 py-2 text-sm">
                  VIEW ITEM
                </Link>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* View All Products */}
      <div className="text-center mt-12">
        <button className="btn-secondary px-8 py-4 text-lg group">
          <span className="flex items-center gap-3">
            VIEW ALL PRODUCTS
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </span>
        </button>
        <p className="text-gray-500 font-barlow mt-4">
          New products added daily. Check back often for the latest drops!
        </p>
      </div>
    </section>
  )
}