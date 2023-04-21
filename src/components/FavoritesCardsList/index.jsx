import { useState } from 'react'
import { FlatList, Text, View, TextInput } from 'react-native'
import { NewsCard } from '../NewsCard'
import { Fontisto } from '@expo/vector-icons'
import { styles } from './FavoritesCardList.styles'
import { NotFound } from '../NotFound'

export function FavoritesCardsList (props) {
  const { favorites, navigation } = props
  const [data, setData] = useState(favorites[0].news)

  const handleChange = (query) => {
    if (query === '') return setData(favorites[0].news)

    const dataFiltered = data.filter(favorite => favorite.title.toLowerCase().includes(query.toLowerCase()))
    setData(dataFiltered)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Fontisto name='search' size={24} color='#86858c' style={styles.searchIcon} />
        <TextInput
          placeholder='¿Qué evento estás buscando?'
          style={styles.input}
          onChangeText={handleChange}
        />
      </View>
      {data.length === 0
        ? <NotFound />
        : <FlatList
            data={data}
            renderItem={({ item }) => <NewsCard item={item} navigation={navigation} />}
            keyExtractor={item => item._id}
            ItemSeparatorComponent={<Text> </Text>}
          />}
    </View>
  )
}
