'use client'

import { motion } from "framer-motion"
import { BookOpen, Headphones, Calendar, Clock, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/karma/glass-card"
import Link from "next/link"
import { useT } from "@/lib/lang-context"
import { useState, useEffect } from "react"

interface UserProfile {
  name: string
  email: string
  current_level: string
  courses_completed: number
  meditations_completed: number
  total_hours_spent: number
  total_points: number
}

export default function DashboardPage() {
  const { t } = useT()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    // Load user data from localStorage
    const storedUser = localStorage.getItem('karma_user_data')
    if (storedUser) {
      try {
        setUserProfile(JSON.parse(storedUser))
      } catch (e) {
        console.error('[v0] Error parsing user data:', e)
      }
    }
  }, [])

  const userCourses = [
    {
      id: '1',
      title: 'Karma Numerology Foundations',
      progress_percentage: 65,
      image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032187-7NAPoNjvAGv9GRBUIrNFmCPOMd45Fk.jpg',
      category: 'Numerology'
    },
    {
      id: '2',
      title: 'Meditations for Beginners',
      progress_percentage: 30,
      image_url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032199-sbZIsnBv7mcOYB11Z7nBG74tGJrbdW.jpg',
      category: 'Meditation'
    }
  ]

  const stats = [
    { 
      label: t("dash_my_courses"), 
      value: userProfile?.courses_completed?.toString() || "0", 
      icon: BookOpen, 
      color: "text-gold" 
    },
    { 
      label: t("dash_progress"), 
      value: userProfile?.total_points?.toString() || "0", 
      icon: Clock, 
      color: "text-emerald-400" 
    },
    { 
      label: t("dash_my_meditations"), 
      value: userProfile?.meditations_completed?.toString() || "0", 
      icon: Headphones, 
      color: "text-purple-400" 
    },
    { 
      label: t("nav_consultations"), 
      value: userProfile?.current_level || "Beginner", 
      icon: Calendar, 
      color: "text-blue-400" 
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl text-cream mb-2">
          {t("dash_welcome")}!
        </h1>
        <p className="text-cream/60">
          {userProfile?.name || "Guest"} - {userProfile?.current_level || "Beginner"}
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <GlassCard
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="font-serif text-3xl text-cream mb-1">{stat.value}</p>
            <p className="text-cream/50 text-sm">{stat.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent courses */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl text-cream">{t("dash_continue")}</h2>
            <Link href="/courses">
              <Button variant="ghost" size="sm" className="text-gold hover:text-gold-light">
                {t("common_all")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {userProfile ? userCourses.slice(0, 3).map((course, index) => (
              <GlassCard
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={course.image_url} 
                    alt={course.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-cream mb-1 truncate">{course.title}</h3>
                  <p className="text-cream/50 text-sm mb-3">{course.category}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gold rounded-full" 
                          style={{ width: `${course.progress_percentage}%` }} 
                        />
                      </div>
                    </div>
                    <span className="text-gold text-sm font-medium">{course.progress_percentage}%</span>
                  </div>
                </div>
                <Button size="icon" className="bg-gold/10 text-gold hover:bg-gold/20 flex-shrink-0">
                  <Play className="w-5 h-5" />
                </Button>
              </GlassCard>
            )) : (
              <GlassCard className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-cream/20 mx-auto mb-4" />
                <p className="text-cream/50 mb-4">No user data loaded</p>
                <Link href="/">
                  <Button className="bg-gold text-charcoal hover:bg-gold-light">
                    Back to Home
                  </Button>
                </Link>
              </GlassCard>
            )}
          </div>
        </div>

        {/* Right sidebar */}
        <div>
          <h2 className="font-serif text-xl text-cream mb-6">Statistics</h2>
          <div className="space-y-4">
            <GlassCard>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-400">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-cream font-medium">{t("dash_my_meditations")}</h4>
                  <p className="text-gold text-lg font-bold">
                    {userProfile?.total_hours_spent?.toFixed(1) || "0"} h
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/20 text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-cream font-medium">Current Level</h4>
                  <p className="text-emerald-400 text-lg font-bold">
                    {userProfile?.current_level || "Beginner"}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="mt-6">
            <h2 className="font-serif text-xl text-cream mb-4">Your Points</h2>
            <GlassCard className="p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-3xl font-bold">⭐</span>
              </div>
              <h4 className="text-cream font-medium mb-2">Total Points</h4>
              <p className="text-gold text-3xl font-bold">{userProfile?.total_points || 0}</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
