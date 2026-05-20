"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Users, Sun, Moon, Star, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const retreatFeatures = [
  "7 дней глубокой трансформации",
  "Ежедневные медитации на рассвете и закате",
  "Персональный нумерологический расчёт",
  "Групповые практики и церемонии",
  "Здоровое питание (вегетарианское меню)",
  "Проживание в эко-отеле",
  "Индивидуальные консультации",
  "Материалы для домашней практики"
]

const schedule = [
  {
    icon: Sun,
    time: "06:00",
    title: "Утренняя медитация",
    description: "Встречаем рассвет в медитации и устанавливаем намерение на день"
  },
  {
    icon: Star,
    time: "08:00",
    title: "Завтрак и свободное время",
    description: "Питательный завтрак и время для личных практик"
  },
  {
    icon: Star,
    time: "10:00",
    title: "Теоретический блок",
    description: "Изучение кармической нумерологии и её применение"
  },
  {
    icon: Star,
    time: "13:00",
    title: "Обед и отдых",
    description: "Время для интеграции полученных знаний"
  },
  {
    icon: Star,
    time: "16:00",
    title: "Практический блок",
    description: "Групповые упражнения и индивидуальная работа"
  },
  {
    icon: Moon,
    time: "19:00",
    title: "Ужин и вечерняя практика",
    description: "Завершаем день благодарностью и медитацией"
  }
]

const testimonials = [
  {
    text: "Этот ретрит изменил мою жизнь. Я наконец поняла своё предназначение и обрела внутренний покой.",
    name: "Анна К.",
    location: "Москва"
  },
  {
    text: "Невероятная атмосфера, глубокие практики и удивительные люди. Рекомендую всем!",
    name: "Михаил С.",
    location: "Санкт-Петербург"
  }
]

export default function RetreatPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5429424431718667000-J2NBj5HK3zRK63nMiAe6ZkYCbU0JnB.jpg"
            alt="Retreat"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Трансформационный ретрит
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              Путь к себе
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              7 дней глубокого погружения в практики кармической нумерологии, 
              медитации и самопознания в окружении природы
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-cream/70">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                Бали, Индонезия
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                15-22 сентября 2024
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                До 12 участников
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#booking">
                <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
                  Забронировать место
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#program">
                <Button size="lg" variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                  Программа ретрита
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                Что включено
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-8">
                Полное погружение в практику
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {retreatFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-cream/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032188-LP5BsztskUQgp6KkclUghUGWWuUx1H.jpg"
                  alt="Retreat atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20 mt-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5391083623739495324-MVJz8tUaemEYnN0HJJqJ44k7u69Fs1.jpg"
                  alt="Meditation practice"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="program" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Распорядок дня
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">
              Типичный день на ретрите
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20" />

              {schedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 mb-8"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 z-10">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <span className="text-gold font-medium">{item.time}</span>
                    <h3 className="font-serif text-xl text-cream mt-1 mb-2">{item.title}</h3>
                    <p className="text-cream/60 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Отзывы
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">
              Что говорят участники
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <p className="text-cream/80 text-lg mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="text-cream font-medium">{testimonial.name}</p>
                  <p className="text-gold text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                    Бронирование
                  </span>
                  <h2 className="font-serif text-3xl text-cream mb-6">
                    Забронируйте место на ретрите
                  </h2>
                  <p className="text-cream/70 mb-6">
                    Количество мест ограничено. Оставьте заявку, и мы свяжемся с вами 
                    для обсуждения деталей.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-cream/70">Даты</span>
                      <span className="text-cream">15-22 сентября 2024</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-cream/70">Локация</span>
                      <span className="text-cream">Бали, Индонезия</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-cream/70">Осталось мест</span>
                      <span className="text-gold">4 из 12</span>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 bg-burgundy/10 border-burgundy/30">
                  <div className="text-center mb-6">
                    <span className="text-cream/60 text-sm">Стоимость участия</span>
                    <div className="font-serif text-4xl text-gold mt-2">
                      250 000 ₽
                    </div>
                    <span className="text-cream/50 text-sm">включая проживание и питание</span>
                  </div>

                  <Button className="w-full bg-gold text-charcoal hover:bg-gold-light mb-4" size="lg">
                    Оставить заявку
                  </Button>

                  <p className="text-cream/50 text-xs text-center">
                    Предоплата 30% для бронирования места
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
