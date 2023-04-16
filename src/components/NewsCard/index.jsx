import { View, Image, Text, Pressable} from 'react-native'
import { styles } from './NewsCard.styles'

export function NewsCard (props) {
  const { item: { author, date, category, images, title } } = props

  return (
    <Pressable onPress={() => console.warn(title)}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: images[0] }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>{category.join(', ')}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.authorAndDate}>Por {author} | {date}
          </Text>
        </View>
      </View>
     </Pressable> 
  )
}
