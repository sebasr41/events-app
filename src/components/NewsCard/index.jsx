import { View, Image, Text } from 'react-native'
import { styles } from './NewsCard.styles'

export function NewsCard (props) {
  const { item: { authorAndDate, category, imageUrl, title } } = props

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.authorAndDate}>{authorAndDate}
        </Text>
      </View>
    </View>
  )
}
