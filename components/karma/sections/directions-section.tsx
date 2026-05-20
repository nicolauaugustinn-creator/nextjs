"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Banknote, 
  Heart, 
  Zap, 
  Compass, 
  Activity, 
  Users, 
  Baby, 
  HeartCrack 
} from "lucide-react"
import { GlassCard } from "../glass-card"

const directions = [
  { id: "1", title: "Деньги", icon: Banknote, href: "/mini-courses?category=money", color: "from-yellow-500/20 to-amber-500/20" },
  { id: "2", title: "Отношения", icon: Heart, href: "/mini-courses?category=relationships", color: "from-pink-500/20 to-rose-500/20" },
  { id: "3", title: "Энергия", icon: Zap, href: "/mini-courses?category=energy", color: "from-violet-500/20 to-purple-500/20" },
  { id: "4", title: "Предназначение", icon: Compass, href: "/mini-courses?category=destiny", color: "from-blue-500/20 to-indigo-500/20" },
  { id: "5", title: "Здоровье", icon: Activity, href: "/mini-courses?category=health", color: "from-green-500/20 to-emerald-500/20" },
  { id: "6", title: "Совместимость", icon: Users, href: "/mini-courses?category=compatibility", color: "from-orange-500/20 to-red-500/20" },
  { id: "7", title: "Детская матрица", icon: Baby, href: "/mini-courses/detskaya-matrica", color: "from-cyan-500/20 to-teal-500/20" },
  { id: "8", title: "Травмы", icon: HeartCrack, href: "/mini-courses/travmy-po-date-rozhdeniya", color: "from-slate-500/20 to-zinc-500/20" }
]

export function DirectionsSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet/10 text-violet-light text-sm font-medium mb-4">
            Направления
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Выберите свою тему
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Каждое направление раскрывает уникальный аспект вашей матрицы судьбы. 
            Выберите то, что резонирует с вами сейчас.
          </p>
        </motion.div>

        {/* Grid */}
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
                  {direction.title}
                </h3>
              </GlassCard>
            </Link>
          ))}
        </div>

        {/* Living project note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassCard variant="gold" className="text-center p-8 glow">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-gold mb-3">
              Живой проект, который постоянно наполняется новыми материалами
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Внутри вы найдёте курсы, медитации, практики, личные истории, отзывы и новые материалы, 
              которые будут регулярно добавляться.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
