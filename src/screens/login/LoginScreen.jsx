import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './LoginScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { login } from '../../services/user.service'
import { UserContext } from '../../contexts/UserContext'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export const LoginScreen = ({ onSwitchToRegister }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  // const [Options, setOptions] = useState(true)
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleLogin = ({ email, password }) => {
    console.log('email', email)
    console.log('password', password)
    login(email, password)
      .then(data => {
        setCurrentUser(email)
        navigation.navigate('Home')
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
