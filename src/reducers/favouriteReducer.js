import {
    FAVOURITE_ADD,
    FAVOURITE_REMOVE,
    FAVOURITE_RESET,
    FAVOURITE_INIT,
  } from '../constants/favouriteConstants'
export const initialState = []

export const reducer = (state, action) => {
  switch (action.type) {
    case FAVOURITE_ADD:
      if (!state.includes(action.payload)) {
        return [...state, action.payload]
      }
      return state
    case FAVOURITE_REMOVE:
      return state.filter((s) => s !== action.payload)
    case FAVOURITE_RESET:
      return initialState
    case FAVOURITE_INIT:
      return action.payload
    default:
      throw new Error('unknown type')
  }
}