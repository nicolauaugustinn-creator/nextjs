"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, Sparkles, ArrowRight, RotateCcw, Share2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const destinyNumbers: Record<number, { title: string; description: string; traits: string[] }> = {
  1: {
    title: "Лидер",
    description: "Вы рождены вести за собой. Независимость, амбиции и оригинальность — ваши главные черты. Вы способны начинать новые дела и вдохновлять других.",
    traits: ["Независимость", "Амбициозность", "Оригинальность", "Решительность"]
  },
  2: {
    title: "Дипломат",
    description: "Гармония и партнерство — ваш путь. Вы обладаете интуицией, чувствительностью и способностью находить баланс в любой ситуации.",
    traits: ["Дипломатичность", "Интуиция", "Чувствительность", "Сотрудничество"]
  },
  3: {
    title: "Творец",
    description: "Самовыражение и творчество — ваша суть. Вы способны вдохновлять других своим оптимизмом, талантами и радостью жизни.",
    traits: ["Творчество", "Оптимизм", "Коммуникабельность", "Артистизм"]
  },
  4: {
    title: "Строитель",
    description: "Стабильность и порядок — ваш фундамент. Вы создаете прочные основы для себя и других благодаря дисциплине и практичности.",
    traits: ["Практичность", "Дисциплина", "Надежность", "Трудолюбие"]
  },
  5: {
    title: "Искатель",
    description: "Свобода и перемены — ваш девиз. Вы жаждете приключений, новых опытов и расширения горизонтов.",
    traits: ["Свободолюбие", "Адаптивность", "Любознательность", "Харизма"]
  },
  6: {
    title: "Хранитель",
    description: "Любовь и ответственность — ваше призвание. Вы создаете гармонию в семье и заботитесь о близких.",
    traits: ["Заботливость", "Ответственность", "Гармония", "Любовь"]
  },
  7: {
    title: "Мудрец",
    description: "Поиск истины и духовность — ваш путь. Вы обладаете глубоким умом, интуицией и стремлением к познанию.",
    traits: ["Мудрость", "Духовность", "Аналитичность", "Интроспекция"]
  },
  8: {
    title: "Достигатор",
    description: "Власть и изобилие — ваша сфера. Вы способны достигать материального успеха и влиять на мир.",
    traits: ["Амбициозность", "Власть", "Материальность", "Управление"]
  },
  9: {
    title: "Гуманист",
    description: "Служение и мудрость — ваше предназначение. Вы несете свет в мир, помогая другим и делясь мудростью.",
    traits: ["Сострадание", "Мудрость", "Альтруизм", "Универсальность"]
  }
}

function calculateDestinyNumber(date: string): number {
  const digits = date.replace(/\D/g, "").split("").map(Number)
  let sum = digits.reduce((a, b) => a + b, 0)
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split("").map(Number).reduce((a, b) => a + b, 0)
  }
  
  return sum > 9 ? sum % 9 || 9 : sum
}

export default function FreeTestPage() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = async () => {
    if (!birthDate) return
    
    setIsCalculating(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const number = calculateDestinyNumber(birthDate)
    setResult(number)
    setIsCalculating(false)
  }

  const handleReset = () => {
    setResult(null)
    setBirthDate("")
  }

  const resultData = result ? destinyNumbers[result] : null

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-xl mx-auto py-12 md:py-20"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6"
                >
                  <Calculator className="w-10 h-10 text-gold" />
                </motion.div>
                <h1 className="font-serif text-3xl md:text-5xl text-cream mb-4">
                  Узнайте своё Число Судьбы
                </h1>
                <p className="text-cream/70">
                  Введите дату рождения и получите краткую характеристику 
                  вашего жизненного пути
                </p>
              </div>

              <div className="glass-card p-8">
                <div className="space-y-6">
                  <div>
                    <label className="text-cream/80 text-sm mb-2 block">
                      Дата рождения
                    </label>
                    <Input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="bg-charcoal-light/50 border-white/10 text-cream h-14 text-lg"
                    />
                  </div>

                  <Button
                    onClick={handleCalculate}
                    disabled={!birthDate || isCalculating}
                    className="w-full bg-gold text-charcoal hover:bg-gold-light h-14 text-lg"
                  >
                    {isCalculating ? (
                      <>
                        <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                        Рассчитываю...
                      </>
                    ) : (
                      <>
                        Рассчитать
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <p className="text-center text-cream/40 text-sm mt-6">
                Это бесплатный мини-расчёт. Для полного анализа запишитесь на консультацию.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto py-12 md:py-20"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-gold to-burgundy flex items-center justify-center mx-auto mb-6"
                >
                  <span className="font-serif text-6xl text-cream">{result}</span>
                </motion.div>
                <h2 className="font-serif text-3xl md:text-4xl text-cream mb-2">
                  Ваше Число Судьбы
                </h2>
                <p className="text-gold text-xl">{resultData?.title}</p>
              </div>

              <div className="glass-card p-8 mb-8">
                <p className="text-cream/80 text-lg leading-relaxed mb-8">
                  {resultData?.description}
                </p>

                <h4 className="text-gold text-sm tracking-wider uppercase mb-4">
                  Ключевые качества
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resultData?.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 bg-burgundy/10 border-burgundy/30 mb-8">
                <h3 className="font-serif text-xl text-cream mb-4">
                  Хотите узнать больше?
                </h3>
                <p className="text-cream/70 mb-6">
                  Это лишь малая часть того, что можно узнать из вашей даты рождения. 
                  Полный нумерологический расклад раскроет кармические задачи, 
                  благоприятные периоды и глубинное предназначение.
                </p>
                <Link href="/consultations">
                  <Button className="bg-gold text-charcoal hover:bg-gold-light">
                    Записаться на консультацию
                  </Button>
                </Link>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="border-gold/30 text-gold hover:bg-gold/10"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Рассчитать ещё раз
                </Button>
                <Button
                  variant="outline"
                  className="border-gold/30 text-gold hover:bg-gold/10"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Поделиться
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
