import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE, SPACING } from '../../utils/theme'

const CARD_WIDTH = Dimensions.get('window').width * 0.8

export const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: SPACING.md
  },
  image: {
    width: CARD_WIDTH,
    height: 300
  },
  badge: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    zIndex: 1,
    padding: 10,
    borderRadius: 20,
    top: 10,
    left: 10
  },
  title: {
    position: 'absolute',
    color: COLORS.white,
    zIndex: 2,
    padding: 10,
    left: 10,
    bottom: 20,
    fontSize: FONT_SIZE.md,
    marginRight: 10,
    fontWeight: 600
  },
  linearGradient: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }
})
