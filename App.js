import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeTabs } from './src/navigation/HomeTabs'
import { UserProvider } from './src/contexts/UserContext'
import { FavoriteProvider } from './src/contexts/FavoriteContext'
import { DetailScreen } from './src/screens/DetailScreen'
import { DetailWebScreen } from './src/screens/DetailWebScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <UserProvider>
        <FavoriteProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='HomeTabs' component={HomeTabs} />
              <Stack.Screen name='Detail' component={DetailScreen} />
              <Stack.Screen name='DetailWeb' component={DetailWebScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoriteProvider>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  )
}
