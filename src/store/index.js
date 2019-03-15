import React, { useContext, createContext, useReducer } from 'react'

import { middlewareCaller } from '../helpers'
import reducer, { initialState } from './reducers'
import middlewares from './middlewares'

const Context = createContext()

export const useStore = () => useContext(Context)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  middlewareCaller(dispatch, middlewares)

  return (
    <Context.Provider value={{ dispatch, ...state }}>
      {children}
    </Context.Provider>
  )
}
