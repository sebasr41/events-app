import { Text, TextInput, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { styles } from './HeaderHome.styles'
import { useDebounce } from '../../hooks/useDebounce'
import { useEffect, useState, useRef } from 'react'
import { BACKEND_URL } from '../../utils/constants'

export function HeaderHome (props) {
  const {
    setNextUrl,
    loadEvents,
    setNextUrlToLatestEvents,
    loadLatestEvents,
    setIsLoading,
    setIsLoadingLatestEvents,
    children
  } = props
  const [value, setValue] = useState('')
  const debouncedText = useDebounce(value)
  const isFirstTime = useRef(true)

  const handleChange = (query) => {
    setValue(query)
    setNextUrl(`${BACKEND_URL}/news?limit=5&offset=0&title=${query}`)
    setNextUrlToLatestEvents(`${BACKEND_URL}/news/latest?limit=5&offset=0&title=${query}`)
  }

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false
      return
    }
    setIsLoading(true)
    setIsLoadingLatestEvents(true)
    loadEvents()
    loadLatestEvents()
  }, [debouncedText])

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.superTitle}>Descubre</Text>
        <Text style={styles.paragraph}>Todos los eventos más importantes de Jujuy</Text>
        <View style={styles.searchContainer}>
          <Fontisto name='search' size={24} color='#86858c' style={styles.searchIcon} />
          <TextInput
            placeholder='¿Qué evento estás buscando?'
            style={styles.input}
            value={value}
            onChangeText={handleChange}
          />
        </View>
        <Text style={styles.title}>Eventos recientes</Text>
      </View>
      {children}
      <View style={styles.container}>
        <Text style={styles.title}>Recomendación</Text>
      </View>
    </View>
  )
}
