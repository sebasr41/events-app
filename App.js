import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationTab } from './src/navigation/NavigationTab'
import { UserProvider } from './src/contexts/UserContext'
import { FavoriteProvider } from './src/contexts/FavoriteContext'

export default function App () {
  return (
    <>
      <UserProvider>
        <FavoriteProvider>
          <NavigationContainer>
            <NavigationTab />
          </NavigationContainer>
        </FavoriteProvider>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  )
}
