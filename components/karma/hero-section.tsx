"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Send, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Large realistic animated tree component
function AnimatedTree() {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none">
      {/* Large central tree silhouette */}
      <motion.svg
        viewBox="0 0 800 1000"
        className="w-full h-[120%] max-w-4xl"
        style={{ marginBottom: "-10%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <defs>
          <linearGradient id="treeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#c9a962" stopOpacity="1" />
            <stop offset="30%" stopColor="#8b5cf6" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#c9a962" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c9a962" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="trunkGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#c9a962" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8b6914" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#c9a962" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main trunk - thick and grounded */}
        <motion.path
          d="M400 1000 
             L400 850 
             Q380 800 370 750 
             Q360 700 370 650 
             Q380 600 400 550 
             Q420 500 410 450 
             Q400 400 400 350
             Q400 300 390 250
             Q380 200 400 150"
          fill="none"
          stroke="url(#trunkGradient)"
          strokeWidth="20"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Secondary trunk lines for depth */}
        <motion.path
          d="M395 1000 L395 400 Q385 350 395 300"
          fill="none"
          stroke="url(#trunkGradient)"
          strokeWidth="8"
          strokeOpacity="0.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d="M405 1000 L405 400 Q415 350 405 300"
          fill="none"
          stroke="url(#trunkGradient)"
          strokeWidth="8"
          strokeOpacity="0.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
        />
        
        {/* Left major branches */}
        <motion.path
          d="M370 700 Q280 680 180 720 Q120 750 60 720"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="12"
          filter="url(#glow)"
          strokeLinecap="round"
          className="animate-sway"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M380 600 Q300 560 200 580 Q140 600 80 560"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="10"
          filter="url(#glow)"
          strokeLinecap="round"
          className="animate-sway"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <motion.path
          d="M385 500 Q320 450 240 460 Q180 480 120 440"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="8"
          filter="url(#glow)"
          strokeLinecap="round"
          className="animate-sway"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        />
        <motion.path
          d="M390 400 Q340 340 280 340 Q220 350 160 300"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="6"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
        />
        
        {/* Right major branches */}
        <motion.path
          d="M430 700 Q520 680 620 720 Q680 750 740 720"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="12"
          filter="url(#glow)"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "-2s" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M420 600 Q500 560 600 580 Q660 600 720 560"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="10"
          filter="url(#glow)"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "-3s" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <motion.path
          d="M415 500 Q480 450 560 460 Q620 480 680 440"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="8"
          filter="url(#glow)"
          strokeLinecap="round"
          className="animate-sway"
          style={{ animationDelay: "-4s" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        />
        <motion.path
          d="M410 400 Q460 340 520 340 Q580 350 640 300"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="6"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
        />
        
        {/* Top crown branches */}
        <motion.path
          d="M400 300 Q350 250 300 260 Q250 280 200 240"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="5"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
        />
        <motion.path
          d="M400 300 Q450 250 500 260 Q550 280 600 240"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="5"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
        />
        <motion.path
          d="M400 250 Q380 180 350 120 Q320 60 340 20"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="4"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
        <motion.path
          d="M400 250 Q420 180 450 120 Q480 60 460 20"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="4"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
        <motion.path
          d="M400 200 Q400 140 400 80"
          fill="none"
          stroke="url(#treeGradient)"
          strokeWidth="4"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2.2 }}
        />
        
        {/* Smaller branch details */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {/* Left small branches */}
          <path d="M180 720 Q140 700 100 720" stroke="url(#treeGradient)" strokeWidth="3" fill="none" filter="url(#softGlow)" />
          <path d="M200 580 Q160 560 120 580" stroke="url(#treeGradient)" strokeWidth="3" fill="none" filter="url(#softGlow)" />
          <path d="M240 460 Q200 440 160 460" stroke="url(#treeGradient)" strokeWidth="2" fill="none" filter="url(#softGlow)" />
          <path d="M280 340 Q240 320 200 340" stroke="url(#treeGradient)" strokeWidth="2" fill="none" filter="url(#softGlow)" />
          
          {/* Right small branches */}
          <path d="M620 720 Q660 700 700 720" stroke="url(#treeGradient)" strokeWidth="3" fill="none" filter="url(#softGlow)" />
          <path d="M600 580 Q640 560 680 580" stroke="url(#treeGradient)" strokeWidth="3" fill="none" filter="url(#softGlow)" />
          <path d="M560 460 Q600 440 640 460" stroke="url(#treeGradient)" strokeWidth="2" fill="none" filter="url(#softGlow)" />
          <path d="M520 340 Q560 320 600 340" stroke="url(#treeGradient)" strokeWidth="2" fill="none" filter="url(#softGlow)" />
        </motion.g>
        
        {/* Deep roots */}
        <motion.path
          d="M400 1000 Q320 1020 200 1080"
          fill="none"
          stroke="url(#trunkGradient)"
          strokeWidth="14"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
        <motion.path
          d="M400 1000 Q480 1020 600 1080"
          fill="none"
          stroke="url(#trunkGradient)"
          strokeWidth="14"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
        <motion.path
          d="M380 980 Q280 1000 180 1040"
          fill="none"
          stroke="url(#trunkGradient)"
          strokeWidth="10"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M420 980 Q520 1000 620 1040"
          fill="none"
          stroke="url(#trunkGradient)"
          strokeWidth="10"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M400 1000 Q400 1040 400 1100"
          fill="none"
          stroke="url(#trunkGradient)"
          strokeWidth="8"
          filter="url(#glow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.7 }}
        />
      </motion.svg>
    </div>
  )
}

// Falling leaves
function FallingLeaves() {
  const [leaves, setLeaves] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([])

  useEffect(() => {
    const newLeaves = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 8,
      size: 10 + Math.random() * 16
    }))
    setLeaves(newLeaves)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: `${leaf.left}%`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            top: "-30px"
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold/50"
          >
            <path
              d="M12 2C7 7 4 12 4 16C4 20 7 22 12 22C17 22 20 20 20 16C20 12 17 7 12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

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
      <AnimatedTree />
      <FallingLeaves />
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
