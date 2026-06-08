// User system - integrates with localStorage for development
// Backend: Neon database integration available via server actions

export interface UserData {
  id: string
  name: string
  email: string
  avatar: string
  points: number
  referralCode: string
  referredUsers: string[]
  createdAt: string
  stats: {
    coursesCompleted: number
    meditationsCompleted: number
    totalHoursSpent: number
    level: string
  }
}

export function generateReferralCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

const DEFAULT_USER: UserData = {
  id: 'user_' + Math.random().toString(36).substr(2, 9),
  name: 'Alexandra Popescu',
  email: 'alexandra@email.com',
  avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-avatar-OkvnV9dr0cWvlVxEVq4lHMav1V9hga.jpg',
  points: 1250,
  referralCode: generateReferralCode(),
  referredUsers: [],
  createdAt: new Date().toISOString(),
  stats: {
    coursesCompleted: 3,
    meditationsCompleted: 42,
    totalHoursSpent: 8.5,
    level: 'Advanced Student',
  },
}

export function getCurrentUser(): UserData {
  if (typeof window === 'undefined') {
    return DEFAULT_USER
  }

  const stored = localStorage.getItem('karma_user_data')
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      return DEFAULT_USER
    }
  }

  return DEFAULT_USER
}

export function saveUser(user: UserData): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('karma_user_data', JSON.stringify(user))
  localStorage.setItem('current_user_id', user.id)
  localStorage.setItem('current_user_email', user.email)
}

export function createNewUser(name: string, email: string): UserData {
  const newUser: UserData = {
    id: 'user_' + Math.random().toString(36).substr(2, 9),
    name,
    email,
    avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-avatar-OkvnV9dr0cWvlVxEVq4lHMav1V9hga.jpg',
    points: 100, // Bonus for registration
    referralCode: generateReferralCode(),
    referredUsers: [],
    createdAt: new Date().toISOString(),
    stats: {
      coursesCompleted: 0,
      meditationsCompleted: 0,
      totalHoursSpent: 0,
      level: 'Beginner',
    },
  }

  saveUser(newUser)
  return newUser
}

export function addPoints(points: number, reason: 'course' | 'meditation' | 'referral'): void {
  const user = getCurrentUser()
  user.points += points

  // Log points history
  const history = getPointsHistory()
  history.push({
    date: new Date().toISOString(),
    points,
    reason,
  })
  savePointsHistory(history)

  saveUser(user)
}

interface PointsHistory {
  date: string
  points: number
  reason: 'course' | 'meditation' | 'referral'
}

export function getPointsHistory(): PointsHistory[] {
  if (typeof window === 'undefined') return []

  const stored = localStorage.getItem('karma_points_history')
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      return []
    }
  }

  return []
}

export function savePointsHistory(history: PointsHistory[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('karma_points_history', JSON.stringify(history))
}

export function processReferral(referredEmail: string): boolean {
  const user = getCurrentUser()

  // Prevent duplicate referrals
  if (user.referredUsers.includes(referredEmail)) {
    return false
  }

  user.referredUsers.push(referredEmail)
  addPoints(50, 'referral')
  saveUser(user)

  return true
}

export function getReferralStats(): { totalReferrals: number; totalReferralPoints: number } {
  const user = getCurrentUser()
  const totalReferrals = user.referredUsers.length
  const totalReferralPoints = totalReferrals * 50

  return { totalReferrals, totalReferralPoints }
}

export function completeCourseMilestone(): void {
  const user = getCurrentUser()
  user.stats.coursesCompleted += 1
  user.stats.totalHoursSpent += 2.5
  addPoints(100, 'course')
  saveUser(user)
}

export function completeMeditationSession(): void {
  const user = getCurrentUser()
  user.stats.meditationsCompleted += 1
  user.stats.totalHoursSpent += 0.25
  addPoints(25, 'meditation')
  saveUser(user)
}

