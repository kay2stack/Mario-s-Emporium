'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { FilterBar } from '@/components/FilterBar'
import { ProductGrid } from '@/components/ProductGrid'
import { Pagination } from '@/components/Pagination'
import Link from 'next/link'

const categoryNames: Record<string, string> = {
  gaming: '🎮 Gaming & Consoles',
  retro: '📺 Retro Tech',
  workwear: '👷 Workwear & PPE',
  electronics: '🔌 Electronics',
  audio: '🎧 Audio',
  pc: '💻 PC & Peripherals',
}

const ITEMS_PER_PAGE = 6

function ShopContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const categoryTitle = category ? categoryNames[category] || category.toUpperCase() : null

  // Reset to page 1 when category or search changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleTotalPagesChange = (total: number) => {
    setTotalPages(total)
    if (currentPage > total && total > 0) {
      setCurrentPage(1)
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Hero */}
      <div className="mb-12">
        {category ? (
          <>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-nunito mb-4">
              <Link href="/shop" className="hover:text-mario-red">All Products</Link>
              <span>→</span>
              <span className="text-mario-red font-semibold">{categoryTitle}</span>
            </div>
            <h1 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-4">
              {categoryTitle}
            </h1>
          </>
        ) : search ? (
          <>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-nunito mb-4">
              <Link href="/shop" className="hover:text-mario-red">All Products</Link>
              <span>→</span>
              <span className="text-mario-red font-semibold">Search: &quot;{search}&quot;</span>
            </div>
            <h1 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-4">
              Search Results for &quot;{search}&quot;
            </h1>
          </>
        ) : (
          <>
            <h1 className="font-fredoka text-4xl md:text-5xl text-gray-900 mb-4">
              BROWSE <span className="text-mario-red">ALL STOCK</span>
            </h1>
            <p className="text-gray-600 font-nunito text-lg max-w-3xl">
              Discover hidden gems, practical gear, and one-off bargains across all categories. 
              Our inventory changes daily, so check back often for new arrivals.
            </p>
          </>
        )}
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          <Link 
            href="/shop" 
            className={`px-4 py-2 rounded-full font-fredoka text-sm border-2 transition-all ${
              !category ? 'bg-mario-red text-white border-mario-red-dark' : 'bg-white text-gray-700 border-gray-200 hover:border-mario-red'
            }`}
          >
            All
          </Link>
          {Object.entries(categoryNames).map(([key, name]) => (
            <Link 
              key={key}
              href={`/shop?category=${key}`}
              className={`px-4 py-2 rounded-full font-fredoka text-sm border-2 transition-all ${
                category === key ? 'bg-mario-red text-white border-mario-red-dark' : 'bg-white text-gray-700 border-gray-200 hover:border-mario-red'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <FilterBar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-fredoka text-xl text-gray-900">
                  {category ? `${categoryTitle} Products` : 'All Products'}
                </h2>
                <p className="text-gray-500 font-nunito text-sm">
                  Showing available items
                </p>
              </div>
              <div className="flex items-center gap-4">
                <select className="input-field w-auto text-sm">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>
          </div>

          <ProductGrid 
            category={category} 
            searchQuery={search} 
            currentPage={currentPage}
            itemsPerPage={ITEMS_PER_PAGE}
            onTotalPagesChange={handleTotalPagesChange}
          />
          
          <div className="mt-12">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center py-12">
          <span className="text-4xl animate-bounce inline-block">🍄</span>
          <p className="font-nunito text-gray-500 mt-4">Loading products...</p>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  )
}