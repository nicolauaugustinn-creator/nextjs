"use client"

import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { tarotCards, getTarotCardByNumber } from "@/data/tarot"
import { useT } from "@/lib/lang-context"
import { Button } from "@/components/ui/button"

export default function TarotCardPage({ params }: { params: { id: string } }) {
  const { lang } = useT()

  const card = tarotCards.find(c => c.id === params.id)

  if (!card) {
    notFound()
  }

  const numberFormatter: Record<string, string> = {
    ru: "Карта номер",
    ro: "Cartea numărul",
    en: "Card number",
    ua: "Карта номер"
  }

  const backText: Record<string, string> = {
    ru: "Назад к раскладам",
    ro: "Înapoi la divinații",
    en: "Back to Readings",
    ua: "Назад до розкладів"
  }

  return (
    <main className="min-h-screen bg-charcoal pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/tarot" className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-8">
          <ArrowLeft size={20} />
          <span>{backText[lang as keyof typeof backText]}</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <div className="aspect-[3/5] rounded-xl overflow-hidden border-4 border-gold/50 shadow-2xl">
                <img
                  src={card.image}
                  alt={card.name[lang as keyof typeof card.name]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card Info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-cream/50 text-sm uppercase tracking-widest mb-2">
                {numberFormatter[lang as keyof typeof numberFormatter]} {card.number < 10 ? `0${card.number}` : card.number}
              </p>
              <h1 className="font-serif text-5xl text-gold mb-2">
                {card.name[lang as keyof typeof card.name]}
              </h1>
              <div className="h-1 w-20 bg-gold/50 rounded" />
            </div>

            <div className="bg-charcoal-light rounded-xl p-6 border border-gold/20">
              <h2 className="font-serif text-xl text-gold mb-4">Semnificație</h2>
              <p className="text-cream/80 leading-relaxed">
                {card.meaning[lang as keyof typeof card.meaning]}
              </p>
            </div>

            {/* Keywords */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-charcoal-light rounded-lg p-4 border border-gold/20">
                <p className="text-cream/50 text-sm mb-2">Aspecte pozitive</p>
                <p className="text-gold font-serif">Creștere</p>
              </div>
              <div className="bg-charcoal-light rounded-lg p-4 border border-gold/20">
                <p className="text-cream/50 text-sm mb-2">Aspecte provocatoare</p>
                <p className="text-gold font-serif">Obstacole</p>
              </div>
            </div>

            <Button
              asChild
              className="bg-gold text-charcoal hover:bg-gold-light w-full"
            >
              <Link href="/tarot">
                {backText[lang as keyof typeof backText]}
              </Link>
            </Button>
          </div>
        </div>

        {/* Related Cards */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl text-gold mb-8">Cărți Apropiate în Arcane</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tarotCards
              .filter(c => Math.abs(c.number - card.number) <= 2 && c.id !== card.id)
              .slice(0, 4)
              .map(relatedCard => (
                <Link
                  key={relatedCard.id}
                  href={`/tarot/${relatedCard.id}`}
                  className="group"
                >
                  <div className="relative rounded-lg overflow-hidden aspect-[3/5] bg-gold/5 border-2 border-gold/30 hover:border-gold transition-all hover:scale-105">
                    <img
                      src={relatedCard.image}
                      alt={relatedCard.name[lang as keyof typeof relatedCard.name]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                      <p className="text-cream text-sm font-medium text-center">
                        {relatedCard.number < 10 ? `0${relatedCard.number}` : relatedCard.number}
                      </p>
                      <p className="text-gold text-xs text-center truncate">
                        {relatedCard.name[lang as keyof typeof relatedCard.name]}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
