"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Image,
  BookOpen,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  ChevronDown,
  Bell,
  Search,
  Music,
  Sparkles,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/media", label: "Media", icon: Image },
  { href: "/admin/courses", label: "Cursuri", icon: BookOpen },
  { href: "/admin/meditations", label: "Meditatii", icon: Music },
  { href: "/admin/practices", label: "Practici", icon: Sparkles },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/users", label: "Utilizatori", icon: Users },
  { href: "/admin/reviews", label: "Recenzii", icon: MessageSquare },
  { href: "/admin/settings", label: "Setari", icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

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
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-charcoal-light border-r border-white/10 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-burgundy flex items-center justify-center">
                <span className="font-serif text-lg text-cream">K</span>
              </div>
              <div>
                <span className="font-serif text-lg text-cream block">KARMA</span>
                <span className="text-gold text-xs tracking-wider">ADMIN</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== "/admin" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gold/10 text-gold border border-gold/20"
                      : "text-cream/60 hover:bg-white/5 hover:text-cream"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Bottom section */}
          <div className="p-4 border-t border-white/10">
            <Link href="/" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/10 text-cream/60 hover:bg-white/5"
              >
                Deschide Site
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-charcoal/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-cream/60 hover:text-cream"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="hidden md:block relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
                <Input
                  type="text"
                  placeholder="Cauta..."
                  className="pl-10 bg-charcoal-light/50 border-white/10 text-cream placeholder:text-cream/40 h-9"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-cream/60 hover:text-cream">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-burgundy rounded-full" />
              </button>

              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-sm font-medium">V</span>
                </div>
                <span className="text-cream text-sm hidden md:block">Валентина</span>
                <ChevronDown className="w-4 h-4 text-cream/40" />
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
