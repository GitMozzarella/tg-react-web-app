import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement as HTMLElement)

	root.render(
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	)
} else {
	console.error('Root element not found')
}
