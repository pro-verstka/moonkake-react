import { sessionStore } from './session.store'

export const useSessionActions = () => {
	return sessionStore(state => ({
		isAuthenticated: state.isAuthenticated,
		setUser: state.setUser
	}))
}
