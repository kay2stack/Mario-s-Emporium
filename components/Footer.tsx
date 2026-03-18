import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

// Custom eBay icon component
function EbayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.52 9.04c-2.4 0-3.52 1.52-3.52 3.2 0 2.08 1.52 3.2 3.68 3.2 1.44 0 2.48-.48 3.04-1.04l-1.04-1.2c-.4.4-1.04.72-1.84.72-1.12 0-1.84-.56-2-1.36h5.2v-.56c0-2.08-1.12-2.96-3.52-2.96zm-1.68 2.56c.08-.72.64-1.2 1.6-1.2s1.52.48 1.6 1.2H3.84zm7.2-2.4v6h1.76v-2.24c0-1.36.72-1.92 1.6-1.92.72 0 1.12.4 1.12 1.28v2.88h1.76v-3.2c0-1.6-.88-2.4-2.24-2.4-.96 0-1.68.4-2.08.96h-.08v-.8H9.36v.44zm9.28-.16c-1.76 0-2.88 1.04-2.88 2.56s1.12 2.56 2.88 2.56 2.88-1.04 2.88-2.56-1.12-2.56-2.88-2.56zm0 3.76c-.72 0-1.12-.48-1.12-1.2s.4-1.2 1.12-1.2 1.12.48 1.12 1.2-.4 1.2-1.12 1.2z"/>
    </svg>
  )
}

export function Footer() {
  const infoLinks = [
    { name: 'About Mario\'s', href: '/about' },
    { name: 'How to Buy', href: '/how-to-buy' },
    { name: 'Delivery & Collection', href: '/delivery' },
    { name: 'Returns Policy', href: '/returns' },
    { name: 'Contact', href: '/contact' },
  ]

  const shopCategories = [
    { name: 'Gaming & Consoles', href: '/shop/gaming' },
    { name: 'Electronics', href: '/shop/electronics' },
    { name: 'Retro Tech', href: '/shop/retro-tech' },
    { name: 'Workwear & PPE', href: '/shop/workwear' },
    { name: 'All Categories', href: '/shop' },
  ]

  // TODO: Replace with actual social media URLs
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/mariosemporium', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/mariosemporium', label: 'Instagram' },
    { icon: EbayIcon, href: 'https://ebay.co.uk/usr/mariosemporium', label: 'eBay' },
  ]

  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bebas text-xl">M</span>
              </div>
              <span className="font-bebas text-3xl">
                Super Mario&apos;s<span className="text-primary">Emporium</span>
              </span>
            </div>
            <p className="text-gray-300 font-barlow">
              Hidden gems, practical gear, and one-off bargains. The stock is always changing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bebas text-2xl mb-4">SHOP</h3>
            <ul className="space-y-2">
              {shopCategories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-primary transition-colors font-barlow flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INFO */}
          <div>
            <h3 className="font-bebas text-2xl mb-4">INFO</h3>
            <ul className="space-y-2">
              {infoLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-primary transition-colors font-barlow flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bebas text-2xl mb-4">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-300 font-barlow">
                  123 Gaming Street<br />
                  Tech City, TC1 2AB<br />
                  United Kingdom
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+441234567890" className="text-gray-300 hover:text-primary transition-colors font-barlow">
                  +44 1234 567890
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@mariosemporium.com" className="text-gray-300 hover:text-primary transition-colors font-barlow">
                  hello@mariosemporium.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-bebas text-2xl mb-2">DON&apos;T MISS THE NEXT DROP</h3>
            <p className="text-gray-300 font-barlow mb-6">
              Get first pick on new stock. Be the first to know about our latest drops and exclusive deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input-field flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                NOTIFY ME
              </button>
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 font-barlow text-sm">We accept:</p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <div className="bg-white/10 rounded px-3 py-1.5 text-xs font-barlow-condensed font-bold">PayPal</div>
              <div className="bg-white/10 rounded px-3 py-1.5 text-xs font-barlow-condensed font-bold">Visa</div>
              <div className="bg-white/10 rounded px-3 py-1.5 text-xs font-barlow-condensed font-bold">Mastercard</div>
              <div className="bg-white/10 rounded px-3 py-1.5 text-xs font-barlow-condensed font-bold flex items-center gap-1">
                <span className="text-yellow-400">₿</span> Crypto
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400 font-barlow">
            © {new Date().getFullYear()} Super Mario&apos;s Emporium. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-barlow mt-2">
            Designed with ❤️ for gamers, tech enthusiasts, and bargain hunters. Game On!
          </p>
        </div>
      </div>
    </footer>
  )
}