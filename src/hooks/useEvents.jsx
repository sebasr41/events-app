import { useEffect, useRef, useState } from 'react'
import { getEvents } from '../services/events'
import queryString from 'query-string'

export function useEvents ({ isLatest }) {
  const [events, setEvents] = useState([])
  const [eventsSearch, setEventsSearch] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const params = useRef()

  useEffect(() => {
    setIsLoading(true)
    loadEvents()
  }, [])

  const loadEvents = () => {
    getEvents(nextUrl, isLatest)
      .then(data => {
        const { content, nextPage } = data

        params.current = queryString.parseUrl(nextUrl !== null ? nextUrl : '').query

        if (params.current?.title && params.current?.title.length > 0) {
          const includeAtLeastOne = content.some((obj1) => {
            return eventsSearch.some((obj2) => {
              return JSON.stringify(obj1) === JSON.stringify(obj2)
            })
          })

          if (includeAtLeastOne || params.current?.offset === '0') {
            setEventsSearch(content)
          } else {
            setEventsSearch(prevEventsSearch => ([...prevEventsSearch, ...content]))
          }
        } else if (params.current?.title === '') {
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
    events: params.current?.title && params.current?.title.length > 0 ? eventsSearch : events,
    nextUrl,
    setNextUrl,
    isLoading,
    setIsLoading,
    loadEvents
  }
}
