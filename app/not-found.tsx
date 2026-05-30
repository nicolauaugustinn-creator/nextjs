"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Sparkles } from "lucide-react"
import { useT } from "@/lib/lang-context"

export default function NotFound() {
  const { t } = useT()

  const quickLinks = [
    { label: t("nav_courses"), href: "/courses" },
    { label: t("nav_meditations"), href: "/meditations" },
    { label: t("nav_blog"), href: "/blog" },
    { label: t("nav_my_path"), href: "/my-path" },
    { label: t("nav_consultations"), href: "/consultations" },
  ]

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.1),transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-purple-dark/10 blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-[10rem] md:text-[14rem] font-serif font-bold leading-none tracking-tighter select-none">
            <span className="bg-gradient-to-b from-gold via-gold/80 to-gold/20 bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif text-cream">{t("notfound_title")}</h2>
          <p className="text-cream/60 text-lg max-w-md mx-auto">{t("notfound_desc")}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button asChild size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              {t("notfound_back")}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gold/50 text-gold hover:bg-gold/10">
            <Link href="/courses">
              <Search className="mr-2 h-4 w-4" />
              {t("courses_view_all")}
            </Link>
          </Button>
        </div>

        <div className="mt-16">
          <p className="text-sm text-cream/50 mb-4">{t("notfound_check")}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm rounded-full border border-gold/20 bg-charcoal/50 text-cream/70 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Sparkles className="w-8 h-8 text-gold/30 mx-auto" />
        </div>
      </div>
    </main>
  )
}
