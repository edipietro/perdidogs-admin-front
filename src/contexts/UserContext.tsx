import React, { createContext, useState } from 'react'
import { User } from '../types/User'
import useLocalStorage from '../hooks/useLocalStorage'

interface ContextProps {
  readonly user: User | null
  readonly setUser: (user: User | null) => void
  readonly logout: () => void
}

export const UserContext = createContext<ContextProps>({
  user: null,
  setUser: () => null,
  logout: () => null
})

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null)

  const logout = () => setUser(null)

  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>
}

export default UserContextProvider
