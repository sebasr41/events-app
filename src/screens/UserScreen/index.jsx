import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { styles } from './UserInfoScreen.styles'
import useCurrentUser from '../../hooks/useCurrentUser'

export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useCurrentUser()

  async function deleteToken (key) {
    await SecureStore.deleteItemAsync(key)
  }

  const handleLogout = async () => {
    setCurrentUser(null)
    await deleteToken('token')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: `https://robohash.org/${currentUser.username}` }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileUsername}>{currentUser.username}</Text>

          <Text style={styles.profileEmail}>{currentUser.email}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
