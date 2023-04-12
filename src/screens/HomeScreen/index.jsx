/* eslint-disable react/jsx-indent */
import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import { styles } from './HomeScreen.styles'
import { NewsCard } from '../../components/NewsCard'
import { HeaderHome } from '../../components/HeaderHome'
import { COLORS } from '../../utils/theme'
import { Loader } from '../../components/Loader'
import { useEvents } from '../../hooks/useEvents'

export function HomeScreen () {
  const { events, isLoading, nextUrl, loadEvents } = useEvents()

  return (
    isLoading
      ? <Loader />
      : <View style={styles.container}>
        <FlatList
          data={events}
          renderItem={({ item }) => <NewsCard item={item} />}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={<Text> </Text>}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <HeaderHome />}
          onEndReached={nextUrl && loadEvents}
          onEndReachedThreshold={0.1}
          ListFooterComponent={nextUrl && <ActivityIndicator size='large' color={COLORS.primary} />}
        />
        </View>

  )
}
