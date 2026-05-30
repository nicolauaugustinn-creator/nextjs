"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Send, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/lang-context"

// Ethereal glowing tree (CSS/SVG - inspired by the luminous reference)
function EtherealTree() {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none select-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="absolute bottom-0 w-full max-w-lg md:max-w-2xl"
        style={{ height: "92%" }}
      >
        <svg
          viewBox="0 0 500 700"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glowing white gradient for branches */}
            <linearGradient id="branchGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#c9a962" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#e8e0f0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
            </linearGradient>
            {/* Root gradient */}
            <linearGradient id="rootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c9a962" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#c9a962" stopOpacity="0.05" />
            </linearGradient>
            {/* Trunk gradient */}
            <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#c9a962" stopOpacity="1" />
              <stop offset="60%" stopColor="#d4c5f0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
            </linearGradient>
            {/* Glow filter */}
            <filter id="treeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Soft outer glow */}
            <filter id="outerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Radial glow behind tree */}
            <radialGradient id="treeBg" cx="50%" cy="70%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#c9a962" stopOpacity="0.05" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            {/* Light beam */}
            <linearGradient id="lightBeam" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background radial glow */}
          <ellipse cx="250" cy="480" rx="240" ry="280" fill="url(#treeBg)" />

          {/* Light beam from top */}
          <motion.path
            d="M220 0 L160 700 L340 700 L280 0 Z"
            fill="url(#lightBeam)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.4] }}
            transition={{ duration: 3, delay: 1 }}
          />

          {/* === ROOTS === */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <path d="M250 690 Q200 670 140 700" stroke="url(#rootGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M250 690 Q300 665 360 695" stroke="url(#rootGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M250 690 Q210 660 170 680 Q130 695 90 685" stroke="url(#rootGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M250 690 Q290 660 330 680 Q370 695 410 685" stroke="url(#rootGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M248 690 Q248 700 248 710" stroke="url(#rootGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
          </motion.g>

          {/* === TRUNK === */}
          <motion.path
            d="M250 690 Q242 640 245 590 Q248 540 250 490 Q252 430 248 370 Q244 310 250 250 Q256 190 250 130 Q244 90 250 50"
            stroke="url(#trunkGrad)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            filter="url(#treeGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          {/* Trunk inner highlight */}
          <motion.path
            d="M250 690 Q252 620 251 540 Q250 460 250 380 Q250 300 250 220 Q250 160 250 80"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />

          {/* === LEFT BRANCHES === */}
          <motion.path
            d="M246 560 Q200 530 150 545 Q110 555 70 535"
            stroke="url(#branchGrad)" strokeWidth="9" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.0 }}
          />
          <motion.path
            d="M246 480 Q195 445 140 455 Q100 462 60 440"
            stroke="url(#branchGrad)" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          <motion.path
            d="M247 400 Q205 365 160 370 Q120 375 85 350"
            stroke="url(#branchGrad)" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />
          <motion.path
            d="M248 315 Q215 275 175 268 Q140 262 105 238"
            stroke="url(#branchGrad)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.6 }}
          />
          <motion.path
            d="M249 230 Q220 200 190 195 Q160 192 130 172"
            stroke="url(#branchGrad)" strokeWidth="4" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
          {/* Sub-branches left */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 2.2, duration: 1 }}>
            <path d="M150 545 Q125 525 100 535" stroke="url(#branchGrad)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#treeGlow)" />
            <path d="M140 455 Q115 440 90 448" stroke="url(#branchGrad)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#treeGlow)" />
            <path d="M160 370 Q135 355 108 362" stroke="url(#branchGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" filter="url(#treeGlow)" />
            <path d="M175 268 Q155 252 130 258" stroke="url(#branchGrad)" strokeWidth="2" fill="none" strokeLinecap="round" filter="url(#treeGlow)" />
          </motion.g>

          {/* === RIGHT BRANCHES === */}
          <motion.path
            d="M254 560 Q300 530 350 545 Q390 555 430 535"
            stroke="url(#branchGrad)" strokeWidth="9" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.0 }}
          />
          <motion.path
            d="M254 480 Q305 445 360 455 Q400 462 440 440"
            stroke="url(#branchGrad)" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          <motion.path
            d="M253 400 Q295 365 340 370 Q380 375 415 350"
            stroke="url(#branchGrad)" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />
          <motion.path
            d="M252 315 Q285 275 325 268 Q360 262 395 238"
            stroke="url(#branchGrad)" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.6 }}
          />
          <motion.path
            d="M251 230 Q280 200 310 195 Q340 192 370 172"
            stroke="url(#branchGrad)" strokeWidth="4" fill="none" strokeLinecap="round" filter="url(#treeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
          {/* Sub-branches right */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 2.2, duration: 1 }}>
            <path d="M350 545 Q375 525 400 535" stroke="url(#branchGrad)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#treeGlow)" />
            <path d="M360 455 Q385 440 410 448" stroke="url(#branchGrad)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#treeGlow)" />
            <path d="M340 370 Q365 355 392 362" stroke="url(#branchGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" filter="url(#treeGlow)" />
            <path d="M325 268 Q345 252 370 258" stroke="url(#branchGrad)" strokeWidth="2" fill="none" strokeLinecap="round" filter="url(#treeGlow)" />
          </motion.g>

          {/* === CROWN TOP === */}
          <motion.path
            d="M250 130 Q225 95 200 80 Q175 65 155 40"
            stroke="url(#branchGrad)" strokeWidth="4" fill="none" strokeLinecap="round" filter="url(#outerGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.0 }}
          />
          <motion.path
            d="M250 130 Q275 95 300 80 Q325 65 345 40"
            stroke="url(#branchGrad)" strokeWidth="4" fill="none" strokeLinecap="round" filter="url(#outerGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.0 }}
          />
          <motion.path
            d="M250 90 Q250 55 250 20"
            stroke="url(#branchGrad)" strokeWidth="4" fill="none" strokeLinecap="round" filter="url(#outerGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.1 }}
          />

          {/* === CROWN FLOWER / BLOOM === */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            style={{ transformOrigin: "250px 18px" }}
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.ellipse
                key={i}
                cx={250 + 18 * Math.cos((angle * Math.PI) / 180)}
                cy={18 + 18 * Math.sin((angle * Math.PI) / 180)}
                rx="9"
                ry="5"
                fill="rgba(255,255,255,0.3)"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="0.5"
                filter="url(#outerGlow)"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: `250px 18px`
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
            {/* Center dot */}
            <circle cx="250" cy="18" r="7" fill="rgba(255,255,255,0.85)" filter="url(#outerGlow)" />
          </motion.g>

          {/* === FIREFLY SPARKS (golden dots) === */}
          {[
            { cx: 80, cy: 530, r: 3, delay: 0 },
            { cx: 420, cy: 510, r: 4, delay: 0.5 },
            { cx: 65, cy: 420, r: 3, delay: 1 },
            { cx: 440, cy: 390, r: 3, delay: 0.8 },
            { cx: 95, cy: 320, r: 4, delay: 1.5 },
            { cx: 410, cy: 300, r: 3, delay: 0.3 },
            { cx: 130, cy: 230, r: 3, delay: 2 },
            { cx: 375, cy: 215, r: 4, delay: 1.2 },
            { cx: 170, cy: 150, r: 3, delay: 0.7 },
            { cx: 335, cy: 140, r: 3, delay: 1.8 },
            { cx: 55, cy: 590, r: 3.5, delay: 2.3 },
            { cx: 450, cy: 570, r: 3, delay: 1.6 },
            { cx: 110, cy: 480, r: 2.5, delay: 0.9 },
            { cx: 395, cy: 460, r: 2.5, delay: 1.4 },
          ].map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill="#c9a962"
              filter="url(#outerGlow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.3, 1, 0] }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* === WOMAN SILHOUETTE === */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.55, y: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            {/* Dress / body flow */}
            <path
              d="M250 690 Q230 650 225 610 Q218 570 222 540 Q226 510 230 490 Q238 475 250 468 Q262 475 270 490 Q274 510 278 540 Q282 570 275 610 Q270 650 250 690 Z"
              fill="rgba(255,255,255,0.12)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="0.5"
            />
            {/* Body */}
            <ellipse cx="250" cy="492" rx="11" ry="22" fill="rgba(255,255,255,0.18)" />
            {/* Head */}
            <circle cx="250" cy="462" r="12" fill="rgba(255,255,255,0.2)" />
            {/* Left arm raised */}
            <path d="M239 490 Q220 470 200 455" stroke="rgba(255,255,255,0.3)" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Right arm raised */}
            <path d="M261 490 Q280 470 300 455" stroke="rgba(255,255,255,0.3)" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Dress bottom glow */}
            <ellipse cx="250" cy="680" rx="55" ry="8" fill="rgba(201,169,98,0.15)" />
          </motion.g>

          {/* === GROUND REFLECTION GLOW === */}
          <motion.ellipse
            cx="250"
            cy="695"
            rx="160"
            ry="12"
            fill="rgba(201,169,98,0.12)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

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

      {/* Tree - behind content */}
      <EtherealTree />

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
