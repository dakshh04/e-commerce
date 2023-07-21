import React, {createContext, useContext, useReducer}  from "react";

// Prepared the DataLayer
export const StateContext = createContext();

// Wrap the app and provide the Data Layer
export const StateProvider = ({ reducer, inititalState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, inititalState)} >
        {children}
    </StateContext.Provider>
);

// Pull information from the Data Layer 
export const useStateValue = () => useContext(StateContext);
