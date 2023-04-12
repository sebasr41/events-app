import { Dimensions, StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export function Loader () {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        style={{
          width: WIDTH,
          height: HEIGHT
        }}
        source={require('./../../lotties/loader.json')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: WIDTH,
    height: HEIGHT
  }
})
