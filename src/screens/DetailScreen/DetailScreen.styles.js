import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { COLORS, SPACING } from '../../utils/theme'

export const styles = StyleSheet.create({
  imageContainer: {
    height: 350,
    position: 'relative',
    marginBottom: SPACING.lg
  },
  linearGradient: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 350
  },
  badge: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    zIndex: 1,
    padding: 10,
    borderRadius: 20,
    top: 10,
    left: 10,
    marginTop: 160
  },
  title: {
    position: 'absolute',
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 210,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 10,
    zIndex: 1
  },
  bookmark: {
    position: 'absolute',
    zIndex: 1,
    top: StatusBar.currentHeight + 10,
    right: 12,
    width: 30,
    height: 30
  },
  chevron: {
    position: 'absolute',
    zIndex: 1,
    top: StatusBar.currentHeight + 13,
    left: 12,
    width: 30,
    height: 30
  },
  textContainer: {
    backgroundColor: COLORS.white,
    position: 'relative',
    zIndex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -50,
    paddingTop: 18
  },
  subContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8
  },
  text: {
    color: COLORS['light-gray'],
    fontWeight: 600
  },
  map: {
    height: 300,
    marginVertical: 20
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    marginTop: 0,
    marginBottom: 8
  },
  content: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 10
  },
  webButton: {
    textAlign: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 100,
    marginTop: 8,
    marginBottom: 8
  },
  markerImage: {
    width: 35,
    height: 35
  }
})
