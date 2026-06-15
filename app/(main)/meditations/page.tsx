"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Headphones, Volume2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { meditations } from "@/data/meditations"
import Link from "next/link"
import { useT } from "@/lib/lang-context"
import { MeditationVideoCard } from "@/components/karma/meditation-video-card"

export default function MeditationsPage() {
  const { t } = useT()
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [playingId, setPlayingId] = useState<string | null>(null)

  const allCategories = [
    { key: "all", label: t("common_all") },
    ...Array.from(new Set(meditations.map((m) => m.category))).map((c) => ({ key: c, label: c })),
  ]

  const filteredMeditations = meditations.filter((m) => {
    const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === "all" || m.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id)
  }

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-burgundy blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("meditations_tag")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              {t("page_med_title")}
            </h1>
            <p className="text-cream/70 text-lg mb-8">{t("page_med_subtitle")}</p>
            <div className="flex items-center justify-center gap-8 text-cream/60">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-gold" />
                <span>{meditations.length} {t("nav_meditations").toLowerCase()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-gold" />
                <span>{t("page_consult_online")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <Input
                type="text"
                placeholder={t("page_med_search")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <Button
                  key={cat.key}
                  variant={selectedCategory === cat.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={
                    selectedCategory === cat.key
                      ? "bg-gold text-charcoal hover:bg-gold-light"
                      : "border-gold/30 text-gold hover:bg-gold/10"
                  }
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meditation Videos Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {filteredMeditations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMeditations.map((meditation) => (
                <motion.div
                  key={meditation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <MeditationVideoCard
                    meditation={meditation}
                    isPlaying={playingId === meditation.id}
                    onPlay={handlePlay}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Headphones className="w-16 h-16 text-cream/20 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-cream mb-2">
                {t("page_med_empty")}
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                  {t("courses_tag")}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                  {t("meditations_title")}
                </h2>
                <p className="text-cream/70 mb-6">
                  {t("meditations_subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/courses">
                    <Button className="bg-gold text-charcoal hover:bg-gold-light">
                      {t("courses_view_all")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="aspect-square rounded-2xl overflow-hidden border border-gold/20">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032199-sbZIsnBv7mcOYB11Z7nBG74tGJrbdW.jpg"
                    alt={t("nav_meditations")}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
