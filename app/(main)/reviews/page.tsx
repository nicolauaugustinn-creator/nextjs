"use client"

import { motion } from "framer-motion"
import { useT } from "@/lib/lang-context"
import { ReviewsGallery } from "./reviews-gallery"

export default function ReviewsPage() {
  const { t } = useT()

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
                <p className="font-serif text-3xl text-gold mb-1">19+</p>
                <p className="text-sm">{t("page_reviews_total")}</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gold mb-1">5.0</p>
                <p className="text-sm">{t("page_reviews_rating")}</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gold mb-1">100%</p>
                <p className="text-sm">{t("page_reviews_recommend")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Gallery Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ReviewsGallery />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-cream/70 text-lg mb-8">
              Join thousands of people who have transformed their lives through KARMANUMBERS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/courses"
                className="px-8 py-3 bg-gold text-background rounded-lg font-semibold hover:bg-gold-light transition-colors"
              >
                Explore Courses
              </a>
              <a 
                href="/dashboard"
                className="px-8 py-3 border border-gold text-gold rounded-lg font-semibold hover:bg-gold/10 transition-colors"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
