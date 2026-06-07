"use client"

import { motion } from "framer-motion"
import { Clock, Video, MessageCircle, Star, Check, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useT } from "@/lib/lang-context"

export default function ConsultationsPage() {
  const { t } = useT()

  const consultations = [
    {
      id: "numerology",
      title: t("consult_numerology_title"),
      subtitle: t("consult_basic"),
      description: t("consult_numerology_desc"),
      duration: t("consult_90min"),
      price: 60,
      features: [
        t("consult_feature_destiny"),
        t("consult_feature_karma_tasks"),
        t("consult_feature_strengths"),
        t("consult_feature_periods"),
        t("consult_feature_recommendations"),
        t("consult_feature_recording")
      ],
      popular: true
    },
    {
      id: "compatibility",
      title: t("consult_compatibility_title"),
      subtitle: t("consult_for_couples"),
      description: t("consult_compatibility_desc"),
      duration: t("consult_120min"),
      price: 120,
      features: [
        t("consult_feature_both_charts"),
        t("consult_feature_compat_map"),
        t("consult_feature_karmic_links"),
        t("consult_feature_common_tasks"),
        t("consult_feature_growth_points"),
        t("consult_feature_harmony_practices")
      ],
      popular: false
    },
    {
      id: "business",
      title: t("consult_business_title"),
      subtitle: t("consult_for_entrepreneurs"),
      description: t("consult_business_desc"),
      duration: t("consult_60min"),
      price: 100,
      features: [
        t("consult_feature_biz_energy"),
        t("consult_feature_biz_periods"),
        t("consult_feature_partner_compat"),
        t("consult_feature_company_name"),
        t("consult_feature_strategy"),
        t("consult_feature_fin_periods")
      ],
      popular: false
    },
    {
      id: "year",
      title: t("consult_year_title"),
      subtitle: t("consult_detailed_analysis"),
      description: t("consult_year_desc"),
      duration: t("consult_60min"),
      price: 50,
      features: [
        t("consult_feature_year_energy"),
        t("consult_feature_monthly"),
        t("consult_feature_good_dates"),
        t("consult_feature_rest_periods"),
        t("consult_feature_fin_windows"),
        t("consult_feature_personal_recs")
      ],
      popular: false
    },
    {
      id: "deep",
      title: t("consult_deep_title"),
      subtitle: t("consult_extended"),
      description: t("consult_deep_desc"),
      duration: t("consult_180min"),
      price: 160,
      features: [
        t("consult_feature_full_calc"),
        t("consult_feature_family_karma"),
        t("consult_feature_all_areas"),
        t("consult_feature_karmic_debts"),
        t("consult_feature_meditation"),
        t("consult_feature_month_support")
      ],
      popular: false
    },
    {
      id: "vip",
      title: t("consult_vip_title"),
      subtitle: t("consult_personal_work"),
      description: t("consult_vip_desc"),
      duration: t("consult_1month"),
      price: 200,
      features: [
        t("consult_feature_4sessions"),
        t("consult_feature_chat_support"),
        t("consult_feature_individual_practices"),
        t("consult_feature_daily_recs"),
        t("consult_feature_request_work"),
        t("consult_feature_full_transform")
      ],
      popular: false
    }
  ]

  const process = [
    {
      step: 1,
      title: t("consult_step1_title"),
      description: t("consult_step1_desc")
    },
    {
      step: 2,
      title: t("consult_step2_title"),
      description: t("consult_step2_desc")
    },
    {
      step: 3,
      title: t("consult_step3_title"),
      description: t("consult_step3_desc")
    },
    {
      step: 4,
      title: t("consult_step4_title"),
      description: t("consult_step4_desc")
    }
  ]

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("consult_personal_work")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
              {t("nav_consultations")}
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              {t("consult_hero_desc")}
            </p>

            <div className="flex items-center justify-center gap-6 text-cream/60">
              <span className="flex items-center gap-2">
                <Video className="w-5 h-5 text-gold" />
                {t("consult_online_zoom")}
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-gold" />
                {t("consult_telegram_support")}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultations Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultations.map((item, index) => (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative scroll-mt-32"
              >
                {item.popular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="bg-gold text-charcoal text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {t("consult_popular")}
                    </span>
                  </div>
                )}

                <div className={`glass-card p-6 h-full flex flex-col ${item.popular ? "border-gold/30" : ""}`}>
                  <div className="mb-4">
                    <span className="text-gold text-xs tracking-wider uppercase">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-cream mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-cream/60 text-sm mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-cream/50 text-sm mb-6">
                    <Clock className="w-4 h-4" />
                    {item.duration}
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-cream/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-3xl text-gold">
                        €{item.price.toLocaleString()}
                      </span>
                    </div>
                    <Link href="https://t.me/karmanumbers" target="_blank">
                      <Button className="w-full bg-gold text-charcoal hover:bg-gold-light">
                        {t("consult_book")}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-charcoal-light/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("consult_how_it_works")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">
              {t("consult_booking_process")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 border border-gold/30">
                  <span className="font-serif text-2xl text-gold">{item.step}</span>
                </div>
                <h3 className="font-serif text-lg text-cream mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center"
          >
            <Calendar className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              {t("consult_not_sure")}
            </h2>
            <p className="text-cream/70 mb-8">
              {t("consult_not_sure_desc")}
            </p>
            <Link href="https://t.me/karmanumbers" target="_blank">
              <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
                {t("consult_write_telegram")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
