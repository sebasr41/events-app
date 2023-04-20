import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import { styles } from './NoContent.styles'

export function NoContent () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola! Parece que aún no has guardado ningun evento en tus favoritos.</Text>
      <Text style={styles.paragraph}>
        Agrega tus eventos favoritos presionando en el botón "Agregar a favoritos". ¡Así podrás acceder a ellos fácilmente en el futuro y no perderte los mejores eventos!
      </Text>
      <LottieView
        autoPlay
        style={{
          width: 100,
          height: 200
        }}
        source={require('./../../lotties/no-content.json')}
      />
    </View>
  )
}
