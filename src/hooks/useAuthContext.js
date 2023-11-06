import { useContext } from 'react'
import { AuthContext } from "./../context/AuthContext"

export const useUserAuth = () => {
  return useContext(AuthContext);
}