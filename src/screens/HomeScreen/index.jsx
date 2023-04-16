/* eslint-disable react/jsx-indent */
import { FlatList, Text, ActivityIndicator } from 'react-native'
import { NewsCard } from '../../components/NewsCard'
import { HeaderHome } from '../../components/HeaderHome'
import { COLORS } from '../../utils/theme'
import { useEvents } from '../../hooks/useEvents'
import { SkeletonCardList } from '../../components/SkeletonCardList'
import { Carousel } from '../../components/Carousel'

export function HomeScreen () {
  const {
    events,
    isLoading,
    setIsLoading,
    nextUrl,
    setNextUrl,
    loadEvents
  } = useEvents({ isLatest: false })

  const {
    events: latestEvents,
    isLoading: isLoadingLatestEvents,
    setIsLoading: setIsLoadingLatestEvents,
    setNextUrl: setNextUrlToLatestEvents,
    loadEvents: loadLatestEvents
  } = useEvents({ isLatest: true })

  return (
    <>
      <HeaderHome
        setNextUrl={setNextUrl}
        loadEvents={loadEvents}
        setIsLoading={setIsLoading}
        setNextUrlToLatestEvents={setNextUrlToLatestEvents}
        loadLatestEvents={loadLatestEvents}
        setIsLoadingLatestEvents={setIsLoadingLatestEvents}
      >
        <Carousel
          latestEvents={latestEvents}
          isLoadingLatestEvents={isLoadingLatestEvents}
        />
      </HeaderHome>
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
          ListFooterComponent={nextUrl && <ActivityIndicator style={{ marginBottom: 10, marginTop: 10 }} size='large' color={COLORS.primary} />}
        />}
    </>
  )
}
