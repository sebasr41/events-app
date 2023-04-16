import { Dimensions, FlatList, Image, Platform, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './Carousel.styles'
import { SkeletonCarousel } from '../SkeletonCarousel'

const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 20
const CARD_WIDTH = Dimensions.get('window').width * 0.8

function Item (props) {
  const { item: { images, category, title } } = props

  return (
    <View style={styles.imageContainer}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0.9 }}
        end={{ x: 0, y: 0.2 }}
      />
      <Text style={styles.badge}>{category.join(', ')}</Text>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{ uri: images[0] }}
        style={styles.image}
      />
    </View>
  )
}

export function Carousel (props) {
  const { latestEvents, isLoadingLatestEvents } = props

  return (
    isLoadingLatestEvents
      ? <SkeletonCarousel />
      : <FlatList
          snapToAlignment='center'
          decelerationRate={0}
          snapToInterval={CARD_WIDTH + 25}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
          }}
          ItemSeparatorComponent={<Text>     </Text>}
          data={latestEvents}
          renderItem={({ item }) => <Item item={item} />}
        />
  )
}
