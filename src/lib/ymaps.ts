import React from 'react'
import ReactDOM from 'react-dom'

// Теперь TypeScript знает о наличии ymaps3 на window
const ymaps3 = window.ymaps3

const initYmaps = async () => {
	const [ymaps3React] = await Promise.all([
		ymaps3.import('@yandex/ymaps3-reactify'),
		ymaps3.ready
	])

	return ymaps3React
}

export const initMapComponents = async () => {
	const ymaps3React = await initYmaps()

	const reactify = ymaps3React.reactify.bindTo(React, ReactDOM)

	return reactify.module(ymaps3)
}
