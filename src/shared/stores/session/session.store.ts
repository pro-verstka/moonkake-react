import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'

type User = {
	email: string
	name: string
	id: string
}

type SessionStore = {
	token: string | null
	user: User | null
}

type SessionActions = {
	setToken: (token: SessionStore['token']) => void
	setUser: (user: SessionStore['user']) => void
	isAuthenticated: () => boolean
}

export const sessionStore = create<SessionActions & SessionStore>()(
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
