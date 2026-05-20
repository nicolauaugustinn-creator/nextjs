"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CourseCard } from "../course-card"
import { courses, miniCourses } from "@/data/courses"

export function CoursesPreview() {
  const featuredCourses = courses.filter(c => c.featured).slice(0, 2)
  const featuredMiniCourses = miniCourses.filter(c => c.featured).slice(0, 4)

  return (
    <section className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-gold/5 to-transparent">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Обучение
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Курсы и программы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Глубокие знания нумерологии и метода «Кармическая звезда» для вашей трансформации
          </p>
        </motion.div>

        {/* Main Courses */}
        <div className="mb-16">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center">
            <span className="w-8 h-px bg-gold mr-3" />
            Основные курсы
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} variant="featured" />
            ))}
          </div>
        </div>

        {/* Mini Courses */}
        <div className="mb-12">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center">
            <span className="w-8 h-px bg-violet mr-3" />
            Мини-курсы
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMiniCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/courses">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-background group"
            >
              Все курсы
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/mini-courses">
            <Button
              size="lg"
              variant="outline"
              className="border-violet/30 text-violet-light hover:bg-violet/10"
            >
              Все мини-курсы
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
