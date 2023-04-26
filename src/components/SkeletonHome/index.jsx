import { SkeletonCardList } from '../SkeletonCardList'
import { SkeletonCarousel } from '../SkeletonCarousel'

export function SkeletonHome () {
  return (
    <>
      <SkeletonCarousel />
      <SkeletonCardList />
    </>
  )
}
