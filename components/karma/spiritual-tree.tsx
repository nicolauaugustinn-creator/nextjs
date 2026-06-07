"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function SpiritualTree() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create falling leaves animation
    const container = containerRef.current
    if (!container) return

    const createLeaf = () => {
      const leaf = document.createElement("div")
      const startX = Math.random() * window.innerWidth
      const delay = Math.random() * 0.5
      const duration = 4 + Math.random() * 3

      leaf.className = "absolute w-2 h-2 rounded-full pointer-events-none"
      leaf.style.cssText = `
        left: ${startX}px;
        top: -20px;
        background: radial-gradient(circle at 30% 30%, #fcd34d, #d4af37);
        box-shadow: 0 0 4px rgba(252, 211, 77, 0.8), 0 0 8px rgba(212, 175, 55, 0.4);
        animation: fall ${duration}s linear ${delay}s infinite;
      `
      container.appendChild(leaf)

      setTimeout(() => {
        leaf.remove()
      }, (duration + delay) * 1000 + 1000)
    }

    // Add CSS animation
    if (!document.getElementById("falling-leaves-animation")) {
      const style = document.createElement("style")
      style.id = "falling-leaves-animation"
      style.textContent = `
        @keyframes fall {
          0% {
            transform: translateY(0) rotateZ(0deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(${window.innerHeight + 100}px) rotateZ(360deg);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Create leaves periodically
    const interval = setInterval(createLeaf, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full max-w-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="glowCenter" cx="50%" cy="50%">
            <stop offset="0%" style={{ stopColor: "#fcd34d", stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: "#d4af37", stopOpacity: 0 }} />
          </radialGradient>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="2" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.8" />
            </feComponentTransfer>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="3" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.9" />
            </feComponentTransfer>
          </filter>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#fcd34d", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#9d7e1f", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="400" height="500" fill="#000000" />

        {/* Outer circle - main frame */}
        <circle cx="200" cy="250" r="175" fill="none" stroke="#d4af37" strokeWidth="2.5" opacity="0.95" filter="url(#strongGlow)" />

        {/* Cardinal point lights - top, right, bottom, left */}
        <circle cx="200" cy="65" r="5" fill="#fcd34d" filter="url(#strongGlow)" opacity="0.95" />
        <circle cx="335" cy="250" r="5" fill="#fcd34d" filter="url(#strongGlow)" opacity="0.95" />
        <circle cx="200" cy="435" r="5" fill="#fcd34d" filter="url(#strongGlow)" opacity="0.95" />
        <circle cx="65" cy="250" r="5" fill="#fcd34d" filter="url(#strongGlow)" opacity="0.95" />

        {/* Horizontal and vertical axis lines */}
        <line x1="65" y1="250" x2="335" y2="250" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
        <line x1="200" y1="65" x2="200" y2="435" stroke="#d4af37" strokeWidth="1" opacity="0.6" />

        {/* Concentric energy circles around center */}
        <circle cx="200" cy="250" r="35" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.5" />
        <circle cx="200" cy="250" r="55" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.4" />
        <circle cx="200" cy="250" r="75" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.3" />
        <circle cx="200" cy="250" r="95" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.2" />

        {/* Decorative dots on axis */}
        <circle cx="200" cy="120" r="1.5" fill="#d4af37" opacity="0.6" />
        <circle cx="200" cy="150" r="1.5" fill="#d4af37" opacity="0.5" />
        <circle cx="150" cy="250" r="1.5" fill="#d4af37" opacity="0.6" />
        <circle cx="120" cy="250" r="1.5" fill="#d4af37" opacity="0.5" />
        <circle cx="200" cy="380" r="1.5" fill="#d4af37" opacity="0.6" />
        <circle cx="200" cy="350" r="1.5" fill="#d4af37" opacity="0.5" />
        <circle cx="250" cy="250" r="1.5" fill="#d4af37" opacity="0.6" />
        <circle cx="280" cy="250" r="1.5" fill="#d4af37" opacity="0.5" />

        {/* Top Yin-Yang symbol */}
        <g transform="translate(200, 85)">
          <circle cx="0" cy="0" r="7" fill="none" stroke="#d4af37" strokeWidth="1.2" opacity="0.8" />
          <circle cx="0" cy="0" r="4" fill="#d4af37" opacity="0.8" />
        </g>

        {/* TRUNK - main center line */}
        <path
          d="M 200 120 L 200 380"
          fill="none"
          stroke="#d4af37"
          strokeWidth="10"
          filter="url(#strongGlow)"
          opacity="0.95"
          strokeLinecap="round"
        />

        {/* UPPER CROWN - Leaves */}
        {/* Top center branch */}
        <path d="M 200 130 Q 200 115 200 100" fill="none" stroke="#d4af37" strokeWidth="2.5" opacity="0.9" />

        {/* Left upper branches */}
        <path d="M 200 145 Q 175 130 155 120" fill="none" stroke="#d4af37" strokeWidth="2.5" opacity="0.9" />
        <path d="M 200 160 Q 170 140 150 125" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.8" />
        <path d="M 200 175 Q 175 165 160 155" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.8" />
        <path d="M 200 160 Q 160 145 140 135" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.7" />

        {/* Right upper branches */}
        <path d="M 200 145 Q 225 130 245 120" fill="none" stroke="#d4af37" strokeWidth="2.5" opacity="0.9" />
        <path d="M 200 160 Q 230 140 250 125" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.8" />
        <path d="M 200 175 Q 225 165 240 155" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.8" />
        <path d="M 200 160 Q 240 145 260 135" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.7" />

        {/* Left side leaves - upper */}
        <ellipse cx="155" cy="115" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.85" transform="rotate(-35 155 115)" />
        <ellipse cx="140" cy="130" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.8" transform="rotate(-45 140 130)" />
        <ellipse cx="155" cy="145" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.8" transform="rotate(-50 155 145)" />
        <ellipse cx="160" cy="160" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.75" transform="rotate(-25 160 160)" />
        <ellipse cx="145" cy="155" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.75" transform="rotate(-55 145 155)" />
        <ellipse cx="135" cy="145" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.7" transform="rotate(-60 135 145)" />

        {/* Right side leaves - upper */}
        <ellipse cx="245" cy="115" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.85" transform="rotate(35 245 115)" />
        <ellipse cx="260" cy="130" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.8" transform="rotate(45 260 130)" />
        <ellipse cx="245" cy="145" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.8" transform="rotate(50 245 145)" />
        <ellipse cx="240" cy="160" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.75" transform="rotate(25 240 160)" />
        <ellipse cx="255" cy="155" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.75" transform="rotate(55 255 155)" />
        <ellipse cx="265" cy="145" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.7" transform="rotate(60 265 145)" />

        {/* CENTER GLOW - bright core */}
        <circle cx="200" cy="250" r="20" fill="url(#glowCenter)" filter="url(#strongGlow)" opacity="0.95" />
        <motion.circle
          cx="200"
          cy="250"
          r="15"
          fill="#fcd34d"
          opacity="0.7"
          filter="url(#goldGlow)"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* LOWER ROOTS - Leaves */}
        {/* Bottom center branch */}
        <path d="M 200 370 Q 200 385 200 400" fill="none" stroke="#d4af37" strokeWidth="2.5" opacity="0.8" />

        {/* Left lower branches - roots */}
        <path d="M 200 335 Q 175 350 155 365" fill="none" stroke="#d4af37" strokeWidth="2.5" opacity="0.8" />
        <path d="M 200 320 Q 170 340 150 360" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.7" />
        <path d="M 200 305 Q 175 320 160 335" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.7" />
        <path d="M 200 335 Q 160 360 140 380" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.6" />

        {/* Right lower branches - roots */}
        <path d="M 200 335 Q 225 350 245 365" fill="none" stroke="#d4af37" strokeWidth="2.5" opacity="0.8" />
        <path d="M 200 320 Q 230 340 250 360" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.7" />
        <path d="M 200 305 Q 225 320 240 335" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.7" />
        <path d="M 200 335 Q 240 360 260 380" fill="none" stroke="#d4af37" strokeWidth="1.8" opacity="0.6" />

        {/* Left side leaves - lower roots */}
        <ellipse cx="155" cy="370" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.75" transform="rotate(-35 155 370)" />
        <ellipse cx="140" cy="375" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.7" transform="rotate(-45 140 375)" />
        <ellipse cx="155" cy="350" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.7" transform="rotate(-50 155 350)" />
        <ellipse cx="160" cy="335" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.65" transform="rotate(-25 160 335)" />
        <ellipse cx="145" cy="345" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.65" transform="rotate(-55 145 345)" />
        <ellipse cx="135" cy="360" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.6" transform="rotate(-60 135 360)" />

        {/* Right side leaves - lower roots */}
        <ellipse cx="245" cy="370" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.75" transform="rotate(35 245 370)" />
        <ellipse cx="260" cy="375" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.7" transform="rotate(45 260 375)" />
        <ellipse cx="245" cy="350" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.7" transform="rotate(50 245 350)" />
        <ellipse cx="240" cy="335" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.65" transform="rotate(25 240 335)" />
        <ellipse cx="255" cy="345" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.65" transform="rotate(55 255 345)" />
        <ellipse cx="265" cy="360" rx="4" ry="7" fill="url(#leafGrad)" opacity="0.6" transform="rotate(60 265 360)" />

        {/* Root tips - fine details */}
        <circle cx="155" cy="385" r="1" fill="#d4af37" opacity="0.7" />
        <circle cx="140" cy="395" r="1" fill="#d4af37" opacity="0.6" />
        <circle cx="160" cy="395" r="1" fill="#d4af37" opacity="0.6" />
        <circle cx="245" cy="385" r="1" fill="#d4af37" opacity="0.7" />
        <circle cx="260" cy="395" r="1" fill="#d4af37" opacity="0.6" />
        <circle cx="240" cy="395" r="1" fill="#d4af37" opacity="0.6" />

        {/* Bottom Yin-Yang symbol */}
        <g transform="translate(200, 415)">
          <circle cx="0" cy="0" r="7" fill="none" stroke="#d4af37" strokeWidth="1.2" opacity="0.8" />
          <circle cx="0" cy="0" r="4" fill="#d4af37" opacity="0.8" />
        </g>
      </svg>
    </div>
  )
}

