import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HashRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement as HTMLElement)

	root.render(
		<HashRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</HashRouter>
	)
} else {
	console.error('Root element not found')
}
