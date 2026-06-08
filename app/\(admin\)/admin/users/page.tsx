'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Award, TrendingUp, MoreVertical, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/karma/glass-card'
import { useT } from '@/lib/lang-context'

interface User {
  id: string
  name: string
  email: string
  total_points: number
  courses_completed: number
  current_level: string
  created_at: string
}

export default function AdminUsersPage() {
  const { t } = useT()
  const [users, setUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In production, this would fetch from API
    // For now, showing empty state for real data implementation
    setIsLoading(false)
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalUsers = users.length
  const totalPoints = users.reduce((sum, u) => sum + u.total_points, 0)
  const avgLevel = users.length > 0
    ? Math.round((users.filter(u => u.current_level === 'Advanced').length / users.length) * 100)
    : 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-serif text-3xl text-cream mb-2">User Management</h1>
        <p className="text-cream/60">Manage all users and their progress</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cream/60 text-sm mb-1">Total Users</p>
              <p className="font-serif text-3xl text-cream">{totalUsers}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cream/60 text-sm mb-1">Total Points Earned</p>
              <p className="font-serif text-3xl text-gold">{totalPoints}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <Award className="w-6 h-6 text-gold" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cream/60 text-sm mb-1">Advanced Users</p>
              <p className="font-serif text-3xl text-emerald-400">{avgLevel}%</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-cream/40" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50"
          />
        </div>
        <Button className="bg-white/10 text-cream hover:bg-white/20">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        {filteredUsers.length > 0 ? (
          <div className="space-y-2">
            {filteredUsers.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-cream font-medium">{user.name}</h4>
                    <p className="text-cream/50 text-sm">{user.email}</p>
                  </div>
                  <div className="flex gap-8 items-center">
                    <div className="text-center">
                      <p className="text-cream/60 text-xs">Courses</p>
                      <p className="text-cream font-bold">{user.courses_completed}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cream/60 text-xs">Points</p>
                      <p className="text-gold font-bold">{user.total_points}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cream/60 text-xs">Level</p>
                      <p className="text-emerald-400 font-bold text-sm">{user.current_level}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="text-cream/60 hover:text-cream">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <GlassCard className="p-8 text-center">
            <Users className="w-12 h-12 text-cream/20 mx-auto mb-4" />
            <p className="text-cream/50">
              {isLoading ? 'Loading users...' : 'No users found. Users will appear here after they register.'}
            </p>
          </GlassCard>
        )}
      </div>
    </div>
  )
}
