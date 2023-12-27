
import React, { createContext, useContext, useReducer } from 'react'
import reducer, { initialState } from '../reducer/reducer';


export const StateContext = createContext();

function StateProvider({children, reducer, initialState}) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateValue = ()=> useContext(StateContext);

export default StateProvider
