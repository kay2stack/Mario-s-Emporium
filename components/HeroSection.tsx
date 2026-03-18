'use client'

import { useState } from 'react'
import { Gamepad2, Cpu, Clock, Sparkles } from 'lucide-react'

export function HeroSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
    alert('You\'ll be notified about the next drop!')
  }

  const highlights = [
    { icon: Gamepad2, label: 'GAMING GEAR', color: 'text-primary' },
    { icon: Cpu, label: 'RETRO TECH', color: 'text-accent' },
    { icon: Clock, label: 'NEW STOCK', color: 'text-purple-500' },
    { icon: Sparkles, label: 'JUST IN', color: 'text-yellow-500' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="section-padding py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="font-barlow-condensed font-bold text-sm tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-bebas text-5xl md:text-7xl leading-tight">
                DON&apos;T MISS
                <br />
                <span className="text-gradient">THE NEXT DROP</span>
              </h1>
              
              <p className="text-xl text-gray-300 font-barlow max-w-lg">
                Hidden gems, practical gear, and one-off bargains. 
                <span className="block mt-2 font-semibold text-primary">
                  The stock is always changing.
                </span>
              </p>
            </div>

            {/* Email Form */}
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <h3 className="font-bebas text-2xl">Get First Pick on New Stock</h3>
                <p className="text-gray-300 font-barlow">
                  Be the first to know when we get new gaming gear, retro tech, and exclusive deals.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3">
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
                  No spam, just awesome deals. Unsubscribe anytime.
                </p>
              </form>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="font-bebas text-3xl text-primary">500+</div>
                <div className="text-sm text-gray-300 font-barlow">Products</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-3xl text-accent">24h</div>
                <div className="text-sm text-gray-300 font-barlow">New Drops</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-3xl text-purple-400">98%</div>
                <div className="text-sm text-gray-300 font-barlow">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-3xl text-yellow-400">UK</div>
                <div className="text-sm text-gray-300 font-barlow">Shipping</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Product Showcase */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-surface rounded-2xl p-8 shadow-2xl border border-white/10">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-900 to-secondary overflow-hidden">
                  {/* Product Image Placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                        <Gamepad2 className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <div className="font-bebas text-2xl text-white">LIMITED EDITION</div>
                        <div className="font-barlow-condensed font-bold text-primary text-xl">GAMING BUNDLE</div>
                      </div>
                      <div className="badge-new">NEW STOCK</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4">
                  <div className="bg-primary text-white font-bebas text-lg px-4 py-2 rounded-lg rotate-3 shadow-lg">
                    JUST IN
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4">
                  <div className="bg-accent text-white font-bebas text-lg px-4 py-2 rounded-lg -rotate-3 shadow-lg">
                    RETRO TECH
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/4 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}