"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Calculator, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FreeTestCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy/30 via-transparent to-burgundy/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
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
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 flex items-center justify-center border border-gold/20"
          >
            <Calculator className="w-10 h-10 text-gold" />
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6 leading-tight">
            Бесплатный{" "}
            <span className="text-gold">мини-расчёт</span>
          </h2>

          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            Узнайте своё Число Судьбы и получите краткую характеристику 
            вашего жизненного пути прямо сейчас
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-test">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold to-gold-light text-charcoal hover:opacity-90 text-base px-8 group"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Рассчитать бесплатно
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <p className="text-cream/40 text-sm mt-6">
            Без регистрации, результат мгновенно
          </p>
        </motion.div>
      </div>
    </section>
  )
}
