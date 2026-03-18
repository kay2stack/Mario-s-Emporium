import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AnnouncementBanner } from '@/components/AnnouncementBanner'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#e8181b',
}

export const metadata: Metadata = {
  title: "Mario's Emporium - Hidden Gems & One-Off Bargains",
  description: 'Discover hidden gems, practical gear, and one-off bargains. The stock is always changing at Mario\'s Emporium.',
  keywords: ['gaming gear', 'retro tech', 'electronics', 'workwear', 'bargains', 'stock drops', 'mario'],
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: "Mario's Emporium",
  },
  openGraph: {
    title: "Mario's Emporium",
    description: 'Hidden gems, practical gear, and one-off bargains',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mario's Emporium",
    description: 'The stock is always changing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mario's Emporium" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-b from-background to-gray-50`}>
        <ServiceWorkerRegistration />
        <AnnouncementBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}