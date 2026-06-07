"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { tarotCards } from "@/data/tarot"
import { useT } from "@/lib/lang-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TarotReadingsPage() {
  const { t, lang } = useT()
  const [showGrid, setShowGrid] = useState(false)

  const titles: Record<string, string> = {
    ru: "Расклады",
    ro: "Divinații",
    en: "Tarot Readings",
    ua: "Розклади"
  }

  const descriptions: Record<string, string> = {
    ru: "Задай свой самый сокровенный вопрос и получи расчет ответа на него",
    ro: "Pune cea mai profundă întrebare și primește răspunsul în cărți",
    en: "Ask your deepest question and get the answer in cards",
    ua: "Поставте своє найглибше питання і отримайте відповідь в картах"
  }

  const drawCardLabels: Record<string, string> = {
    ru: "Вытяги карту дня",
    ro: "Trage cartea zilei",
    en: "Draw card of the day",
    ua: "Витягніть карту дня"
  }

  const drawCardDescriptions: Record<string, string> = {
    ru: "Это не только предсказание, но и источник вдохновения и руководства твоей повседневной жизни",
    ro: "Aceasta nu este doar o predicție, ci și o sursă de inspirație și ghidare în viața ta zilnică",
    en: "This is not just a prediction, but a source of inspiration and guidance in your daily life",
    ua: "Це не просто передбачення, а й джерело натхнення та керівництва у вашому повсякденному житті"
  }

  const selectCardLabels: Record<string, string> = {
    ru: "Выбери карту",
    ro: "Alege o carte",
    en: "Choose a card",
    ua: "Виберіть карту"
  }

  const drawButtonLabels: Record<string, string> = {
    ru: "Сделать расклад",
    ro: "Fă divinația",
    en: "Make a reading",
    ua: "Зробити розклад"
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-20 pb-12 md:pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-gold mb-4">
            {titles[lang as keyof typeof titles]}
          </h1>
          <p className="text-cream/80 text-lg md:text-xl">
            {descriptions[lang as keyof typeof descriptions]}
          </p>
        </div>
      </section>

      {/* First Section - Card of the Day */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Card Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold/20 bg-charcoal/50">
                <Image
                  src="/images/tarot/01-fool.png"
                  alt="Card of the day"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl text-gold mb-4">
                {drawCardLabels[lang as keyof typeof drawCardLabels]}
              </h2>
              <p className="text-cream/70 mb-8 leading-relaxed">
                {drawCardDescriptions[lang as keyof typeof drawCardDescriptions]}
              </p>
              <Button
                onClick={() => setShowGrid(true)}
                className="bg-gold text-charcoal hover:bg-gold-light px-8 py-6 text-lg"
              >
                {drawButtonLabels[lang as keyof typeof drawButtonLabels]}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Choose a Card */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="md:order-2">
              <h3 className="font-serif text-3xl text-gold mb-4">
                {selectCardLabels[lang as keyof typeof selectCardLabels]}
              </h3>
              <p className="text-cream/70 mb-8 leading-relaxed">
                {drawCardDescriptions[lang as keyof typeof drawCardDescriptions]}
              </p>
              <Button
                onClick={() => setShowGrid(true)}
                className="bg-gold text-charcoal hover:bg-gold-light px-8 py-6 text-lg"
              >
                {drawButtonLabels[lang as keyof typeof drawButtonLabels]}
              </Button>
            </div>

            {/* Card Image */}
            <div className="flex justify-center md:order-1">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold/20 bg-charcoal/50">
                <Image
                  src="/images/tarot/02-magician.png"
                  alt="Choose a card"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Grid Modal */}
      {showGrid && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-charcoal rounded-2xl max-h-[90vh] overflow-y-auto w-full max-w-4xl">
            {/* Close Button */}
            <div className="sticky top-0 bg-charcoal p-4 border-b border-gold/20 flex justify-between items-center">
              <h3 className="font-serif text-2xl text-gold">
                {selectCardLabels[lang as keyof typeof selectCardLabels]}
              </h3>
              <button
                onClick={() => setShowGrid(false)}
                className="text-gold hover:text-gold-light transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Card Grid */}
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {tarotCards.map((card) => (
                <div
                  key={card.id}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={card.image}
                    alt={card.name[lang as keyof typeof card.name]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-cream text-sm font-serif text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {card.name[lang as keyof typeof card.name]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
