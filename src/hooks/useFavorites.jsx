import { useEffect, useState } from 'react'
import { getFavorites } from '../services/favorites'

export function useFavorites () {
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getFavorites()
      .then(data => {
        const { docs } = data
        setFavorites(docs)
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    favorites,
    isLoading
  }
}
