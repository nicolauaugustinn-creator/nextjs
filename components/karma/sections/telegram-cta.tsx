"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, Users, Gift, Star } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Gift,
    title: "Бесплатные материалы",
    description: "Медитации, практики и мини-курсы"
  },
  {
    icon: Star,
    title: "Эксклюзивный контент",
    description: "Разборы и инсайты только для подписчиков"
  },
  {
    icon: Users,
    title: "Живое общение",
    description: "Ответы на вопросы и поддержка"
  }
]

export function TelegramCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-charcoal-light/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Telegram-канал
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Присоединяйтесь к{" "}
              <span className="text-gold">сообществу</span>
            </h2>
            <p className="text-cream/70 mb-8">
              Получайте ежедневные инсайты, бесплатные практики и будьте в курсе 
              всех новостей и специальных предложений
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-cream font-medium">{benefit.title}</h4>
                    <p className="text-cream/60 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="https://t.me/karmanumbers" target="_blank">
              <Button
                size="lg"
                className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white"
              >
                <Send className="mr-2 w-5 h-5" />
                Подписаться на канал
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-burgundy flex items-center justify-center">
                  <Send className="w-8 h-8 text-cream" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-cream">KARMANUMBERS</h3>
                  <p className="text-cream/60 text-sm">@karmanumbers</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-cream/70">Подписчиков</span>
                  <span className="text-gold font-medium">12 500+</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-cream/70">Публикаций</span>
                  <span className="text-gold font-medium">500+</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-cream/70">Активность</span>
                  <span className="text-gold font-medium">Ежедневно</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
