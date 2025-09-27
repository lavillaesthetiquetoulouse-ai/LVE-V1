'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'

interface YouTubeFacadeProps {
  videoId: string
  title: string
  className?: string
}

export function YouTubeFacade({ videoId, title, className = '' }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handlePlay = () => {
    setIsLoaded(true)
  }

  if (isLoaded) {
    return (
      <div className={`relative aspect-video ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className={`relative aspect-video cursor-pointer group ${className}`} onClick={handlePlay}>
      {/* Thumbnail de YouTube */}
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 rounded-lg" />

      {/* Bouton play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full p-6 group-hover:scale-110 transform transition-transform">
          <Play className="w-8 h-8 text-white fill-current ml-1" />
        </div>
      </div>

      {/* Badge YouTube */}
      <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
        YouTube
      </div>
    </div>
  )
}