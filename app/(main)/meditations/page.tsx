"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Play, Pause, Clock, Headphones, Lock, Volume2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { meditations, type Meditation } from "@/data/meditations"
import Link from "next/link"

const categories = ["Все", "Релаксация", "Исцеление", "Манифестация", "Утренние", "Вечерние"]

function MeditationCard({ meditation, isPlaying, onPlay }: { 
  meditation: Meditation
  isPlaying: boolean
  onPlay: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="glass-card overflow-hidden">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={meditation.image}
            alt={meditation.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
          
          {meditation.isFree ? (
            <button
              onClick={onPlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                isPlaying 
                  ? "bg-gold scale-110" 
                  : "bg-gold/80 group-hover:bg-gold group-hover:scale-110"
              }`}>
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-charcoal" />
                ) : (
                  <Play className="w-7 h-7 text-charcoal ml-1" />
                )}
              </div>
            </button>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-charcoal/80 flex items-center justify-center">
                <Lock className="w-7 h-7 text-cream/60" />
              </div>
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-cream/80 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {meditation.duration}
              </span>
              {meditation.isFree && (
                <span className="bg-gold/20 text-gold px-2 py-0.5 rounded text-xs">
                  Бесплатно
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="p-5">
          <span className="text-gold text-xs tracking-wider uppercase">
            {meditation.category}
          </span>
          <h3 className="font-serif text-lg text-cream mt-2 mb-2 group-hover:text-gold transition-colors">
            {meditation.title}
          </h3>
          <p className="text-cream/60 text-sm line-clamp-2">
            {meditation.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function MeditationsPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Все")
  const [playingId, setPlayingId] = useState<string | null>(null)

  const filteredMeditations = meditations.filter((meditation) => {
    const matchesSearch = meditation.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === "Все" || meditation.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id)
  }

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
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
              Практики
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              Медитации
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              Авторские медитации для глубокой трансформации, исцеления 
              и связи с высшим Я
            </p>

            <div className="flex items-center justify-center gap-8 text-cream/60">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-gold" />
                <span>{meditations.length} медитаций</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-gold" />
                <span>Профессиональный звук</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <Input
                type="text"
                placeholder="Поиск медитаций..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-gold text-charcoal hover:bg-gold-light"
                      : "border-gold/30 text-gold hover:bg-gold/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meditations Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {filteredMeditations.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMeditations.map((meditation) => (
                <MeditationCard
                  key={meditation.id}
                  meditation={meditation}
                  isPlaying={playingId === meditation.id}
                  onPlay={() => handlePlay(meditation.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Headphones className="w-16 h-16 text-cream/20 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-cream mb-2">
                Медитации не найдены
              </h3>
              <p className="text-cream/60">
                Попробуйте изменить параметры поиска
              </p>
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
                  Премиум доступ
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                  Получите доступ ко всем медитациям
                </h2>
                <p className="text-cream/70 mb-6">
                  Подписка открывает доступ ко всей библиотеке медитаций, 
                  новым практикам каждую неделю и эксклюзивным материалам
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/pricing">
                    <Button className="bg-gold text-charcoal hover:bg-gold-light">
                      Оформить подписку
                    </Button>
                  </Link>
                  <Link href="/courses">
                    <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                      Смотреть курсы
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="aspect-square rounded-2xl overflow-hidden border border-gold/20">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032199-sbZIsnBv7mcOYB11Z7nBG74tGJrbdW.jpg"
                    alt="Медитации"
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
