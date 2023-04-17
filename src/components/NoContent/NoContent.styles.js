import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE, SPACING } from '../../utils/theme'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: FONT_SIZE.lg,
    marginBottom: SPACING.sm,
    fontWeight: 700

  },
  paragraph: {
    fontSize: FONT_SIZE.md,
    paddingLeft: SPACING.sm,
    paddingRight: SPACING.sm,
    color: COLORS['light-gray']
  }
})
