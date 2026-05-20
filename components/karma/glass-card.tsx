"use client"

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "default" | "gold" | "violet"
  hover?: boolean
  glow?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", hover = true, glow = false, children, ...props }, ref) => {
    const variantClasses = {
      default: "glass-card",
      gold: "glass-card-gold",
      violet: "glass-card-violet"
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl p-6",
          variantClasses[variant],
          hover && "card-hover",
          glow && variant === "gold" && "animate-border-glow",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = "GlassCard"
