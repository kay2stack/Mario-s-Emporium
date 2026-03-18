import { Truck, MapPin, Clock, Package, Globe, CheckCircle } from 'lucide-react'

export default function DeliveryPage() {
  const deliveryOptions = [
    { 
      icon: Truck, 
      title: 'Standard Delivery', 
      price: '£3.99',
      time: '3-5 business days',
      description: 'Tracked Royal Mail delivery to your door'
    },
    { 
      icon: Clock, 
      title: 'Express Delivery', 
      price: '£7.99',
      time: '1-2 business days',
      description: 'Priority next-day dispatch with tracking'
    },
    { 
      icon: MapPin, 
      title: 'Local Collection', 
      price: 'FREE',
      time: 'Same day',
      description: 'Pick up from our location (by appointment)'
    },
    { 
      icon: Globe, 
      title: 'International', 
      price: 'From £12.99',
      time: '5-10 business days',
      description: 'Tracked shipping to Europe & worldwide'
    },
  ]

  const faqs = [
    { q: 'When will my order be dispatched?', a: 'We dispatch orders within 1-2 business days. You\'ll receive a tracking number by email as soon as your order ships.' },
    { q: 'Can I change my delivery address?', a: 'Contact us as soon as possible. If the order hasn\'t shipped yet, we can update the address for you.' },
    { q: 'What if I\'m not home?', a: 'Royal Mail will leave a card with collection instructions. For valuable items, we recommend using a safe delivery address.' },
    { q: 'Do you ship internationally?', a: 'Yes! We ship to most countries. International orders may be subject to local customs duties.' },
  ]

  return (
    <div className="section-padding py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-bebas text-5xl sm:text-6xl text-secondary mb-4">
          Delivery & <span className="text-gradient">Collection</span>
        </h1>
        <p className="text-xl text-gray-600 font-barlow">
          Fast, reliable shipping or convenient local pickup. You choose.
        </p>
      </div>

      {/* Delivery Options */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {deliveryOptions.map((option) => (
          <div key={option.title} className="card text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <option.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bebas text-xl text-secondary mb-1">{option.title}</h3>
            <div className="font-bebas text-2xl text-primary mb-1">{option.price}</div>
            <div className="text-sm text-accent font-barlow-condensed font-bold mb-2">{option.time}</div>
            <p className="text-gray-600 font-barlow text-sm">{option.description}</p>
          </div>
        ))}
      </div>

      {/* Collection Info */}
      <div className="bg-gradient-to-br from-secondary to-secondary-light rounded-2xl p-8 text-white mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-bebas text-3xl mb-4">Local Collection</h2>
            <p className="font-barlow text-gray-300 mb-6">
              Save on shipping by collecting in person. Our pickup point is easy to access with free parking. Just select &quot;Collection&quot; at checkout and we&apos;ll arrange a convenient time.
            </p>
            <ul className="space-y-3">
              {['Free collection', 'Same-day pickup available', 'Inspect before you pay', 'By appointment only'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-barlow">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bebas text-xl mb-4">Collection Address</h3>
            <div className="space-y-2 font-barlow text-gray-300">
              <p>123 Gaming Street</p>
              <p>Tech City, TC1 2AB</p>
              <p>United Kingdom</p>
              <p className="pt-4 text-primary">Opening Hours:</p>
              <p>Mon-Fri: 9am - 6pm</p>
              <p>Sat: 10am - 4pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bebas text-3xl text-secondary text-center mb-8">Delivery FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="card">
              <h3 className="font-bebas text-lg text-secondary mb-2">{faq.q}</h3>
              <p className="text-gray-600 font-barlow">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
