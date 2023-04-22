import { FlatList, Text, ActivityIndicator } from 'react-native'
import { NewsCard } from '../../components/NewsCard'
import { HeaderHome } from '../../components/HeaderHome'
import { COLORS } from '../../utils/theme'
import { useEvents } from '../../hooks/useEvents'
import { Carousel } from '../../components/Carousel'
import { SkeletonHome } from '../../components/SkeletonHome'
import { NotFound } from '../../components/NotFound'

export function HomeScreen ({ navigation }) {
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
      />
      {isLoading && isLoadingLatestEvents
        ? <SkeletonHome />
        : <FlatList
            data={events}
            renderItem={({ item }) => <NewsCard item={item} navigation={navigation} />}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={<Text> </Text>}
            showsVerticalScrollIndicator={false}
            onEndReached={nextUrl && loadEvents}
            onEndReachedThreshold={0.1}
            ListEmptyComponent={latestEvents.length === 0 && <NotFound />}
            ListHeaderComponent={
              <Carousel
                events={events}
                latestEvents={latestEvents}
                isLoadingLatestEvents={isLoadingLatestEvents}
              />
          }
            ListFooterComponent={nextUrl &&
              <ActivityIndicator
                style={{ marginVertical: 10 }}
                size='large'
                color={COLORS.primary}
              />}
          />}
    </>
  )
}
