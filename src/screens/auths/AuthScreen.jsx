import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from './AuthScreen.styles'
import { LoginScreen } from '../login/LoginScreen'
import { SignupScreen } from '../signup/SignupScreen'

export const AuthScreen = () => {
  const [showLogin, setShowLogin] = useState(true)

  const handleSwitchToRegister = () => {
    setShowLogin(false)
  }

  const handleSwitchToLogin = () => {
    setShowLogin(true)
  }
  return (
    <View style={styles.container}>
      {showLogin
        ? (
          <LoginScreen onSwitchToRegister={handleSwitchToRegister} />
          )
        : (
          <SignupScreen onSwitchToLogin={handleSwitchToLogin} />
          )}
    </View>
  )
}
