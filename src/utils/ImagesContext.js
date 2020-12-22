import React, { createContext, useState, useEffect } from 'react'

export const ImagesContext = createContext()

export const ImagesProvider = (props) => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0)
  const [query, setQuery] = useState('')
  



  useEffect(() => {
      
  const load = async () => {
    const response = await fetch(
      'https://www.breakingbadapi.com/api/characters'
    )

    // console.log(result.data)
    const data = await response.json()
    setImages(data)
    console.log(data, 'Itt az adat');
    console.log(data[0].img, 'elso kep');
  }
    load()
  }, [])

  const next = () => {
    setIndex((index + 1) % images.length)
  }

  const prev = () => {
    setIndex((index + images.length - 1) % images.length)
  }

  return (
    <ImagesContext.Provider
      value={{ images, next, prev, index, setIndex }}
      {...props}
    />
  )
}
