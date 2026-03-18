'use client'

import { useState } from 'react'
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft, Shield, Truck, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Limited Edition Gaming Console',
      category: 'Gaming',
      price: 499.99,
      quantity: 1,
      imageColor: 'from-primary to-primary-dark',
      stock: 12,
    },
    {
      id: 2,
      name: 'Vintage Retro Computer',
      category: 'Retro Tech',
      price: 299.99,
      quantity: 1,
      imageColor: 'from-purple-500 to-purple-600',
      stock: 3,
    },
    {
      id: 3,
      name: 'Professional Work Gear Set',
      category: 'Workwear',
      price: 149.99,
      quantity: 2,
      imageColor: 'from-green-500 to-green-600',
      stock: 24,
    },
  ])

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta)
          return { ...item, quantity: newQuantity }
        }
        return item
      })
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.2 // 20% VAT
  const total = subtotal + shipping + tax

  return (
    <div className="section-padding py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/shop" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-barlow-condensed font-bold mb-4">
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>
        <h1 className="font-bebas text-5xl md:text-6xl text-secondary">
          YOUR <span className="text-gradient">CART</span>
        </h1>
        <p className="text-gray-600 font-barlow text-lg mt-2">
          Review your items and proceed to checkout
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="bg-surface rounded-2xl p-12 text-center">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="font-bebas text-2xl text-secondary mb-4">Your cart is empty</h3>
              <p className="text-gray-600 font-barlow mb-8">
                Add some hidden gems to your cart and check back soon!
              </p>
              <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="card flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className={`w-full sm:w-32 h-32 rounded-xl bg-gradient-to-br ${item.imageColor} flex-shrink-0`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="font-bebas text-xl text-white">M</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 font-barlow">{item.category}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            item.stock > 10 ? 'bg-green-500' :
                            item.stock > 5 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <span className="text-xs text-gray-400 font-barlow">
                            {item.stock} left
                          </span>
                        </div>
                        <h3 className="font-bebas text-xl text-secondary">{item.name}</h3>
                        <div className="font-bebas text-2xl text-secondary">£{item.price.toFixed(2)}</div>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-barlow font-bold text-secondary">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                      <span className="text-gray-600 font-barlow">Item Total</span>
                      <div className="font-bebas text-2xl text-secondary">
                        £{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-surface rounded-xl p-4 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-barlow-condensed font-bold text-sm">Secure Checkout</div>
            </div>
            <div className="bg-surface rounded-xl p-4 text-center">
              <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="font-barlow-condensed font-bold text-sm">UK Shipping</div>
            </div>
            <div className="bg-surface rounded-xl p-4 text-center">
              <RefreshCw className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="font-barlow-condensed font-bold text-sm">30-Day Returns</div>
            </div>
            <div className="bg-surface rounded-xl p-4 text-center">
              <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-barlow-condensed font-bold text-sm">Buyer Protection</div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <h3 className="font-bebas text-2xl text-secondary mb-6">ORDER SUMMARY</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600 font-barlow">Subtotal</span>
                <span className="font-barlow font-bold text-secondary">£{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 font-barlow">Shipping</span>
                <span className={`font-barlow font-bold ${shipping === 0 ? 'text-green-600' : 'text-secondary'}`}>
                  {shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 font-barlow">Tax (VAT)</span>
                <span className="font-barlow font-bold text-secondary">£{tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-bebas text-xl text-secondary">TOTAL</span>
                  <div>
                    <div className="font-bebas text-2xl text-secondary">£{total.toFixed(2)}</div>
                    <div className="text-sm text-gray-500 font-barlow">Including VAT</div>
                  </div>
                </div>
              </div>

              {/* Free Shipping Progress */}
              {subtotal < 100 && (
                <div className="bg-primary/5 rounded-xl p-4 mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-barlow-condensed font-bold text-primary text-sm">
                      FREE SHIPPING
                    </span>
                    <span className="text-sm text-gray-600 font-barlow">
                      £{(100 - subtotal).toFixed(2)} away
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / 100) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              {cartItems.length > 0 ? (
                <Link
                  href="/checkout"
                  className="btn-primary w-full text-center py-4 text-lg mt-6"
                >
                  PROCEED TO CHECKOUT
                </Link>
              ) : (
                <span className="btn-primary w-full text-center py-4 text-lg mt-6 opacity-50 cursor-not-allowed block">
                  PROCEED TO CHECKOUT
                </span>
              )}

              {/* Payment Methods */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-barlow mb-3">We accept</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-gray-100 rounded"></div>
                  <div className="w-10 h-6 bg-gray-100 rounded"></div>
                  <div className="w-10 h-6 bg-gray-100 rounded"></div>
                  <div className="w-10 h-6 bg-gray-100 rounded"></div>
                  <div className="text-xs text-gray-400 font-barlow">+ more</div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-barlow">
                  <span className="font-bold text-secondary">30-Day Money Back Guarantee</span>
                  <br />
                  If you're not satisfied, we'll make it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}