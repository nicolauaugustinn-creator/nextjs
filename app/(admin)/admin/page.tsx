"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  BookOpen, 
  Music,
  FileText,
  Star,
  Sparkles,
  Plus,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { coursesStore, meditationsStore, blogStore, reviewsStore, type Course, type Review } from "@/lib/admin-store"
import { practices as practicesData } from "@/data/practices"

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    courses: 0,
    meditations: 0,
    blogs: 0,
    reviews: 0,
    practices: 0,
    pendingReviews: 0
  })
  const [recentCourses, setRecentCourses] = useState<Course[]>([])
  const [pendingReviews, setPendingReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const courses = coursesStore.getAll()
    const meditations = meditationsStore.getAll()
    const blogs = blogStore.getAll()
    const reviews = reviewsStore.getAll()
    const practices = practicesData

    const pending = reviews.filter(r => r.status === "pending")

    setStats({
      courses: courses.length,
      meditations: meditations.length,
      blogs: blogs.length,
      reviews: reviews.length,
      practices: practices.length,
      pendingReviews: pending.length
    })

    setRecentCourses(courses.slice(0, 5))
    setPendingReviews(pending.slice(0, 5))
    setIsLoading(false)
  }

  const statCards = [
    { 
      label: "Курсов", 
      value: stats.courses, 
      icon: BookOpen,
      href: "/admin/courses",
      color: "text-gold"
    },
    { 
      label: "Медитаций", 
      value: stats.meditations, 
      icon: Music,
      href: "/admin/meditations",
      color: "text-purple-400"
    },
    { 
      label: "Статей блога", 
      value: stats.blogs, 
      icon: FileText,
      href: "/admin/blog",
      color: "text-blue-400"
    },
    { 
      label: "Отзывов", 
      value: stats.reviews, 
      icon: Star,
      href: "/admin/reviews",
      color: "text-yellow-400"
    },
    { 
      label: "Практик", 
      value: stats.practices, 
      icon: Sparkles,
      href: "/admin/practices",
      color: "text-emerald-400"
    },
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin w-8 h-8 border-2 border-gold border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl text-cream">Dashboard</h1>
          <p className="text-cream/60">Управление контентом сайта KARMANUMBERS</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6">
        <h2 className="font-serif text-lg text-cream mb-4">Быстрые действия</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/courses">
            <Button className="bg-gold/20 text-gold hover:bg-gold/30 border border-gold/30">
              <Plus className="w-4 h-4 mr-2" />
              Добавить курс
            </Button>
          </Link>
          <Link href="/admin/meditations">
            <Button className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30">
              <Plus className="w-4 h-4 mr-2" />
              Добавить медитацию
            </Button>
          </Link>
          <Link href="/admin/blog">
            <Button className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30">
              <Plus className="w-4 h-4 mr-2" />
              Написать статью
            </Button>
          </Link>
          <Link href="/admin/practices">
            <Button className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30">
              <Plus className="w-4 h-4 mr-2" />
              Добавить практику
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={stat.href}>
              <div className="glass-card p-6 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
                <p className="font-serif text-3xl text-cream mb-1">{stat.value}</p>
                <p className="text-cream/50 text-sm">{stat.label}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Courses */}
        <div className="glass-card">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="font-serif text-lg text-cream">Курсы</h2>
            <Link href="/admin/courses">
              <Button variant="ghost" size="sm" className="text-gold">
                Все курсы
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="p-4">
            {recentCourses.length === 0 ? (
              <p className="text-cream/50 text-center py-8">Нет курсов. Добавьте первый курс!</p>
            ) : (
              <div className="space-y-3">
                {recentCourses.map((course) => (
                  <div key={course.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5">
                    <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-cream text-sm font-medium truncate">{course.title}</p>
                      <p className="text-cream/50 text-xs">{course.level} • {course.lessonsCount} уроков</p>
                    </div>
                    <span className="text-gold font-medium">₽{course.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pending Reviews */}
        <div className="glass-card">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="font-serif text-lg text-cream">
              Отзывы на модерации
              {stats.pendingReviews > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                  {stats.pendingReviews}
                </span>
              )}
            </h2>
            <Link href="/admin/reviews">
              <Button variant="ghost" size="sm" className="text-gold">
                Все отзывы
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="p-4">
            {pendingReviews.length === 0 ? (
              <p className="text-cream/50 text-center py-8">Нет отзывов на модерации</p>
            ) : (
              <div className="space-y-3">
                {pendingReviews.map((review) => (
                  <div key={review.id} className="p-3 rounded-lg hover:bg-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cream font-medium text-sm">{review.author}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-cream/60 text-xs line-clamp-2">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
