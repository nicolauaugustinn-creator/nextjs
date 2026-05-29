"use client"

import { motion } from "framer-motion"
import { Clock, Video, MessageCircle, Star, Check, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const consultations = [
  {
    id: "numerology",
    title: "Нумерологический расклад",
    subtitle: "Базовая консультация",
    description: "Полный анализ вашей кармической карты по дате рождения. Узнайте свое предназначение, сильные стороны, кармические задачи и благоприятные периоды.",
    duration: "90 минут",
    price: 15000,
    features: [
      "Расчёт числа судьбы и жизненного пути",
      "Анализ кармических задач",
      "Определение сильных и слабых сторон",
      "Благоприятные периоды года",
      "Рекомендации по развитию",
      "Запись консультации"
    ],
    popular: true
  },
  {
    id: "compatibility",
    title: "Совместимость пары",
    subtitle: "Консультация для двоих",
    description: "Глубокий анализ кармической связи между партнерами. Понимание динамики отношений, общих задач и путей гармонизации союза.",
    duration: "120 минут",
    price: 25000,
    features: [
      "Анализ карт обоих партнёров",
      "Карта совместимости",
      "Кармические связи между партнёрами",
      "Общие задачи и уроки",
      "Точки роста и конфликтов",
      "Практики для гармонизации"
    ],
    popular: false
  },
  {
    id: "business",
    title: "Бизнес-консультация",
    subtitle: "Для предпринимателей",
    description: "Нумерологический анализ для бизнеса: выбор благоприятных дат для важных решений, анализ партнёров, названий и стратегий развития.",
    duration: "60 минут",
    price: 20000,
    features: [
      "Анализ личных бизнес-энергий",
      "Благоприятные периоды для решений",
      "Совместимость с партнёрами",
      "Анализ названия компании",
      "Стратегия развития",
      "Финансовые периоды года"
    ],
    popular: false
  },
  {
    id: "year",
    title: "Прогноз на год",
    subtitle: "Детальный анализ",
    description: "Подробный прогноз на предстоящий год: ключевые периоды, возможности, предостережения и рекомендации по месяцам.",
    duration: "60 минут",
    price: 12000,
    features: [
      "Общая энергия года",
      "Помесячный прогноз",
      "Благоприятные даты",
      "Периоды для отдыха",
      "Финансовые окна",
      "Личные рекомендации"
    ],
    popular: false
  },
  {
    id: "deep",
    title: "Глубинная проработка",
    subtitle: "Расширенная консультация",
    description: "Максимально детальный анализ с проработкой всех аспектов: карма, предназначение, отношения, финансы, здоровье и духовный путь.",
    duration: "180 минут",
    price: 35000,
    features: [
      "Полный нумерологический расчёт",
      "Карма рода и личная карма",
      "Все сферы жизни детально",
      "Кармические долги и задачи",
      "Медитация и практики",
      "Поддержка в течение месяца"
    ],
    popular: false
  },
  {
    id: "vip",
    title: "VIP-сопровождение",
    subtitle: "Персональная работа",
    description: "Месяц индивидуальной работы: еженедельные консультации, постоянная поддержка, практики и глубокая трансформация.",
    duration: "1 месяц",
    price: 100000,
    features: [
      "4 консультации по 90 минут",
      "Чат-поддержка 24/7",
      "Индивидуальные практики",
      "Ежедневные рекомендации",
      "Работа с запросами",
      "Полная трансформация"
    ],
    popular: false
  }
]

const process = [
  {
    step: 1,
    title: "Выберите формат",
    description: "Определитесь с типом консультации, которая подходит под ваш запрос"
  },
  {
    step: 2,
    title: "Оставьте заявку",
    description: "Заполните форму или напишите в Telegram для записи на консультацию"
  },
  {
    step: 3,
    title: "Согласуем время",
    description: "Я свяжусь с вами для выбора удобного времени и уточнения деталей"
  },
  {
    step: 4,
    title: "Консультация",
    description: "Проводим встречу онлайн через Zoom, вы получаете запись и материалы"
  }
]

export default function ConsultationsPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Персональная работа
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              Консультации
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              Индивидуальные сессии для глубокого понимания себя, своего предназначения 
              и жизненного пути через призму кармической нумерологии
            </p>

            <div className="flex items-center justify-center gap-6 text-cream/60">
              <span className="flex items-center gap-2">
                <Video className="w-5 h-5 text-gold" />
                Онлайн через Zoom
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-gold" />
                Поддержка в Telegram
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultations Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultations.map((item, index) => (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative scroll-mt-32"
              >
                {item.popular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="bg-gold text-charcoal text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Популярное
                    </span>
                  </div>
                )}

                <div className={`glass-card p-6 h-full flex flex-col ${item.popular ? "border-gold/30" : ""}`}>
                  <div className="mb-4">
                    <span className="text-gold text-xs tracking-wider uppercase">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-cream mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-cream/60 text-sm mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-cream/50 text-sm mb-6">
                    <Clock className="w-4 h-4" />
                    {item.duration}
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-cream/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-3xl text-gold">
                        {item.price.toLocaleString()} ₽
                      </span>
                    </div>
                    <Link href="https://t.me/karmanumbers" target="_blank">
                      <Button className="w-full bg-gold text-charcoal hover:bg-gold-light">
                        Записаться
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Как это работает
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">
              Процесс записи
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 border border-gold/30">
                  <span className="font-serif text-2xl text-gold">{item.step}</span>
                </div>
                <h3 className="font-serif text-lg text-cream mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center"
          >
            <Calendar className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              Не уверены, какая консультация вам нужна?
            </h2>
            <p className="text-cream/70 mb-8">
              Напишите мне в Telegram, расскажите о вашем запросе, и я помогу 
              подобрать подходящий формат работы
            </p>
            <Link href="https://t.me/karmanumbers" target="_blank">
              <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
                Написать в Telegram
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
