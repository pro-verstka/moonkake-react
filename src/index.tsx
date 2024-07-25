import ReactDOM from 'react-dom/client'
import React from 'react'

import { App } from './app/App.tsx'

const root = document.getElementById('root')

if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}
