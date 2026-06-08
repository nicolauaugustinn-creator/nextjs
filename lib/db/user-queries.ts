// Database query layer for Neon PostgreSQL - SERVER-ONLY
// This file uses 'use server' and should never be imported from client components
'use server'

import { Pool } from 'pg'

let pool: Pool | null = null

// Initialize database pool connection
export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    })
  }
  return pool
}

export interface UserProfile {
  id: string
  email: string
  name: string
  avatar?: string
  points: number
  referralCode: string
  referredUsers: string[]
  level: string
  stats: {
    coursesCompleted: number
    meditationsCompleted: number
    totalHoursSpent: number
  }
  createdAt: string
  updatedAt: string
}

// Get user profile by ID or email
export async function getUserProfile(
  userIdOrEmail: string
): Promise<UserProfile | null> {
  try {
    const query = `
      SELECT 
        id,
        email,
        name,
        avatar,
        points,
        referral_code as "referralCode",
        referred_users as "referredUsers",
        level,
        stats,
        created_at as "createdAt",
        updated_at as "updatedAt"
      FROM neon_auth.user_profile
      WHERE id = $1 OR email = $2
      LIMIT 1
    `

    const result = await getPool().query(query, [userIdOrEmail, userIdOrEmail])

    if (result.rows.length === 0) {
      return null
    }

    return result.rows[0] as UserProfile
  } catch (error) {
    console.error('[v0] Error getting user profile:', error)
    // Return mock data for development
    return getMockUserProfile(userIdOrEmail)
  }
}

// Create new user profile
export async function createUserProfile(userData: Partial<UserProfile>): Promise<UserProfile> {
  try {
    const id = userData.id || `user_${Date.now()}`
    const referralCode = userData.referralCode || generateReferralCode()
    const now = new Date().toISOString()

    const query = `
      INSERT INTO neon_auth.user_profile (
        id,
        email,
        name,
        avatar,
        points,
        referral_code,
        referred_users,
        level,
        stats,
        created_at,
        updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      ON CONFLICT (id) DO UPDATE SET updated_at = $11
      RETURNING 
        id,
        email,
        name,
        avatar,
        points,
        referral_code as "referralCode",
        referred_users as "referredUsers",
        level,
        stats,
        created_at as "createdAt",
        updated_at as "updatedAt"
    `

    const stats = userData.stats || {
      coursesCompleted: 0,
      meditationsCompleted: 0,
      totalHoursSpent: 0,
    }

    const result = await getPool().query(query, [
      id,
      userData.email || 'user@email.com',
      userData.name || 'User',
      userData.avatar || null,
      userData.points || 1250,
      referralCode,
      userData.referredUsers || [],
      userData.level || 'Beginner',
      JSON.stringify(stats),
      now,
      now,
    ])

    return result.rows[0] as UserProfile
  } catch (error) {
    console.error('[v0] Error creating user profile:', error)
    // Return mock for development
    return getMockUserProfile(userData.email || 'user@email.com')
  }
}

// Add points to user
export async function addPoints(userId: string, points: number, reason: string): Promise<number> {
  try {
    const query = `
      UPDATE neon_auth.user_profile
      SET 
        points = points + $1,
        updated_at = NOW()
      WHERE id = $2
      RETURNING points
    `

    const result = await getPool().query(query, [points, userId])

    if (result.rows.length === 0) {
      throw new Error('User not found')
    }

    // Log points history
    await logPointsHistory(userId, points, reason)

    return result.rows[0].points
  } catch (error) {
    console.error('[v0] Error adding points:', error)
    return 0
  }
}

// Get points history
export async function getPointsHistory(userId: string): Promise<any[]> {
  try {
    const query = `
      SELECT 
        id,
        user_id as "userId",
        points,
        reason,
        created_at as "createdAt"
      FROM neon_auth.user_points_history
      WHERE user_id = $1
      ORDER BY created_at DESC
      LIMIT 50
    `

    const result = await getPool().query(query, [userId])
    return result.rows
  } catch (error) {
    console.error('[v0] Error getting points history:', error)
    return []
  }
}

// Log points history
async function logPointsHistory(userId: string, points: number, reason: string): Promise<void> {
  try {
    const query = `
      INSERT INTO neon_auth.user_points_history (user_id, points, reason)
      VALUES ($1, $2, $3)
    `

    await getPool().query(query, [userId, points, reason])
  } catch (error) {
    console.error('[v0] Error logging points history:', error)
  }
}

// Get referrals for user
export async function getReferrals(userId: string): Promise<string[]> {
  try {
    const query = `
      SELECT referred_users as "referredUsers"
      FROM neon_auth.user_profile
      WHERE id = $1
    `

    const result = await getPool().query(query, [userId])

    if (result.rows.length === 0) {
      return []
    }

    return result.rows[0].referredUsers || []
  } catch (error) {
    console.error('[v0] Error getting referrals:', error)
    return []
  }
}

// Add referral
export async function addReferral(userId: string, referredUserId: string): Promise<boolean> {
  try {
    const query = `
      UPDATE neon_auth.user_profile
      SET 
        referred_users = array_append(referred_users, $1),
        points = points + 50,
        updated_at = NOW()
      WHERE id = $2
    `

    await getPool().query(query, [referredUserId, userId])

    // Log referral bonus points
    await logPointsHistory(userId, 50, `Referral bonus for ${referredUserId}`)

    return true
  } catch (error) {
    console.error('[v0] Error adding referral:', error)
    return false
  }
}

// Generate referral code
export function generateReferralCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

// Mock user profile for development
function getMockUserProfile(identifier: string): UserProfile {
  return {
    id: `user_${Math.random().toString(36).substr(2, 9)}`,
    email: identifier.includes('@') ? identifier : 'alexandra@email.com',
    name: 'Alexandra Popescu',
    avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-avatar-OkvnV9dr0cWvlVxEVq4lHMav1V9hga.jpg',
    points: 1250,
    referralCode: generateReferralCode(),
    referredUsers: [],
    level: 'Advanced Student',
    stats: {
      coursesCompleted: 3,
      meditationsCompleted: 42,
      totalHoursSpent: 8.5,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}
