import { useEffect, useRef, useState } from 'react'
import { getEvents } from '../services/events'
import queryString from 'query-string'

export function useEvents () {
  const [events, setEvents] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const prevContent = useRef([])

  useEffect(() => {
    setIsLoading(true)
    loadEvents()
  }, [])

  const loadEvents = () => {
    getEvents(nextUrl)
      .then(data => {
        const { content, nextPage } = data

        const params = queryString.parseUrl(nextUrl !== null ? nextUrl : '').query

        if (params?.title && params?.title.length > 0) {
          setEvents([...prevContent.current, ...content])

          if (nextPage !== null) {
            prevContent.current = content
          }
        } else if (params?.title === '') {
          setEvents(content)
        } else {
          setEvents(prevEvents => ([...prevEvents, ...content]))
        }

        nextPage === null ? setNextUrl(null) : setNextUrl(nextPage)
      })
      .catch(error => {
        console.log({ error })
      })
      .finally(() => setIsLoading(false))
  }

  return {
    events,
    nextUrl,
    setNextUrl,
    isLoading,
    loadEvents
  }
}
