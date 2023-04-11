import { FlatList, Text, View } from 'react-native'
import { styles } from './HomeScreen.styles'
import { data } from '../../mock/data'
import { NewsCard } from '../../components/NewsCard'
import { HeaderHome } from '../../components/HeaderHome'

export function HomeScreen () {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <NewsCard item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<Text> </Text>}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <HeaderHome />}
      />
    </View>
  )
}
