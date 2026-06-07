"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { tarotCards } from "@/data/tarot"
import { useT } from "@/lib/lang-context"
import { Button } from "@/components/ui/button"

export default function TarotReadingsPage() {
  const { t, lang } = useT()
  const [showGrid, setShowGrid] = useState(false)
  const [selectedCard, setSelectedCard] = useState<(typeof tarotCards)[0] | null>(null)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-6xl text-gold mb-4">
            {t("tarot_title")}
          </h1>
          <p className="text-cream/70 text-lg">
            {t("tarot_subtitle")}
          </p>
        </div>
      </section>

      {/* Cards Spread Image */}
      <section className="px-4 sm:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden">
            <Image
              src="/images/tarot/cards-spread.png"
              alt="Tarot spread"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Daily Card Section */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-52 md:h-72 rounded-xl overflow-hidden border-4 border-gold/30">
                <Image
                  src="/images/tarot/01-fool.png"
                  alt="Daily card"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-gold mb-4">
                {t("tarot_daily_card")}
              </h2>
              <p className="text-cream/70 text-base sm:text-lg mb-8 leading-relaxed">
                {t("tarot_daily_description")}
              </p>
              <Button
                onClick={() => setShowGrid(true)}
                className="bg-gold/80 hover:bg-gold text-charcoal font-serif text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all"
              >
                {t("tarot_draw")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* One Card Section */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-3xl sm:text-4xl text-gold mb-4">
                {t("tarot_one_card")}
              </h2>
              <p className="text-cream/70 text-base sm:text-lg mb-8 leading-relaxed">
                {t("tarot_one_description")}
              </p>
              <Button
                onClick={() => setShowGrid(true)}
                className="border-2 border-gold text-gold hover:bg-gold/10 font-serif text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg transition-all"
              >
                {t("tarot_draw")}
              </Button>
            </div>

            {/* Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-52 md:h-72 rounded-xl overflow-hidden border-4 border-gold/30">
                <Image
                  src="/images/tarot/02-magician.png"
                  alt="One card"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Grid Modal */}
      {showGrid && !selectedCard && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-charcoal rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold/30 sticky top-0 bg-charcoal">
              <h3 className="font-serif text-2xl sm:text-3xl text-gold">
                {t("tarot_select_card")}
              </h3>
              <button
                onClick={() => setShowGrid(false)}
                className="text-gold hover:text-gold/80 transition-colors p-2"
              >
                <X size={28} />
              </button>
            </div>

            {/* Grid - 4x4 */}
            <div className="overflow-y-auto flex-1 p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {tarotCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className="group relative aspect-[3/4] rounded-lg overflow-hidden border-4 border-amber-700 hover:border-amber-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                  >
                    <Image
                      src={card.image}
                      alt={card.name[lang as keyof typeof card.name]}
                      fill
                      className="object-cover group-hover:brightness-110 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-gold text-xs font-serif text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {card.name[lang as keyof typeof card.name]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card Detail Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Close Button */}
            <div className="sticky top-0 flex justify-between items-center p-4 sm:p-6 bg-white border-b border-gold/20">
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                {selectedCard.name[lang as keyof typeof selectedCard.name]}
              </h3>
              <button
                onClick={() => setSelectedCard(null)}
                className="text-charcoal hover:text-gold transition-colors p-2"
              >
                <X size={28} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1 flex flex-col items-center p-6 sm:p-8">
              {/* Card Image with Red Border */}
              <div className="relative w-40 h-56 sm:w-56 sm:h-72 rounded-xl overflow-hidden border-8 border-red-700 mb-8 flex-shrink-0">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.name[lang as keyof typeof selectedCard.name]}
                  fill
                  className="object-cover"
                />
                {/* Roman numeral overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl sm:text-4xl font-serif drop-shadow-lg">
                    {selectedCard.number < 10 ? `0${selectedCard.number}` : selectedCard.number}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="w-full bg-cream/95 rounded-xl p-6 sm:p-8">
                <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed text-justify">
                  {selectedCard.meaning[lang as keyof typeof selectedCard.meaning]}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6 border-t border-gold/20 bg-white">
              <Button
                onClick={() => setSelectedCard(null)}
                className="w-full bg-gold hover:bg-gold/90 text-charcoal font-serif text-base sm:text-lg py-4"
              >
                {t("tarot_close")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
