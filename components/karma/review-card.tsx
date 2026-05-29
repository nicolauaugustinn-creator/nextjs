"use client"

import { Star, Play, Volume2, Image as ImageIcon } from "lucide-react"
import { GlassCard } from "./glass-card"
import { cn } from "@/lib/utils"
import type { Review } from "@/data/reviews"

interface ReviewCardProps {
  review: Review
  variant?: "default" | "compact"
}

export function ReviewCard({ review, variant = "default" }: ReviewCardProps) {
  const categoryLabels: Record<string, string> = {
    course: "Curs",
    consultation: "Consultatie",
    meditation: "Meditatie",
    retreat: "Retreat"
  }

  // Determine review type
  const hasVideo = !!review.videoPlaceholder
  const hasAudio = !!review.audioPlaceholder
  const hasScreenshot = !!review.screenshotImage
  const hasText = !!review.text

  return (
    <GlassCard
      variant="gold"
      className={cn(
        "h-full",
        variant === "compact" && "p-4"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {/* Avatar */}
        {review.clientAvatar ? (
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
            <img 
              src={review.clientAvatar} 
              alt={review.clientName}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-violet/30 flex items-center justify-center text-gold font-semibold">
            {review.clientName.charAt(0)}
          </div>
        )}
        
        <div className="flex-1">
          <p className="font-medium text-foreground">{review.clientName}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {categoryLabels[review.category]}
            </span>
            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3 h-3",
                    i < review.rating ? "text-gold fill-gold" : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {hasText && (
        <p className={cn(
          "text-sm text-muted-foreground leading-relaxed",
          variant === "compact" ? "line-clamp-3" : "line-clamp-6"
        )}>
          &ldquo;{review.text}&rdquo;
        </p>
      )}

      {/* Video placeholder */}
      {hasVideo && (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-violet/20 to-gold/20 flex items-center justify-center mt-4">
          <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
            <Play className="w-6 h-6 text-gold ml-1" />
          </div>
          <span className="absolute bottom-2 left-2 text-xs text-gold/70">
            Video recenzie
          </span>
        </div>
      )}

      {/* Audio placeholder */}
      {hasAudio && (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gold/5 border border-gold/20 mt-4">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-gold" />
          </div>
          <div className="flex-1">
            <div className="h-2 bg-gold/10 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gold/40 rounded-full" />
            </div>
            <span className="text-xs text-muted-foreground mt-1">Recenzie audio</span>
          </div>
        </div>
      )}

      {/* Screenshot placeholder */}
      {hasScreenshot && (
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-card to-secondary mt-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          <span className="absolute bottom-2 left-2 text-xs text-muted-foreground">
            Screenshot recenzie
          </span>
        </div>
      )}

      {/* Date */}
      <p className="text-xs text-muted-foreground mt-4">
        {new Date(review.date).toLocaleDateString("ro-RO", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </p>
    </GlassCard>
  )
}
