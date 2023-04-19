import { BACKEND_URL } from '../utils/constants'

const defaultUrl = `${BACKEND_URL}/auth/login`
const signUpUrl = `${BACKEND_URL}/auth/signup`

export const login = async (email, password) => {
  try {
    const response = await fetch(defaultUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    return response.json()
  } catch {
    throw new Error('jelouda')
  }
}

export const signup = async (email, password, username) => {
  try {
    const response = await fetch(signUpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, username })
    })
    return response.json()
  } catch {
    throw new Error('jelouda')
  }
}
