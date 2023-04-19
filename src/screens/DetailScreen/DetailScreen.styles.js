import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE, SPACING } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
  imageContainer: {
    height: 350,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: SPACING.md
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 350,
    borderRadius: 20
  },
  badge: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    zIndex: 1,
    padding: 10,
    borderRadius: 20,
    top: 10,
    left: 10},

  subtitle: {
    color: COLORS['light-gray'],
    fontWeight: 600,
    marginLeft:10
  },
  title: {
    position: 'absolute',
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:210,
    marginBottom: 10,
    marginRight:5,
    marginLeft:10,
    zIndex:1,
  },
  location: {
    fontSize: 19,
    color: COLORS['light-gray'],
    marginBottom: 5
  },
  price: {
    fontSize: 20,
    color: COLORS['light-gray'],
    marginBottom: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
    marginBottom:8
  },authorContainer: {
    flexDirection: 'row',
    alignItems:"center",
    marginLeft:8,
    marginTop:0,
    marginBottom:8
  },rating: {
    marginLeft: 8,
    color: COLORS.text,
    fontSize: FONT_SIZE.md
  },
  content: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
    marginLeft:8,
    marginRight:8,
    marginBottom:10,
  },
  map: {
    height: 300,
    marginVertical: 20,
    borderRadius: 10
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
    marginBottom:8
  },
  markerImage:{
    width:35,
    height:35
  },
  markerTitle:{
    backgroundColor: COLORS.primary,
    color:COLORS.white
  },
  linearGradient: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }, badge: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    zIndex: 10,
    padding: 10,
    borderRadius: 20,
    top: 10,
    left: 10,
    marginTop:160
  },
  textConteiner:{
    backgroundColor:COLORS.white,
    position: 'relative',
    zIndex:10,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    marginTop:-50,
    paddingTop: 15,

  }
})