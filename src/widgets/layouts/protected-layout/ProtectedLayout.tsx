import { useSessionAuth } from '@/shared/stores/session'
import { Outlet } from '@tanstack/react-router'

export const ProtectedLayout = () => {
	const isAuthenticated = useSessionAuth()

	if (!isAuthenticated()) {
		return <>login form</>
	}

	return <Outlet />
}
