"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, Users, Gift, Star } from "lucide-react"
import Link from "next/link"
import { useT } from "@/lib/lang-context"
import type { TranslationKey } from "@/lib/i18n"

export function TelegramCTA() {
  const { t } = useT()

  const benefits: Array<{ icon: typeof Gift; titleKey: TranslationKey; descKey: TranslationKey }> = [
    { icon: Gift, titleKey: "free_test_tag", descKey: "meditations_subtitle" },
    { icon: Star, titleKey: "tg_tag", descKey: "tg_desc" },
    { icon: Users, titleKey: "reviews_tag", descKey: "reviews_subtitle" },
  ]

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-charcoal-light/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("tg_tag")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              {t("tg_title")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("tg_desc")}
            </p>

            <Link href="https://t.me/karmanumbers" target="_blank">
              <Button size="lg" className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white">
                <Send className="mr-2 w-5 h-5" />
                {t("tg_btn")}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-burgundy flex items-center justify-center">
                  <Send className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">KARMANUMBERS</h3>
                  <p className="text-muted-foreground text-sm">@karmanumbers</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-muted-foreground">{t("tg_members")}</span>
                  <span className="text-gold font-medium">12 500+</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-muted-foreground">{t("tg_posts")}</span>
                  <span className="text-gold font-medium">500+</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">{t("common_loading").replace("...", "")}</span>
                  <span className="text-gold font-medium">
                    {t("tg_tag")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
