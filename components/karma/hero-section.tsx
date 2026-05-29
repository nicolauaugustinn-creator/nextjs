"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Send, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Golden particles
function GoldenParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; size: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: 15 + Math.random() * 70,
      top: 20 + Math.random() * 60,
      delay: Math.random() * 10,
      size: 2 + Math.random() * 5
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gold/50 animate-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-purple-dark/10 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
      <GoldenParticles />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo/Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide"
          >
            <span className="text-gold-gradient glow-text-gold">KARMA</span>
            <span className="text-foreground">NUMBERS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-serif mb-4"
          >
            Descopera codul destinului, energiei si misiunii tale
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Cursuri, meditatii si consultatii de numerologie, relatii, energie, bani si transformare personala.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://t.me/karmanumbers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-background font-medium px-8 glow-gold"
              >
                <Send className="w-5 h-5 mr-2" />
                Alatura-te pe Telegram
              </Button>
            </a>
            
            <Link href="/consultations">
              <Button
                size="lg"
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10 px-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicita consultatie
              </Button>
            </Link>
            
            <Link href="/free-test">
              <Button
                size="lg"
                variant="ghost"
                className="text-foreground/70 hover:text-gold px-8"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                De unde incep?
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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
