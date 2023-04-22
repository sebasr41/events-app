import { createContext, useState } from 'react'

export const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
  const [reload, setReload] = useState(false)

  return (
    <FavoriteContext.Provider value={{
      reload,
      setReload
    }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
