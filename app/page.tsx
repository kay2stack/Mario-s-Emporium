import { HeroSection } from '@/components/HeroSection'
import { StockHighlights } from '@/components/StockHighlights'
import { CategoriesGrid } from '@/components/CategoriesGrid'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { NewsletterSection } from '@/components/NewsletterSection'

export default function Home() {
  return (
    <div className="animate-drop-in">
      <HeroSection />
      <StockHighlights />
      <CategoriesGrid />
      <FeaturedProducts />
      <NewsletterSection />
    </div>
  )
}