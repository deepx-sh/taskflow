import React, { createContext, useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage, updateLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProviderContext = ({ children }) => {
//    localStorage.clear()
    const [userData,setUserData]=useState(null)
    const [loading, setLoading] = useState(true)
    
  useEffect(() => {
    
      setLocalStorage();
      const { employees} = getLocalStorage();
      setUserData(employees);
      setLoading(false)
  },[])
  
    const updateUserData = (newData) => {
        setUserData(newData);
        updateLocalStorage(newData)
    }
    
  return (
      <div>
          <AuthContext.Provider value={[userData,setUserData,updateUserData,loading]}>
              {children}
          </AuthContext.Provider>
    </div>
  )
}

export default AuthProviderContext