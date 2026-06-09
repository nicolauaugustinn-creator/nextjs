"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  BookOpen,
  Headphones,
  Calendar,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "@/lib/user-system"

const sidebarLinks = [
  { href: "/dashboard", label: "Главная", icon: LayoutDashboard },
  { href: "/dashboard/courses", label: "Мои курсы", icon: BookOpen },
  { href: "/dashboard/meditations", label: "Медитации", icon: Headphones },
  { href: "/dashboard/consultations", label: "Консультации", icon: Calendar },
  { href: "/dashboard/profile", label: "Профиль", icon: User },
  { href: "/dashboard/settings", label: "Настройки", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const userData = getCurrentUser()
    setUser(userData)
  }, [])

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('karma_user_data')
    localStorage.removeItem('current_user_id')
    localStorage.removeItem('current_user_email')
    
    // Redirect to homepage
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-charcoal flex">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-charcoal-dark/95 backdrop-blur-sm border-r border-gold/20 transform transition-transform duration-300 shadow-2xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-charcoal-dark to-charcoal-dark/90">
          {/* Logo */}
          <div className="p-6 border-b border-gold/20 bg-charcoal-dark/50 backdrop-blur">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-burgundy flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold/30 transition-all">
                <span className="font-serif text-lg text-cream">K</span>
              </div>
              <span className="font-serif text-xl text-cream group-hover:text-gold transition-colors">KARMANUMBERS</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-gold/20 to-gold/10 text-gold border border-gold/30 shadow-md shadow-gold/10"
                      : "text-cream/70 hover:bg-white/8 hover:text-cream hover:border hover:border-white/10"
                  }`}
                >
                  <link.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? "text-gold" : ""}`} />
                  <span className="font-medium">{link.label}</span>
                  {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-gold" />}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gold/20 bg-charcoal-dark/50 backdrop-blur space-y-3">
            <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-cream text-sm font-semibold truncate">{user?.name || "User"}</p>
                <p className="text-cream/50 text-xs truncate">{user?.email || "user@email.com"}</p>
              </div>
            </div>
            
            {/* Points Display */}
            {user && (
              <Link href="/dashboard/profile" onClick={() => setIsSidebarOpen(false)}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-gold/15 to-burgundy/15 border border-gold/30 hover:border-gold/50 transition-all cursor-pointer hover:shadow-md hover:shadow-gold/20 group">
                  <div className="flex-shrink-0">
                    <Zap className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gold/80 text-xs font-semibold">Points</p>
                    <p className="text-gold font-bold text-lg">{user.points}</p>
                  </div>
                </div>
              </Link>
            )}
            
            <Button
              onClick={handleLogout}
              size="sm"
              className="w-full bg-burgundy/20 border border-burgundy/50 text-burgundy hover:bg-burgundy/30 hover:border-burgundy/70 transition-all font-medium"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-charcoal-dark/90 backdrop-blur-xl border-b border-gold/20 shadow-lg">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-cream/60 hover:text-gold transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex-1" />

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-cream/60 hover:text-gold transition-colors group">
                <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full animate-pulse" />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
