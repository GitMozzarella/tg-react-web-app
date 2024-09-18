/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { YandexMap } from './pages/YandexMap'

export const App = () => {
	const { tg } = useTelegram()
	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path={'yandexmap'} element={<YandexMap />} />
			</Routes>
		</div>
	)
}
