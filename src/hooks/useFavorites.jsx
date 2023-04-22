import { useEffect, useState } from 'react'
import { getFavorites } from '../services/favorites'
import { useFavoriteContext } from './useFavoriteContext'
import useCurrentUser from './useCurrentUser'

export function useFavorites () {
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { reload, setReload } = useFavoriteContext()
  const { currentUser } = useCurrentUser()

  useEffect(() => {
    getFavorites()
      .then(data => {
        const { docs } = data
        setFavorites(docs)
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [currentUser, reload])

  const refreshFavorites = () => {
    setReload(prev => !prev)
  }

  return {
    favorites,
    isLoading,
    refreshFavorites
  }
}
