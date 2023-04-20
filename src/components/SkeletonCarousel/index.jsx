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
    <View style={styles.container}>
      <View style={styles.skeletonContainer}>
        <Skeleton height={30} width={180} style={styles.skeletonItem} />
      </View>
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
      <View style={styles.skeletonContainer}>
        <Skeleton height={30} width={200} style={styles.skeletonItem} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 200,
    flex: 1
  },
  container: {
    marginBottom: 10
  },
  skeletonContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  skeletonItem: {
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 16
  }
})
