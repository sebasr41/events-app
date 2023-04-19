import { StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  }
})
