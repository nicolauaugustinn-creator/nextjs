import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Clock, BookOpen, Play, Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { courses } from "@/data/courses"
import Link from "next/link"
import CourseModulesClient from "./course-modules-client"

interface CoursePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params
  
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    notFound()
  }

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Link href="/courses" className="text-cream/60 hover:text-gold transition-colors">
                  Курсы
                </Link>
                <span className="text-cream/40">/</span>
                <span className="text-gold">{course.category}</span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl text-cream mb-6 leading-tight">
                {course.title}
              </h1>

              <p className="text-cream/70 text-lg mb-8">
                {course.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8 text-cream/60">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gold" />
                  {course.modules?.length || 0} модулей
                </span>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5391083623739495321-KGl47fLM4bM3P1E6FkJFtLB7HR9VBV.jpg"
                    alt="Валентина Черняк"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-cream font-medium">Валентина Черняк</p>
                  <p className="text-cream/60 text-sm">Автор курса</p>
                </div>
              </div>

              <div className="space-y-3">
                {course.benefits?.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-cream/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-32"
            >
              <div className="glass-card overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-charcoal ml-1" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="font-serif text-4xl text-gold">
                      €{course.price?.toLocaleString() || "0"}
                    </span>
                    {course.originalPrice && (
                      <span className="text-cream/40 line-through text-xl">
                        €{course.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <Button className="w-full bg-gold text-charcoal hover:bg-gold-light mb-4" size="lg">
                    Купить курс
                  </Button>

                  <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10" size="lg">
                    Попробовать бесплатно
                  </Button>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-cream/60">Доступ</span>
                      <span className="text-cream">Навсегда</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-cream/60">Формат</span>
                      <span className="text-cream">Видео + PDF</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-cream/60">Поддержка</span>
                      <span className="text-cream">Telegram-чат</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      {course.modules && (
        <CourseModulesClient modules={course.modules} />
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Готовы начать обучение?
            </h2>
            <p className="text-cream/70 mb-8">
              Присоединяйтесь к сотням учеников, которые уже изменили свою жизнь
            </p>
            <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
              Купить курс за €{course.price?.toLocaleString() || "0"}
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
