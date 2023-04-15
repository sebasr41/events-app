import { BACKEND_URL } from '../utils/constants'

const defaultUrl = `${BACKEND_URL}/auth/login`

export const postUsers = async (email, password) => {
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
