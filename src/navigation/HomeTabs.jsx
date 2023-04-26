import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { COLORS, SPACING } from '../utils/theme'
import { ProfileScreen } from '../screens/ProfileScreen'
import { FavoriteScreen } from '../screens/FavoriteScreen'
import { HomeScreen } from '../screens/HomeScreen'
const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Home: 'home',
  Profile: 'person',
  Favorites: 'bookmark-alt'
}
const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]

  return {
    tabBarIcon: ({ size, color }) => (
      <Fontisto name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export function HomeTabs () {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name='Home'
        options={{ title: 'Inicio' }}
        component={HomeScreen}
      />
      <Tab.Screen
        name='Favorites'
        options={{ title: 'Favoritos' }}
        component={FavoriteScreen}
      />
      <Tab.Screen
        name='Profile'
        options={{ title: 'Perfil' }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
