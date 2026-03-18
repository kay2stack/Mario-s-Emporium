'use client'

import { Filter, X, Gamepad2, Cpu, Wrench, Smartphone, Headphones, Monitor } from 'lucide-react'
import { useState } from 'react'

export function FilterBar() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const categories = [
    { id: 'gaming', name: 'Gaming & Consoles', icon: Gamepad2, count: 142 },
    { id: 'retro', name: 'Retro Tech', icon: Cpu, count: 67 },
    { id: 'workwear', name: 'Workwear & PPE', icon: Wrench, count: 89 },
    { id: 'electronics', name: 'Electronics', icon: Smartphone, count: 203 },
    { id: 'audio', name: 'Audio Gear', icon: Headphones, count: 56 },
    { id: 'pc', name: 'PC & Peripherals', icon: Monitor, count: 94 },
  ]

  const conditions = [
    { id: 'new', name: 'New', count: 342 },
    { id: 'used', name: 'Used - Like New', count: 156 },
    { id: 'refurbished', name: 'Refurbished', count: 44 },
  ]

  const stockStatus = [
    { id: 'in-stock', name: 'In Stock', count: 478 },
    { id: 'low-stock', name: 'Low Stock', count: 64 },
    { id: 'pre-order', name: 'Pre-order', count: 12 },
  ]

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 1000])
  }

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowMobileFilters(true)}
        className="lg:hidden flex items-center gap-2 btn-secondary w-full mb-4"
      >
        <Filter className="w-5 h-5" />
        Filters & Categories
      </button>

      {/* Filter Sidebar */}
      <div className={`
        ${showMobileFilters ? 'fixed inset-0 z-50 bg-black/50 lg:static lg:bg-transparent' : 'hidden lg:block'}
      `}>
        <div className={`
          ${showMobileFilters ? 'fixed inset-y-0 left-0 w-80 bg-white p-6 overflow-y-auto' : 'bg-white rounded-xl p-6 shadow-lg'}
        `}>
          {/* Mobile Header */}
          {showMobileFilters && (
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bebas text-2xl text-secondary">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="space-y-8">
            {/* Header */}
            <div className="border-b pb-4">
              <h3 className="font-bebas text-2xl text-secondary mb-2">FILTERS</h3>
              <p className="text-gray-500 font-barlow text-sm">
                Narrow down your search
              </p>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-barlow-condensed font-bold text-secondary mb-4">PRICE RANGE</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-barlow">£{priceRange[0]}</span>
                  <span className="text-gray-600 font-barlow">£{priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-barlow-condensed font-bold text-secondary mb-4">CATEGORIES</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategories.includes(category.id)
                        ? 'bg-primary/10 border border-primary/20'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="w-5 h-5 text-secondary" />
                      <span className="font-barlow text-secondary">{category.name}</span>
                    </div>
                    <span className="text-gray-500 font-barlow text-sm">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Condition */}
            <div>
              <h4 className="font-barlow-condensed font-bold text-secondary mb-4">CONDITION</h4>
              <div className="space-y-2">
                {conditions.map((condition) => (
                  <label key={condition.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                      <span className="font-barlow text-secondary">{condition.name}</span>
                    </div>
                    <span className="text-gray-500 font-barlow text-sm">{condition.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div>
              <h4 className="font-barlow-condensed font-bold text-secondary mb-4">STOCK STATUS</h4>
              <div className="space-y-2">
                {stockStatus.map((status) => (
                  <label key={status.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                      <span className="font-barlow text-secondary">{status.name}</span>
                    </div>
                    <span className="text-gray-500 font-barlow text-sm">{status.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t">
              <button
                onClick={clearFilters}
                className="w-full py-3 text-center text-secondary hover:text-primary font-barlow-condensed font-bold transition-colors"
              >
                Clear All Filters
              </button>
              <button className="w-full btn-primary">
                Apply Filters
              </button>
              
              {showMobileFilters && (
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full btn-secondary mt-4"
                >
                  View Results
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}