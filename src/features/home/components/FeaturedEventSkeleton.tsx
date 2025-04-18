import React from "react"

import { Card } from "@/shared/components/card/Card"
import { Skeleton } from "@/shared/components/skeleton/Skeleton"

const FeaturedEventSkeleton: React.FC = () => {
  return (
    <Card
      bordered
      className="col-span-2 flex flex-col md:flex-row md:h-96 max-w-5xl"
    >
      {/* Image Skeleton */}
      <div className="w-full md:w-96 h-60 md:h-96 relative">
        <Skeleton className="w-full h-full" />
        {/* Optional highlight skeleton */}
        <Skeleton
          className="absolute top-4 left-4 w-24 h-6"
          rounded="rounded-full"
        />
      </div>

      {/* Content Skeleton */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Top row */}
          <div className="flex justify-between mb-4">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-28 h-4" />
          </div>

          {/* Title, Location, Description */}
          <Skeleton className="w-3/4 h-5 mb-2" />
          <Skeleton className="w-1/2 h-4 mb-4" />
          <div className="space-y-2">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-5/6 h-3" />
            <Skeleton className="w-2/3 h-3" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8">
          <div>
            <Skeleton className="w-20 h-3 mb-1" />
            <Skeleton className="w-16 h-5" />
          </div>
          <Skeleton className="w-32 h-10 rounded-lg" />
        </div>
      </div>
    </Card>
  )
}

export { FeaturedEventSkeleton }
