import { Gamepad2, Heart, Recycle, Users, Award, Clock } from 'lucide-react'

export default function AboutPage() {
  const values = [
    { icon: Gamepad2, title: 'Gaming Passion', description: "We're gamers ourselves. Every item we stock is something we'd want to own." },
    { icon: Recycle, title: 'Sustainable Shopping', description: 'Give tech a second life. Quality refurbished goods at unbeatable prices.' },
    { icon: Heart, title: 'Customer First', description: 'Fair prices, honest descriptions, and support when you need it.' },
    { icon: Users, title: 'Community Driven', description: '500+ happy customers and growing. Join the Emporium family!' },
  ]

  const stats = [
    { value: '100+', label: 'Items in Stock' },
    { value: '500+', label: 'Happy Buyers' },
    { value: '8', label: 'Categories' },
    { value: 'Weekly', label: 'New Stock' },
  ]

  return (
    <div className="section-padding py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-bebas text-5xl sm:text-6xl text-secondary mb-4">
          About <span className="text-gradient">Mario&apos;s Emporium</span>
        </h1>
        <p className="text-xl text-gray-600 font-barlow">
          Hidden gems, practical gear, and one-off bargains. The stock is always changing — that&apos;s what makes it exciting.
        </p>
      </div>

      {/* Story */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="font-bebas text-4xl text-secondary">Our Story</h2>
          <p className="text-gray-600 font-barlow leading-relaxed">
            What started as a hobby clearing out unused tech has grown into something special. Super Mario&apos;s Emporium is where quality meets value — a place for gamers, tech enthusiasts, and bargain hunters alike.
          </p>
          <p className="text-gray-600 font-barlow leading-relaxed">
            Every item we sell is carefully tested and honestly described. Whether it&apos;s a rare retro console, the latest gaming gear, or practical workwear, we only stock what we believe in.
          </p>
          <p className="text-gray-600 font-barlow leading-relaxed">
            Our stock changes weekly because we source unique items — no mass-produced generic products here. When you see something you like, grab it before someone else does!
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-bebas text-4xl text-primary">{stat.value}</div>
                <div className="font-barlow text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="font-bebas text-4xl text-secondary text-center mb-12">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="card text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bebas text-xl text-secondary mb-2">{value.title}</h3>
              <p className="text-gray-600 font-barlow text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-secondary rounded-2xl p-12">
        <h2 className="font-bebas text-4xl text-white mb-4">Ready to Find Your Next Gem?</h2>
        <p className="text-gray-300 font-barlow mb-8 max-w-xl mx-auto">
          New stock drops every week. Don&apos;t miss out on the best finds.
        </p>
        <a href="/shop" className="btn-primary inline-block">
          BROWSE THE SHOP
        </a>
      </div>
    </div>
  )
}
