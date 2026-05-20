"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Clock, Users, Star, Play, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { courses, miniCourses, type Course } from "@/data/courses"
import Link from "next/link"

const categories = ["Toate", "Principal", "Mini"]
const levels = ["Toate nivelurile", "Incepator", "Mediu", "Avansat"]

function getLevelLabel(level: string) {
  switch (level) {
    case "beginner": return "Incepator"
    case "intermediate": return "Mediu"
    case "advanced": return "Avansat"
    default: return level
  }
}

function getCategoryLabel(category: string) {
  return category === "main" ? "Principal" : "Mini"
}

function getTotalLessons(course: Course) {
  return course.modules.reduce((acc, m) => acc + m.lessons.length, 0)
}

function CourseCard({ course }: { course: Course }) {
  const totalLessons = getTotalLessons(course)
  
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
                Recomandat
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
                {getCategoryLabel(course.category)}
              </span>
              <span className="text-cream/30">|</span>
              <span className="text-cream/50 text-xs">{getLevelLabel(course.level)}</span>
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
                  {totalLessons} lectii
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
                Detalii
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CoursesPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [selectedLevel, setSelectedLevel] = useState("Toate nivelurile")
  const [showFilters, setShowFilters] = useState(false)

  const allCourses = [...courses, ...miniCourses]

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(search.toLowerCase())
    
    let matchesCategory = true
    if (selectedCategory === "Principal") matchesCategory = course.category === "main"
    else if (selectedCategory === "Mini") matchesCategory = course.category === "mini"
    
    let matchesLevel = true
    if (selectedLevel === "Incepator") matchesLevel = course.level === "beginner"
    else if (selectedLevel === "Mediu") matchesLevel = course.level === "intermediate"
    else if (selectedLevel === "Avansat") matchesLevel = course.level === "advanced"
    
    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
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
              Invatare
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              Cursuri si Programe
            </h1>
            <p className="text-cream/70 text-lg">
              Cunostinte profunde de numerologie, practici meditative si instrumente 
              pentru transformarea ta
            </p>
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
                placeholder="Cauta cursuri..."
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
              Filtre
            </Button>

            <div className={`flex flex-wrap gap-2 ${showFilters ? "flex" : "hidden md:flex"}`}>
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

          {showFilters && (
            <div className="flex flex-wrap gap-2 mt-4 md:hidden">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className={
                    selectedLevel === level
                      ? "bg-burgundy text-cream"
                      : "border-white/20 text-cream/70"
                  }
                >
                  {level}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Courses Grid */}
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
                Nu s-au gasit cursuri
              </h3>
              <p className="text-cream/60">
                Incearca sa modifici parametrii de cautare
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              Nu stii de unde sa incepi?
            </h2>
            <p className="text-cream/70 mb-6">
              Inscrie-te la o consultatie gratuita, si te voi ajuta sa alegi 
              cursul potrivit pentru tine
            </p>
            <Link href="/consultations">
              <Button className="bg-gold text-charcoal hover:bg-gold-light">
                Obtine o consultatie
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
