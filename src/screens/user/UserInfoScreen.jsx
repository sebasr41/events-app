import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserInfoScreen.styles'
import { UserContext } from '../../contexts/UserContext'
export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)
  const handleLogout = () => {
    setCurrentUser(null)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../../../assets/images/avatar.png')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileEmail}>{currentUser}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}
