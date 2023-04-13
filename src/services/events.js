import { BACKEND_URL } from '../utils/constants'

const defaultUrl = `${BACKEND_URL}/news?limit=5&offset=0`

export const getEvents = (url) => {
  const urlToFetch = url === null ? defaultUrl : url
  return fetch(urlToFetch)
    .then(response => response.json())
    .then(data => {
      const { content, nextPage } = data.response
      return {
        content,
        nextPage
      }
    })
}
