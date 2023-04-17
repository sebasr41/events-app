import React from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import { styles} from '../DetailScreen/DetailScreen.styles'
import { COLORS } from '../../utils/theme'
import MapView, { Marker } from 'react-native-maps'
import { Fontisto, Foundation, Octicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from '@react-navigation/native'

export const DetailScreen = ({route}) => {
  const { data } = route.params
  return (
   <ScrollView pagingEnabled>
      <View style={styles.imageContainer}>         
          <ScrollView horizontal pagingEnabled style={styles.imageContainer}>           
          <Image
           style={styles.image}
            source={{ uri: data.images[0] }}
            resizeMode='cover'/>
          <Image
            style={styles.image}
             source={{ uri: data.images[1] }}
             resizeMode='cover'/>
          </ScrollView>          
      </View>
     

      <View>
        <Text style={styles.title }>{data.title}</Text>  

        <View style={styles.ratingContainer}>
          <Entypo name="location" size={19} color={COLORS.primary} />
          <Text style={styles.subtitle} >{data.location}</Text> 
        </View>
        
        <View style={styles.ratingContainer}>
          <Fontisto name="date" size={19} color={COLORS.primary} />
          <Text style={styles.subtitle}>{data.date}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Foundation name="ticket" size={19} color={COLORS.primary} />
          <Text style={styles.subtitle}>{"Precio de Entrada: "+data.price}</Text>
        </View>
        <Text style={styles.content}>{data.content}</Text>    

        

        <Link style={styles.webButton} to={{ screen: 'DetailWeb', params: { url: data.url } }}>
            Ir a la web
        </Link>
      </View>

    
      <MapView 
        style={styles.map} 
        initialRegion={{         
          latitude:data.latitude,
          longitude:data.longitude,
          latitudeDelta:0.0015,
          longitudeDelta:0.0015
        }}
        >
        <Marker
          coordinate={{latitude:data.latitude,longitude:data.longitude}}
          title={data.location}

        />
      </MapView>

      <View style={styles.authorContainer}>
          <Entypo name="open-book" size={19} color={COLORS['light-gray']} /> 
          <Text style={styles.subtitle}>{"Autor: " + data.author}</Text>
        </View>
   </ScrollView>
  )
} 