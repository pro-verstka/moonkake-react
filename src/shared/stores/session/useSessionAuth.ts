import { useShallow } from 'zustand/react/shallow'

import { sessionStore } from './session.store'

export const useSessionAuth = () => {
	return sessionStore(useShallow(state => state.isAuthenticated))
}
