"use client"

import { motion } from "framer-motion"
import { BookOpen, Headphones, Calendar, Clock, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useT } from "@/lib/lang-context"

const recentCourses = [
  {
    id: "1",
    title: "Karma Numerology Foundations",
    progress: 65,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032187-7NAPoNjvAGv9GRBUIrNFmCPOMd45Fk.jpg",
    lastLesson: "Lesson 8"
  },
  {
    id: "2",
    title: "Meditations for Beginners",
    progress: 30,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032199-sbZIsnBv7mcOYB11Z7nBG74tGJrbdW.jpg",
    lastLesson: "Lesson 3"
  }
]

const upcomingEvents = [
  { title: "Consultation with Valentina", date: "25 Apr, 15:00", type: "consultation" },
  { title: "Group Meditation", date: "27 Apr, 19:00", type: "meditation" },
]

export default function DashboardPage() {
  const { t } = useT()

  const stats = [
    { label: t("dash_my_courses"), value: "2", icon: BookOpen, color: "text-gold" },
    { label: t("dash_progress"), value: "24", icon: Clock, color: "text-emerald-400" },
    { label: t("dash_my_meditations"), value: "8.5", icon: Headphones, color: "text-purple-400" },
    { label: t("nav_consultations"), value: "1", icon: Calendar, color: "text-blue-400" },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl text-cream mb-2">
          {t("dash_welcome")}!
        </h1>
        <p className="text-cream/60">{t("dash_my_courses")}</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="font-serif text-3xl text-cream mb-1">{stat.value}</p>
            <p className="text-cream/50 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent courses */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl text-cream">{t("dash_continue")}</h2>
            <Link href="/dashboard/courses">
              <Button variant="ghost" size="sm" className="text-gold hover:text-gold-light">
                {t("common_all")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {recentCourses.length > 0 ? recentCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 flex gap-4"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-cream mb-1 truncate">{course.title}</h3>
                  <p className="text-cream/50 text-sm mb-3">{course.lastLesson}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gold rounded-full" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                    <span className="text-gold text-sm font-medium">{course.progress}%</span>
                  </div>
                </div>
                <Button size="icon" className="bg-gold/10 text-gold hover:bg-gold/20 flex-shrink-0">
                  <Play className="w-5 h-5" />
                </Button>
              </motion.div>
            )) : (
              <div className="glass-card p-8 text-center">
                <BookOpen className="w-12 h-12 text-cream/20 mx-auto mb-4" />
                <p className="text-cream/50 mb-4">{t("dash_no_courses")}</p>
                <Link href="/courses">
                  <Button className="bg-gold text-charcoal hover:bg-gold-light">
                    {t("dash_browse_courses")}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming events */}
        <div>
          <h2 className="font-serif text-xl text-cream mb-6">{t("nav_consultations")}</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    event.type === "consultation" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"
                  }`}>
                    {event.type === "consultation" ? <Calendar className="w-5 h-5" /> : <Headphones className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-cream font-medium">{event.title}</h4>
                    <p className="text-cream/50 text-sm">{event.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="font-serif text-xl text-cream mb-4">{t("nav_meditations")}</h2>
            <div className="glass-card p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-10 h-10 text-gold" />
              </div>
              <h4 className="text-cream font-medium mb-2">{t("meditations_title")}</h4>
              <p className="text-cream/50 text-sm mb-4">10 {t("common_min")}</p>
              <Button className="bg-gold text-charcoal hover:bg-gold-light">
                <Play className="w-4 h-4 mr-2" />
                {t("dash_continue")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
