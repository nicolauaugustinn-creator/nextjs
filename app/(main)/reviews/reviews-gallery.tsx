'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ReviewImage {
  id: number
  src: string
  alt: string
}

const reviewImages: ReviewImage[] = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/reviews-images/review-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Client testimonial ${i + 1}`,
}))

export function ReviewsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const imagesPerPage = 6

  const totalPages = Math.ceil(reviewImages.length / imagesPerPage)
  const currentImages = reviewImages.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  )

  const currentImageIndex = selectedImage ? selectedImage - 1 : 0
  const previousImage = () => {
    setSelectedImage(prev => (prev === 1 ? reviewImages.length : (prev || 1) - 1))
  }
  const nextImage = () => {
    setSelectedImage(prev => (prev === reviewImages.length ? 1 : (prev || 1) + 1))
  }

  return (
    <>
      {/* Image Gallery Grid */}
      <div className="w-full">
        {/* Pagination Info */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">
            {reviewImages.length} Client Testimonials
          </h3>
          <div className="text-sm text-muted-foreground">
            Page {currentPage + 1} of {totalPages}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {currentImages.map(image => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-[9/16] overflow-hidden rounded-lg border border-border/50 hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-lg border border-border hover:border-gold hover:text-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentPage ? 'bg-gold w-6' : 'bg-border hover:bg-gold/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-lg border border-border hover:border-gold hover:text-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>

            {/* Main Image */}
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-black">
              <Image
                src={reviewImages[currentImageIndex].src}
                alt={reviewImages[currentImageIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Controls */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                onClick={previousImage}
                className="p-3 rounded-lg bg-gold/10 hover:bg-gold hover:text-background transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex-1 text-center text-sm text-muted-foreground">
                {selectedImage} / {reviewImages.length}
              </div>

              <button
                onClick={nextImage}
                className="p-3 rounded-lg bg-gold/10 hover:bg-gold hover:text-background transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Keyboard Navigation Info */}
            <div className="mt-4 text-center text-xs text-muted-foreground/60">
              Use arrow keys or buttons to navigate • Press ESC to close
            </div>
          </div>
        </div>
      )}
    </>
  )
}
