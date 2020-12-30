import React, { createContext, useEffect, useReducer } from 'react'

import useStorage from '../hooks/useStorage'
import {
  initialState,
  reducer
} from '../reducers/favouriteReducer'

import {
    FAVOURITE_ADD,
    FAVOURITE_REMOVE,
    FAVOURITE_INIT,
  } from '../constants/favouriteConstants'

export const FavouritesContext = createContext()

export const FavouritesProvider = (props) => {
  const { values, setValues, deleteValue } = useStorage(
    'favourites',
    initialState
  )
  const [favourites, dispatch] = useReducer(reducer, values)

  const add = (id) => {
    dispatch({ type: FAVOURITE_ADD, payload: id })
    setValues([...values, id])
  }

  const remove = (id) => {
    dispatch({ type: FAVOURITE_REMOVE, payload: id })
    deleteValue(id)
  }

  useEffect(() => {
    dispatch({ type: FAVOURITE_INIT, payload: values })
  }, [values])

  return (
    <FavouritesContext.Provider
      value={{ favourites, add, remove }}
      {...props}
    />
  )
}
