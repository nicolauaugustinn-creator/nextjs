"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Headphones, Send, User, Wand2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useT } from "@/lib/lang-context"
import type { TranslationKey } from "@/lib/i18n"

const navItems: { labelKey: TranslationKey; href: string; icon: React.ElementType; external?: boolean }[] = [
  { labelKey: "mobile_home", href: "/", icon: Home },
  { labelKey: "mobile_courses", href: "/courses", icon: BookOpen },
  { labelKey: "mobile_meditations", href: "/meditations", icon: Headphones },
  { labelKey: "mobile_tarot", href: "/tarot", icon: Wand2 },
  { labelKey: "mobile_profile", href: "/dashboard", icon: User },
]

export function MobileBottomNav() {
  const pathname = usePathname()
  const { t } = useT()

  if (pathname.startsWith("/admin")) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/90 backdrop-blur-xl border-t border-border/50 pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

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
                <span className="text-[10px] font-medium">{t(item.labelKey)}</span>
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
              <span className="text-[10px] font-medium">{t(item.labelKey)}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
