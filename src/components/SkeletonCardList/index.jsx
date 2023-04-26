import { SkeletonCard } from '../SkeletonCard'

const skeletonArray = [1, 2, 3, 4, 5]

export function SkeletonCardList () {
  return (
    <>
      {skeletonArray.map(item => (
        <SkeletonCard key={item} />
      ))}
    </>
  )
}
