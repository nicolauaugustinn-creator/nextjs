"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function SpiritualTree() {
  const containerRef = useRef<HTMLDivElement>(null)

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

      leaf.className = "absolute pointer-events-none"
      leaf.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        top: -20px;
        background: radial-gradient(circle at 30% 30%, #fcd34d, #d4af37);
        border-radius: 50%;
        box-shadow: 0 0 6px rgba(252, 211, 77, 0.9), 0 0 12px rgba(212, 175, 55, 0.6);
        animation: fall ${duration}s linear ${delay}s forwards;
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
            transform: translateY(0) rotateZ(0deg) scale(1);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(${window.innerHeight + 100}px) rotateZ(720deg) scale(0.5);
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
      setTimeout(() => createLeaf(), i * 300)
    }
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image - the spiritual tree */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-06-07_20-54-51-laux4AvmrmkEJAXDk7hlUJn3uY82Px.jpg"
          alt="Spiritual Tree"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </div>

      {/* Falling leaves overlay */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  )
}
