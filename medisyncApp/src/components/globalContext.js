import React, { useState, useEffect, useRef, createContext } from "react";
import * as SecureStore from 'expo-secure-store'

const Context = createContext()

const Provider = ({ children }) => {

    const [domain] = useState("http://10.0.2.2:8000") // django 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userObj, setUserObj] = useState()

    const setToken = async (token) => {
        await SecureStore.setItemAsync('token', token)
    }

    const globalContext = {
        domain,
        isLoggedIn,
        setIsLoggedIn,
        userObj,
        setUserObj,
        setToken,
    }

    return (<Context.Provider value={globalContext}>{children}</Context.Provider>)

};
export { Context, Provider };