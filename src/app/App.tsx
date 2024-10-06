import { Toaster } from 'sonner'

import { Router } from './router'
import './styles/index.scss'

export const App = () => {
	return (
		<>
			<Router />

			<Toaster position="bottom-right" richColors />
		</>
	)
}
