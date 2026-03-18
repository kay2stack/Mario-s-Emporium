'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Package, HelpCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@mariosemporium.com', href: 'mailto:hello@mariosemporium.com' },
    { icon: Phone, label: 'Phone', value: '+44 1234 567890', href: 'tel:+441234567890' },
    { icon: MapPin, label: 'Address', value: '123 Gaming Street, Tech City, TC1 2AB', href: null },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri 9am-6pm, Sat 10am-4pm', href: null },
  ]

  const subjects = [
    { value: 'general', label: 'General Enquiry', icon: MessageSquare },
    { value: 'order', label: 'Order Question', icon: Package },
    { value: 'return', label: 'Returns & Refunds', icon: HelpCircle },
  ]

  if (isSubmitted) {
    return (
      <div className="section-padding py-20">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-bebas text-4xl text-secondary mb-4">Message Sent!</h1>
          <p className="text-gray-600 font-barlow text-lg mb-8">
            Thanks for getting in touch. We&apos;ll get back to you within 24 hours.
          </p>
          <a href="/" className="btn-primary inline-block">
            BACK TO HOME
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-bebas text-5xl sm:text-6xl text-secondary mb-4">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 font-barlow">
          Got a question? We&apos;re here to help. Drop us a message and we&apos;ll respond within 24 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="card">
            <h2 className="font-bebas text-2xl text-secondary mb-6">Send a Message</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-barlow-condensed font-bold text-secondary mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  className="input-field"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-barlow-condensed font-bold text-secondary mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="input-field"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-barlow-condensed font-bold text-secondary mb-2">What&apos;s this about?</label>
              <div className="grid grid-cols-3 gap-2">
                {subjects.map((subject) => (
                  <button
                    key={subject.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, subject: subject.value })}
                    className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center gap-1 ${
                      formData.subject === subject.value
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <subject.icon className={`w-5 h-5 ${formData.subject === subject.value ? 'text-primary' : 'text-gray-400'}`} />
                    <span className={`font-barlow text-xs ${formData.subject === subject.value ? 'text-primary' : 'text-gray-600'}`}>
                      {subject.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-barlow-condensed font-bold text-secondary mb-2">Your Message</label>
              <textarea
                required
                rows={5}
                className="input-field resize-none"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  SENDING...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card bg-gradient-to-br from-secondary to-secondary-light text-white">
            <h2 className="font-bebas text-2xl mb-6">Contact Info</h2>
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-barlow-condensed font-bold text-white/60 text-sm">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="font-barlow text-white hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-barlow text-white">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-bebas text-xl text-secondary mb-3">Quick Response Promise</h3>
            <p className="text-gray-600 font-barlow text-sm">
              We aim to respond to all enquiries within 24 hours during business days. For urgent order issues, please include your order number in the message.
            </p>
          </div>

          <div className="card bg-primary/5 border-primary/20">
            <h3 className="font-bebas text-xl text-primary mb-3">Looking for Something Specific?</h3>
            <p className="text-gray-600 font-barlow text-sm mb-4">
              Can&apos;t find what you need? Let us know and we&apos;ll keep an eye out for it in our next stock drop.
            </p>
            <a href="/shop" className="text-primary font-barlow-condensed font-bold hover:underline">
              Browse Current Stock →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
