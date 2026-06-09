"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { User, Mail, Award, TrendingUp, Settings, LogOut, Edit2, Zap, Gift, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/lang-context"
import { getCurrentUser, getReferralStats } from "@/lib/user-system"

export default function ProfilePage() {
  const { t } = useT()
  const [user, setUser] = useState<any>(null)
  const [referralStats, setReferralStats] = useState({ totalReferrals: 0, totalReferralPoints: 0 })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const userData = getCurrentUser()
    setUser(userData)
    const stats = getReferralStats()
    setReferralStats(stats)
  }, [])

  if (!user) return <div className="p-8 text-cream/60">Loading profile...</div>

  const copyReferralCode = () => {
    if (user?.referralCode) {
      navigator.clipboard.writeText(`Join using code: ${user.referralCode}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gold/10 to-burgundy/10 rounded-xl p-8 border border-gold/30 shadow-lg shadow-gold/10"
      >
        <div className="flex items-start gap-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold/30 to-burgundy/30 flex items-center justify-center flex-shrink-0 border-2 border-gold/50 shadow-lg">
            <User className="w-14 h-14 text-gold" />
          </div>
          <div className="flex-1">
            <h1 className="font-serif text-4xl text-cream mb-3">{user.name}</h1>
            <p className="text-gold font-bold text-lg mb-2">{user.stats.level}</p>
            <p className="text-cream/60">Участник с {new Date(user.createdAt).toLocaleDateString('ru-RU')}</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-4 gap-4"
      >
        <div className="bg-gradient-to-br from-blue/10 to-blue/5 rounded-lg p-6 border border-blue/30 hover:border-blue/50 transition-all hover:shadow-lg hover:shadow-blue/20">
          <p className="text-cream/70 text-sm font-medium mb-2">Курсы</p>
          <p className="font-serif text-3xl text-blue-400">{user.stats.coursesCompleted}</p>
        </div>
        <div className="bg-gradient-to-br from-purple/10 to-purple/5 rounded-lg p-6 border border-purple/30 hover:border-purple/50 transition-all hover:shadow-lg hover:shadow-purple/20">
          <p className="text-cream/70 text-sm font-medium mb-2">Медитации</p>
          <p className="font-serif text-3xl text-purple-400">{user.stats.meditationsCompleted}</p>
        </div>
        <div className="bg-gradient-to-br from-green/10 to-green/5 rounded-lg p-6 border border-green/30 hover:border-green/50 transition-all hover:shadow-lg hover:shadow-green/20">
          <p className="text-cream/70 text-sm font-medium mb-2">Часов</p>
          <p className="font-serif text-3xl text-green-400">{user.stats.totalHoursSpent.toFixed(1)}h</p>
        </div>
        <div className="bg-gradient-to-br from-gold/10 to-burgundy/10 rounded-lg p-6 border border-gold/30 hover:border-gold/50 transition-all hover:shadow-lg hover:shadow-gold/20">
          <p className="text-cream/70 text-sm font-medium mb-2">Уровень</p>
          <p className="font-serif text-2xl text-gold">{user.stats.level}</p>
        </div>
      </motion.div>

      {/* Points & Referrals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Points */}
        <div className="bg-gradient-to-br from-gold/15 to-burgundy/10 rounded-xl p-8 border border-gold/40 shadow-lg shadow-gold/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl text-cream">Ваши Очки</h3>
            <Zap className="w-8 h-8 text-gold" />
          </div>
          <p className="font-serif text-6xl text-gold mb-6 font-bold">{user.points}</p>
          <p className="text-cream/70 text-sm mb-8">Доступны для обмена на награды</p>
          <div className="border-t border-gold/20 pt-6 mt-6">
            <p className="text-xs text-cream/60 mb-4 font-medium">Как получить очки:</p>
            <ul className="space-y-3">
              <li className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-cream/80">Завершить курс</span>
                <span className="text-gold font-bold">+100</span>
              </li>
              <li className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-cream/80">Сеанс медитации</span>
                <span className="text-gold font-bold">+25</span>
              </li>
              <li className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-cream/80">Реферал</span>
                <span className="text-gold font-bold">+50</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Referrals */}
        <div className="bg-gradient-to-br from-burgundy/15 to-purple/10 rounded-xl p-8 border border-burgundy/40 shadow-lg shadow-burgundy/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl text-cream">Программа Рефералов</h3>
            <Gift className="w-8 h-8 text-burgundy-400" />
          </div>
          <p className="text-cream/70 text-sm mb-4 font-medium">Ваш код рефeral:</p>
          <div className="flex gap-2 mb-6">
            <div className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-burgundy/30 flex items-center justify-between">
              <span className="font-mono text-gold font-bold text-lg">{user.referralCode}</span>
            </div>
            <Button
              size="sm"
              onClick={copyReferralCode}
              className="bg-gold/20 hover:bg-gold/30 text-gold border border-gold/50 font-semibold"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          <div className="bg-gradient-to-r from-burgundy/10 to-purple/10 rounded-lg p-4 border border-burgundy/30 hover:border-burgundy/50 transition-all">
            <p className="text-sm text-cream/70 mb-3 font-medium">Ваши рефералы:</p>
            <p className="font-serif text-4xl text-burgundy-400 mb-2">{referralStats.totalReferrals}</p>
            <p className="text-cream/50 text-xs">
              {referralStats.totalReferralPoints} очков заработано
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-charcoal-light/80 to-charcoal-light/50 rounded-xl p-8 border border-white/20 shadow-lg backdrop-blur-sm"
      >
        <h3 className="font-serif text-2xl text-cream mb-6">Контактная информация</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-cream/70 text-sm font-medium">Email</p>
              <p className="text-cream font-semibold">{user.email}</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple/20 to-purple/10 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-cream/70 text-sm font-medium">ID пользователя</p>
                <p className="text-cream font-mono text-sm">{user.id}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
