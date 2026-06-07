"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Leaf {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  opacity: number
}

export function SpiritualTree() {
  const [leaves, setLeaves] = useState<Leaf[]>([])

  useEffect(() => {
    const newLeaves = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: -10,
      delay: Math.random() * 3,
      duration: 6 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.7
    }))
    setLeaves(newLeaves)

    // Regenerate leaves periodically
    const interval = setInterval(() => {
      setLeaves(prev =>
        prev.map(() => ({
          id: Math.random(),
          x: 10 + Math.random() * 80,
          y: -10,
          delay: 0,
          duration: 6 + Math.random() * 4,
          opacity: 0.3 + Math.random() * 0.7
        }))
      )
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main SVG Tree */}
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full max-w-2xl drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="lightGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fcd34d" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Outer circle */}
        <circle cx="200" cy="250" r="190" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.6" />
        <motion.circle
          cx="200"
          cy="250"
          r="190"
          fill="none"
          stroke="#fcd34d"
          strokeWidth="1"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Inner concentric circles */}
        <circle cx="200" cy="250" r="150" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.4" />
        <circle cx="200" cy="250" r="110" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" />
        <circle cx="200" cy="250" r="70" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.2" />

        {/* Horizontal line */}
        <line x1="30" y1="250" x2="370" y2="250" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
        <line x1="35" y1="250" x2="365" y2="250" stroke="#fcd34d" strokeWidth="0.5" opacity="0.3" />

        {/* Vertical line */}
        <line x1="200" y1="60" x2="200" y2="440" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
        <line x1="200" y1="60" x2="200" y2="440" stroke="#fcd34d" strokeWidth="0.5" opacity="0.3" />

        {/* Central light core */}
        <motion.circle
          cx="200"
          cy="250"
          r="30"
          fill="url(#lightGradient)"
          filter="url(#glow)"
          animate={{ r: [28, 32, 28] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Yin-Yang symbol at top */}
        <circle cx="200" cy="75" r="8" fill="none" stroke="#fcd34d" strokeWidth="1.5" opacity="0.6" />
        <circle cx="200" cy="75" r="3" fill="#fcd34d" opacity="0.8" />

        {/* Yin-Yang symbol at bottom */}
        <circle cx="200" cy="425" r="8" fill="none" stroke="#fcd34d" strokeWidth="1.5" opacity="0.6" />
        <circle cx="200" cy="425" r="3" fill="#fcd34d" opacity="0.8" />

        {/* Tree trunk */}
        <motion.path
          d="M 200 100 Q 195 150 190 200 Q 185 220 200 250"
          fill="none"
          stroke="#d97706"
          strokeWidth="3"
          opacity="0.7"
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M 200 100 Q 195 150 190 200 Q 185 220 200 250"
          fill="none"
          stroke="#fcd34d"
          strokeWidth="1"
          opacity="0.4"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Roots */}
        <motion.g animate={{ opacity: [0.6, 0.8, 0.6] }} transition={{ duration: 3, repeat: Infinity }}>
          <path d="M 200 250 Q 180 290 160 350" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.7" />
          <path d="M 200 250 Q 220 290 240 350" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.7" />
          <path d="M 200 250 Q 190 300 175 380" fill="none" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
          <path d="M 200 250 Q 210 300 225 380" fill="none" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
        </motion.g>

        {/* Root tips */}
        <circle cx="160" cy="350" r="3" fill="#fcd34d" opacity="0.6" />
        <circle cx="240" cy="350" r="3" fill="#fcd34d" opacity="0.6" />
        <circle cx="175" cy="380" r="2" fill="#fcd34d" opacity="0.4" />
        <circle cx="225" cy="380" r="2" fill="#fcd34d" opacity="0.4" />

        {/* Tree canopy - branches and leaves */}
        <motion.g animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }}>
          {/* Left branches */}
          <path d="M 200 120 Q 160 130 140 110" fill="none" stroke="#d97706" strokeWidth="2" />
          <path d="M 200 120 Q 170 110 150 90" fill="none" stroke="#d97706" strokeWidth="1.5" />
          <path d="M 140 110 Q 120 100 110 75" fill="none" stroke="#d97706" strokeWidth="1" />
          <path d="M 150 90 Q 130 70 115 50" fill="none" stroke="#d97706" strokeWidth="1" />

          {/* Right branches */}
          <path d="M 200 120 Q 240 130 260 110" fill="none" stroke="#d97706" strokeWidth="2" />
          <path d="M 200 120 Q 230 110 250 90" fill="none" stroke="#d97706" strokeWidth="1.5" />
          <path d="M 260 110 Q 280 100 290 75" fill="none" stroke="#d97706" strokeWidth="1" />
          <path d="M 250 90 Q 270 70 285 50" fill="none" stroke="#d97706" strokeWidth="1" />

          {/* Center top branch */}
          <path d="M 200 110 Q 200 80 200 60" fill="none" stroke="#d97706" strokeWidth="1.5" />
        </motion.g>

        {/* Leaves - rendered as paths */}
        <motion.g animate={{ opacity: [0.6, 0.9, 0.6] }} transition={{ duration: 3, repeat: Infinity }}>
          {/* Left side leaves */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={`left-leaf-${i}`}>
              <ellipse cx={140 - i * 12} cy={110 - i * 10} rx="4" ry="7" fill="#fcd34d" opacity="0.7" transform={`rotate(${45 + i * 15} ${140 - i * 12} ${110 - i * 10})`} />
              <ellipse cx={155 - i * 10} cy={95 - i * 12} rx="4" ry="7" fill="#fcd34d" opacity="0.6" transform={`rotate(${60 + i * 10} ${155 - i * 10} ${95 - i * 12})`} />
            </g>
          ))}

          {/* Right side leaves */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={`right-leaf-${i}`}>
              <ellipse cx={260 + i * 12} cy={110 - i * 10} rx="4" ry="7" fill="#fcd34d" opacity="0.7" transform={`rotate(${-45 - i * 15} ${260 + i * 12} ${110 - i * 10})`} />
              <ellipse cx={245 + i * 10} cy={95 - i * 12} rx="4" ry="7" fill="#fcd34d" opacity="0.6" transform={`rotate(${-60 - i * 10} ${245 + i * 10} ${95 - i * 12})`} />
            </g>
          ))}

          {/* Center and spread leaves */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`spread-leaf-${i}`}>
              <ellipse cx={200 - 30 + i * 15} cy={100 - i * 8} rx="4" ry="7" fill="#fcd34d" opacity="0.5" transform={`rotate(${i * 20} ${200 - 30 + i * 15} ${100 - i * 8})`} />
            </g>
          ))}
        </motion.g>
      </svg>

      {/* Falling leaves animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            className="absolute w-2 h-2 rounded-full bg-gold"
            style={{ left: `${leaf.x}%`, opacity: leaf.opacity }}
            animate={{
              y: ["0vh", "100vh"],
              x: [0, Math.sin(leaf.id) * 50 - 25],
              rotate: [0, 360 * (leaf.id % 2 ? 1 : -1)]
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-radial-gradient from-gold/10 via-transparent to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            background: "radial-gradient(circle at center, rgba(252, 211, 77, 0.2) 0%, transparent 70%)"
          }}
        />
      </div>
    </div>
  )
}
