"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Banknote, Heart, Zap, Compass, Activity, Users, Baby, HeartCrack } from "lucide-react"
import { GlassCard } from "../glass-card"
import { useT } from "@/lib/lang-context"
import type { TranslationKey } from "@/lib/i18n"

const directions = [
  { id: "1", titleKey: "dir_money" as TranslationKey, icon: Banknote, href: "/courses?category=money", color: "from-yellow-500/20 to-amber-500/20" },
  { id: "2", titleKey: "dir_relations" as TranslationKey, icon: Heart, href: "/courses?category=relationships", color: "from-pink-500/20 to-rose-500/20" },
  { id: "3", titleKey: "dir_spirituality" as TranslationKey, icon: Zap, href: "/courses?category=energy", color: "from-violet-500/20 to-purple-500/20" },
  { id: "4", titleKey: "dir_numerology" as TranslationKey, icon: Compass, href: "/courses?category=destiny", color: "from-blue-500/20 to-indigo-500/20" },
  { id: "5", titleKey: "dir_money" as TranslationKey, icon: Activity, href: "/courses?category=health", color: "from-green-500/20 to-emerald-500/20" },
  { id: "6", titleKey: "dir_relations" as TranslationKey, icon: Users, href: "/courses?category=compatibility", color: "from-orange-500/20 to-red-500/20" },
  { id: "7", titleKey: "dir_spirituality" as TranslationKey, icon: Baby, href: "/courses/detskaya-matrica", color: "from-cyan-500/20 to-teal-500/20" },
  { id: "8", titleKey: "dir_numerology" as TranslationKey, icon: HeartCrack, href: "/courses/travmy", color: "from-slate-500/20 to-zinc-500/20" },
]

const directionLabels: Record<string, Record<string, string>> = {
  "1": { ru: "Деньги", ro: "Bani", en: "Money", ua: "Гроші" },
  "2": { ru: "Отношения", ro: "Relatii", en: "Relationships", ua: "Стосунки" },
  "3": { ru: "Энергия", ro: "Energie", en: "Energy", ua: "Енергія" },
  "4": { ru: "Предназначение", ro: "Menire", en: "Destiny", ua: "Призначення" },
  "5": { ru: "Здоровье", ro: "Sanatate", en: "Health", ua: "Здоров'я" },
  "6": { ru: "Совместимость", ro: "Compatibilitate", en: "Compatibility", ua: "Сумісність" },
  "7": { ru: "Детская матрица", ro: "Matricea copilului", en: "Child matrix", ua: "Дитяча матриця" },
  "8": { ru: "Травмы", ro: "Traume", en: "Traumas", ua: "Травми" },
}

export function DirectionsSection() {
  const { t, lang } = useT()

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet/10 text-violet-light text-sm font-medium mb-4">
            {t("dir_tag")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("dir_title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {directions.map((direction, index) => (
            <Link key={direction.id} href={direction.href}>
              <GlassCard
                variant="default"
                className="h-full group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${direction.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <direction.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                  {directionLabels[direction.id][lang]}
                </h3>
              </GlassCard>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard variant="gold" className="text-center p-8 glow">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold mb-3">
              {t("tg_title")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("tg_desc")}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
