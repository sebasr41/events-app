import { Text, TextInput, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { styles } from './HeaderHome.styles'
import { useDebounce } from '../../hooks/useDebounce'
import { useEffect, useState, useRef } from 'react'
import { BACKEND_URL } from '../../utils/constants'
import { COLORS } from '../../utils/theme'

export function HeaderHome (props) {
  const {
    setNextUrl,
    loadEvents,
    setNextUrlToLatestEvents,
    loadLatestEvents,
    setIsLoading,
    setIsLoadingLatestEvents
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
    <View style={styles.container}>
      <Text style={styles.superTitle}>Descubre</Text>
      <Text style={styles.paragraph}>Todos los eventos más importantes de Jujuy</Text>
      <View style={styles.searchContainer}>
        <Fontisto name='search' size={24} color={COLORS['light-gray']} style={styles.searchIcon} />
        <TextInput
          placeholder='¿Qué evento estás buscando?'
          style={styles.input}
          value={value}
          onChangeText={handleChange}
        />
      </View>
    </View>
  )
}
