import React from 'react'
import { HomeScreen } from '.'
import { DetailScreen } from '../DetailScreen'
import { DetailWebScreen } from '../DetailScreen/DetailWebScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeDetailStack = createNativeStackNavigator()

export const HomeDetailStackScreen = () => {
  return (
    <HomeDetailStack.Navigator screenOptions={{headerShown:false}}>
        <HomeDetailStack.Screen name ='Home' component={HomeScreen} />
        <HomeDetailStack.Screen name ='Detail' component={DetailScreen} />
        <HomeDetailStack.Screen name ='DetailWeb' component={DetailWebScreen} />

    </HomeDetailStack.Navigator>
  )
}