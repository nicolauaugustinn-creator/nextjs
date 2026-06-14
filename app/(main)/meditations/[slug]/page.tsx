"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { YouTubePlayer } from "@/components/karma/youtube-player"
import { meditations } from "@/data/meditations"
import { useT } from "@/lib/lang-context"
import { cn } from "@/lib/utils"

interface MeditationDetailPageProps {
  params: {
    slug: string
  }
}

export default function MeditationDetailPage({ params }: MeditationDetailPageProps) {
  const { t } = useT()
  
  const meditation = meditations.find(m => m.slug === params.slug)
  
  if (!meditation) {
    notFound()
  }

  const levelLabels: Record<string, string> = {
    beginner: t("level_beginner"),
    intermediate: t("level_intermediate"),
    advanced: t("level_advanced")
  }

  return (
    <main className="min-h-screen bg-background pt-20 pb-12">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Back button */}
        <Link href="/meditations">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("back")}
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className={cn(
            "font-serif text-4xl md:text-5xl font-bold text-foreground mb-4",
            meditation.isBlackWhite && "text-white"
          )}>
            {meditation.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="outline">{meditation.duration}</Badge>
            <Badge variant="outline">{levelLabels[meditation.level]}</Badge>
            {meditation.isBlackWhite && (
              <Badge className="bg-zinc-700 text-white">Black & White</Badge>
            )}
          </div>
        </div>

        {/* Video Player */}
        {meditation.youtubeVideoId && (
          <div className="mb-8">
            <YouTubePlayer 
              videoId={meditation.youtubeVideoId}
              title={meditation.title}
              className="shadow-lg"
            />
          </div>
        )}

        {/* Description */}
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {meditation.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t("duration_label")}</p>
            <p className="text-lg font-semibold text-foreground">{meditation.duration}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t("level_label")}</p>
            <p className="text-lg font-semibold text-foreground">{levelLabels[meditation.level]}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t("category_label")}</p>
            <p className="text-lg font-semibold text-foreground capitalize">{meditation.category}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
