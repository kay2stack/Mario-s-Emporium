'use client'

import { useState } from 'react'
import { Check, Shield, Truck, RefreshCw } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Newsletter email:', email)
    setSubmitted(true)
    setEmail('')
    
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  const benefits = [
    {
      icon: Check,
      title: 'First Access',
      description: '24-hour early access to new drops',
    },
    {
      icon: Shield,
      title: 'Exclusive Deals',
      description: 'Special discounts for subscribers',
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On your first order after signing up',
    },
    {
      icon: RefreshCw,
      title: 'Stock Alerts',
      description: 'Instant notifications for rare items',
    },
  ]

  return (
    <section className="section-padding py-16">
      <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="p-8 md:p-12 text-white">
            <h2 className="font-bebas text-4xl md:text-5xl mb-6">
              DON&apos;T MISS
              <br />
              <span className="text-primary">THE NEXT DROP</span>
            </h2>
            
            <p className="text-gray-300 font-barlow text-lg mb-8">
              Get first pick on new stock. Be the first to know when we get rare retro tech, 
              limited edition gaming gear, and exclusive deals.
            </p>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bebas text-2xl mb-2">YOU&apos;RE ON THE LIST!</h3>
                <p className="text-gray-300 font-barlow">
                  You&apos;ll receive an email confirmation shortly. Get ready for the next drop!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="input-field flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent/80"
                  >
                    NOTIFY ME
                  </button>
                </div>
                <p className="text-sm text-gray-400 font-barlow">
                  Join 5,000+ gamers and tech enthusiasts. No spam, unsubscribe anytime.
                </p>
              </form>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-barlow-condensed font-bold text-white">{benefit.title}</h4>
                    <p className="text-sm text-gray-400 font-barlow">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="max-w-md mx-auto">
                <div className="bg-surface rounded-2xl p-6 shadow-2xl mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-barlow-condensed font-bold text-secondary">LIVE COUNTDOWN</span>
                    </div>
                    <span className="badge-new">NEXT DROP</span>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="font-bebas text-4xl text-secondary">12:00:00</div>
                    <p className="text-gray-600 font-barlow">Next stock drop in</p>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="font-bebas text-2xl text-primary">24</div>
                        <div className="text-sm text-gray-500 font-barlow">Hours</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bebas text-2xl text-accent">42</div>
                        <div className="text-sm text-gray-500 font-barlow">Items</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bebas text-2xl text-purple-500">3</div>
                        <div className="text-sm text-gray-500 font-barlow">Rare</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-700 font-barlow mb-4">
                    <span className="font-bold text-secondary">Mario&apos;s Emporium</span>
                    <br />
                    Hidden gems, practical gear, and one-off bargains.
                    <span className="block mt-2 font-semibold text-primary">
                      The stock is always changing.
                    </span>
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="font-bebas text-2xl text-secondary">500+</div>
                      <div className="text-sm text-gray-600 font-barlow">Products</div>
                    </div>
                    <div className="w-px h-8 bg-gray-300"></div>
                    <div className="text-center">
                      <div className="font-bebas text-2xl text-secondary">98%</div>
                      <div className="text-sm text-gray-600 font-barlow">Satisfaction</div>
                    </div>
                    <div className="w-px h-8 bg-gray-300"></div>
                    <div className="text-center">
                      <div className="font-bebas text-2xl text-secondary">24h</div>
                      <div className="text-sm text-gray-600 font-barlow">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #2D3047 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}