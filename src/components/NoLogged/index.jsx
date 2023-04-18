import { Text, View } from 'react-native'
import { styles } from './NoLogged.styles'
import LottieView from 'lottie-react-native'
import { useEffect, useRef } from 'react'

export function NoLogged () {
  const animationRef = useRef(null)

  useEffect(() => {
    animationRef.current?.play(40, 200)
    return () => animationRef.current?.reset()
  }, [])

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        style={{
          width: 100,
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 10
        }}
        source={require('./../../lotties/login.json')}
      />
      <Text style={styles.title}>Por favor inicia sesión para ver tus eventos favoritos. Una vez que hayas iniciado sesión, podrás verlos.</Text>
    </View>
  )
}
