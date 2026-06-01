"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Calendar, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "../glass-card"
import { useT } from "@/lib/lang-context"

export function RetreatPreview() {
  const { t } = useT()

  const retreatHighlights = [
    { icon: Calendar, textKey: "retreat_days" as const },
    { icon: Users, textKey: "retreat_participants" as const },
    { icon: MapPin, textKey: "nav_retreat" as const },
    { icon: Sparkles, textKey: "dir_spirituality" as const },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-violet/5" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <GlassCard
          variant="gold"
          className="p-8 md:p-12 lg:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet/5 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                {t("retreat_tag")}
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t("retreat_title")}
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("retreat_subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/retreat">
                  <Button size="lg" className="bg-gold hover:bg-gold-light text-background group">
                    {t("retreat_learn_more")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="https://t.me/karmanumbers" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                    {t("retreat_register")}
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-violet/20 to-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center animate-pulse-glow">
                      <Sparkles className="w-10 h-10 text-gold" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4">
                <GlassCard variant="gold" className="p-4">
                  <p className="text-sm text-gold font-medium">{t("retreat_next")}</p>
                  <p className="text-lg text-foreground font-serif">{t("courses_coming_soon")}</p>
                </GlassCard>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
