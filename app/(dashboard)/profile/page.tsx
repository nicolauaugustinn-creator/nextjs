"use client"

import { motion } from "framer-motion"
import { User, Mail, Award, TrendingUp, Settings, LogOut, Edit2, Zap, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/karma/glass-card"
import { useT } from "@/lib/lang-context"

export default function ProfilePage() {
  const { t } = useT()

  // Mock user data - în viitor va veni de la API/DB
  const user = {
    name: "Alexandra Popescu",
    email: "alexandra@email.com",
    joined: "January 2024",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-avatar-OkvnV9dr0cWvlVxEVq4lHMav1V9hga.jpg",
    level: "Advanced Student",
    bio: "Exploring numerology to transform my life and help others discover their destiny.",
    completionRate: 68,
    totalHours: 42,
    coursesCompleted: 3,
    points: 1250,
    availableDiscounts: [
      { id: 1, title: "10% Off Any Course", cost: 500, applied: false },
      { id: 2, title: "Free Meditation Pack", cost: 300, applied: false },
      { id: 3, title: "20% Off Courses", cost: 1000, applied: false },
    ],
  }

  const achievements = [
    { id: 1, title: "First Steps", description: "Completed first course", icon: "🎯" },
    { id: 2, title: "Knowledge Seeker", description: "Completed 3 courses", icon: "📚" },
    { id: 3, title: "Meditative Mind", description: "10+ meditation sessions", icon: "🧘" },
    { id: 4, title: "Certified Student", description: "Passed certification exam", icon: "✨" },
  ]

  const skills = [
    { name: "Numerological Analysis", level: 85 },
    { name: "Life Path Reading", level: 78 },
    { name: "Name Numerology", level: 72 },
    { name: "Meditation Practice", level: 88 },
  ]

  return (
    <div className="space-y-8 pb-8">
      {/* Header with Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative pt-8"
      >
        <GlassCard className="overflow-hidden">
          <div className="relative h-32 bg-gradient-to-r from-gold/20 to-purple/20 rounded-t-lg" />
          
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-12 relative z-10">
              <div className="w-32 h-32 rounded-full border-4 border-background bg-gradient-to-br from-gold to-purple-500 overflow-hidden flex-shrink-0">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 mt-4">
                <h1 className="font-serif text-3xl text-cream mb-1">{user.name}</h1>
                <p className="text-gold font-medium mb-2">{user.level}</p>
                <p className="text-cream/60 text-sm mb-4">{user.bio}</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" className="bg-gold text-charcoal hover:bg-gold-light">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button size="sm" variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="font-serif text-xl text-cream mb-4">{t("dash_progress")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GlassCard>
            <div className="flex items-center justify-between mb-3">
              <span className="text-cream/70 text-sm">Overall Completion</span>
              <TrendingUp className="w-5 h-5 text-gold" />
            </div>
            <p className="font-serif text-3xl text-cream">{user.completionRate}%</p>
            <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold to-gold-dark"
                style={{ width: `${user.completionRate}%` }}
              />
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between mb-3">
              <span className="text-cream/70 text-sm">Learning Hours</span>
              <span className="text-gold font-serif">⏱</span>
            </div>
            <p className="font-serif text-3xl text-cream">{user.totalHours}h</p>
            <p className="text-cream/50 text-sm mt-2">total practice time</p>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between mb-3">
              <span className="text-cream/70 text-sm">Courses</span>
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="font-serif text-3xl text-cream">{user.coursesCompleted}</p>
            <p className="text-cream/50 text-sm mt-2">completed</p>
          </GlassCard>
        </div>
      </motion.div>

      {/* Rewards & Points System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-serif text-xl text-cream mb-4">{t("profile_rewards")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Points Card */}
          <GlassCard className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-cream">{t("profile_available_points")}</h3>
              <Zap className="w-6 h-6 text-gold" />
            </div>
            <p className="font-serif text-4xl text-gold mb-2">{user.points}</p>
            <p className="text-cream/60 text-sm">{t("profile_points_earned")}</p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-cream/50 mb-3">{t("profile_points_from")}:</p>
              <div className="space-y-2 text-sm text-cream/70">
                <div className="flex justify-between">
                  <span>• {t("profile_course_complete")}</span>
                  <span className="text-gold">+50</span>
                </div>
                <div className="flex justify-between">
                  <span>• {t("profile_lesson_complete")}</span>
                  <span className="text-gold">+10</span>
                </div>
                <div className="flex justify-between">
                  <span>• {t("profile_meditation_complete")}</span>
                  <span className="text-gold">+5</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Available Discounts */}
          <GlassCard className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-cream">{t("profile_available_rewards")}</h3>
              <Gift className="w-6 h-6 text-gold" />
            </div>
            <div className="space-y-3">
              {user.availableDiscounts.map((discount, index) => (
                <div key={discount.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-cream font-medium">{discount.title}</p>
                    <p className="text-cream/50 text-sm">{discount.cost} {t("profile_points")}</p>
                  </div>
                  <Button
                    size="sm"
                    disabled={user.points < discount.cost}
                    className={discount.applied ? "bg-green-600/50 text-cream" : user.points >= discount.cost ? "bg-gold text-charcoal hover:bg-gold-light" : "bg-white/10 text-cream/50"}
                  >
                    {discount.applied ? "✓ Used" : user.points >= discount.cost ? "Redeem" : "Locked"}
                  </Button>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-serif text-xl text-cream mb-4">Skills & Proficiency</h2>
        <GlassCard className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-cream font-medium">{skill.name}</span>
                <span className="text-gold text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </GlassCard>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="font-serif text-xl text-cream mb-4">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <GlassCard key={achievement.id} className="text-center">
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h3 className="text-cream font-medium mb-1">{achievement.title}</h3>
              <p className="text-cream/50 text-sm">{achievement.description}</p>
            </GlassCard>
          ))}
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="font-serif text-xl text-cream mb-4">Contact Information</h2>
        <GlassCard>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-cream/70 text-sm">Email</p>
                <p className="text-cream font-medium">{user.email}</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-cream/70 text-sm">Member Since</p>
                  <p className="text-cream font-medium">{user.joined}</p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="border border-red-500/30 rounded-lg p-6 bg-red-500/5">
          <h3 className="font-serif text-lg text-red-400 mb-3">Danger Zone</h3>
          <p className="text-cream/60 text-sm mb-4">Once you delete your account, there is no going back. Please be certain.</p>
          <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
            <LogOut className="w-4 h-4 mr-2" />
            Delete Account
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
