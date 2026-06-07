"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useT } from "@/lib/lang-context"

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQPage() {
  const { t } = useT()
  const [expandedId, setExpandedId] = useState<string | null>("0")

  const faqs: FAQItem[] = [
    {
      id: "0",
      question: t("faq_q1") || "Что такое нумерология?",
      answer: t("faq_a1") || "Нумерология — это древняя наука о числах, которая раскрывает скрытые закономерности в судьбе человека. Через дату рождения и имя можно узнать жизненный путь, предназначение и ключевые циклы жизни."
    },
    {
      id: "1",
      question: t("faq_q2") || "Как работают консультации?",
      answer: t("faq_a2") || "Консультации проводятся индивидуально. Я анализирую вашу нумерологическую матрицу и даю практические рекомендации для гармонизации жизни, отношений и достижения целей."
    },
    {
      id: "2",
      question: t("faq_q3") || "Какова длительность курсов?",
      answer: t("faq_a3") || "Курсы разделены на модули с гибким графиком. Вы можете проходить их в своем темпе, с доступом к видео и материалам на неограниченный период."
    },
    {
      id: "3",
      question: t("faq_q4") || "Есть ли гарантия результатов?",
      answer: t("faq_a4") || "Нумерология — это инструмент самопознания. Результаты зависят от вашей открытости и применения рекомендаций. Большинство клиентов замечают положительные изменения уже в течение первого месяца."
    },
    {
      id: "4",
      question: t("faq_q5") || "Можно ли пройти тестирование?",
      answer: t("faq_a5") || "Да, предлагаем бесплатное тестирование, которое дает начальное представление о вашей нумерологической карте. Это хороший способ узнать, подходит ли вам работа с нумерологией."
    },
    {
      id: "5",
      question: t("faq_q6") || "Какие способы оплаты доступны?",
      answer: t("faq_a6") || "Мы принимаем основные платежные системы: карты Visa/Mastercard, электронные кошельки и переводы. Для консультаций также доступна рассрочка."
    }
  ]

  return (
    <main className="min-h-screen bg-background pt-20 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="bg-gradient-to-b from-gold via-gold/80 to-gold/60 bg-clip-text text-transparent">
              {t("faq_title") || "Часто задаваемые вопросы"}
            </span>
          </h1>
          <p className="text-lg text-cream/70 max-w-xl mx-auto">
            {t("faq_subtitle") || "Найди ответы на вопросы о нумерологии, курсах и консультациях"}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-colors"
            >
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-charcoal/40 hover:bg-charcoal/60 transition-colors text-left"
              >
                <span className="text-lg font-serif text-cream font-medium pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gold" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-charcoal/20"
                  >
                    <div className="px-6 py-4 text-cream/70 leading-relaxed border-t border-gold/10">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-lg border border-gold/20 bg-gradient-to-r from-gold/5 to-purple-dark/5 text-center"
        >
          <p className="text-xl text-cream mb-6">
            {t("faq_more_questions") || "Остались вопросы?"}
          </p>
          <a
            href="/consultations"
            className="inline-block px-6 py-3 bg-gold text-charcoal font-semibold rounded-lg hover:bg-gold-light transition-colors"
          >
            {t("nav_consultations") || "Консультация"}
          </a>
        </motion.div>
      </div>
    </main>
  )
}
