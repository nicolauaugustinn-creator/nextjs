"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Clock, BookOpen, Play, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { courses, miniCourses, type Course } from "@/data/courses"
import Link from "next/link"
import { useT } from "@/lib/lang-context"

function getTotalLessons(course: Course) {
  return course.modules.reduce((acc, m) => acc + m.lessons.length, 0)
}

function CourseCard({ course }: { course: Course }) {
  const { t } = useT()
  const totalLessons = getTotalLessons(course)

  const levelLabel: Record<string, string> = {
    beginner: t("level_beginner"),
    intermediate: t("level_intermediate"),
    advanced: t("level_advanced"),
  }

  const categoryLabel = course.category === "main" ? t("page_courses_main") : t("page_courses_mini")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/courses/${course.slug}`}>
        <div className="glass-card overflow-hidden h-full flex flex-col">
          <div className="aspect-video relative overflow-hidden bg-charcoal-light">
            <img
              src={course.coverImage}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = "/valentina/portrait-1.jpg"
              }}
            />
            {course.featured && (
              <span className="absolute top-4 left-4 bg-burgundy text-cream text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                {t("courses_featured")}
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center">
                <Play className="w-6 h-6 text-charcoal ml-1" />
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gold text-xs tracking-wider uppercase">
                {categoryLabel}
              </span>
              <span className="text-cream/30">|</span>
              <span className="text-cream/50 text-xs">{levelLabel[course.level] ?? course.level}</span>
            </div>

            <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors">
              {course.title}
            </h3>

            <p className="text-cream/60 text-sm mb-4 line-clamp-2 flex-1">
              {course.shortDescription}
            </p>

            <div className="flex items-center gap-4 text-sm text-cream/50 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {course.duration}
              </span>
              {totalLessons > 0 && (
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {totalLessons} {t("courses_lessons")}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-cream/50 text-sm">{course.format}</span>
              <Button
                variant="outline"
                size="sm"
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                {t("courses_learn_more")}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CoursesPage() {
  const { t } = useT()
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const allCourses = [...courses, ...miniCourses]

  const categories = [
    { key: "all", label: t("common_all") },
    { key: "main", label: t("page_courses_main") },
    { key: "mini", label: t("page_courses_mini") },
  ]

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("nav_learning")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              {t("page_courses_title")}
            </h1>
            <p className="text-cream/70 text-lg">
              {t("page_courses_subtitle")}
            </p>
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
                placeholder={t("page_courses_search")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden border-gold/30 text-gold"
            >
              <Filter className="w-4 h-4 mr-2" />
              {t("common_filter")}
            </Button>

            <div className={`flex flex-wrap gap-2 ${showFilters ? "flex" : "hidden md:flex"}`}>
              {categories.map((cat) => (
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

      {/* Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-cream/20 mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-cream mb-2">
                {t("page_courses_empty")}
              </h3>
              <p className="text-cream/60">{t("common_search")}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              {t("consult_title")}
            </h2>
            <p className="text-cream/70 mb-6">
              {t("consult_subtitle")}
            </p>
            <Link href="/consultations">
              <Button className="bg-gold text-charcoal hover:bg-gold-light">
                {t("consult_book")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
