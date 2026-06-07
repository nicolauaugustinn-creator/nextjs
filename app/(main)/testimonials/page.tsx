"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { GlassCard } from "@/components/karma/glass-card"
import { useT } from "@/lib/lang-context"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Katja Bodrova",
    role: "Student",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-katja-bw-A454cR3UL6M3WNhbmPaGDehoATzLXf.jpeg",
    rating: 5,
    text: "Валентина добрый день. Подскажите пожалуйста про групповое обучение. Вы очень классная. Смотрю вас в тик токе. Почти все видео просмотрела с самого начала. Очень нравится ваша подача.",
    date: "July 2024"
  },
  {
    id: 2,
    name: "Stella",
    role: "Client",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-stella-03eFYwGAppF2GbqQrXXzuFJ0Q2wQyl.jpeg",
    rating: 5,
    text: "Мое желание познать нумерологию непокидает меня несмотря на то что в мае месяце уже есть планы, но я очень постарюсь все изучить и преуспеть в этом учении, с Божей и вашей помощью.",
    date: "May 2024"
  },
  {
    id: 3,
    name: "Kristina Götz",
    role: "Student",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-kristina-w0oimX9GaTI0LU7XX34yHCbCodMuio.jpeg",
    rating: 5,
    text: "Я считаю, что если тебе нравится чья-то работа, то нужно обязательно об этом сказать. Мне всегда так приятно благодаря твоему контенту.",
    date: "July 2024"
  },
  {
    id: 4,
    name: "Valentine 777",
    role: "Consultation Client",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-valentine-gMphd3s7SlMdA1RPqZ2aHoj4QyXEom.jpeg",
    rating: 5,
    text: "И я тебе обажаю, ты крутышка, красотка, настоящий магнит и просто шикарная леди!!! Ты самая знаешь какая ты классная, твое сочетание Материальное - Духовное просто бомбическое.",
    date: "July 2024"
  }
]

export default function TestimonialsPage() {
  const { t } = useT()

  return (
    <main className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">
            {t("testimonials_title")}
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            {t("testimonials_subtitle")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col">
                {/* Header with avatar and rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-cream font-medium text-sm">{testimonial.name}</h3>
                      <p className="text-cream/50 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-cream/80 text-sm leading-relaxed mb-4 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Date */}
                <p className="text-cream/40 text-xs">{testimonial.date}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl text-gold mb-3">
              {t("testimonials_cta_title")}
            </h2>
            <p className="text-cream/70 mb-6">
              {t("testimonials_cta_subtitle")}
            </p>
            <a
              href="/consultations"
              className="inline-block px-8 py-3 bg-gold text-charcoal rounded-lg font-medium hover:bg-gold-light transition-colors"
            >
              {t("nav_consultation_btn")}
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </main>
  )
}
