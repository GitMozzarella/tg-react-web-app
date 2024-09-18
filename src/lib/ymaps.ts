import React from 'react'
import ReactDOM from 'react-dom'

const ymaps3 = (window as any).ymaps3

export const initYMaps = async () => {
	if (!ymaps3) {
		throw new Error('YMaps API не загружен')
	}

	const [ymaps3React] = await Promise.all([
		ymaps3.import('@yandex/ymaps3-reactify'),
		ymaps3.ready
	])

	const reactify = ymaps3React.reactify.bindTo(React, ReactDOM)

	return reactify.module(ymaps3)
}
