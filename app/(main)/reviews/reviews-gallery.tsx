'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X, Eye, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useT } from '@/lib/lang-context'

interface ReviewImage {
  id: number
  src: string
  alt: string
}

// Start from review-02.jpg (skip the first one with Russian text)
const reviewImages: ReviewImage[] = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/reviews-images/review-${String(i + 2).padStart(2, '0')}.jpg`,
  alt: `Client testimonial ${i + 1}`,
}))

export function ReviewsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [imageDimensions, setImageDimensions] = useState<{ [key: number]: { width: number; height: number } }>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const { t } = useT()

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

  // Handle touch/swipe gestures on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!selectedImage) return
    if (touchStart - touchEnd > 50) {
      nextImage() // Swiped left
    }
    if (touchEnd - touchStart > 50) {
      previousImage() // Swiped right
    }
  }

  const handleImageLoad = (id: number, width: number, height: number) => {
    setLoadedImages(prev => new Set([...prev, id]))
    setImageDimensions(prev => ({ ...prev, [id]: { width, height } }))
  }

  const previousImage = () => {
    setSelectedImage(prev => (prev === 1 ? reviewImages.length : (prev || 1) - 1))
  }

  const nextImage = () => {
    setSelectedImage(prev => (prev === reviewImages.length ? 1 : (prev || 1) + 1))
  }

  const currentImageIndex = selectedImage ? selectedImage - 1 : 0

  // Parallax effect for scroll
  const y = useTransform(scrollY, [0, 1000], [0, 50])

  return (
    <>
      {/* Title with Scroll Indicator */}
      <div className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-2">
            {t('gallery_title')}
          </h2>
          <p className="text-cream/60 mb-4">
            {reviewImages.length} {t('gallery_subtitle').replace('{{ count }}', '')}
          </p>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown className="w-5 h-5 text-gold/50" />
        </motion.div>
      </div>

      {/* Masonry Grid - 2 cols on mobile, 3 on desktop */}
      <motion.div 
        ref={containerRef}
        style={{ y }}
        className="w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 auto-rows-max">
          {reviewImages.map((image, index) => {
            const columnIndex = index % 3
            const rowIndex = Math.floor(index / 3)
            const staggerDelay = columnIndex * 0.1 + (rowIndex % 2) * 0.05

            return (
              <motion.button
                key={image.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    delay: staggerDelay,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, margin: '50px' }}
                onClick={() => setSelectedImage(image.id)}
                className="group relative rounded-lg md:rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 focus:outline-none focus:ring-2 focus:ring-gold/50 active:shadow-gold/40"
              >
                {/* Loading Skeleton */}
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-charcoal to-charcoal-dark animate-pulse z-10" />
                )}

                {/* Image Container */}
                <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement
                      handleImageLoad(image.id, img.naturalWidth, img.naturalHeight)
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Content - Eye Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="p-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40"
                  >
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                  </motion.div>
                </div>

                {/* Index Badge */}
                <div className="absolute top-2 left-2 md:top-3 md:left-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-gold/30 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.id}/{reviewImages.length}
                </div>

                {/* Mobile: Tap Indicator */}
                <div className="absolute bottom-2 left-2 md:hidden text-xs text-gold/60 font-medium">
                  {t('gallery_tap_to_open')}
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Lightbox Modal with Swipe Support */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-4 overflow-y-auto"
            onClick={(e) => e.target === e.currentTarget && setSelectedImage(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl flex flex-col my-auto"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 md:-top-12 right-0 md:right-2 p-2 text-cream/60 hover:text-gold transition-colors z-10 rounded-lg hover:bg-white/5"
                aria-label="Close"
              >
                <X size={28} />
              </motion.button>

              {/* Image Container */}
              <motion.div 
                className="relative rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm border border-gold/20 w-full"
                layoutId="lightbox-image"
              >
                <div className="relative w-full flex items-center justify-center bg-black/80">
                  <AnimatePresence mode="wait">
                    {selectedImage && (
                      <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-h-[70vh] md:max-h-[80vh]"
                      >
                        <img
                          src={reviewImages[currentImageIndex].src}
                          alt={reviewImages[currentImageIndex].alt}
                          className="w-full h-full object-contain"
                          style={{ maxHeight: '70vh' }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Swipe Hint on Mobile */}
                <motion.div
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-3 left-1/2 transform -translate-x-1/2 md:hidden text-xs text-gold/70 font-medium px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-gold/30"
                >
                  {t('gallery_swipe_navigate')}
                </motion.div>
              </motion.div>

              {/* Bottom Controls */}
              <div className="mt-4 md:mt-6 flex items-center justify-between gap-3 md:gap-4">
                {/* Previous Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={previousImage}
                  className="p-2 md:p-3 rounded-lg bg-gold/10 hover:bg-gold hover:text-background border border-gold/30 hover:border-gold transition-all duration-200 flex-shrink-0"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </motion.button>

                {/* Counter and Progress */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                    <span className="text-xs md:text-sm font-medium text-gold">
                      {selectedImage}
                    </span>
                    <span className="text-xs md:text-sm text-cream/50">/</span>
                    <span className="text-xs md:text-sm font-medium text-cream/70">
                      {reviewImages.length}
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-1 bg-gold/20 rounded-full overflow-hidden">
                    <motion.div
                      key={selectedImage}
                      initial={{ width: 0 }}
                      animate={{ width: `${(selectedImage / reviewImages.length) * 100}%` }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-gold via-gold-light to-gold"
                    />
                  </div>
                </div>

                {/* Next Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextImage}
                  className="p-2 md:p-3 rounded-lg bg-gold/10 hover:bg-gold hover:text-background border border-gold/30 hover:border-gold transition-all duration-200 flex-shrink-0"
                  aria-label="Next"
                >
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </motion.button>
              </div>

              {/* Keyboard & Gesture Hints */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-3 md:mt-4 text-center text-xs text-cream/40"
              >
                <p className="hidden md:block">{t('gallery_arrow_navigate')}</p>
                <p className="md:hidden">{t('gallery_swipe_navigate')} • {t('gallery_tap_close')}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
