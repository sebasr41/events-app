/* eslint-disable react/jsx-indent */
import { View } from 'react-native'
import { NoContent } from '../../components/NoContent'
import { SkeletonCardList } from '../../components/SkeletonCardList'
import { useFavorites } from '../../hooks/useFavorites'
import { FavoritesCardsList } from '../../components/FavoritesCardsList'
import { styles } from './FavoriteScreen.styles'
import { NoLogged } from '../../components/NoLogged'

export function FavoriteScreen ({ navigation }) {
  const { favorites, isLoading } = useFavorites()

  if (favorites === undefined) {
    return (
        <NoLogged />
    )
  }

  return (
    isLoading
      ? <View style={styles.container}><SkeletonCardList /></View>
      : <>
        {
          favorites[0]?.news?.length > 0
            ? <FavoritesCardsList favorites={favorites} navigation={navigation} />
            : <NoContent />
        }
        </>
  )
}
