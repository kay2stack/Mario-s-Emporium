import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AnnouncementBanner } from '@/components/AnnouncementBanner'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Super Mario's Emporium - Hidden Gems & One-Off Bargains",
  description: 'Discover hidden gems, practical gear, and one-off bargains. The stock is always changing at Super Mario\'s Emporium.',
  keywords: ['gaming gear', 'retro tech', 'electronics', 'workwear', 'bargains', 'stock drops', 'super mario'],
  openGraph: {
    title: "Super Mario's Emporium",
    description: 'Hidden gems, practical gear, and one-off bargains',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Super Mario's Emporium",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-b from-background to-gray-50`}>
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