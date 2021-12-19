import React, {createContext, useReducer} from "react";
import {data, reducer} from './reducer';

export const GlobalContext = createContext('initial value');

function ContextProvider({children}) {
    const [ state, dispatch ] = useReducer( reducer,data )
    return (
    <GlobalContext.Provider value={{state, dispatch}} >
     {children}
    </GlobalContext.Provider>
    )
}
export default ContextProvider