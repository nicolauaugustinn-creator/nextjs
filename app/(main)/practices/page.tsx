"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Sparkles, Search, ArrowRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { practices } from "@/data/practices"
import { useT } from "@/lib/lang-context"

export default function PracticesPage() {
  const { t } = useT()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", label: t("filter_all") },
    { id: "ritualuri", label: t("practices_rituals") },
    { id: "afirmatii", label: t("practices_affirmations") },
    { id: "vizualizari", label: t("practices_visualizations") },
    { id: "respiratie", label: t("practices_breathing") },
    { id: "jurnal", label: t("practices_journal") },
  ]

  const levels = [
    { id: "all", label: t("filter_all_levels") },
    { id: "incepator", label: t("level_beginner") },
    { id: "intermediar", label: t("level_intermediate") },
    { id: "avansat", label: t("level_advanced") },
  ]

  const filteredPractices = practices.filter((practice) => {
    const matchesCategory = selectedCategory === "all" || practice.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || practice.level === selectedLevel
    const matchesSearch = practice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         practice.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesLevel && matchesSearch
  })

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">
              <Sparkles className="w-3 h-3 mr-1" />
              {t("practices_spiritual")}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              {t("practices_title")} <br />
              <span className="text-gold">{t("practices_step_by_step")}</span>
            </h1>
            <p className="text-xl text-cream/70 mb-8">
              {t("practices_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <Input
                type="text"
                placeholder={t("practices_search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category.id
                      ? "bg-gold text-charcoal font-medium"
                      : "bg-charcoal-light text-cream/70 hover:bg-white/10"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Levels */}
            <div className="flex flex-wrap justify-center gap-2">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    selectedLevel === level.id
                      ? "bg-burgundy/30 text-cream border border-burgundy/50"
                      : "bg-transparent text-cream/50 hover:text-cream/70"
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practices Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPractices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-cream/50 text-lg">{t("practices_no_results")}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPractices.map((practice, index) => (
                <motion.div
                  key={practice.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal-light to-charcoal border border-white/10 hover:border-gold/30 transition-all">
                    {/* Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={practice.imageUrl}
                        alt={practice.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {practice.isPremium && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gold/90 text-charcoal">
                            <Lock className="w-3 h-3 mr-1" />
                            Premium
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-gold/30 text-gold capitalize">
                          {practice.category}
                        </Badge>
                        <Badge variant="outline" className="border-white/20 text-cream/60 capitalize">
                          {practice.level}
                        </Badge>
                      </div>

                      <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors">
                        {practice.title}
                      </h3>
                      
                      <p className="text-cream/60 text-sm mb-4 line-clamp-2">
                        {practice.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sm text-cream/50">
                          <Clock className="w-4 h-4" />
                          {practice.duration} {t("practices_min")}
                        </span>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gold hover:text-gold hover:bg-gold/10"
                        >
                          {t("practices_start")}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-cream mb-4">
              {t("practices_want_all")}
            </h2>
            <p className="text-cream/70 mb-8">
              {t("practices_subscribe")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gold hover:bg-gold/90 text-charcoal">
                <Link href="/courses">
                  {t("practices_view_courses")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
                <Link href="/consultations">
                  {t("practices_schedule_consultation")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
