import { StyleSheet } from 'react-native'
import { COLORS, FONTS, FONT_SIZE, SPACING } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACING.sm,
    fontFamily: FONTS.main,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: SPACING.sm
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  subtitle: {
    color: COLORS['light-gray'],
    fontWeight: 600
  },
  title: {
    color: COLORS.black,
    fontSize: FONT_SIZE.md,
    fontWeight: 600
  },
  authorAndDate: {
    color: COLORS['light-gray']
  }
})
