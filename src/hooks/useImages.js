import { useContext } from 'react'
import { ImagesContext } from '../utils/ImagesContext'

export const useImages = () => {
  const context = useContext(ImagesContext)
  return context
}
