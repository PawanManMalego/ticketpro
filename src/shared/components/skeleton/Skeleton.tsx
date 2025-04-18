import React from "react"

import { cn } from "@/shared/utils/cn"

interface SkeletonProps {
  className?: string
  rounded?: string
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  rounded = "rounded-md",
}) => {
  return <div className={cn("animate-pulse bg-black/40", rounded, className)} />
}

export { Skeleton }
