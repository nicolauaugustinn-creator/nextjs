"use client"

interface YouTubePlayerProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubePlayer({ videoId, title, className = "" }: YouTubePlayerProps) {
  return (
    <div className={`w-full aspect-video rounded-lg overflow-hidden bg-black ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0`}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}
