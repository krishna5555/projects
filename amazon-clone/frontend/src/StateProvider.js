import React, { createContext, useReducer, useContext } from 'react';

//create the data layer
export const StateContext = createContext();

//wrap the app and provide access to data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull the info from the data layer
export const useStateValue = () => useContext(StateContext);