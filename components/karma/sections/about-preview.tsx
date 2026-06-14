"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/lang-context"

export function AboutPreview() {
  const { t } = useT()

  const stats = [
    { icon: Star, value: "749+", labelKey: "about_stat_consult" as const },
    { icon: Award, value: "ТОП-10", labelKey: "about_stat_students" as const },
    { icon: Users, value: "4+", labelKey: "about_stat_years" as const },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/about-me.jpg"
                alt="Consultant Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl" />
              <div className="absolute -inset-1 border border-gold/10 rounded-2xl" />
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-gold/30 animate-float" style={{ animationDelay: "-2s" }} />
              <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full border border-violet/30 animate-float" style={{ animationDelay: "-4s" }} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-lg bg-transparent border-2 border-red-500 text-gold text-sm font-medium mb-4">
              {t("about_tag")}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t("about_title")}
            </h2>

            <div className="border-2 border-blue-500 p-6 rounded-lg mb-8 bg-blue-500/5">
              <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed">
                {t("about_p1")}
              </p>

              <p className="text-sm md:text-base text-foreground/80">
                {t("about_p2")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gold/30 rounded-lg p-4 text-center bg-gold/5 hover:bg-gold/10 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{t(stat.labelKey)}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/my-path">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-background group">
                {t("about_cta")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
