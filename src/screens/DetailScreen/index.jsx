import React from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import { styles} from '../DetailScreen/DetailScreen.styles'
import { COLORS } from '../../utils/theme'
import MapView, { Marker } from 'react-native-maps'
import { Fontisto, Foundation, Entypo } from '@expo/vector-icons'
import { Link } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

export const DetailScreen = ({route}) => {
  const { data } = route.params
  return (
   <ScrollView >
              
          <ScrollView horizontal pagingEnabled >
            <View style={styles.imageContainer}>  
               <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                 style={styles.linearGradient}
                 start={{ x: 0, y: 0.9 }}
                 end={{ x: 0, y: 0.2 }}
                />         
                  { data.images.map((image,idx) => (
                      <Image
                      key={idx}
                      source={{ uri: image }}                     
                      style={styles.image}
                      resizeMode='cover'/>
                  ))}

                {/* source={{ uri:  `https://events-app-backend.vercel.app/api/v1=${image}`} */}
                {/* <Image
                 style={styles.image}
                 source={{ uri: data.images[0] }}
                 resizeMode='cover'/> */}

                 <Text style={styles.badge}>{data.category.join(', ')}</Text>
                 <Text style={styles.title }>{data.title}</Text>  
                </View>
          </ScrollView>          
         
<View style={styles.textConteiner}>
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

        {data.content.map((item,index) => (
                    <Text key={index} style={styles.content}>{item}</Text> 
        ))
        }      
        <Link style={styles.webButton} to={{ screen: 'DetailWeb', params: { uri: data.url } }}>
            Ir a la web
        </Link>
     
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
          title={data.location}>
          <Image 
          style={styles.markerImage}
          source={require("../../../assets/location.png")}/>
         </Marker>
      </MapView>
      <View style={styles.authorContainer}>
          <Entypo name="open-book" size={19} color={COLORS['light-gray']} /> 
          <Text style={styles.subtitle}>{"Autor: " + data.author}</Text>
        </View>  
   </View>
   </ScrollView>
  )
} 