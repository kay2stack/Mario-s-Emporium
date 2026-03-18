import { Search, ShoppingCart, CreditCard, Package, MessageCircle, Shield } from 'lucide-react'

export default function HowToBuyPage() {
  const steps = [
    { 
      icon: Search, 
      step: '01', 
      title: 'Browse & Discover', 
      description: 'Explore our categories or use the search to find what you need. New stock arrives weekly, so check back often!' 
    },
    { 
      icon: ShoppingCart, 
      step: '02', 
      title: 'Add to Cart', 
      description: "Found something you like? Add it to your cart. Items are first-come, first-served — so don't wait too long!" 
    },
    { 
      icon: CreditCard, 
      step: '03', 
      title: 'Secure Checkout', 
      description: 'Pay securely with PayPal, card, or crypto. All transactions are encrypted and protected.' 
    },
    { 
      icon: Package, 
      step: '04', 
      title: 'Fast Delivery', 
      description: 'We dispatch within 1-2 business days. Track your order and get notified when it arrives.' 
    },
  ]

  const paymentMethods = [
    { name: 'PayPal', description: 'Fast and secure payments' },
    { name: 'Credit/Debit Card', description: 'Visa, Mastercard, Amex' },
    { name: 'Crypto', description: 'Bitcoin, Ethereum & more' },
    { name: 'Bank Transfer', description: 'For larger purchases' },
  ]

  return (
    <div className="section-padding py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-bebas text-5xl sm:text-6xl text-secondary mb-4">
          How to <span className="text-gradient">Buy</span>
        </h1>
        <p className="text-xl text-gray-600 font-barlow">
          Shopping at Mario&apos;s Emporium is simple. Here&apos;s how it works.
        </p>
      </div>

      {/* Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {steps.map((step) => (
          <div key={step.step} className="card relative group">
            <div className="absolute -top-4 -left-2 font-bebas text-6xl text-primary/10">{step.step}</div>
            <div className="relative">
              <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bebas text-xl text-secondary mb-2">{step.title}</h3>
              <p className="text-gray-600 font-barlow text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-20">
        <h2 className="font-bebas text-3xl text-secondary text-center mb-8">Payment Methods</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paymentMethods.map((method) => (
            <div key={method.name} className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <h3 className="font-bebas text-lg text-secondary mb-1">{method.name}</h3>
              <p className="text-gray-500 font-barlow text-sm">{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="card">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bebas text-xl text-secondary mb-2">Got Questions?</h3>
              <p className="text-gray-600 font-barlow text-sm">
                Need more info about an item? Use the contact form or drop us an email. We&apos;ll get back to you within 24 hours with honest answers.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bebas text-xl text-secondary mb-2">Buyer Protection</h3>
              <p className="text-gray-600 font-barlow text-sm">
                All purchases are covered by our returns policy. If something isn&apos;t as described, we&apos;ll make it right. Your satisfaction is guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a href="/shop" className="btn-primary inline-block">
          START SHOPPING
        </a>
      </div>
    </div>
  )
}
