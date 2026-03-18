'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function Pagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 23

  const pages = []
  for (let i = 1; i <= Math.min(5, totalPages); i++) {
    pages.push(i)
  }

  if (totalPages > 5 && currentPage > 3) {
    pages.splice(0, 5)
    pages.push(currentPage - 1, currentPage, currentPage + 1)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-gray-600 font-barlow">
        Showing page {currentPage} of {totalPages}
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-lg font-barlow font-bold transition-colors ${
              currentPage === page
                ? 'bg-primary text-white'
                : 'border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}
        
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span className="px-2">...</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-10 h-10 rounded-lg font-barlow font-bold border border-gray-200 hover:bg-gray-50 ${
                currentPage === totalPages ? 'bg-primary text-white' : ''
              }`}
            >
              {totalPages}
            </button>
          </>
        )}
        
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-gray-600 font-barlow">Items per page:</span>
        <select className="input-field w-auto">
          <option>24</option>
          <option>48</option>
          <option>96</option>
        </select>
      </div>
    </div>
  )
}