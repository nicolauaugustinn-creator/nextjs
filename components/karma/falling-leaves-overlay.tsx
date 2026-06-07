"use client"

import { useEffect, useRef } from "react"

export function FallingLeavesOverlay() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
        box-shadow: 0 0 6px rgba(252, 211, 77, 0.8), 0 0 12px rgba(212, 175, 55, 0.5);
        animation: fall-leaves ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards;
      `
      container.appendChild(leaf)

      setTimeout(() => {
        leaf.remove()
      }, (duration + delay) * 1000 + 1000)
    }

    // Add CSS animation
    if (!document.getElementById("falling-leaves-global-animation")) {
      const style = document.createElement("style")
      style.id = "falling-leaves-global-animation"
      style.textContent = `
        @keyframes fall-leaves {
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
    const interval = setInterval(createLeaf, 1500)
    
    // Create initial leaf
    createLeaf()
    
    return () => clearInterval(interval)
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10" />
}
