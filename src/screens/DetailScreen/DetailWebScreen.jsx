import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './DetailWeb.styles'
import WebView from 'react-native-webview'

export const DetailWebScreen = ({ route }) => {
  const { url } = route.params
  
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: url }}
      />
    </SafeAreaView>
    
  )
  
}