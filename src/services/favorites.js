import { BACKEND_URL } from '../utils/constants'
import { getTokenStored } from '../utils/getTokenStored'

const url = `${BACKEND_URL}/favorites`

export const getFavorites = async () => {
  const token = await getTokenStored()
  return fetch(url, {
    headers: {
      Authorization: 'Bearer ' + token
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

export const addOrRemoveFavorite = async ({ id, remove }) => {
  const token = await getTokenStored()
  const urlToFetch = remove === undefined ? `${url}?id=${id}` : `${url}?id=${id}&remove=true`
  return fetch(urlToFetch, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      return {
        data
      }
    })
}
