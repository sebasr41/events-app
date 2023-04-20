import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { COLORS, SPACING } from '../utils/theme'
import { HomeDetailStackScreen } from '../screens/HomeScreen/HomeDetailStackScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { FavoriteScreen } from '../screens/FavoriteScreen'
const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Inicio: 'home',
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

export function NavigationTab () {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Inicio' component={HomeDetailStackScreen} />
      <Tab.Screen name='Favorites' component={FavoriteScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
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
