import { ToastContainer } from 'react-toastify'
import { Router } from './router'

import 'react-toastify/dist/ReactToastify.css'
import './styles/index.scss'

export const App = () => {
	return (
		<>
			<Router />

			<ToastContainer theme="colored" position="bottom-right" stacked />
		</>
	)
}
