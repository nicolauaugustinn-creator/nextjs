"use client"

import { Send } from "lucide-react"
import { motion } from "framer-motion"

export function StickyTelegramButton() {
  return (
    <motion.a
      href="https://t.me/karmanumbers"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40 group"
      aria-label="Написать в Telegram"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gold rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse-glow" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-full shadow-lg group-hover:scale-110 transition-transform">
          <Send className="w-6 h-6 text-background" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="glass-card-gold px-3 py-2 rounded-lg whitespace-nowrap">
            <span className="text-sm text-gold">Написать в Telegram</span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}
