import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'

type SessionActions = {
	setToken: (token: SessionState['token']) => void
	setUser: (user: SessionState['user']) => void
	isAuthenticated: () => boolean
}

type SessionState = {
	token: string | null
	user: User | null
}

type User = {
	id: string
}

export const sessionStore = create<SessionActions & SessionState>()(
	persist(
		(set, get) => ({
			isAuthenticated: () => Boolean(get().user) && Boolean(get().token),
			setToken: token => set({ token }),
			setUser: user => set({ user }),

			token: null,
			user: null
		}),
		{
			storage: createJSONStorage(() => localStorage),
			name: 'session-storage'
		}
	)
)
