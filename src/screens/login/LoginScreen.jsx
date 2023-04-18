import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './LoginScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { login } from '../../services/user.service'
import { UserContext } from '../../contexts/UserContext'
import { Entypo } from '@expo/vector-icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as SecureStore from 'expo-secure-store'
export const LoginScreen = ({ onSwitchToRegister }) => {
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

  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  const { setCurrentUser } = useContext(UserContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  async function save (key, value) {
    await SecureStore.setItemAsync(key, value)
  }

  const handleLogin = ({ email, password }) => {
    login(email, password)
      .then(data => {
        setCurrentUser(data.response.user.email)
        save('token', data.response.token)
      })
      .catch(err => console.warn(err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='email'
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            autoCapitalize='none'
          />

        )}
        name='email'
        rules={{ required: 'El email es requerido' }}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <Controller
        control={control}
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
                {isPasswordVisible ? <Entypo name='eye-with-line' size={24} color='black' /> : <Entypo name='eye' size={24} color='black' />}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        name='password'
        rules={{ required: 'La constraseña es requerida' }}
      />

      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.tittleRegister}>
        <Text style={styles.switchText}>
          ¿No tienes una cuenta?{' '}
          <Text style={styles.switchLink} onPress={onSwitchToRegister}>
            Registrarse
          </Text>
        </Text>
      </View>

    </View>
  )
}
