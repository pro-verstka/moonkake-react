import { useSessionAuth } from '$stores/session'
import { LoginForm } from '$features/login-form'
import { Outlet } from '@tanstack/react-router'

export const ProtectedLayout = () => {
	const isAuthenticated = useSessionAuth()

	if (!isAuthenticated()) {
		return <LoginForm />
	}

	return <Outlet />
}
