import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationTab } from './src/navigation/NavigationTab'
import { UserProvider } from './src/contexts/UserContext'

export default function App () {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <NavigationTab />
        </NavigationContainer>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  )
}
