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
        className="bg-charcoal-light/50 rounded-lg p-6 border border-white/10"
      >
        <div className="flex items-start gap-4">
          <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
            <User className="w-12 h-12 text-gold" />
          </div>
          <div className="flex-1">
            <h1 className="font-serif text-3xl text-cream mb-2">{user.name}</h1>
            <p className="text-gold font-medium mb-1">{user.stats.level}</p>
            <p className="text-cream/60 text-sm">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
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
        <div className="bg-charcoal-light/50 rounded-lg p-4 border border-white/10">
          <p className="text-cream/70 text-sm mb-2">Courses</p>
          <p className="font-serif text-3xl text-cream">{user.stats.coursesCompleted}</p>
        </div>
        <div className="bg-charcoal-light/50 rounded-lg p-4 border border-white/10">
          <p className="text-cream/70 text-sm mb-2">Meditations</p>
          <p className="font-serif text-3xl text-cream">{user.stats.meditationsCompleted}</p>
        </div>
        <div className="bg-charcoal-light/50 rounded-lg p-4 border border-white/10">
          <p className="text-cream/70 text-sm mb-2">Hours</p>
          <p className="font-serif text-3xl text-cream">{user.stats.totalHoursSpent.toFixed(1)}h</p>
        </div>
        <div className="bg-charcoal-light/50 rounded-lg p-4 border border-white/10">
          <p className="text-cream/70 text-sm mb-2">Level</p>
          <p className="font-serif text-lg text-cream">{user.stats.level}</p>
        </div>
      </motion.div>

      {/* Points & Referrals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {/* Points */}
        <div className="bg-charcoal-light/50 rounded-lg p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg text-cream">Your Points</h3>
            <Zap className="w-6 h-6 text-gold" />
          </div>
          <p className="font-serif text-5xl text-gold mb-4">{user.points}</p>
          <p className="text-cream/60 text-sm mb-6">Available to redeem for rewards</p>
          <div className="border-t border-white/10 pt-4 mt-4">
            <p className="text-xs text-cream/50 mb-3">How to earn points:</p>
            <ul className="space-y-2 text-sm text-cream/70">
              <li className="flex justify-between">
                <span>Complete course</span>
                <span className="text-gold">+100</span>
              </li>
              <li className="flex justify-between">
                <span>Meditation session</span>
                <span className="text-gold">+25</span>
              </li>
              <li className="flex justify-between">
                <span>Referral</span>
                <span className="text-gold">+50</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Referrals */}
        <div className="bg-charcoal-light/50 rounded-lg p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg text-cream">Referral Program</h3>
            <Gift className="w-6 h-6 text-gold" />
          </div>
          <p className="text-cream/60 text-sm mb-3">Your referral code:</p>
          <div className="flex gap-2 mb-4">
            <div className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="font-mono text-gold font-bold">{user.referralCode}</span>
            </div>
            <Button
              size="sm"
              onClick={copyReferralCode}
              className="bg-gold text-charcoal hover:bg-gold-light"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="text-sm text-cream/70 mb-2">Your referrals:</p>
            <p className="font-serif text-3xl text-gold mb-1">{referralStats.totalReferrals}</p>
            <p className="text-cream/50 text-xs">
              {referralStats.totalReferralPoints} points earned
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-charcoal-light/50 rounded-lg p-6 border border-white/10"
      >
        <h3 className="font-serif text-lg text-cream mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-cream/70 text-sm">Email</p>
              <p className="text-cream">{user.email}</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center">
                <User className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-cream/70 text-sm">User ID</p>
                <p className="text-cream font-mono text-sm">{user.id}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
