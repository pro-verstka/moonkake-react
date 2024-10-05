import { useShallow } from 'zustand/react/shallow'

import { sessionStore } from './session.store'

export const useSessionUser = () => {
	return sessionStore(useShallow(state => state.user))
}
