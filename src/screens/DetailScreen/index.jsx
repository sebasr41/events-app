import { useState } from 'react'
import { View, Text, ScrollView, Image, StatusBar, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Link } from '@react-navigation/native'
import { Fontisto, Foundation, Entypo, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../DetailScreen/DetailScreen.styles'
import { COLORS } from '../../utils/theme'
import { useFavoriteItem } from '../../hooks/useFavoriteItem'

const HEIGHT = 130

export const DetailScreen = ({ route }) => {
  const { data } = route.params
  const { favorites, isLoading, handleFavorite } = useFavoriteItem()
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent
    setScrollPosition(contentOffset.y)
  }

  const saveFavorite = (id) => {
    handleFavorite({ id, data })
  }

  return (
    <>
      <StatusBar
        backgroundColor={scrollPosition >= HEIGHT ? COLORS.white : 'transparent'}
        barStyle={scrollPosition >= HEIGHT ? 'dark-content' : 'light-content'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
      >
        <ScrollView horizontal pagingEnabled>
          {data.images.map((image, idx) => (
            <View style={styles.imageContainer} key={idx}>
              <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0.9 }}
                end={{ x: 0, y: 0.2 }}
              />
              <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0.01 }}
                end={{ x: 0, y: 0.3 }}
              />
              <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode='cover'
              />
              <Text style={styles.badge}>{data.category.join(', ')}</Text>
              <Text style={styles.title}>{data.title}</Text>
              <TouchableOpacity
                disabled={isLoading}
                style={styles.bookmark}
                onPress={() => saveFavorite(data._id)}
              >
                {favorites !== undefined &&
                  favorites[0]?.news?.find(item => item._id === data._id)
                  ? <Ionicons name='bookmark' size={30} color={COLORS.white} />
                  : <Ionicons name='bookmark-outline' size={30} color={COLORS.white} />}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.textContainer}>
          <View style={styles.subContainer}>

            <View style={styles.detailContainer}>
              <Entypo name='location' size={19} color={COLORS.primary} />
              <Text style={styles.text}>{data.location}</Text>
            </View>

            <View style={styles.detailContainer}>
              <Fontisto name='date' size={19} color={COLORS.primary} />
              <Text style={styles.text}>{data.date}</Text>
            </View>

            <View style={styles.detailContainer}>
              <Foundation name='ticket' size={19} color={COLORS.primary} />
              <Text style={styles.text}>{'Precio de Entrada: ' + data.price}</Text>
            </View>

            {data.content.map((item, index) => (
              <Text key={index} style={styles.content}>{item}</Text>
            ))}

            <Link style={styles.webButton} to={{ screen: 'DetailWeb', params: { uri: data.url } }}>
              Ir a la web
            </Link>

            <MapView
              style={styles.map}
              initialRegion={{
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 0.0015,
                longitudeDelta: 0.0015
              }}
            >
              <Marker
                coordinate={{ latitude: data.latitude, longitude: data.longitude }}
                title={data.location}
              >
                <Image
                  style={styles.markerImage}
                  source={require('../../../assets/location.png')}
                />
              </Marker>
            </MapView>

            <View style={styles.detailContainer}>
              <Entypo name='open-book' size={19} color={COLORS['light-gray']} />
              <Text style={styles.text}>{'Autor: ' + data.author}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
