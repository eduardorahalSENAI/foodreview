import React, {useReducer} from "react";

let initialState = {
    counter: 0,
    showMessage: false
}

const reducer = (state, action) => {
    switch(action.type){
        case "aumentar":
            return { ...state, counter: state.counter + action.payload }
        case "diminuir":
            return { ...state, counter: state.counter - action.payload }
        case "zerar":
            return { ...state, counter: initialState.counter }
        case "mostrar":
            return { ...state, showMessage: !state.showMessage }
        default:
            return state
    }
}

export const DataContext = React.createContext();

export const Fornecedor = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}