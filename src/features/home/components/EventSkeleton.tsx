import React from "react"

import { Card } from "@/shared/components/card/Card"
import { Skeleton } from "@/shared/components/skeleton/Skeleton"

const EventSkeleton: React.FC = () => {
  return (
    <Card className="min-h-60 max-w-lg animate-pulse bg-black/10">
      <div className="relative">
        <Skeleton className="h-52 w-full rounded-2xl" />

        {/* Optional pill skeleton for highlighted_info */}
        <div className="absolute top-4 right-4">
          <Skeleton className="h-6 w-24 rounded-full bg-white/30 backdrop-blur-sm" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2 w-3/4">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-6 w-10" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-10 rounded-xl" />
        </div>
      </div>
    </Card>
  )
}

export { EventSkeleton }
