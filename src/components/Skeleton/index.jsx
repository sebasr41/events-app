import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

export function Skeleton ({ width, height, style }) {
  const translateX = useRef(new Animated.Value(-width)).current

  useEffect(() => {
    Animated.loop(Animated.timing(translateX, {
      toValue: width,
      useNativeDriver: true,
      duration: 1000
    }))
      .start()
  }, [width])

  return (
    <View
      style={StyleSheet.flatten([{
        width,
        height,
        backgroundColor: 'rgba(0,0,0,0.12)',
        overflow: 'hidden'
      }, style])}
    >
      <Animated.View style={{ width: '100%', height: '100%', transform: [{ translateX }] }}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.05)', 'transparent']}
          style={{ width: '100%', height: '100%' }}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  )
}
