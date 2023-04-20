import { BACKEND_URL } from '../utils/constants'
import { getTokenStored } from '../utils/getTokenStored'

const url = `${BACKEND_URL}/favorites`

export const getFavorites = () => {
  return fetch(url, {
    headers: {
      Authorization: 'Bearer ' + getTokenStored()
    }
  })
    .then(response => response.json())
    .then(data => {
      const { docs } = data
      return {
        docs
      }
    })
}
