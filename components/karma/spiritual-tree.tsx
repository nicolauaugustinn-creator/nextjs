"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { motion } from "framer-motion"

// Dynamically import 3D tree to avoid SSR issues
const Canvas = dynamic(() => import("@react-three/fiber").then(mod => mod.Canvas), { ssr: false })
const Tree3D = dynamic(() => import("./tree-3d").then(mod => mod.Tree3D), { ssr: false })

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
  const [showCanvas, setShowCanvas] = useState(false)

  useEffect(() => {
    setShowCanvas(true)
    
    const newLeaves = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: 15 + Math.random() * 70,
      y: -10,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 5,
      opacity: 0.4 + Math.random() * 0.6
    }))
    setLeaves(newLeaves)

    // Regenerate leaves periodically
    const interval = setInterval(() => {
      setLeaves(prev =>
        prev.map(() => ({
          id: Math.random(),
          x: 15 + Math.random() * 70,
          y: -10,
          delay: 0,
          duration: 8 + Math.random() * 5,
          opacity: 0.4 + Math.random() * 0.6
        }))
      )
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 3D Canvas */}
      {showCanvas && (
        <div className="absolute inset-0 w-full h-full">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            style={{ background: "transparent" }}
            gl={{ alpha: true, antialias: true }}
          >
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1.2} color="#fcd34d" />
            <pointLight position={[-10, -10, 10]} intensity={0.8} color="#f59e0b" />
            <Tree3D />
          </Canvas>
        </div>
      )}

      {/* Fallback 2D tree image */}
      {!showCanvas && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <Image
            src="/images/spiritual-tree-3d.png"
            alt="Spiritual Tree"
            fill
            className="object-contain opacity-40 md:opacity-50"
            priority
          />
        </div>
      )}

      {/* Falling leaves animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold"
            style={{ 
              left: `${leaf.x}%`,
              opacity: leaf.opacity,
              filter: "drop-shadow(0 0 2px rgba(252, 211, 77, 0.8))"
            }}
            animate={{
              y: ["0vh", "100vh"],
              x: [0, Math.sin(leaf.id) * 40 - 20],
              rotate: [0, 360 * (leaf.id % 2 ? 1 : -1)],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "easeIn"
            }}
          />
        ))}
      </div>

      {/* Enhanced glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{
            background: "radial-gradient(circle at center, rgba(252, 211, 77, 0.25) 0%, rgba(245, 158, 11, 0.1) 30%, transparent 70%)"
          }}
        />
      </div>
    </div>
  )
}
