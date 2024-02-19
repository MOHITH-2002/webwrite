import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SkeletonLoader = () => {
  return (
      <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  )
}

export default SkeletonLoader
