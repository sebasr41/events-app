import React from 'react'
import { HomeScreen } from '.'
import { DetailScreen } from '../DetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeDetailStack = createNativeStackNavigator()

export const HomeDetailStackScreen = () => {
  return (
    <HomeDetailStack.Navigator screenOptions={{headerShown:false}}>
        <HomeDetailStack.Screen name ='Home' component={HomeScreen} />
        <HomeDetailStack.Screen name ='Detail' component={DetailScreen} />
    </HomeDetailStack.Navigator>
  )
}