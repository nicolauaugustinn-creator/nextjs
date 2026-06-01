"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Send, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/lang-context"

// Ambient golden particles
function GoldenParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; size: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      top: 10 + Math.random() * 75,
      delay: Math.random() * 8,
      size: 2 + Math.random() * 3
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold/40 animate-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const { t } = useT()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-purple-dark/10 to-background">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_65%)]" />

      {/* Ambient particles */}
      <GoldenParticles />

      {/* Content - on top of tree */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title - responsive so it never clips */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif font-bold mb-6 tracking-wide leading-none
                       text-[clamp(2.2rem,10vw,6rem)]
                       whitespace-nowrap"
          >
            <span className="text-gold-gradient glow-text-gold">KARMA</span>
            <span className="text-foreground">NUMBERS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl lg:text-3xl text-foreground/90 font-serif mb-4 px-2"
          >
            {t("hero_subtitle")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 px-2"
          >
            {t("hero_description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a href="https://t.me/karmanumbers" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-background font-medium px-6 md:px-8 glow-gold w-full sm:w-auto"
              >
                <Send className="w-4 h-4 mr-2 shrink-0" />
                {t("hero_join_telegram")}
              </Button>
            </a>

            <Link href="/consultations">
              <Button
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 px-6 md:px-8 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
                {t("hero_get_consultation")}
              </Button>
            </Link>

            <Link href="/free-test">
              <Button
                size="lg"
                variant="ghost"
                className="text-foreground/70 hover:text-gold px-6 md:px-8 w-full sm:w-auto"
              >
                <HelpCircle className="w-4 h-4 mr-2 shrink-0" />
                {t("hero_where_to_start")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
