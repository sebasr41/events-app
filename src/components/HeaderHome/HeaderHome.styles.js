import { StatusBar, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: StatusBar.currentHeight
  },
  superTitle: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 600,
    marginBottom: -5
  },
  paragraph: {
    color: COLORS['light-gray'],
    marginBottom: 10
  },
  searchContainer: {
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 8,
    left: 8
  },
  input: {
    height: 40,
    backgroundColor: COLORS['grashy-grey'],
    padding: 10,
    borderRadius: 10,
    paddingLeft: 45
  }
})
