import React from "react"

import { Skeleton } from "@/shared/components/skeleton/Skeleton"

const HeroSectionSkeleton: React.FC = () => {
  return (
    <section className="relative h-[60dvh] w-full bg-cover flex items-center bg-black/40 animate-pulse">
      {/* Left gradient overlay */}
      <div className="absolute inset-0 w-3/4 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Skeleton Content */}
      <div className="relative z-10 pl-6 md:pl-16 pr-6 max-w-sm text-white space-y-6">
        <Skeleton className="h-10 md:h-12 w-3/4" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-5/6" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-4 mt-2">
          <Skeleton className="h-12 w-52 rounded-lg" />
          <Skeleton className="h-12 w-12 rounded-lg" />
        </div>
      </div>
    </section>
  )
}

export { HeroSectionSkeleton }
