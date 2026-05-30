"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Headphones, Send, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Acasa", href: "/", icon: Home },
  { label: "Cursuri", href: "/courses", icon: BookOpen },
  { label: "Meditatii", href: "/meditations", icon: Headphones },
  { label: "Telegram", href: "https://t.me/karmanumbers", icon: Send, external: true },
  { label: "Profil", href: "/dashboard", icon: User }
]

export function MobileBottomNav() {
  const pathname = usePathname()

  // Hide on admin pages
  if (pathname.startsWith("/admin")) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/90 backdrop-blur-xl border-t border-border/50 pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.href === "/" 
            ? pathname === "/" 
            : pathname.startsWith(item.href)
          
          if (item.external) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 px-3 py-2 text-gold"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-md animate-pulse-glow" />
                  <Icon className="relative w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </a>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 transition-colors",
                isActive ? "text-gold" : "text-muted-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
