import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE, SPACING } from '../../utils/theme'

const CARD_WIDTH = Dimensions.get('window').width * 0.8

export const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 20,
    height: 200,
    flex: 1
  },
  image: {
    width: CARD_WIDTH,
    flex: 1
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
  },
  superTitle: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 600,
    marginBottom: SPACING.md,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: SPACING.sm
  }
})
