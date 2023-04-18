import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE, SPACING } from '../../utils/theme'

const HEIGHT = Dimensions.get('window').height

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: HEIGHT / 4
  },
  title: {
    fontSize: FONT_SIZE.md,
    marginBottom: SPACING.lg,
    fontWeight: 500,
    textAlign: 'center'

  },
  paragraph: {
    fontSize: FONT_SIZE.md,
    paddingLeft: SPACING.sm,
    paddingRight: SPACING.sm,
    color: COLORS['light-gray']
  }
})
