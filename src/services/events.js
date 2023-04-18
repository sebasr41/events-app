import { BACKEND_URL } from '../utils/constants'

const recomendationsEventsUrl = `${BACKEND_URL}/news?limit=5&offset=0`
const latestEventsUrl = `${BACKEND_URL}/news/latest`

export const getEvents = (url, isLatest) => {
  let urlToFetch

  if (isLatest) {
    urlToFetch = url === null ? latestEventsUrl : url
  } else {
    urlToFetch = url === null ? recomendationsEventsUrl : url
  }

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
