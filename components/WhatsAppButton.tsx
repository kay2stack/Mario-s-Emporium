'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  
  // TODO: Replace with actual WhatsApp number
  const whatsappNumber = '441234567890'
  const defaultMessage = "Hi! I'm interested in an item from Mario's Emporium"
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <>
      {/* Chat Bubble */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 animate-drop-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-barlow-condensed font-bold">Mario&apos;s Emporium</div>
                    <div className="text-xs text-green-100">Usually replies in minutes</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm text-gray-700 font-barlow">
                  👋 Hey! Got a question about an item? Need help finding something specific?
                </p>
                <p className="text-sm text-gray-700 font-barlow mt-2">
                  Message us on WhatsApp and we&apos;ll get back to you ASAP!
                </p>
              </div>
            </div>
            
            {/* Action */}
            <div className="p-4 border-t">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-barlow-condensed font-bold py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            {/* Ping animation */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="text-[10px] font-bold">1</span>
            </span>
          </>
        )}
      </button>
    </>
  )
}
