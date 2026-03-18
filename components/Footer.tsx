import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react'

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

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
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

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
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