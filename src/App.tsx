/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'

export const App = () => {
	const { tg, onToggleButton } = useTelegram()
	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			Hello World!
			<button onClick={onToggleButton}>toggle</button>
		</div>
	)
}
