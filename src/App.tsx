/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Header } from './components/Header'

export const App = () => {
	const { tg, onToggleButton } = useTelegram()
	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			Hello World!
			<Header />
			<button onClick={onToggleButton}>toggle</button>
		</div>
	)
}
