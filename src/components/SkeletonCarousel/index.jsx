import { Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { Skeleton } from '../Skeleton'

const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 20
const CARD_WIDTH = Dimensions.get('window').width * 0.8

const skeletonArray = [1, 2, 3]

function Item () {
  return (
    <View style={styles.card}>
      <Skeleton height={200} width={CARD_WIDTH} style={{ borderRadius: 20 }} />
    </View>
  )
}

export function SkeletonCarousel () {
  return (
    <FlatList
      snapToAlignment='center'
      decelerationRate={0}
      snapToInterval={CARD_WIDTH + 25}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
      }}
      ItemSeparatorComponent={<Text>     </Text>}
      data={skeletonArray}
      renderItem={() => <Item />}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 200,
    flex: 1
  }
})
