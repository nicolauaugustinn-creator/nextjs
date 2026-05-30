"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Users, Sun, Moon, Star, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useT } from "@/lib/lang-context"

export default function RetreatPage() {
  const { t } = useT()

  const retreatFeatures = [
    t("retreat_days") + " 7 " + t("retreat_days"),
    t("meditations_tag"),
    t("nav_consultations"),
    t("dir_spirituality"),
    t("common_free"),
    "Eco-hotel",
    t("consult_title"),
    t("dash_my_courses"),
  ]

  const schedule = [
    { icon: Sun, time: "06:00", title: t("cat_morning"), description: t("meditations_subtitle") },
    { icon: Star, time: "08:00", title: t("free_test_tag"), description: t("about_p1") },
    { icon: Star, time: "10:00", title: t("courses_title"), description: t("courses_subtitle") },
    { icon: Star, time: "13:00", title: t("common_back"), description: t("about_p2") },
    { icon: Star, time: "16:00", title: t("dir_spirituality"), description: t("dir_spirituality_desc") },
    { icon: Moon, time: "19:00", title: t("tg_title"), description: t("tg_desc") },
  ]

  const testimonials = [
    { text: t("reviews_subtitle"), name: "Anna K.", location: t("nav_my_path") },
    { text: t("about_p2"), name: "Michael S.", location: t("nav_my_path") },
  ]

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5429424431718667000-J2NBj5HK3zRK63nMiAe6ZkYCbU0JnB.jpg"
            alt={t("nav_retreat")}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("retreat_tag")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              {t("page_retreat_title")}
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              {t("retreat_subtitle")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-cream/70">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                Bali, Indonesia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                15-22 September 2025
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                12 {t("retreat_participants")}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#booking">
                <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
                  {t("page_retreat_register")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#program">
                <Button size="lg" variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                  {t("page_retreat_program")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                {t("page_retreat_included")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-8">
                {t("retreat_title")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {retreatFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-cream/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5359532012299032188-LP5BsztskUQgp6KkclUghUGWWuUx1H.jpg"
                  alt="Retreat atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20 mt-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5391083623739495324-MVJz8tUaemEYnN0HJJqJ44k7u69Fs1.jpg"
                  alt="Meditation practice"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="program" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("page_retreat_program")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">
              {t("retreat_title")}
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20" />
              {schedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 mb-8"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 z-10">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <span className="text-gold font-medium">{item.time}</span>
                    <h3 className="font-serif text-xl text-cream mt-1 mb-2">{item.title}</h3>
                    <p className="text-cream/60 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("reviews_tag")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">
              {t("reviews_title")}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <p className="text-cream/80 text-lg mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="text-cream font-medium">{testimonial.name}</p>
                  <p className="text-gold text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                    {t("page_retreat_register")}
                  </span>
                  <h2 className="font-serif text-3xl text-cream mb-6">
                    {t("page_retreat_register")}
                  </h2>
                  <p className="text-cream/70 mb-6">
                    {t("page_retreat_contact")}
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-cream/70">{t("retreat_next")}</span>
                      <span className="text-cream">15-22 Sep 2025</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-cream/70">{t("page_retreat_location")}</span>
                      <span className="text-cream">Bali, Indonesia</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-cream/70">{t("retreat_participants")}</span>
                      <span className="text-gold">4 / 12</span>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 bg-burgundy/10 border-burgundy/30">
                  <div className="text-center mb-6">
                    <span className="text-cream/60 text-sm">{t("consult_book")}</span>
                    <div className="font-serif text-4xl text-gold mt-2">250 000 ₽</div>
                    <span className="text-cream/50 text-sm">{t("page_retreat_included")}</span>
                  </div>
                  <Link href="https://t.me/karmanumbers" target="_blank">
                    <Button className="w-full bg-gold text-charcoal hover:bg-gold-light mb-4" size="lg">
                      {t("page_retreat_contact")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
