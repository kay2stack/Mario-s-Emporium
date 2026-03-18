'use client'

import { Star, ShoppingBag, Eye, TrendingUp } from 'lucide-react'
import { useState } from 'react'

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
      imageColor: 'from-primary to-primary-dark',
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
      imageColor: 'from-purple-500 to-purple-600',
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
      imageColor: 'from-green-500 to-green-600',
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
      imageColor: 'from-blue-500 to-blue-600',
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
            <div className="relative mb-6">
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
              
              {/* Quick Actions */}
              <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 transition-all duration-300 ${
                hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Eye className="w-5 h-5 text-secondary" />
                </button>
                <button className="p-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-primary-dark">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>

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
              
              <h3 className="font-bebas text-xl text-secondary group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="space-y-1">
                  <div className="font-bebas text-2xl text-secondary">£{product.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-400 font-barlow line-through">
                    £{product.originalPrice.toFixed(2)}
                  </div>
                </div>
                
                <button className="btn-primary px-6 py-2 text-sm">
                  ADD TO CART
                </button>
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