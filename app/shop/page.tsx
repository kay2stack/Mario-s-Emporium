import { FilterBar } from '@/components/FilterBar'
import { ProductGrid } from '@/components/ProductGrid'
import { Pagination } from '@/components/Pagination'

export default function ShopPage() {
  return (
    <div className="section-padding py-8">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="font-bebas text-5xl md:text-6xl text-secondary mb-4">
          BROWSE <span className="text-gradient">ALL STOCK</span>
        </h1>
        <p className="text-gray-600 font-barlow text-lg max-w-3xl">
          Discover hidden gems, practical gear, and one-off bargains across all categories. 
          Our inventory changes daily, so check back often for new arrivals.
        </p>
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
                <h2 className="font-bebas text-2xl text-secondary">542 Products</h2>
                <p className="text-gray-500 font-barlow text-sm">
                  Showing 1-24 of 542 items
                </p>
              </div>
              <div className="flex items-center gap-4">
                <select className="input-field w-auto">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                  <option>Best Rated</option>
                </select>
              </div>
            </div>
          </div>

          <ProductGrid />
          
          <div className="mt-12">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}