import { useContext } from 'react'
import { ImagesContext } from '../utils/ImagesContext'
export const useDetails = () => {
  const context = useContext(ImagesContext)
  return context
}
