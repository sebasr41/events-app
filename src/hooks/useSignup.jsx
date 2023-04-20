import { useState } from 'react'
import { ToastAndroid } from 'react-native'
import { signup } from '../services/user'

export function useSignup (onSwitchToLogin) {
  const [isLoading, setIsLoading] = useState(false)
  const userSignup = ({ email, password, username }) => {
    setIsLoading(true)
    signup(email, password, username)
      .then(data => {
        if (data.statusCode === 403 && data.error === 'Forbidden') {
          ToastAndroid.show('El usuario ya se encuentra registrado', ToastAndroid.SHORT)
          return
        }
        if (data.error === false) {
          ToastAndroid.show('Usuario registrado exitosamente', ToastAndroid.SHORT)
          onSwitchToLogin()
        }
      })
      .catch(err => console.warn(err))
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    userSignup

  }
}
