import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App.tsx'

const node = document.getElementById('root')

if (node) {
	ReactDOM.createRoot(node).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}
