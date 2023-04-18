import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import { styles } from './NotFound.styles'

export function NotFound () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lo siento, no se pudo encontrar lo que buscas. Por favor revisa tu búsqueda e intenta nuevamente.</Text>
      <LottieView
        autoPlay
        style={{
          width: 100,
          height: 100,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        source={require('./../../lotties/404.json')}
      />
    </View>
  )
}
