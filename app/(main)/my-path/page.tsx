"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Heart, Star, Sparkles, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useT } from "@/lib/lang-context"

export default function MyPathPage() {
  const { t } = useT()

  const timeline = [
    { year: "2015", title: t("hero_subtitle"), description: t("about_p1") },
    { year: "2017", title: t("path_education"), description: t("about_p2") },
    { year: "2019", title: t("consult_title"), description: t("consult_subtitle") },
    { year: "2021", title: t("courses_title"), description: t("courses_subtitle") },
    { year: "2023", title: t("reviews_title"), description: t("reviews_subtitle") },
    { year: t("retreat_next"), title: t("retreat_tag"), description: t("retreat_subtitle") },
  ]

  const certifications = [
    t("path_education"),
    t("dir_spirituality"),
    t("meditations_tag"),
    t("consult_title"),
  ]

  const values = [
    { icon: Heart, title: t("dir_relations"), description: t("dir_relations_desc") },
    { icon: BookOpen, title: t("nav_learning"), description: t("courses_subtitle") },
    { icon: Star, title: t("reviews_tag"), description: t("reviews_subtitle") },
    { icon: Sparkles, title: t("dir_spirituality"), description: t("dir_spirituality_desc") },
  ]

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                {t("path_tag")}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6 leading-tight">
                {t("about_title")}
              </h1>
              <p className="text-cream/70 text-lg mb-8 leading-relaxed">
                {t("about_p1")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/consultations">
                  <Button className="bg-gold text-charcoal hover:bg-gold-light">
                    {t("path_cta_consult")}
                  </Button>
                </Link>
                <Link href="https://t.me/karmanumbers" target="_blank">
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                    Telegram
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20">
                <img
                  src="/images/about-me.jpg"
                  alt={t("about_title")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold font-medium">5000+</p>
                    <p className="text-cream/60 text-sm">{t("about_stat_consult")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
              {t("path_values")}
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto">{t("about_p2")}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-cream mb-2">{value.title}</h3>
                <p className="text-cream/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("path_tag")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">
              {t("path_title")}
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 md:-translate-x-px" />
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                    {index % 2 === 0 && (
                      <div className="glass-card p-6">
                        <span className="text-gold font-serif text-2xl">{item.year}</span>
                        <h3 className="font-serif text-xl text-cream mt-2 mb-2">{item.title}</h3>
                        <p className="text-cream/60 text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold -translate-x-1/2 mt-2" />
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    {index % 2 !== 0 ? (
                      <div className="glass-card p-6">
                        <span className="text-gold font-serif text-2xl">{item.year}</span>
                        <h3 className="font-serif text-xl text-cream mt-2 mb-2">{item.title}</h3>
                        <p className="text-cream/60 text-sm">{item.description}</p>
                      </div>
                    ) : (
                      <div className="glass-card p-6 md:hidden">
                        <span className="text-gold font-serif text-2xl">{item.year}</span>
                        <h3 className="font-serif text-xl text-cream mt-2 mb-2">{item.title}</h3>
                        <p className="text-cream/60 text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-gold/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5429424431718666999-Nn343XNRQwpx6HAmXJDJk63kRBZT57.jpg"
                  alt={t("path_education")}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                {t("path_education")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
                {t("path_education")}
              </h2>
              <p className="text-cream/70 mb-8">{t("about_p1")}</p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-cream">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              {t("path_cta_consult")}
            </h2>
            <p className="text-cream/70 mb-8">{t("consult_subtitle")}</p>
            <Link href="/consultations">
              <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
                {t("path_cta_consult")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
