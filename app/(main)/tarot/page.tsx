"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { tarotCards, getRandomTarotCard } from "@/data/tarot"
import { useT } from "@/lib/lang-context"
import { Button } from "@/components/ui/button"

export default function TarotReadingsPage() {
  const { t, lang } = useT()
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [showCardOfDay, setShowCardOfDay] = useState(false)
  const [cardOfDay, setCardOfDay] = useState(getRandomTarotCard())
  const [showGrid, setShowGrid] = useState(false)

  const handleDrawCardOfDay = () => {
    setCardOfDay(getRandomTarotCard())
    setShowCardOfDay(true)
  }

  const titles: Record<string, string> = {
    ru: "Расклады",
    ro: "Divinații",
    en: "Tarot Readings",
    ua: "Розклади"
  }

  const descriptions: Record<string, string> = {
    ru: "Задай свой самый сокровенный вопрос и получи расчет ответа на него",
    ro: "Pune cea mai profundă întrebare și primește răspunsul în cărți",
    en: "Ask your deepest question and receive the answer from the cards",
    ua: "Поставте своє найглибше питання і отримайте відповідь від карт"
  }

  const cardOfDayText: Record<string, string> = {
    ru: "Вытяни карту дня",
    ro: "Trage cartea zilei",
    en: "Pull Card of Today",
    ua: "Витяги карту дня"
  }

  const selectCardText: Record<string, string> = {
    ru: "Это не только предсказание, но и источник вдохновения и руководства твоей повседневной жизни",
    ro: "Nu doar o predicție, ci o sursă de inspirație și îndrumare în viața ta",
    en: "Not just a prediction, but a source of inspiration and guidance in your life",
    ua: "Не просто передбачення, а джерело натхнення та керівництва в твоєму житті"
  }

  const oneCardText: Record<string, string> = {
    ru: "Расклад на одну карту",
    ro: "Divinație cu o carte",
    en: "One Card Reading",
    ua: "Розклад на одну карту"
  }

  const oneCardDesc: Record<string, string> = {
    ru: "Одна карта для ответа на вопрос или понимание текущей ситуации",
    ro: "O carte pentru răspuns la o întrebare sau înțelegerea situației actuale",
    en: "One card to answer a question or understand your current situation",
    ua: "Одна карта для відповіді на питання або розуміння поточної ситуації"
  }

  const drawText: Record<string, string> = {
    ru: "Сделать расклад",
    ro: "Fă divinația",
    en: "Draw Reading",
    ua: "Зробити розклад"
  }

  const selectText: Record<string, string> = {
    ru: "Выбери карту",
    ro: "Alege o carte",
    en: "Select a Card",
    ua: "Виберіть карту"
  }

  return (
    <main className="min-h-screen bg-charcoal pt-32 pb-40 px-4 md:pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl text-gold mb-4">
            {titles[lang as keyof typeof titles]}
          </h1>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            {descriptions[lang as keyof typeof descriptions]}
          </p>
        </div>

        {/* Card of Day Section */}
        <div className="bg-charcoal-light rounded-2xl p-8 md:p-12 mb-12 border border-gold/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-3xl text-gold mb-4">
                {cardOfDayText[lang as keyof typeof cardOfDayText]}
              </h2>
              <p className="text-cream/70 mb-6">
                {selectCardText[lang as keyof typeof selectCardText]}
              </p>
              <Button
                onClick={handleDrawCardOfDay}
                className="bg-gold text-charcoal hover:bg-gold-light"
              >
                {drawText[lang as keyof typeof drawText]}
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-xs h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎴</div>
                  <p className="text-cream/50">{selectText[lang as keyof typeof selectText]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card of Day Modal */}
        {showCardOfDay && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-charcoal-light rounded-xl max-w-md w-full p-8 relative">
              <button
                onClick={() => setShowCardOfDay(false)}
                className="absolute top-4 right-4 text-cream/50 hover:text-cream"
              >
                <X size={24} />
              </button>
              <h3 className="font-serif text-2xl text-gold mb-4 text-center">
                {cardOfDay.name[lang as keyof typeof cardOfDay.name]}
              </h3>
              <div className="aspect-video bg-gold/10 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={cardOfDay.image}
                  alt={cardOfDay.name[lang as keyof typeof cardOfDay.name]}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-cream/80 mb-6">
                {cardOfDay.meaning[lang as keyof typeof cardOfDay.meaning]}
              </p>
              <Button
                onClick={() => setShowCardOfDay(false)}
                className="w-full bg-gold text-charcoal hover:bg-gold-light"
              >
                Gata
              </Button>
            </div>
          </div>
        )}

        {/* One Card Reading Section */}
        <div className="bg-charcoal-light rounded-2xl p-8 md:p-12 border border-gold/20 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-3xl text-gold mb-4">
                {oneCardText[lang as keyof typeof oneCardText]}
              </h2>
              <p className="text-cream/70 mb-6">
                {oneCardDesc[lang as keyof typeof oneCardDesc]}
              </p>
              <Button
                onClick={() => setShowGrid(true)}
                className="bg-gold text-charcoal hover:bg-gold-light"
              >
                {drawText[lang as keyof typeof drawText]}
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-xs h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔮</div>
                  <p className="text-cream/50">{selectText[lang as keyof typeof selectText]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Grid Modal */}
        {showGrid && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-charcoal rounded-xl max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowGrid(false)}
                className="absolute top-4 right-4 text-cream/50 hover:text-cream z-10"
              >
                <X size={24} />
              </button>
              <h3 className="font-serif text-3xl text-gold mb-8 text-center">
                {selectText[lang as keyof typeof selectText]}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tarotCards.map((card) => (
                  <Link
                    key={card.id}
                    href={`/tarot/${card.id}`}
                    className="group cursor-pointer"
                    onClick={() => setShowGrid(false)}
                  >
                    <div className="relative rounded-lg overflow-hidden aspect-[3/5] bg-gold/5 border-2 border-gold/30 hover:border-gold transition-all hover:scale-105">
                      <img
                        src={card.image}
                        alt={card.name[lang as keyof typeof card.name]}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                        <p className="text-cream text-sm font-medium text-center">
                          {card.number < 10 ? `0${card.number}` : card.number}
                        </p>
                        <p className="text-gold text-xs text-center truncate">
                          {card.name[lang as keyof typeof card.name]}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
