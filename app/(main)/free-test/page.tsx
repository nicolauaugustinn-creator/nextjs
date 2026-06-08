"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, Sparkles, ArrowRight, RotateCcw, Share2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useT } from "@/lib/lang-context"
import { getDestinyVariations } from "@/lib/destiny-variations"

function calculateDestinyNumber(date: string): number {
  const digits = date.replace(/\D/g, "").split("").map(Number)
  let sum = digits.reduce((a, b) => a + b, 0)
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split("").map(Number).reduce((a, b) => a + b, 0)
  }
  
  return sum > 9 ? sum % 9 || 9 : sum
}

export default function FreeTestPage() {
  const { t, lang } = useT()
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [selectedVariation, setSelectedVariation] = useState<any | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const destinyVariations = getDestinyVariations(lang)

  const destinyNumbers: Record<number, { title: string; description: string; traits: string[] }> = {
    1: {
      title: t("destiny_1_title"),
      description: t("destiny_1_desc"),
      traits: t("destiny_1_traits").split(", ")
    },
    2: {
      title: t("destiny_2_title"),
      description: t("destiny_2_desc"),
      traits: t("destiny_2_traits").split(", ")
    },
    3: {
      title: t("destiny_3_title"),
      description: t("destiny_3_desc"),
      traits: t("destiny_3_traits").split(", ")
    },
    4: {
      title: t("destiny_4_title"),
      description: t("destiny_4_desc"),
      traits: t("destiny_4_traits").split(", ")
    },
    5: {
      title: t("destiny_5_title"),
      description: t("destiny_5_desc"),
      traits: t("destiny_5_traits").split(", ")
    },
    6: {
      title: t("destiny_6_title"),
      description: t("destiny_6_desc"),
      traits: t("destiny_6_traits").split(", ")
    },
    7: {
      title: t("destiny_7_title"),
      description: t("destiny_7_desc"),
      traits: t("destiny_7_traits").split(", ")
    },
    8: {
      title: t("destiny_8_title"),
      description: t("destiny_8_desc"),
      traits: t("destiny_8_traits").split(", ")
    },
    9: {
      title: t("destiny_9_title"),
      description: t("destiny_9_desc"),
      traits: t("destiny_9_traits").split(", ")
    }
  }

  const getRandomVariation = (number: number) => {
    const variations = destinyVariations[number as keyof typeof destinyVariations]
    if (!variations || variations.length === 0) return null
    return variations[Math.floor(Math.random() * variations.length)]
  }

  const handleCalculate = async () => {
    if (!birthDate) return
    
    setIsCalculating(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const number = calculateDestinyNumber(birthDate)
    setResult(number)
    
    // Select random variation from 100+
    const variation = getRandomVariation(number)
    setSelectedVariation(variation)
    
    setIsCalculating(false)
  }

  const handleReset = () => {
    setResult(null)
    setSelectedVariation(null)
    setBirthDate("")
  }

  const resultData = selectedVariation || (result ? destinyNumbers[result] : null)

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
                  {t("free_test_title")}
                </h1>
                <p className="text-cream/70">
                  {t("free_test_subtitle")}
                </p>
              </div>

              <div className="glass-card p-8">
                <div className="space-y-6">
                  <div>
                    <label className="text-cream/80 text-sm mb-2 block">
                      {t("free_test_birthdate")}
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
                        {t("free_test_calculating")}
                      </>
                    ) : (
                      <>
                        {t("free_test_calculate")}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <p className="text-center text-cream/40 text-sm mt-6">
                {t("free_test_disclaimer")}
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
                  {t("free_test_your_number")}
                </h2>
                <p className="text-gold text-xl">{resultData?.title}</p>
              </div>

              <div className="glass-card p-8 mb-8">
                <p className="text-cream/80 text-lg leading-relaxed mb-8">
                  {resultData?.description}
                </p>

                <h4 className="text-gold text-sm tracking-wider uppercase mb-4">
                  {t("free_test_key_traits")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resultData?.traits.map((trait: string) => (
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
                  {t("free_test_want_more")}
                </h3>
                <p className="text-cream/70 mb-6">
                  {t("free_test_want_more_desc")}
                </p>
                <Link href="/consultations">
                  <Button className="bg-gold text-charcoal hover:bg-gold-light">
                    {t("free_test_book_consultation")}
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
                  {t("free_test_calculate_again")}
                </Button>
                <Button
                  variant="outline"
                  className="border-gold/30 text-gold hover:bg-gold/10"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {t("free_test_share")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
