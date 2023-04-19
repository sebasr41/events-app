/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import { styles } from './SignupScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { signup } from '../../services/user'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LoaderBtn } from '../../components/LoaderBtn'

const schema = yup.object({
  username: yup.string()
    .required('El nombre de usuario es obligatorio')
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
    .max(16, 'El nombre de usuario debe tener al menos un maximo 16 caracteres')
    .matches(
      /^[a-z0-9_-]{3,15}$/,
      'El nombre de usuario debe contener letras y números'
    ),
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
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/,
      'La contraseña debe tener al menos un número, una mayúscula y un símbolo'
    )
}).required()

export const SignupScreen = ({ onSwitchToLogin }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  const handleSignUp = ({ email, password, username }) => {
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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Regístrate</Text>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name='username'
            rules={{ required: 'El nombre de usuario es requerido' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder='Nombre de usuario'
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                autoCapitalize='none'
              />
            )}
          />
          {errors.username &&
            <View style={styles.errorContainer}>
              <MaterialIcons name='error-outline' size={20} color='red' />
              <Text style={styles.errorText}>{errors.username.message}</Text>
            </View>}
        </View>

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
              </View>

            )}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.toggleIcon}
          >
            <Text style={styles.passwordToggleText}>
              {isPasswordVisible ? <Entypo name='eye-with-line' size={24} color='black' /> : <Entypo name='eye' size={24} color='black' />}
            </Text>
          </TouchableOpacity>
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
               style={styles.button}
               disabled={isLoading}
               onPress={handleSubmit(handleSignUp)}
             >
             <Text style={styles.buttonText}>Registrarme</Text>
           </TouchableOpacity>
        }

        <View style={styles.tittleRegister}>
          <Text>
            ¿Ya tienes una cuenta?{' '}
          </Text>
          <TouchableOpacity onPress={onSwitchToLogin}>
            <Text style={styles.switchLink}>
              Inicia sesión
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}
