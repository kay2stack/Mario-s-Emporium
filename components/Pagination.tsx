'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
}

export function Pagination({ currentPage = 1, totalPages = 1, onPageChange }: PaginationProps) {
  // If only 1 page, don't show pagination
  if (totalPages <= 1) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500 font-nunito text-sm">Showing all products</p>
      </div>
    )
  }

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page)
    }
    // Scroll to top of products
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Generate page numbers to show
  const getVisiblePages = () => {
    const pages: number[] = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i)
        pages.push(-1) // ellipsis
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push(-1) // ellipsis
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push(-1) // ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
        pages.push(-2) // ellipsis
        pages.push(totalPages)
      }
    }
    return pages
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border-2 border-gray-200 hover:border-mario-red hover:bg-mario-red/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        
        {/* Page Numbers */}
        {getVisiblePages().map((page, idx) => (
          page < 0 ? (
            <span key={`ellipsis-${idx}`} className="px-1 sm:px-2 text-gray-400">...</span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-fredoka text-sm sm:text-base transition-all ${
                currentPage === page
                  ? 'bg-mario-red text-white border-2 border-mario-red-dark'
                  : 'border-2 border-gray-200 hover:border-mario-red hover:text-mario-red'
              }`}
            >
              {page}
            </button>
          )
        ))}
        
        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border-2 border-gray-200 hover:border-mario-red hover:bg-mario-red/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
      
      {/* Page indicator for mobile */}
      <p className="text-gray-500 font-nunito text-sm">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  )
}