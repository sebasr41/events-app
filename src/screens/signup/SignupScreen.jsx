import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './SignupScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { signup } from '../../services/user.service'
import { Entypo } from '@expo/vector-icons'

export const SignupScreen = ({ onSwitchToLogin }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible)
  }

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSignUp = ({ email, password }) => {
    console.log('email', email)
    console.log('password', password)
    signup(email, password)
      .then(data => {
        console.log(data)
        onSwitchToLogin()
      })
      .catch(err => console.warn(err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='username'
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            autoCapitalize='none'
          />

        )}
        name='username'
        rules={{ required: 'El username es requerido' }}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
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
          </View>

        )}
        name='password'
        rules={{ required: 'La constraseña es requerida' }}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={styles.toggleIcon}
      >
        <Text style={styles.passwordToggleText}>
          {isPasswordVisible ? <Entypo name='eye-with-line' size={24} color='black' /> : <Entypo name='eye' size={24} color='black' />}
        </Text>
      </TouchableOpacity>
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignUp)}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <View style={styles.tittleRegister}>
        <Text style={styles.switchText}>
          ¿Ya tienes una cuenta?{' '}
          <Text style={styles.switchLink} onPress={onSwitchToLogin}>
            Iniciar sesión
          </Text>
        </Text>

      </View>

    </View>
  )
}
