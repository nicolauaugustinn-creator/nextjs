"use client"

import { useState } from "react"
import { Play, ExternalLink, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Meditation } from "@/data/meditations"
import { useT } from "@/lib/lang-context"

interface MeditationVideoCardProps {
  meditation: Meditation
  isPlaying: boolean
  onPlay: (id: string) => void
}

export function MeditationVideoCard({
  meditation,
  isPlaying,
  onPlay,
}: MeditationVideoCardProps) {
  const { t } = useT()
  const thumbnailUrl = `https://i.ytimg.com/vi/${meditation.youtubeVideoId}/hqdefault.jpg`
  const iframeUrl = `https://www.youtube-nocookie.com/embed/${meditation.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`

  return (
    <div className="group">
      {/* Video Container */}
      <div className="relative w-full bg-charcoal rounded-lg overflow-hidden border border-gold/20 aspect-video">
        {isPlaying ? (
          // Embedded YouTube Video
          <iframe
            width="100%"
            height="100%"
            src={iframeUrl}
            title={meditation.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          // Thumbnail with Play Button
          <>
            <img
              src={thumbnailUrl}
              alt={meditation.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/50 transition-colors" />
            <button
              onClick={() => onPlay(meditation.id)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-all transform group-hover:scale-110">
                <Play className="w-7 h-7 text-charcoal ml-1 fill-charcoal" />
              </div>
            </button>
          </>
        )}
      </div>

      {/* Card Info */}
      <div className="mt-4 space-y-3">
        <div className="space-y-2">
          <span className="text-gold text-xs tracking-wider uppercase block">
            {meditation.category}
          </span>
          <h3 className="font-serif text-lg text-cream group-hover:text-gold transition-colors line-clamp-2">
            {meditation.title}
          </h3>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-cream/60 text-sm">
          <Clock className="w-4 h-4 text-gold" />
          <span>{meditation.duration}</span>
        </div>

        {/* YouTube Link Button */}
        <a
          href={meditation.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <Button
            variant="outline"
            size="sm"
            className="w-full border-gold/30 text-gold hover:bg-gold/10"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {t("watch_on_youtube")}
          </Button>
        </a>
      </div>
    </div>
  )
}
