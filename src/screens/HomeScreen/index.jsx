import { FlatList, Text, View, ActivityIndicator } from 'react-native'
import { styles } from './HomeScreen.styles'
import { NewsCard } from '../../components/NewsCard'
import { HeaderHome } from '../../components/HeaderHome'
import { useEffect, useState } from 'react'
import { getEvents } from '../../services/events'
import { COLORS } from '../../utils/theme'

export function HomeScreen () {
  const [events, setEvents] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = () => {
    getEvents(nextUrl)
      .then((data) => {
        const { content, nextPage } = data
        setEvents([...events, ...content])
        nextPage !== 'null' ? setNextUrl(nextPage) : setNextUrl(null)
      })
      .catch(error => {
        console.log({ error })
      })
  }

  return (
    <View style={styles.container}>
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
