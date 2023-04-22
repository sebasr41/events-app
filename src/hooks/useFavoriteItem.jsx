import { ToastAndroid } from 'react-native'
import { addOrRemoveFavorite } from '../services/favorites'
import { useFavorites } from './useFavorites'

export function useFavoriteItem () {
  const { favorites, isLoading, refreshFavorites } = useFavorites()

  const handleFavorite = ({ id, data }) => {
    if (favorites === undefined) {
      ToastAndroid.show('Para poder guardar en favoritos, debes iniciar sesión', ToastAndroid.SHORT)
      return
    }

    const isFavoriteFound = favorites[0]?.news?.find(item => item._id === data._id)

    addOrRemoveFavorite({ id, remove: isFavoriteFound })
      .then(res => {
        if (res.data.message === 'News removed from favorites') {
          ToastAndroid.show('Se ha quitado de favoritos', ToastAndroid.SHORT)
          return
        }
        ToastAndroid.show('Guardado en favoritos', ToastAndroid.SHORT)
      })
      .catch(error => {
        console.log({ error })
      })
      .finally(() => {
        refreshFavorites()
      })
  }

  return {
    favorites,
    isLoading,
    handleFavorite
  }
}
