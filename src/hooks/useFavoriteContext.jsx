import { useContext } from 'react'
import { FavoriteContext } from '../contexts/FavoriteContext'

export const useFavoriteContext = () => useContext(FavoriteContext)
