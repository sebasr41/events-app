import { Text, TextInput, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { styles } from './HeaderHome.styles'
import { Carousel } from '../Carousel'

export function HeaderHome () {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.superTitle}>Descubre</Text>
        <Text style={styles.paragraph}>Todos los eventos más importantes de Jujuy</Text>
        <View style={styles.searchContainer}>
          <Fontisto name='search' size={24} color='#86858c' style={styles.searchIcon} />
          <TextInput
            placeholder='Turismo en..., Tecnologías en..., Expo en...'
            style={styles.input}
          />
        </View>
        <Text style={styles.title}>Noticias de última hora</Text>
      </View>
      <Carousel />
      <View style={styles.container}>
        <Text style={styles.title}>Recomendación</Text>
      </View>
    </>
  )
}
