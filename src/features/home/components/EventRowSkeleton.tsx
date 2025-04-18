import React from "react"

import { Skeleton } from "@/shared/components/skeleton/Skeleton"

interface EventRowSkeletonProps {
  withEndSlot?: boolean
}

const EventRowSkeleton: React.FC<EventRowSkeletonProps> = ({
  withEndSlot = true,
}) => {
  return (
    <div className="flex items-center space-x-4 p-3 bg-muted/30 rounded-xl">
      <Skeleton className="size-12 rounded-xl" />

      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/5 rounded-md" />
        <Skeleton className="h-3 w-2/5 rounded-md" />
      </div>

      {withEndSlot && <Skeleton className="h-6 w-6 rounded-full" />}
    </div>
  )
}

export { EventRowSkeleton }
