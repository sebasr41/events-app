import * as SecureStore from 'expo-secure-store'

export const getTokenStored = async () => {
  try {
    const dataStored = await SecureStore.getItemAsync('token')
    const dataParsed = JSON.parse(dataStored)
    const token = dataParsed?.token
    return token
  } catch (error) {
    throw new Error(error)
  }
}
