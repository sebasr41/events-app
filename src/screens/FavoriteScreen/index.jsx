/* eslint-disable react/jsx-indent */
import { NoContent } from '../../components/NoContent'
import { SkeletonCardList } from '../../components/SkeletonCardList'
import { useFavorites } from '../../hooks/useFavorites'
import { FavoritesCardsList } from '../../components/FavoritesCardsList'
import { View } from 'react-native'
import { styles } from './FavoriteScreen.styles'
import { useState } from 'react'
import { NoLogged } from '../../components/NoLogged'

export function FavoriteScreen () {
  const { favorites, isLoading } = useFavorites()
  const [isLogged, setIsLogged] = useState(false)

  if (!isLogged && favorites === undefined) {
    return (
      <NoLogged />
    )
  }

  return (
    isLoading
      ? <View style={styles.container}><SkeletonCardList /></View>
      : <>
        {favorites[0]?.news?.length > 0
          ? <FavoritesCardsList favorites={favorites} />
          : <NoContent />}
        </>
  )
}
