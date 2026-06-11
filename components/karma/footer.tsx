"use client"

import Link from "next/link"
import { Instagram, Youtube, Send, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/lang-context"

const socialLinks = {
  instagram: [
    { url: "https://www.instagram.com/karma_number479", label: "@karma_number479" },
    { url: "https://www.instagram.com/karmanumbers792", label: "@karmanumbers792" },
  ],
  tiktok: [
    { url: "https://www.tiktok.com/@karmanumbers792", label: "@karmanumbers792" },
    { url: "https://www.tiktok.com/@karmanumbers779", label: "@karmanumbers779" },
  ],
  youtube: "https://www.youtube.com/@KarmaNumbers777",
  telegram: "https://t.me/karmanumbers",
  whatsapp: "https://wa.me/37379216015",
  viber: "viber://chat?number=37379216015",
  phone: "+373 79 216 015",
}

export function Footer() {
  const { t } = useT()

  const footerLinks = {
    platform: [
      { labelKey: "nav_courses", href: "/courses" },
      { labelKey: "nav_mini_courses", href: "/courses?category=mini" },
      { labelKey: "nav_meditations", href: "/meditations" },
      { labelKey: "nav_practices", href: "/practices" },
      { labelKey: "nav_retreat", href: "/retreat" },
    ],
  } as const

  return (
    <footer className="relative border-t border-border/30 bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-dark rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                <span className="text-gold font-serif text-xl font-bold">KN</span>
              </div>
              <span className="text-gold font-serif text-lg font-semibold tracking-wide">KARMANUMBERS</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">{t("footer_tagline")}</p>

            <div className="flex items-center gap-3">
              <a href={socialLinks.instagram[0].url} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
                aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={socialLinks.tiktok[0].url} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
                aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
                aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
                aria-label="Telegram">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("footer_learning")}</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors hover-underline">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("footer_navigation")}</h3>
            <ul className="space-y-3">
              {(
                [
                  { labelKey: "nav_my_path" as const, href: "/my-path" },
                  { labelKey: "nav_blog" as const, href: "/blog" },
                  { labelKey: "nav_reviews" as const, href: "/reviews" },
                  { labelKey: "nav_consultations" as const, href: "/consultations" },
                ] as const
              ).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors hover-underline">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("footer_connect")}</h3>
            <div className="space-y-3">
              <a href={`tel:${socialLinks.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                {socialLinks.phone}
              </a>
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <div className="mt-6">
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gold hover:bg-gold-light text-background">
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-xs text-muted-foreground">
              2024 KARMANUMBERS. {t("footer_rights")}.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-gold transition-colors">
                {t("footer_privacy")}
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-gold transition-colors">
                {t("footer_terms")}
              </Link>
            </div>
          </div>

          {/* Created By Credit */}
          <div className="pt-6 border-t border-border/20">
            <p className="text-center text-xs text-muted-foreground/70">
              Creat de 
              <a href="https://nicolauaugustinn.com" target="_blank" rel="noopener noreferrer" 
                className="text-gold hover:text-gold-light transition-colors ml-1">
                Nicolau Augustinn
              </a>
              <span className="mx-1">•</span>
              Dezvoltat cu 
              <span className="text-gold ml-1">Next.js, React & Neon</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
