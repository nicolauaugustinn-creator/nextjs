"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useT } from "@/lib/lang-context"
import { motion } from "framer-motion"
import type { Course } from "@/data/courses"

interface CourseCardProps {
  course: Course
  variant?: "default" | "featured"
}

export function CourseCard({ course, variant = "default" }: CourseCardProps) {
  const { t } = useT()

  const levelColors = {
    beginner: "bg-green-500/10 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    advanced: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  }

  const levelLabelKeys = {
    beginner: "page_courses_main",
    intermediate: "page_courses_main",
    advanced: "page_courses_advanced",
  } as const

  return (
    <motion.div
      className={cn("group glass-card-gold rounded-xl overflow-hidden flex flex-col h-full", variant === "featured" && "lg:flex-row lg:gap-6")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container - No padding constraint */}
      <div className={cn("relative overflow-hidden bg-muted flex-shrink-0", variant === "featured" ? "lg:w-1/2 aspect-video" : "w-full aspect-square")}>
        {course.coverImage ? (
          <>
            <Image
              src={course.coverImage}
              alt={course.title}
              fill
              priority
              sizes={variant === "featured" ? "50vw" : "100vw"}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-violet/20 to-gold/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
            </div>
          </>
        )}
        {course.status === "coming_soon" && (
          <Badge className="absolute top-3 right-3 bg-violet text-white">
            {t("card_coming_soon")}
          </Badge>
        )}
        {course.featured && course.status !== "coming_soon" && (
          <Badge className="absolute top-3 left-3 bg-gold/20 text-gold border-gold/30">
            {t("card_featured")}
          </Badge>
        )}
        {course.price && (
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-gold font-bold text-sm">{course.price}€</span>
          </div>
        )}
      </div>

      {/* Content - With padding */}
      <div className={cn("flex flex-col p-6", variant === "featured" && "lg:w-1/2 lg:justify-center")}>
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className={levelColors[course.level]}>
            {t(levelLabelKeys[course.level])}
          </Badge>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
          {course.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules.length} {t("card_modules")}</span>
          </div>
        </div>

        {variant === "featured" && course.benefits.length > 0 && (
          <ul className="mb-4 space-y-1">
            {course.benefits.slice(0, 3).map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-gold mt-0.5">+</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <Link href={`/courses/${course.slug}`} className="flex-1">
            <Button variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10 group/btn">
              {t("card_details")}
              <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="https://t.me/karmanumbers" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-gold hover:bg-gold-light text-background">
              {t("card_enroll")}
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
