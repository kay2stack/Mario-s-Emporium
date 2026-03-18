import { RotateCcw, Shield, Clock, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react'

export default function ReturnsPage() {
  const policyPoints = [
    { icon: Clock, title: '14-Day Returns', description: 'Return most items within 14 days of delivery for a full refund.' },
    { icon: Shield, title: 'Quality Guarantee', description: "If an item isn't as described, we'll refund you including return postage." },
    { icon: RotateCcw, title: 'Easy Process', description: 'Contact us, send the item back, and get your refund within 5 days.' },
  ]

  const canReturn = [
    'Items in original condition',
    'Unused or tested only',
    'With all original packaging',
    'Within 14 days of delivery',
    'With proof of purchase',
  ]

  const cannotReturn = [
    'Items marked "Final Sale"',
    'Opened software/games (hygiene)',
    'Damaged by misuse',
    'Items over 14 days old',
    'Without original packaging',
  ]

  const steps = [
    { step: '1', title: 'Contact Us', description: 'Email us at returns@mariosemporium.com with your order number and reason for return.' },
    { step: '2', title: 'Get Approval', description: "We'll confirm the return and provide a returns address within 24 hours." },
    { step: '3', title: 'Ship It Back', description: 'Pack the item securely and ship it. Keep the tracking number!' },
    { step: '4', title: 'Get Refund', description: "Once we receive and inspect the item, we'll process your refund within 5 days." },
  ]

  return (
    <div className="section-padding py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-bebas text-5xl sm:text-6xl text-secondary mb-4">
          Returns <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-xl text-gray-600 font-barlow">
          Not happy? No problem. We want you to love what you buy.
        </p>
      </div>

      {/* Policy Highlights */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {policyPoints.map((point) => (
          <div key={point.title} className="card text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <point.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bebas text-xl text-secondary mb-2">{point.title}</h3>
            <p className="text-gray-600 font-barlow text-sm">{point.description}</p>
          </div>
        ))}
      </div>

      {/* What Can/Cannot Be Returned */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="card border-2 border-green-200 bg-green-50/50">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="font-bebas text-2xl text-secondary">Can Be Returned</h2>
          </div>
          <ul className="space-y-3">
            {canReturn.map((item) => (
              <li key={item} className="flex items-center gap-3 font-barlow text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card border-2 border-red-200 bg-red-50/50">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-red-600" />
            <h2 className="font-bebas text-2xl text-secondary">Cannot Be Returned</h2>
          </div>
          <ul className="space-y-3">
            {cannotReturn.map((item) => (
              <li key={item} className="flex items-center gap-3 font-barlow text-gray-700">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Return Process */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-20">
        <h2 className="font-bebas text-3xl text-secondary text-center mb-12">How to Return an Item</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.step} className="relative">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-bebas text-xl text-white">{step.step}</span>
                </div>
                <h3 className="font-bebas text-lg text-secondary mb-2">{step.title}</h3>
                <p className="text-gray-600 font-barlow text-sm">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Help */}
      <div className="text-center card max-w-2xl mx-auto">
        <HelpCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h2 className="font-bebas text-2xl text-secondary mb-2">Need Help With a Return?</h2>
        <p className="text-gray-600 font-barlow mb-6">
          Our team is here to help. Get in touch and we&apos;ll sort it out.
        </p>
        <a href="/contact" className="btn-primary inline-block">
          CONTACT US
        </a>
      </div>
    </div>
  )
}
