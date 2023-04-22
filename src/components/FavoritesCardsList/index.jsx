import { useState } from 'react'
import { FlatList, Text, View, TextInput } from 'react-native'
import { NewsCard } from '../NewsCard'
import { Fontisto } from '@expo/vector-icons'
import { styles } from './FavoritesCardList.styles'
import { NotFound } from '../NotFound'

export function FavoritesCardsList (props) {
  const { favorites, navigation } = props
  const [query, setQuery] = useState('')

  const data = favorites[0].news.filter(favorite => favorite.title.toLowerCase().includes(query.toLowerCase()))

  const handleChange = (query) => {
    setQuery(query)
  }

  return (
    < >
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
    </>
  )
}
