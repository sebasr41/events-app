import { useEffect, useState } from 'react'
import { getFavorites } from '../services/favorites'
import useCurrentUser from './useCurrentUser'

export function useFavorites () {
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { currentUser } = useCurrentUser()

  useEffect(() => {
    getFavorites()
      .then(data => {
        const { docs } = data
        setFavorites(docs)
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [currentUser])

  return {
    favorites,
    isLoading
  }
}
