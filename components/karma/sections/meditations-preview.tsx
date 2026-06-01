"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MeditationCard } from "../meditation-card"
import { meditations } from "@/data/meditations"
import { useT } from "@/lib/lang-context"

export function MeditationsPreview() {
  const { t } = useT()
  const featuredMeditations = meditations.filter(m => m.featured && m.status === "available").slice(0, 4)
  const blackWhiteMeditations = meditations.filter(m => m.isBlackWhite && m.status === "available").slice(0, 2)

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet/10 text-violet-light text-sm font-medium mb-4">
            <Headphones className="w-4 h-4 inline mr-1" />
            {t("meditations_tag")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("meditations_title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("meditations_subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredMeditations.map((meditation) => (
            <MeditationCard key={meditation.id} meditation={meditation} />
          ))}
        </div>

        {blackWhiteMeditations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-serif text-xl font-semibold text-foreground">Black &amp; White</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {blackWhiteMeditations.map((meditation) => (
                <MeditationCard key={meditation.id} meditation={meditation} />
              ))}
            </div>
          </motion.div>
        )}

        <div className="text-center">
          <Link href="/meditations">
            <Button size="lg" variant="outline" className="border-violet/30 text-violet-light hover:bg-violet/10 group">
              {t("meditations_view_all")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
