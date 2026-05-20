"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Mystical background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-burgundy/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Sacred geometry decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg viewBox="0 0 400 400" className="w-[600px] h-[600px]">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
          <polygon 
            points="200,50 350,250 50,250" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-gold"
          />
          <polygon 
            points="200,350 50,150 350,150" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-gold"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 flex items-center justify-center"
          >
            <Sparkles className="w-10 h-10 text-gold" />
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
            Готовы узнать свое{" "}
            <span className="text-gold">предназначение</span>?
          </h2>

          <p className="text-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Запишитесь на персональную консультацию и получите глубокий анализ 
            вашей кармической карты по дате рождения
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultations">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold to-gold-light text-charcoal hover:opacity-90 text-lg px-8 py-6 group"
              >
                Записаться на консультацию
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://t.me/karmanumbers" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10 text-lg px-8 py-6"
              >
                Написать в Telegram
              </Button>
            </Link>
          </div>

          <p className="text-cream/40 text-sm mt-8">
            Первичная консультация — бесплатно
          </p>
        </motion.div>
      </div>
    </section>
  )
}
