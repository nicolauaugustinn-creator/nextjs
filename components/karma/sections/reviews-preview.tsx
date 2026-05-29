"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { reviews } from "@/data/reviews"
import Link from "next/link"

export function ReviewsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const featuredReviews = reviews.filter(r => r.featured).slice(0, 5)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = featuredReviews.length - 1
      if (nextIndex >= featuredReviews.length) nextIndex = 0
      return nextIndex
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentReview = featuredReviews[currentIndex]

  if (!currentReview) return null

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-burgundy blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
            Отзывы
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">
            Истории трансформации
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Реальные истории людей, которые изменили свою жизнь через понимание своего предназначения
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[350px] md:min-h-[300px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <div className="glass-card p-8 md:p-12">
                  <Quote className="w-10 h-10 text-gold/30 mb-6" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < currentReview.rating
                            ? "text-gold fill-gold"
                            : "text-cream/20"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-cream/80 text-lg leading-relaxed mb-6 line-clamp-4">
                    {currentReview.text}
                  </p>

                  <div className="flex items-center gap-4">
                    {currentReview.avatar && (
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30">
                        <img
                          src={currentReview.avatar}
                          alt={currentReview.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-serif text-cream">
                        {currentReview.name}
                      </h4>
                      <p className="text-gold text-sm">{currentReview.service}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="rounded-full border-gold/30 text-gold hover:bg-gold/10 h-10 w-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {featuredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold w-8"
                      : "bg-cream/20 hover:bg-cream/40 w-2"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="rounded-full border-gold/30 text-gold hover:bg-gold/10 h-10 w-10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="text-center mt-10">
            <Link href="/reviews">
              <Button
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                Все отзывы
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
