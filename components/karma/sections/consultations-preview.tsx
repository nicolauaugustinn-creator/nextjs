"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Video, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const consultations = [
  {
    id: "numerology",
    title: "Нумерологический расклад",
    description: "Полный анализ вашей кармической карты по дате рождения. Узнайте свое предназначение, сильные стороны и кармические задачи.",
    duration: "90 минут",
    price: 60,
    features: ["Анализ даты рождения", "Кармическая карта", "Рекомендации по развитию"],
    popular: true
  },
  {
    id: "compatibility",
    title: "Совместимость пары",
    description: "Глубокий анализ кармической связи между партнерами. Понимание динамики отношений и путей гармонизации.",
    duration: "120 минут",
    price: 120,
    features: ["Анализ обоих партнеров", "Карта совместимости", "Работа с кармой пары"],
    popular: false
  },
  {
    id: "business",
    title: "Бизнес-консультация",
    description: "Нумерологический анализ для бизнеса: выбор дат, партнеров, названий и стратегий развития.",
    duration: "60 минут",
    price: 100,
    features: ["Анализ бизнес-энергий", "Благоприятные периоды", "Стратегия роста"],
    popular: false
  }
]

export function ConsultationsPreview() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-burgundy blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Консультации
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream">
              Персональная работа
            </h2>
          </div>
          <Link href="/consultations" className="mt-4 md:mt-0">
            <Button
              variant="ghost"
              className="text-gold hover:text-gold-light group"
            >
              Все услуги
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {item.popular && (
                <div className="absolute -top-3 left-6 z-10">
                  <span className="bg-gold text-charcoal text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Популярное
                  </span>
                </div>
              )}
              
              <div className={`glass-card p-8 h-full flex flex-col ${item.popular ? 'border-gold/30' : ''}`}>
                <h3 className="font-serif text-2xl text-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-cream/60 text-sm mb-6 flex-grow">
                  {item.description}
                </p>

                <div className="space-y-3 mb-6">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-cream/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-cream/60 text-sm">
                    <Clock className="w-4 h-4" />
                    {item.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-cream/40" />
                    <MessageCircle className="w-4 h-4 text-cream/40" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-gold">
                    €{item.price}
                  </span>
                  <Link href={`/consultations#${item.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gold/30 text-gold hover:bg-gold/10"
                    >
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
