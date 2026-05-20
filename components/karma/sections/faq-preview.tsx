"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "Что такое кармическая нумерология?",
    answer: "Кармическая нумерология — это древняя система знаний, которая раскрывает связь между числами вашей даты рождения и вашим жизненным предназначением. Она помогает понять кармические задачи, сильные стороны и потенциал развития."
  },
  {
    question: "Как проходит консультация?",
    answer: "Консультация проходит онлайн через Zoom или Telegram. Перед встречей я готовлю полный расчёт вашей кармической карты. Во время сессии мы разбираем все аспекты и вы получаете практические рекомендации."
  },
  {
    question: "Нужна ли подготовка к консультации?",
    answer: "Вам нужно только точно знать свою дату рождения и время рождения (если известно). Также полезно подготовить вопросы, которые вас волнуют — это поможет сделать консультацию максимально полезной."
  },
  {
    question: "Как быстро я получу доступ к курсу после оплаты?",
    answer: "Доступ к курсу открывается автоматически сразу после оплаты. Вы получите письмо с данными для входа в личный кабинет, где будут доступны все материалы курса."
  }
]

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">
            Частые вопросы
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span className="font-serif text-lg text-cream pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-cream/70">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/faq">
              <Button
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                Все вопросы и ответы
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
