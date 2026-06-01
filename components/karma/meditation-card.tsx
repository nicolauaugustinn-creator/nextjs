"use client"

import Link from "next/link"
import { Play, Clock, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "./glass-card"
import { cn } from "@/lib/utils"
import type { Meditation } from "@/data/meditations"
import { useT } from "@/lib/lang-context"

interface MeditationCardProps {
  meditation: Meditation
  variant?: "default" | "compact"
}

export function MeditationCard({ meditation, variant = "default" }: MeditationCardProps) {
  const { t } = useT()

  const levelLabels: Record<string, string> = {
    beginner: t("level_beginner"),
    intermediate: t("level_intermediate"),
    advanced: t("level_advanced")
  }

  const categoryLabels: Record<string, string> = {
    morning: t("cat_morning"),
    energy: t("cat_energy"),
    healing: t("cat_healing"),
    deep: t("cat_deep"),
    black_white: "Black & White",
    coming_soon: t("coming_soon")
  }

  const isComingSoon = meditation.status === "coming_soon"

  return (
    <GlassCard
      variant={meditation.isBlackWhite ? "default" : "violet"}
      className={cn(
        "group overflow-hidden",
        meditation.isBlackWhite && "bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 border-zinc-700/50"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Thumbnail */}
      <div className={cn(
        "relative overflow-hidden rounded-lg mb-4",
        variant === "compact" ? "aspect-square" : "aspect-video",
        meditation.isBlackWhite && "bw-filter"
      )}>
        <div className={cn(
          "absolute inset-0",
          meditation.isBlackWhite
            ? "bg-gradient-to-br from-zinc-800 to-zinc-900"
            : "bg-gradient-to-br from-violet/30 to-purple/30"
        )} />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isComingSoon ? (
            <div className="w-14 h-14 rounded-full bg-zinc-700/50 flex items-center justify-center">
              <Lock className="w-6 h-6 text-zinc-400" />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-gold/20 transition-all">
              <Play className={cn(
                "w-6 h-6 ml-1",
                meditation.isBlackWhite ? "text-white" : "text-violet-light"
              )} />
            </div>
          )}
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2 right-2">
          <Badge variant="secondary" className="bg-black/50 text-white border-0 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {meditation.duration}
          </Badge>
        </div>

        {/* Status badge */}
        {isComingSoon && (
          <Badge className="absolute top-2 right-2 bg-zinc-700 text-zinc-300">
            {t("coming_soon")}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div>
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <Badge
            variant="outline"
            className={cn(
              "text-xs",
              meditation.isBlackWhite
                ? "border-zinc-600 text-zinc-400"
                : "border-violet/30 text-violet-light"
            )}
          >
            {categoryLabels[meditation.category]}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {levelLabels[meditation.level]}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-serif text-lg font-semibold mb-2 transition-colors",
          meditation.isBlackWhite
            ? "text-white group-hover:text-zinc-300"
            : "text-foreground group-hover:text-violet-light"
        )}>
          {meditation.title}
        </h3>

        {/* Description */}
        {variant === "default" && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {meditation.description}
          </p>
        )}

        {/* Action */}
        {!isComingSoon && (
          <Link href={`/meditations/${meditation.slug}`}>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "w-full",
                meditation.isBlackWhite
                  ? "border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                  : "border-violet/30 text-violet-light hover:bg-violet/10"
              )}
            >
              <Play className="w-4 h-4 mr-2" />
              {t("listen")}
            </Button>
          </Link>
        )}
      </div>
    </GlassCard>
  )
}
