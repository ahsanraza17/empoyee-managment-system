import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(()=> {
        setLocalStorage();
        const {employeeData, adminData } = getLocalStorage();
        setUserData({employeeData, adminData})
    },[])

  return (
    <div>
        <AuthContext.Provider
        value={{userData, setUserData, user, setUser}}
        >
           {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
