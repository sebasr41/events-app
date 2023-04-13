import { useEffect, useState } from 'react'
import { getEvents } from '../services/events'

export function useEvents () {
  const [events, setEvents] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    loadEvents()
  }, [])

  const loadEvents = () => {
    getEvents(nextUrl)
      .then((data) => {
        const { content, nextPage } = data
        setEvents([...events, ...content])
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
    isLoading,
    loadEvents
  }
}
