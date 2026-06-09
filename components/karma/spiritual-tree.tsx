"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function SpiritualTree() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create falling leaves animation
    const container = containerRef.current
    if (!container) return

    const createLeaf = () => {
      const leaf = document.createElement("div")
      const startX = Math.random() * window.innerWidth
      const delay = Math.random() * 1
      const duration = 12 + Math.random() * 10
      const size = 2 + Math.random() * 3
      const horizontalDrift = (Math.random() - 0.5) * 100

      leaf.className = "absolute pointer-events-none"
      leaf.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        top: -20px;
        background: radial-gradient(circle at 30% 30%, #fcd34d, #d4af37);
        border-radius: 50%;
        box-shadow: 0 0 6px rgba(252, 211, 77, 0.9), 0 0 12px rgba(212, 175, 55, 0.6);
        animation: fall ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards;
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
            transform: translateY(0) translateX(0) rotateZ(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(${Math.random() * 100 - 50}px) rotateZ(360deg) scale(1);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(${window.innerHeight + 100}px) translateX(${Math.random() * 100 - 50}px) rotateZ(720deg) scale(0.5);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)
    }

    // Create leaves periodically
    const interval = setInterval(createLeaf, 1200)
    
    // Create initial leaves
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createLeaf(), i * 400)
    }
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image - the spiritual tree with animations */}
      <motion.div
        ref={imageRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.85, 1, 0.85]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/images/spiritual-tree-3d.png"
          alt="Spiritual Tree"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </motion.div>

      {/* Glow overlay that pulses */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(252, 211, 77, 0.15) 0%, rgba(212, 175, 55, 0.05) 30%, transparent 70%)"
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Energy field animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(139, 92, 246, 0.08) 40%, transparent 100%)"
        }}
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Falling leaves overlay */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  )
}
