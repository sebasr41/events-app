import * as SecureStore from 'expo-secure-store'

export const getTokenStored = async () => {
  try {
    const tokenStored = await SecureStore.getItemAsync('token')
    const tokenParsed = JSON.parse(tokenStored)
    return tokenParsed
  } catch (error) {
    throw new Error(error)
  }
}
