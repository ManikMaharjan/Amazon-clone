import React, { createContext, useContext, useReducer } from "react";

/// Prepare the Datalayer
export const StateContext = createContext();
//Wrap our app and  provided the data laytaer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull Information from the data lauera
export const useStateValue = () => useContext(StateContext);
