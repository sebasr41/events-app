import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  searchContainer: {
    marginTop: StatusBar.currentHeight + 10,
    position: 'relative',
    marginBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%'
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 8,
    left: 8
  },
  input: {
    height: 40,
    backgroundColor: '#E8E2E2',
    padding: 10,
    borderRadius: 10,
    paddingLeft: 45
  }
})
