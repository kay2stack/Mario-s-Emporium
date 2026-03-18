'use client'

import { useState } from 'react'
import { Lock, Shield, Truck, CreditCard, User, Mail, MapPin, Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('card')

  const orderSummary = {
    subtotal: 949.97,
    shipping: 0,
    tax: 189.99,
    total: 1139.96,
    items: [
      { name: 'Limited Edition Gaming Console', price: 499.99, quantity: 1 },
      { name: 'Vintage Retro Computer', price: 299.99, quantity: 1 },
      { name: 'Professional Work Gear Set', price: 149.99, quantity: 2 },
    ]
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 3) {
      // Process payment
      alert('Order placed successfully!')
    } else {
      nextStep()
    }
  }

  return (
    <div className="section-padding py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/cart" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-barlow-condensed font-bold mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>
        <h1 className="font-bebas text-5xl md:text-6xl text-secondary">
          CHECK<span className="text-gradient">OUT</span>
        </h1>
        <p className="text-gray-600 font-barlow text-lg mt-2">
          Complete your purchase securely
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {['Shipping', 'Payment', 'Review'].map((label, index) => (
            <div key={label} className="flex flex-col items-center">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mb-2
                ${step > index + 1 ? 'bg-primary text-white' :
                  step === index + 1 ? 'bg-primary text-white ring-4 ring-primary/20' :
                  'bg-gray-100 text-gray-400'}
              `}>
                {step > index + 1 ? (
                  <div className="w-6 h-6">✓</div>
                ) : (
                  <div className="font-bebas text-xl">{index + 1}</div>
                )}
              </div>
              <span className={`font-barlow-condensed font-bold text-sm ${
                step >= index + 1 ? 'text-secondary' : 'text-gray-400'
              }`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="card space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="font-bebas text-2xl text-secondary">Shipping Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Mario"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Bros"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      className="input-field pl-12"
                      placeholder="mario@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      className="input-field pl-12"
                      placeholder="+44 1234 567890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="input-field pl-12"
                      placeholder="123 Gaming Street"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="London"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                      Post Code
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="SW1A 1AA"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                      Country
                    </label>
                    <select className="input-field" required>
                      <option value="">Select Country</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="card space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <h3 className="font-bebas text-2xl text-secondary">Payment Method</h3>
                </div>

                <div className="space-y-4">
                  {['card', 'paypal', 'apple-pay'].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        paymentMethod === method
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={paymentMethod === method}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-primary"
                      />
                      <div className="flex-1">
                        <div className="font-barlow-condensed font-bold text-secondary capitalize">
                          {method.replace('-', ' ')}
                        </div>
                        <div className="text-sm text-gray-500 font-barlow">
                          {method === 'card' && 'Pay with credit or debit card'}
                          {method === 'paypal' && 'Pay with your PayPal account'}
                          {method === 'apple-pay' && 'Pay with Apple Pay'}
                        </div>
                      </div>
                      <div className="w-12 h-8 bg-gray-100 rounded"></div>
                    </label>
                  ))}
                </div>

                {/* Card Details (if card selected) */}
                {paymentMethod === 'card' && (
                  <div className="space-y-6 pt-6 border-t border-gray-100">
                    <div>
                      <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-barlow font-bold text-secondary mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        placeholder="MARIO BROS"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="card space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="font-bebas text-2xl text-secondary">Review & Confirm</h3>
                </div>

                {/* Order Items */}
                <div className="space-y-4">
                  <h4 className="font-barlow-condensed font-bold text-secondary">Order Items</h4>
                  {orderSummary.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <div className="font-barlow font-bold text-secondary">{item.name}</div>
                        <div className="text-sm text-gray-500 font-barlow">
                          Quantity: {item.quantity} × £{item.price.toFixed(2)}
                        </div>
                      </div>
                      <div className="font-barlow font-bold text-secondary">
                        £{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Address */}
                <div>
                  <h4 className="font-barlow-condensed font-bold text-secondary mb-3">Shipping Address</h4>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-barlow text-secondary">Mario Bros</p>
                    <p className="font-barlow text-gray-600">123 Gaming Street</p>
                    <p className="font-barlow text-gray-600">London, SW1A 1AA</p>
                    <p className="font-barlow text-gray-600">United Kingdom</p>
                    <p className="font-barlow text-gray-600">mario@example.com</p>
                    <p className="font-barlow text-gray-600">+44 1234 567890</p>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h4 className="font-barlow-condensed font-bold text-secondary mb-3">Payment Method</h4>
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <div className="font-barlow font-bold text-secondary capitalize">
                        {paymentMethod.replace('-', ' ')}
                      </div>
                      <div className="text-sm text-gray-500 font-barlow">
                        {paymentMethod === 'card' && 'Card ending in 3456'}
                        {paymentMethod === 'paypal' && 'Pay with PayPal'}
                        {paymentMethod === 'apple-pay' && 'Apple Pay'}
                      </div>
                    </div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Terms */}
                <div className="pt-6 border-t border-gray-100">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-primary rounded" required />
                    <div className="text-sm text-gray-600 font-barlow">
                      I agree to the{' '}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      . I understand that my order is for physical items only and may be subject to availability.
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary flex-1"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={`btn-primary flex-1 ${step === 3 ? 'bg-gradient-to-r from-primary to-green-500' : ''}`}
              >
                {step === 3 ? (
                  <span className="flex items-center justify-center gap-2">
                    <Lock className="w-5 h-5" />
                    PLACE ORDER
                  </span>
                ) : (
                  `Continue to ${step === 1 ? 'Payment' : 'Review'}`
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <h3 className="font-bebas text-2xl text-secondary mb-6">ORDER SUMMARY</h3>
            
            <div className="space-y-4">
              {orderSummary.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <div className="font-barlow text-secondary">{item.name}</div>
                    <div className="text-sm text-gray-500 font-barlow">
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="font-barlow font-bold text-secondary">
                    £{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-barlow">Subtotal</span>
                  <span className="font-barlow font-bold text-secondary">£{orderSummary.subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 font-barlow">Shipping</span>
                  <span className="font-barlow font-bold text-green-600">FREE</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 font-barlow">Tax (VAT)</span>
                  <span className="font-barlow font-bold text-secondary">£{orderSummary.tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-bebas text-xl text-secondary">TOTAL</span>
                    <div>
                      <div className="font-bebas text-2xl text-secondary">£{orderSummary.total.toFixed(2)}</div>
                      <div className="text-sm text-gray-500 font-barlow">Including VAT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 bg-primary/5 rounded-xl p-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-barlow-condensed font-bold text-primary">Secure Checkout</div>
                    <div className="text-sm text-gray-600 font-barlow">
                      Your payment is encrypted and secure
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="pt-4">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-accent" />
                  <div>
                    <div className="font-barlow-condensed font-bold text-secondary">UK Shipping</div>
                    <div className="text-sm text-gray-500 font-barlow">
                      Free shipping on orders over £100
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-barlow">
                  Need help?{' '}
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact our support team
                  </Link>
                  {' '}or call +44 1234 567890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}