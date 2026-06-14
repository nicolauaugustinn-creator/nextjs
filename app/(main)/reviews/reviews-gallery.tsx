'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

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
  const [imageDimensions, setImageDimensions] = useState<Record<number, { width: number; height: number }>>({})
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'ArrowLeft') previousImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const handleImageLoad = (id: number, imgElement: HTMLImageElement) => {
    setImageDimensions(prev => ({
      ...prev,
      [id]: { width: imgElement.naturalWidth, height: imgElement.naturalHeight }
    }))
    setLoadedImages(prev => new Set([...prev, id]))
  }

  const previousImage = () => {
    setSelectedImage(prev => (prev === 1 ? reviewImages.length : (prev || 1) - 1))
  }

  const nextImage = () => {
    setSelectedImage(prev => (prev === reviewImages.length ? 1 : (prev || 1) + 1))
  }

  const currentImageIndex = selectedImage ? selectedImage - 1 : 0

  // Calculate max height for masonry layout normalization
  const avgAspectRatio = 9 / 16
  const maxImageHeight = 400

  return (
    <>
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-2">
          Real Client Testimonials
        </h2>
        <p className="text-cream/60">
          {reviewImages.length} authentic reviews from our community
        </p>
      </div>

      {/* 3-Column Grid with Natural Image Sizes */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {reviewImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              transition={{ delay: (index % 3) * 0.1 }}
              onClick={() => setSelectedImage(image.id)}
              className="group relative rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 focus:outline-none focus:ring-2 focus:ring-gold/50"
            >
              {/* Loading Skeleton */}
              {!loadedImages.has(image.id) && (
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-charcoal to-charcoal-dark animate-pulse" />
              )}

              {/* Image */}
              <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onLoad={(result) => {
                    handleImageLoad(image.id, result.currentTarget)
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Overlay with Eye Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40">
                  <Eye className="w-6 h-6 text-gold" />
                </div>
              </div>

              {/* Index Badge */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-gold/30 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.id}/{reviewImages.length}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden"
          onClick={(e) => e.target === e.currentTarget && setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-cream/60 hover:text-gold transition-colors z-10 rounded-lg hover:bg-white/5"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Image Container */}
            <div className="relative flex-1 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm border border-gold/20">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  key={selectedImage}
                  src={reviewImages[currentImageIndex].src}
                  alt={reviewImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  priority
                  quality={95}
                />
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-6 flex items-center justify-between gap-4">
              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={previousImage}
                className="p-3 rounded-lg bg-gold/10 hover:bg-gold hover:text-background border border-gold/30 hover:border-gold transition-all duration-200"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </motion.button>

              {/* Counter and Progress */}
              <div className="flex-1">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gold">
                    {selectedImage}
                  </span>
                  <span className="text-sm text-cream/50">/</span>
                  <span className="text-sm font-medium text-cream/70">
                    {reviewImages.length}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="h-1 bg-gold/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(selectedImage / reviewImages.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-r from-gold to-gold-light"
                  />
                </div>
              </div>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextImage}
                className="p-3 rounded-lg bg-gold/10 hover:bg-gold hover:text-background border border-gold/30 hover:border-gold transition-all duration-200"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            {/* Keyboard Hint */}
            <div className="mt-4 text-center text-xs text-cream/40">
              Use arrow keys or click buttons to navigate • Press ESC to close
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
