/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { styles } from './LoginScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { login } from '../../services/user'
import { UserContext } from '../../contexts/UserContext'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as SecureStore from 'expo-secure-store'
import { LoaderBtn } from '../../components/LoaderBtn'

const schema = yup.object({
  email: yup.string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio')
    .max(255, 'El correo electrónico no debe tener más de 255 caracteres')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'El correo electrónico no es válido'
    ),
  password: yup.string()
    .required('La contraseña es obligatoria')
}).required()

export const LoginScreen = ({ onSwitchToRegister }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { setCurrentUser } = useContext(UserContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  async function save (key, value) {
    await SecureStore.setItemAsync(key, value)
  }

  const handleLogin = ({ email, password }) => {
    setIsLoading(true)
    login(email, password)
      .then(data => {
        if (data.error === 'Unauthorized') {
          ToastAndroid.show('Usuario o contraseña incorrecta', ToastAndroid.SHORT)
          return
        }
        const { username, email } = data.response.user
        save('token', data.response.token)
        setCurrentUser({ email, username })
      })
      .catch(err => console.warn(err))
      .finally(() => setIsLoading(false))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia sesión</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name='email'
          rules={{ required: 'El correo electrónico es requerido' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder='Correo electrónico'
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              autoCapitalize='none'
            />
          )}
        />
        {errors.email &&
          <View style={styles.errorContainer}>
            <MaterialIcons name='error-outline' size={20} color='red' />
            <Text style={styles.errorText}>{errors.email.message}</Text>
          </View>}
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name='password'
          rules={{ required: 'La constraseña es requerida' }}
          render={({ field: { onBlur, onChange, value } }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder='Contraseña'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={!isPasswordVisible}
              />

              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.toggleIcon}
              >
                <Text style={styles.passwordToggleText}>
                  {isPasswordVisible
                    ? <Entypo name='eye-with-line' size={24} color='black' />
                    : <Entypo name='eye' size={24} color='black' />}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {errors.password &&
          <View style={styles.errorContainer}>
            <MaterialIcons name='error-outline' size={20} color='red' />
            <Text style={styles.errorText}>{errors.password.message}</Text>
          </View>}
      </View>

      {
        isLoading
          ? <LoaderBtn />
          : <TouchableOpacity
              disabled={isLoading}
              style={styles.button} onPress={handleSubmit(handleLogin)}
            >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
      }

      <View style={styles.tittleRegister}>
        <Text>
          ¿No tienes una cuenta?{' '}
        </Text>
        <TouchableOpacity onPress={onSwitchToRegister}>
          <Text style={styles.switchLink}>
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
