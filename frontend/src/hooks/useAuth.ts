import { useSelector } from 'react-redux'
import type { RootState } from '../store'

export function useAuth() {
  const user = useSelector((state: RootState) => state.auth.user)

  return {
    user,
    isAuthenticated: Boolean(user),
  }
}
