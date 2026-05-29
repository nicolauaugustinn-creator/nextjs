"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Smartphone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PWABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    const dismissed = localStorage.getItem("pwa-banner-dismissed")
    if (dismissed) return

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsVisible(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    // Show banner after 10 seconds for mobile users even without prompt
    const timer = setTimeout(() => {
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        setIsVisible(true)
      }
    }, 10000)

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
      clearTimeout(timer)
    }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setIsVisible(false)
      }
      setDeferredPrompt(null)
    }
  }

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("pwa-banner-dismissed", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 md:bottom-6 left-4 right-4 z-40 md:left-auto md:right-6 md:max-w-sm"
        >
          <div className="glass-card p-4 border border-gold/20">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-cream/40 hover:text-cream"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-burgundy flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-cream" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-cream mb-1">
                  Установите приложение
                </h4>
                <p className="text-cream/60 text-sm mb-3">
                  Добавьте на главный экран для быстрого доступа
                </p>
                <Button
                  size="sm"
                  onClick={handleInstall}
                  className="bg-gold text-charcoal hover:bg-gold-light"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Установить
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
