"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Calendar, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "../glass-card"

const retreatHighlights = [
  { icon: Calendar, text: "3 дня глубокой работы" },
  { icon: Users, text: "Камерная группа" },
  { icon: MapPin, text: "Живой формат" },
  { icon: Sparkles, text: "Полная трансформация" }
]

export function RetreatPreview() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-violet/5" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <GlassCard
          variant="gold"
          className="p-8 md:p-12 lg:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet/5 rounded-full blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                Особое событие
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Retreat
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Погрузитесь в глубокую трансформационную работу в окружении единомышленников. 
                Три дня практик, медитаций и личных разборов, которые изменят вашу жизнь.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {retreatHighlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/retreat">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-background group"
                  >
                    Узнать подробнее
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a
                  href="https://t.me/karmanumbers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    Записаться через Telegram
                  </Button>
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                {/* Video/Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-violet/20 to-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center animate-pulse-glow">
                      <Sparkles className="w-10 h-10 text-gold" />
                    </div>
                    <p className="text-sm text-muted-foreground">Видео: IMG_5159.MOV</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4">
                <GlassCard variant="gold" className="p-4">
                  <p className="text-sm text-gold font-medium">Следующий ретрит</p>
                  <p className="text-lg text-foreground font-serif">Скоро</p>
                </GlassCard>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
