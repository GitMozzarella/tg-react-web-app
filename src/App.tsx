/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'

export const App = () => {
	const tg = useTelegram()
	useEffect(() => {
		tg.ready()
	}, [])

	const onClose = () => {
		tg.close()
	}

	return (
		<div className='App'>
			Hello World!
			<button onClick={onClose}>Close</button>
		</div>
	)
}
