'use client'

import { useState } from 'react'
import { Star, ShoppingBag, Truck, Shield, RefreshCw, ChevronLeft, Heart } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const product = {
    id: 1,
    name: 'Limited Edition Gaming Console',
    category: 'Gaming',
    price: 499.99,
    originalPrice: 599.99,
    rating: 4.8,
    reviewCount: 142,
    description: 'Experience gaming like never before with this limited edition console. Featuring exclusive design elements, enhanced performance, and bundled with rare collectible items. Perfect for serious gamers and collectors alike.',
    features: [
      'Exclusive limited edition design',
      'Enhanced performance and cooling',
      'Includes 2 custom controllers',
      'Bundled with rare collectible items',
      '1-year extended warranty',
    ],
    specifications: {
      'Model': 'LE-2025',
      'Color': 'Midnight Black with Gold Accents',
      'Storage': '1TB SSD',
      'Connectivity': 'Wi-Fi 6, Bluetooth 5.2',
      'Dimensions': '30 × 15 × 5 cm',
      'Weight': '3.5 kg',
    },
    stock: 12,
    images: [
      { color: 'from-primary to-primary-dark', label: 'Front View' },
      { color: 'from-primary/80 to-primary-dark/80', label: 'Side View' },
      { color: 'from-primary/60 to-primary-dark/60', label: 'Back View' },
      { color: 'from-primary/40 to-primary-dark/40', label: 'With Accessories' },
    ],
  }

  const relatedProducts = [
    { id: 2, name: 'Gaming Headset Pro', price: 129.99, category: 'Audio' },
    { id: 3, name: 'Mechanical Keyboard', price: 89.99, category: 'PC' },
    { id: 4, name: 'Gaming Chair Pro', price: 299.99, category: 'Gaming' },
  ]

  const addToCart = () => {
    console.log(`Added ${quantity} of product ${productId} to cart`)
    // Implement cart logic
  }

  return (
    <div className="section-padding py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-barlow">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>›</span>
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <span>›</span>
          <Link href={`/shop/${product.category.toLowerCase()}`} className="hover:text-primary">
            {product.category}
          </Link>
          <span>›</span>
          <span className="text-secondary font-bold">{product.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          {/* Main Image */}
          <div className={`aspect-square rounded-2xl bg-gradient-to-br ${product.images[selectedImage].color} mb-6`}>
            <div className="w-full h-full flex items-center justify-center p-12">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                    <span className="font-bebas text-4xl text-secondary">M</span>
                  </div>
                </div>
                <div className="text-white font-bebas text-3xl">
                  LIMITED EDITION
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-xl bg-gradient-to-br ${image.color} border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="font-bebas text-lg text-white">{index + 1}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="badge-new">{product.category}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-barlow font-bold text-secondary">{product.rating}</span>
                <span className="text-gray-400 text-sm">({product.reviewCount} reviews)</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
            </button>
          </div>

          {/* Product Name */}
          <h1 className="font-bebas text-4xl md:text-5xl text-secondary mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <div className="font-bebas text-4xl text-secondary">£{product.price.toFixed(2)}</div>
            <div className="text-xl text-gray-400 font-barlow line-through">
              £{product.originalPrice.toFixed(2)}
            </div>
            <div className="bg-red-500 text-white font-barlow-condensed font-bold px-3 py-1 rounded-lg">
              SAVE £{(product.originalPrice - product.price).toFixed(2)}
            </div>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-3 h-3 rounded-full ${
              product.stock > 10 ? 'bg-green-500' :
              product.stock > 5 ? 'bg-yellow-500' : 'bg-red-500'
            }`}></div>
            <span className="font-barlow font-bold text-secondary">
              {product.stock} items left in stock
            </span>
            <span className="text-sm text-gray-500 font-barlow">
              • Order within 2 hours for same-day dispatch
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-bebas text-2xl text-secondary mb-3">Description</h3>
            <p className="text-gray-600 font-barlow">{product.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-bebas text-2xl text-secondary mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-barlow text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart */}
          <div className="card mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                >
                  <span className="text-xl">-</span>
                </button>
                <div className="w-20 text-center">
                  <div className="font-bebas text-2xl text-secondary">{quantity}</div>
                  <div className="text-xs text-gray-500 font-barlow">Qty</div>
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                className="btn-primary flex-1 py-4 text-lg flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-6 h-6" />
                ADD TO CART - £{(product.price * quantity).toFixed(2)}
              </button>

              {/* Buy Now Button */}
              <Link
                href="/checkout"
                className="btn-secondary flex-1 py-4 text-lg text-center"
              >
                BUY NOW
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="font-barlow-condensed font-bold text-sm">Free UK Shipping</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="font-barlow-condensed font-bold text-sm">2-Year Warranty</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <RefreshCw className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-barlow-condensed font-bold text-sm">30-Day Returns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16">
        <h3 className="font-bebas text-3xl text-secondary mb-6">Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between py-3 border-b border-gray-100">
              <span className="font-barlow font-bold text-secondary">{key}</span>
              <span className="font-barlow text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bebas text-3xl text-secondary">You Might Also Like</h3>
          <Link href="/shop" className="text-primary hover:text-primary-dark font-barlow-condensed font-bold flex items-center gap-2">
            View All
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              href={`/product/${related.id}`}
              className="card group"
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4"></div>
              <div className="space-y-2">
                <span className="text-sm text-gray-500 font-barlow">{related.category}</span>
                <h4 className="font-bebas text-xl text-secondary group-hover:text-primary transition-colors">
                  {related.name}
                </h4>
                <div className="font-bebas text-2xl text-secondary">£{related.price.toFixed(2)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}