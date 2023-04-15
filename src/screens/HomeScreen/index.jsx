/* eslint-disable react/jsx-indent */
import { FlatList, Text, ActivityIndicator } from 'react-native'
import { NewsCard } from '../../components/NewsCard'
import { HeaderHome } from '../../components/HeaderHome'
import { COLORS } from '../../utils/theme'
import { useEvents } from '../../hooks/useEvents'
import { SkeletonCardList } from '../../components/SkeletonCardList'

export function HomeScreen () {
  const {
    events,
    isLoading,
    nextUrl,
    setNextUrl,
    loadEvents
  } = useEvents()

  return (
    <>
    <HeaderHome setNextUrl={setNextUrl} loadEvents={loadEvents} />
    {isLoading
      ? <SkeletonCardList />
      : <FlatList
          data={events}
          renderItem={({ item }) => <NewsCard item={item} />}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={<Text> </Text>}
          showsVerticalScrollIndicator={false}
          onEndReached={nextUrl && loadEvents}
          onEndReachedThreshold={0.1}
          ListFooterComponent={nextUrl && <ActivityIndicator size='large' color={COLORS.primary} />}
        />}
    </>

  )
}
