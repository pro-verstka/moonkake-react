import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Router } from './router'
import './styles/index.scss'

export const App = () => {
	return (
		<>
			<Router />

			<ToastContainer position="bottom-right" theme="colored" stacked />
		</>
	)
}
