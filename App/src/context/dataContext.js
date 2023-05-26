import React, { useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

let initialState = {
    Loading: true,
    isLogged: false,
    name: '',
    isAdmin: false,
    idUser: '',
    idRestaurant: '',
    nameRestaurant: '',
    update: false
}

const reducer = (state, action) => {
    switch(action.type){
        case "logIn":
            return { ...state, isLogged: action.payload, Loading: false }
        case "logOut":
            AsyncStorage.removeItem("token");
            return { 
                ...state, 
                isLogged: false,
                isAdmin: false
            }
        case "verify":
            return { 
                ...state, 
                isLogged: true, 
                Loading: false, 
                idUser: action.payload.id, 
                isAdmin: action.payload.admin, 
                name: action.payload.name,
            }
        case "setRestaurant":
            return { 
                ...state, 
                idRestaurant: action.payload.id,
                nameRestaurant: action.payload.name                
            }
        case "update":
            return {
                ...state,
                update: action.payload
            }
        default:
            return state
    }
}

export const Context = React.createContext();

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
    
}