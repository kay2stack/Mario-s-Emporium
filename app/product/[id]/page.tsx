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

  // Product database
  const allProducts: Record<string, typeof productDefault> = {
    '1': {
      id: 1,
      name: 'Limited Edition Gaming Console',
      category: 'Gaming',
      price: 499.99,
      originalPrice: 599.99,
      rating: 4.8,
      reviewCount: 142,
      description: 'Experience gaming like never before with this limited edition console. Featuring exclusive design elements, enhanced performance, and bundled with rare collectible items.',
      features: ['Exclusive limited edition design', 'Enhanced performance', 'Includes 2 controllers', 'Bundled collectibles', '1-year warranty'],
      specifications: { 'Model': 'LE-2025', 'Storage': '1TB SSD', 'Connectivity': 'Wi-Fi 6', 'Weight': '3.5 kg' },
      stock: 12,
      images: ['https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=600&h=600&fit=crop'],
    },
    '2': {
      id: 2,
      name: 'Vintage Retro Computer',
      category: 'Retro Tech',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviewCount: 89,
      description: 'A beautifully restored vintage computer from the golden age of computing. Perfect for collectors and retro enthusiasts.',
      features: ['Fully restored and working', 'Original components', 'Includes documentation', 'Collector grade'],
      specifications: { 'Year': '1985', 'Condition': 'Excellent', 'RAM': '64KB', 'Storage': 'Floppy Drive' },
      stock: 3,
      images: ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop'],
    },
    '3': {
      id: 3,
      name: 'Professional Work Gear Set',
      category: 'Workwear',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviewCount: 56,
      description: 'Complete professional work gear set including safety equipment and tools. Built for durability and comfort.',
      features: ['Safety certified', 'Durable materials', 'Complete set', 'All sizes available'],
      specifications: { 'Material': 'Heavy-duty polyester', 'Certification': 'CE Approved', 'Sizes': 'S-XXL' },
      stock: 24,
      images: ['https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop'],
    },
    '4': {
      id: 4,
      name: 'Smart Tech Bundle',
      category: 'Electronics',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.6,
      reviewCount: 203,
      description: 'Everything you need to make your home smart. Includes hub, sensors, and smart plugs.',
      features: ['Easy setup', 'Voice control compatible', 'Energy monitoring', 'Mobile app included'],
      specifications: { 'Connectivity': 'Wi-Fi & Zigbee', 'Compatibility': 'Alexa, Google Home', 'Items': '5 pieces' },
      stock: 18,
      images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=600&fit=crop'],
    },
    '5': {
      id: 5,
      name: 'Gaming Headset Pro',
      category: 'Audio',
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.5,
      reviewCount: 312,
      description: 'Professional gaming headset with surround sound and noise-cancelling microphone.',
      features: ['7.1 Surround Sound', 'Noise-cancelling mic', 'RGB lighting', 'Memory foam cushions'],
      specifications: { 'Driver': '50mm', 'Frequency': '20Hz-20kHz', 'Connection': 'USB / 3.5mm' },
      stock: 42,
      images: ['https://images.unsplash.com/photo-1599669454699-248893623440?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop'],
    },
    '6': {
      id: 6,
      name: 'Mechanical Keyboard RGB',
      category: 'PC',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviewCount: 189,
      description: 'Full RGB mechanical keyboard with hot-swappable switches and programmable macros.',
      features: ['Hot-swappable switches', 'Full RGB', 'Programmable', 'Aluminum frame'],
      specifications: { 'Switches': 'Cherry MX Blue', 'Layout': 'Full-size', 'Connection': 'USB-C' },
      stock: 36,
      images: ['https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=600&fit=crop'],
    },
    '7': {
      id: 7,
      name: 'Retro Game Collection',
      category: 'Retro Tech',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviewCount: 67,
      description: 'Curated collection of classic retro games. All tested and working perfectly.',
      features: ['20+ games included', 'All tested', 'Original cases', 'Collector value'],
      specifications: { 'Platform': 'Mixed', 'Condition': 'Good to Excellent', 'Era': '80s-90s' },
      stock: 8,
      images: ['https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=600&h=600&fit=crop'],
    },
    '8': {
      id: 8,
      name: 'Safety Work Boots',
      category: 'Workwear',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviewCount: 124,
      description: 'Steel toe safety boots with slip-resistant soles. Comfort meets protection.',
      features: ['Steel toe cap', 'Slip resistant', 'Waterproof', 'Shock absorbing'],
      specifications: { 'Material': 'Leather upper', 'Sole': 'Rubber', 'Safety': 'S3 rated' },
      stock: 56,
      images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop'],
    },
    '9': {
      id: 9,
      name: 'Gaming Monitor 27"',
      category: 'PC',
      price: 349.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviewCount: 89,
      description: '27-inch gaming monitor with 144Hz refresh rate and 1ms response time.',
      features: ['144Hz refresh', '1ms response', 'AMD FreeSync', 'HDR support'],
      specifications: { 'Size': '27 inch', 'Resolution': '2560x1440', 'Panel': 'IPS' },
      stock: 15,
      images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=600&fit=crop'],
    },
    '10': {
      id: 10,
      name: 'Wireless Earbuds',
      category: 'Audio',
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.4,
      reviewCount: 267,
      description: 'True wireless earbuds with active noise cancellation and 30-hour battery life.',
      features: ['Active noise cancellation', '30hr battery', 'Touch controls', 'IPX5 waterproof'],
      specifications: { 'Driver': '10mm', 'Bluetooth': '5.2', 'Charging': 'USB-C & Wireless' },
      stock: 48,
      images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop'],
    },
    '11': {
      id: 11,
      name: 'Gaming Chair Pro',
      category: 'Gaming',
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.7,
      reviewCount: 156,
      description: 'Ergonomic gaming chair with lumbar support, adjustable armrests, and reclining function.',
      features: ['Ergonomic design', '4D armrests', '180° recline', 'Memory foam'],
      specifications: { 'Material': 'PU Leather', 'Max Weight': '150kg', 'Height': 'Adjustable' },
      stock: 22,
      images: ['https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&h=600&fit=crop'],
    },
    '12': {
      id: 12,
      name: 'Smart Home Hub',
      category: 'Electronics',
      price: 129.99,
      originalPrice: 149.99,
      rating: 4.5,
      reviewCount: 98,
      description: 'Central hub for all your smart home devices. Control everything from one place.',
      features: ['Universal compatibility', 'Voice control', 'Automation', 'Energy tracking'],
      specifications: { 'Protocols': 'Wi-Fi, Zigbee, Z-Wave', 'Voice': 'Alexa & Google', 'App': 'iOS & Android' },
      stock: 31,
      images: ['https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop'],
    },
  }

  const productDefault = {
    id: 1,
    name: 'Product Not Found',
    category: 'Unknown',
    price: 0,
    originalPrice: 0,
    rating: 0,
    reviewCount: 0,
    description: 'This product could not be found.',
    features: [] as string[],
    specifications: {} as Record<string, string>,
    stock: 0,
    images: ['https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&h=600&fit=crop'],
  }

  const product = allProducts[productId] || productDefault

  const relatedProducts = [
    { id: 2, name: 'Vintage Retro Computer', price: 299.99, category: 'Retro Tech', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=300&fit=crop' },
    { id: 5, name: 'Gaming Headset Pro', price: 129.99, category: 'Audio', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop' },
    { id: 6, name: 'Mechanical Keyboard', price: 89.99, category: 'PC', image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=300&h=300&fit=crop' },
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
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-6">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-xl overflow-hidden border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
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
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={related.image} 
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
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