"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Quote, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { reviews } from "@/data/reviews"
import Link from "next/link"
import { useT } from "@/lib/lang-context"

export default function ReviewsPage() {
  const { t, lang } = useT()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { key: "all", label: t("common_all") },
    { key: "consultation", label: t("nav_consultations") },
    { key: "course", label: t("nav_courses") },
    { key: "meditation", label: t("nav_meditations") },
    { key: "retreat", label: t("nav_retreat") },
  ]

  const filteredReviews = reviews.filter((review) => {
    if (selectedCategory === "all") return true
    return review.category === selectedCategory
  })

  const categoryLabel = (cat: string) => {
    const map: Record<string, string> = {
      consultation: t("nav_consultations"),
      course: t("nav_courses"),
      meditation: t("nav_meditations"),
      retreat: t("nav_retreat"),
    }
    return map[cat] ?? cat
  }

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("reviews_tag")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              {t("page_reviews_title")}
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              {t("reviews_subtitle")}
            </p>
            <div className="flex items-center justify-center gap-8 text-cream/60">
              <div className="text-center">
                <p className="font-serif text-3xl text-gold mb-1">{reviews.length}+</p>
                <p className="text-sm">{t("page_reviews_total")}</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gold mb-1">4.9</p>
                <p className="text-sm">{t("page_reviews_rating")}</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gold mb-1">98%</p>
                <p className="text-sm">{t("page_reviews_recommend")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={selectedCategory === cat.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.key)}
                className={
                  selectedCategory === cat.key
                    ? "bg-gold text-charcoal hover:bg-gold-light"
                    : "border-gold/30 text-gold hover:bg-gold/10"
                }
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6"
              >
                <Quote className="w-8 h-8 text-gold/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-gold fill-gold" : "text-cream/20"}`}
                    />
                  ))}
                </div>

                {review.text && (
                  <p className="text-cream/80 mb-6 line-clamp-5">
                    {typeof review.text === 'string' 
                      ? review.text 
                      : (review.text[lang as keyof typeof review.text] || review.text.en || review.text.ru)}
                  </p>
                )}
                {review.screenshotImage && (
                  <div className="mb-6 rounded-lg overflow-hidden border border-gold/20">
                    <img
                      src={review.screenshotImage}
                      alt={t("review_screenshot")}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {review.clientAvatar ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                      <img
                        src={review.clientAvatar}
                        alt={review.clientName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="font-serif text-lg text-gold">
                        {review.clientName.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-cream font-medium">{review.clientName}</p>
                    <p className="text-gold text-sm">{categoryLabel(review.category)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center"
          >
            <MessageSquare className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              {t("page_reviews_leave")}
            </h2>
            <p className="text-cream/70 mb-8">
              {t("page_reviews_leave_desc")}
            </p>
            <Link href="https://t.me/karmanumbers" target="_blank">
              <Button className="bg-gold text-charcoal hover:bg-gold-light">
                {t("page_reviews_write")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
