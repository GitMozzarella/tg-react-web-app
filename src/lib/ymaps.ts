import React from 'react'
import ReactDOM from 'react-dom'

const ymaps3 = window.ymaps3 // Обращаемся к глобальному объекту

export const initYMaps = async () => {
	// Ожидаем загрузки всех компонентов
	const [ymaps3React] = await Promise.all([
		ymaps3.import('@yandex/ymaps3-reactify'),
		ymaps3.ready
	])

	const reactify = ymaps3React.reactify.bindTo(React, ReactDOM)

	// Экспортируем компоненты карты и слоя через reactify
	return reactify.module(ymaps3)
}
