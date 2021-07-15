import React, { createContext } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import { User } from '../types/model/User'

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

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useLocalStorage('perdidogs-user', null)

  const logout = () => setUser(null)

  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>
}

export default UserContext
